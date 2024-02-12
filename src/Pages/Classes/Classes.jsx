import Cover from "../../Shared/Cover/Cover";
import ClassCard from "../../components/ClassCard/ClassCard";
import painting from "../../assets/painting.png";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        <Cover heading={"heading"}></Cover>
      </div>
      <div className="mt-8">
        <ClassCard
          img={painting}
          nameOfClass="Painting"
          instructor={user.displayName}
          availableSeats="10"
          amount="100"
          handleEnrollClass
        ></ClassCard>
      </div>
    </>
  );
};

export default Classes;
