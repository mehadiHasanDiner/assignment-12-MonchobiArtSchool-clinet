import useSelectCart from "../../../hooks/useSelectCart";
import { GiCancel } from "react-icons/gi";

import { FaWallet } from "react-icons/fa6";

const SelectedClass = () => {
  const [selectedCart] = useSelectCart();
  const handleDeleteClass = (id) => {
    console.log("first delete" + id);
  };

  return (
    <div>
      <p>this is my select class route {selectedCart?.length}</p>

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
                  <button className="btn btn-outline btn-success btn-xs  mr-1 ">
                    <FaWallet />
                    Pay
                  </button>
                  <button
                    onClick={() => handleDeleteClass(selected?._id)}
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
