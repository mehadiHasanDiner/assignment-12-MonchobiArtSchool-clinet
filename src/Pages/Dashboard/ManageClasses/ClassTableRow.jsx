const ClassTableRow = ({
  handleApproveClass,
  handleDenyClass,
  classData,
  index,

  onSubmit,
  handleCloseModal,
  handleOpenModal,
  feedbackText,
  setFeedbackText,
  isModalOpen,
}) => {
  // if (!isModalOpen) return null;

  const handleChange = (event) => {
    setFeedbackText(event.target.value);
  };

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

  return (
    <>
      <tr>
        <th>{index + 1}</th>
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
              onClick={() => handleOpenModal(classData)}
              htmlFor="my_modal_6"
              className="btn btn-outline btn-primary btn-xs"
            >
              Feedback
            </label>
            {isModalOpen && (
              <>
                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />

                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg ">Give Feedback</h3>

                    <form onSubmit={onSubmit}>
                      <textarea
                        className="textarea textarea-secondary w-full my-3"
                        value={feedbackText}
                        onChange={handleChange}
                        placeholder="Enter your text here"
                      />

                      <div className="modal-action">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>

                        <label
                          onClick={handleCloseModal}
                          className="btn btn-accent"
                        >
                          {" "}
                          Close{" "}
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </th>
      </tr>
    </>
  );
};

export default ClassTableRow;
