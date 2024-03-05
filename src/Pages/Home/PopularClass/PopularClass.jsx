import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";

const PopularClass = () => {
  const [classesData, setClassesData] = useState([]);
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
        Our Popular Classes
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
    </div>
  );
};

export default PopularClass;
