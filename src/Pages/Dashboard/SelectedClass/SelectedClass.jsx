import useSelectCart from "../../../hooks/useSelectCart";
import Swal from "sweetalert2";
import SelectedClassRow from "./SelectedClassRow";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const SelectedClass = () => {
  const [selectedCart, refetch] = useSelectCart();
  const [selectedForPayment, setSelectedForPayment] = useState(null);

  const handleDeleteClass = (selected) => {
    Swal.fire({
      title: "Are you sure you want to cancel your Selected Class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "purple",
      confirmButtonText: "Yes! Cancel It",
      cancelButtonText: "I Ignore",
      background: "brown",
      color: "white",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_URL_KEY}/selected/${selected._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Canceled!",
                text: "Your selected class has been canceled successfully.",
                icon: "success",
                background: "brown",
                color: "white",
              });
            }
          });
      }
    });
  };

  const handleShowPaymentDetails = (selected) => {
    setSelectedForPayment(selected);
  };
  console.log(selectedForPayment);
  return (
    <div>
      <Helmet>
        <title>Selected Class | Monchobi Art School </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Title & seats</th>
              <th>Instructor</th>
              <th>Registration Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedCart.map((selected, index) => (
              <SelectedClassRow
                index={index}
                key={selected?._id}
                selected={selected}
                open={open}
                handleDeleteClass={handleDeleteClass}
                handleShowPaymentDetails={handleShowPaymentDetails}
                selectedForPayment={selectedForPayment}
              ></SelectedClassRow>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
