import Cover from "../../Shared/Cover/Cover";
import ClassCard from "../../components/ClassCard/ClassCard";
import painting from "../../assets/painting.png";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Classes = () => {
  const { user } = useAuth();
  const [classesData, setClassesData] = useState();

  useEffect(() => {
    console.log(import.meta.env.VITE_URL_KEY);
    fetch(`${import.meta.env.VITE_URL_KEY}/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>
        <Cover heading={"heading"}></Cover>
      </div>
      <div className="mt-8">
        <ClassCard
          img={painting}
          nameOfClass="Painting"
          instructor={user?.displayName}
          availableSeats="10"
          amount="100"
        ></ClassCard>
      </div>
    </>
  );
};

export default Classes;
