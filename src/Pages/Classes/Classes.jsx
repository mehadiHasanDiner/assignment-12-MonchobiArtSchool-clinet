import Cover from "../../Shared/Cover/Cover";
import ClassCard from "../../components/ClassCard/ClassCard";
import painting from "../../assets/painting.png";

const Classes = () => {
  return (
    <>
      <div>
        <Cover heading={"heading"}></Cover>
      </div>
      <div className="mt-8">
        <ClassCard img={painting}></ClassCard>
      </div>
    </>
  );
};

export default Classes;
