import { useLocation } from "react-router-dom";

const InstructorCard = ({ instructor, instructorDetails, handleOpenModal }) => {
  const location = useLocation();
  const { name, email, photoURL, role } = instructor || {};
  return (
    <>
      <div
        className={
          location.pathname === "/"
            ? "card w-full bg-gradient-to-b from-pink-800 to-orange-100 shadow-xl"
            : "card card-side bg-gradient-to-r from-pink-700 to-orange-400 shadow-xl text-white"
        }
      >
        <figure>
          <img className="w-3/4" src={photoURL} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="capitalize">Designation: {role}</p>
          <p>Email: {email}</p>
          {location.pathname === "/" ? (
            ""
          ) : (
            <>
              <div className="card-actions justify-end">
                <label
                  htmlFor="my_modal_6"
                  onClick={() => handleOpenModal(instructor)}
                  className="btn btn-sm bg-gradient-to-bl from-pink-200 to-orange-300"
                >
                  View Profile
                </label>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box bg-gradient-to-bl from-pink-200 to-orange-300">
          <figure>
            <img className="w-3/4" src={instructorDetails?.photoURL} />
          </figure>
          <h3 className="font-bold text-lg mt-3">{instructorDetails?.name}</h3>
          <p className="py-4">{instructorDetails?.bioData}</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn text-white bg-gradient-to-bl from-pink-700 to-orange-400 "
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
