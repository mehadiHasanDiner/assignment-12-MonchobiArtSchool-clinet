import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ label, selectedForPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const feeAmount = parseFloat(selectedForPayment?.feeAmount.toFixed(2));

  useEffect(() => {
    if (selectedForPayment !== null || feeAmount > 0) {
      axiosSecure.post("/create-payment-intent", { feeAmount }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [feeAmount, axiosSecure, selectedForPayment]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      // console.log("error", error);
    } else {
      setCardError("");
      console.log("PaymentMethod", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // save payment information to the database
      const payment = {
        email: user?.email,
        name: user?.name,
        transactionId: paymentIntent.id,
        feeAmount,
        date: new Date(),
        status: "Enrolled",
        nameOfClass: selectedForPayment?.nameOfClass,
        selectId: selectedForPayment?._id,
        classId: selectedForPayment?.classId,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successful!",
            showConfirmButton: false,
            background: "crimson",
            color: "white",
            timer: 1000,
          });
        }
        window.location.reload();
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div>
          {cardError && (
            <p className="text-red-600 mb-6 text-center"> {cardError}</p>
          )}

          {transactionId && (
            <p className="text-green-600 mb-6 text-center">
              {" "}
              Transaction complete with Transaction ID: {transactionId}
            </p>
          )}

          <div className="flex mt-2 justify-around">
            <button
              disabled={!stripe || !clientSecret || processing}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              // onClick={() => handleMakePayment(total)}
            >
              Pay ${feeAmount}
            </button>
            {label}
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
