import useSelectCart from "../../../hooks/useSelectCart";
import { GiCancel } from "react-icons/gi";

import { FaWallet } from "react-icons/fa6";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [selectedCart, refetch] = useSelectCart();

  const total = selectedCart.reduce((sum, item) => sum + item.feeAmount, 0);

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

  const handleMakePayment = () => {
    console.log("first make payment");
  };

  return (
    <div>
      <div className="flex justify-evenly items-center my-4 py-2 bg-slate-200">
        <h3 className="text-center font-bold">
          Total Class Selected: {selectedCart?.length}
        </h3>
        <h3 className="text-center font-bold">Total Fees: ${total}</h3>
        <button
          onClick={handleMakePayment}
          className="btn btn-outline btn-neutral btn-sm "
        >
          <FaWallet />
          Pay
        </button>
      </div>

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
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={selected.img} alt="Class Theme Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{selected?.nameOfClass} </div>
                    </div>
                  </div>
                </td>
                <td>{selected?.instructor}</td>
                <td>${selected?.feeAmount}</td>
                <th>
                  <button
                    onClick={() => handleDeleteClass(selected)}
                    className="btn btn-outline btn-error btn-xs"
                  >
                    <GiCancel />
                    Cancel
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
