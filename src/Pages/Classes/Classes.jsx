import Cover from "../../Shared/Cover/Cover";
import ClassCard from "../../components/ClassCard/ClassCard";
import { useEffect, useState } from "react";

const Classes = () => {
  const [classesData, setClassesData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_KEY}/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
        console.log(data);
      });
  }, [load]);
  return (
    <>
      <div>
        <Cover heading={"Our Best Courses"}></Cover>
      </div>
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
            setLoad={setLoad}
            load={load}
          ></ClassCard>
        ))}
      </div>
    </>
  );
};

export default Classes;
