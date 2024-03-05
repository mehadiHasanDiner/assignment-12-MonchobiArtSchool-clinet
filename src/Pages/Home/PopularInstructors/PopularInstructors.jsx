import { useEffect, useState } from "react";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("instructorData.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(data);
      });
  }, []);
  console.log(instructors.length);

  return (
    <div>
      <h3 className="text-3xl font-bold my-12 text-center">
        Our Popular Instructors 
      </h3>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:grid-cols-3">
        {instructors.slice(0,3).map((instructor) => (
          <InstructorCard
            key={instructor?._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
