import {
  Navigate,
  useLocation,
  useNavigate,
  redirect,
  useLoaderData,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({
  img,
  nameOfClass,
  instructor,
  availableSeat,
  feeAmount,
  id,
}) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const loader = useLoaderData();
  // console.log(location.pathname);
  // const from = location.state?.from?.pathname || "";

  // const navigateToLogin = () => {
  //   if (!user) {
  //     return redirect("/login");
  //   }
  // };

  const handleEnrollClass = () => {
    if (!user) {
      // user
    } else {
      return redirect("/");
    }
  };

  return (
    <div
      className={
        "card w-full  shadow-xl " +
        (availableSeat > 0 ? "bg-orange-100" : "bg-red-700")
      }
    >
      <figure>
        <img className="w-3/12 mt-3" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nameOfClass}</h2>
        <p>Instructor Name: {instructor}</p>
        <p>Total Seat: {availableSeat}</p>
        <p> Registration Fee: ${feeAmount}</p>
        <div className="card-actions justify-end">
          {location.pathname === "/" ? (
            ""
          ) : (
            <>
              <button
                onClick={handleEnrollClass}
                className={
                  availableSeat > 0 ? "btn btn-primary" : " btn btn-disabled"
                }
              >
                Enroll Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
