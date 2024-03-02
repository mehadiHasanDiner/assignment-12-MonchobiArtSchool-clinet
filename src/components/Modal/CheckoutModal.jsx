import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Pages/Dashboard/Payment/CheckoutForm";

const CheckoutModal = ({ selected }) => {
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_Payment_Gateway_PK}`
  );

  const label = (
    <label
      htmlFor="my_modal_6"
      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
    >
      Close
    </label>
  );

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Make Payment</h3>
          <span>Please make your payment online.</span>
          <div className="text-sm mt-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm selected={selected} label={label}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
