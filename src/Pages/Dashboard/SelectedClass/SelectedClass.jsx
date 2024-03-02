import useSelectCart from "../../../hooks/useSelectCart";
import Swal from "sweetalert2";
import { useState } from "react";
import SelectedClassRow from "./SelectedClassRow";

const SelectedClass = () => {
  const [selectedCart, refetch] = useSelectCart();
  const [open, setOpen] = useState(false);

  // const total = selectedCart.reduce((sum, item) => sum + item.feeAmount, 0);

  const closeModal = () => {
    setOpen(false);
  };

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

  return (
    <div>
      {/* <div className="flex justify-evenly items-center my-4 py-2 bg-slate-200">
        <h3 className="text-center font-bold">
          Total Class Selected: {selectedCart?.length}
        </h3>
        <h3 className="text-center font-bold">Total Fees: ${total}</h3>
        <button
          onClick={() => setOpen(true)}
          className="btn btn-outline btn-neutral btn-sm "
        >
          <FaWallet />
          Pay
        </button>
      </div> */}

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
                setOpen={setOpen}
                closeModal={closeModal}
                handleDeleteClass={handleDeleteClass}
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
