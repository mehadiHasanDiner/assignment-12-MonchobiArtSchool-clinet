import { useLocation } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const location = useLocation();
  const { name, email, photoURL, role } = instructor || {};
  return (
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
              <button className="btn btn-sm bg-gradient-to-bl from-pink-200 to-orange-300">
                View Profile
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
