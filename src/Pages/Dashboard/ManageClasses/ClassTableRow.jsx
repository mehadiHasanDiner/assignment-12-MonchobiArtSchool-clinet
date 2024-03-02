import { useForm } from "react-hook-form";

const ClassTableRow = ({
  handleApproveClass,
  handleDenyClass,
  handleFeedbackClass,
  classData,
  index,
}) => {
  const {
    _id,
    img,
    instructor,
    email,
    availableSeat,
    feeAmount,
    nameOfClass,
    status,
  } = classData || {};

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminFeedback = data.feedback;
    console.log(adminFeedback);
  };

  return (
    <>
      <tr>
        <th>{index+1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14">
                <img src={img} alt="Class Theme Image" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{nameOfClass} </div>
            </div>
          </div>
        </td>
        <td>{instructor}</td>
        <td>{email}</td>
        <td>{availableSeat}</td>
        <td>${feeAmount}</td>
        <td
          className={
            status === "Approved"
              ? "capitalize badge badge-success mt-6 text-white"
              : status === "Denied"
              ? "capitalize badge badge-error mt-6 text-white"
              : "capitalize badge badge-warning mt-6"
          }
        >
          {status}
        </td>
        <th>
          <div className="flex gap-1">
            <button
              onClick={() => handleApproveClass(_id)}
              className={
                status === "Denied" || status === "Approved"
                  ? "btn btn-xs btn-disabled"
                  : "btn btn-outline btn-success btn-xs"
              }
            >
              Approved
            </button>
            <button
              onClick={() => handleDenyClass(_id)}
              className={
                status === "Denied" || status === "Approved"
                  ? "btn btn-xs btn-disabled"
                  : "btn btn-outline btn-error btn-xs"
              }
            >
              Deny
            </button>

            {/* modal button */}
            <label
              onClick={() => handleFeedbackClass(_id, onSubmit)}
              htmlFor="my_modal_6"
              className="btn btn-outline btn-primary btn-xs"
            >
              Feedback
            </label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <>
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="font-bold text-lg ">Give Feedback</h3>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                      type="text"
                      className="textarea textarea-secondary w-full my-3"
                      {...register("feedback")}
                    />

                    <input className="btn btn-primary" type="submit" />
                  </form>

                  <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn">
                      Close!
                    </label>
                  </div>
                </div>
              </div>
            </>
          </div>
        </th>
      </tr>
    </>
  );
};

export default ClassTableRow;
