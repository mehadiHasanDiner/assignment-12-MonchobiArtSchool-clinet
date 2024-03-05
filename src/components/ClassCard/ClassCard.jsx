import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useSelectCart from "../../hooks/useSelectCart";

const ClassCard = ({
  img,
  nameOfClass,
  instructor,
  availableSeat,
  feeAmount,
  id,
  load,
  setLoad,
}) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCart, refetch] = useSelectCart();

  const classTitle = selectedCart.map((enroll) => enroll.nameOfClass);
  const isClassNameContain = classTitle.includes(nameOfClass);

  const handleEnrollClass = () => {
    if (user && user.email) {
      const studentCart = {
        classId: id,
        img,
        nameOfClass,
        instructor,
        feeAmount,
        email: user.email,
        enrollmentDate: new Date(),
      };

      fetch(`${import.meta.env.VITE_URL_KEY}/selected/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(studentCart),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            title: `Successfully Selected the ${nameOfClass} class`,
            html: "Go to dashboard for details",
            icon: "success",
            confirmButtonColor: "#28a745",
            confirmButtonText: "Dashboard",
            showCloseButton: true,
            showDenyButton: true,
            denyButtonText: "Payment",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard/selectedClass");

              console.log(data);
            }
            if (result.isDenied) {
              navigate("/dashboard/selectedClass");
            }
          });
          setLoad(!load);
          refetch();
        });
    } else {
      Swal.fire({
        title: "Please login for Enrolling into the Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={
        "card w-full  shadow-xl " +
        (availableSeat > 0
          ? "bg-gradient-to-br from-pink-200 to-orange-200"
          : "bg-red-600")
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
                  availableSeat > 0
                    ? isClassNameContain
                      ? "btn btn-disabled"
                      : " text-white btn bg-gradient-to-bl from-pink-700 to-orange-400"
                    : " btn btn-disabled"
                }
              >
                {isClassNameContain ? "Selected" : "Enroll Now"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
