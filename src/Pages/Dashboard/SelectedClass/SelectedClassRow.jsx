import CheckoutModal from "../../../components/Modal/CheckoutModal";
import { GiCancel } from "react-icons/gi";
import { FaWallet } from "react-icons/fa6";

const SelectedClassRow = ({
  index,
  handleDeleteClass,
  closeModal,
  selected,
  handleShowPaymentDetails,
  selectedForPayment,
}) => {
  return (
    <tr>
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
        <label
          onClick={() => handleShowPaymentDetails(selected)}
          htmlFor="my_modal_6"
          className="btn btn-outline btn-success btn-xs mr-2"
        >
          <FaWallet />
          Pay
        </label>

        <button
          onClick={() => handleDeleteClass(selected)}
          className="btn btn-outline btn-error btn-xs"
        >
          <GiCancel />
          Cancel
        </button>
      </th>
      {/* checkout modal for payment*/}
      <CheckoutModal
        selectedForPayment={selectedForPayment}
        open={open}
        closeModal={closeModal}
      ></CheckoutModal>
    </tr>
  );
};

export default SelectedClassRow;
