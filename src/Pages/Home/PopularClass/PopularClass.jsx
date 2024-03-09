import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";
import { useNavigate } from "react-router-dom";

const PopularClass = () => {
  const [classesData, setClassesData] = useState([]);
  const navigate = useNavigate();

  const handleNavigateClasses = () => {
    navigate("/classes");
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_KEY}/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold my-10 text-center">
        Our Ongoing Courses
      </h3>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:grid-cols-3">
        {classesData.map((data) => (
          <ClassCard
            id={data._id}
            key={data._id}
            img={data?.img}
            nameOfClass={data?.nameOfClass}
            instructor={data?.instructor}
            availableSeat={data?.availableSeat}
            feeAmount={data?.feeAmount}
          ></ClassCard>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleNavigateClasses}
          className="btn -mt-4 bg-gradient-to-t shadow-2xl font-bold text-xl  from-pink-800 to-base-200"
        >
          Browse All Courses
        </button>
      </div>
    </div>
  );
};

export default PopularClass;
