import useEnrollCart from "../../../hooks/useEnrollCart";

const SelectedClass = () => {
  const [enrolledCart] = useEnrollCart();

  return (
    <div>
      <p>this is my select class route {enrolledCart?.length}</p>
    </div>
  );
};

export default SelectedClass;
