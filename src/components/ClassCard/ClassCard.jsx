import { useLocation } from "react-router-dom";

const ClassCard = ({
  img,
  nameOfClass,
  instructor,
  availableSeat,
  feeAmount,
}) => {
  const handleEnrollClass = () => {
    console.log("clicked ");
  };

  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="card w-full bg-orange-100 shadow-xl">
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
              <button onClick={handleEnrollClass} className="btn btn-primary">
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
