import { useEffect, useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);

  const handleOpenModal = (data) => {
    setInstructorDetails(data);
    console.log(data);
  };

  useEffect(() => {
    fetch("instructorData.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Instructors | Monchobi Art School </title>
      </Helmet>
      <Cover heading={"Our Renowned Instructor"}></Cover>

      <div>
        <h3 className="text-3xl font-bold my-12 text-center">
          Our Popular Instructors
        </h3>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:grid-cols-3">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor?._id}
              instructor={instructor}
              instructorDetails={instructorDetails}
              setInstructorDetails={setInstructorDetails}
              handleOpenModal={handleOpenModal}
            ></InstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
