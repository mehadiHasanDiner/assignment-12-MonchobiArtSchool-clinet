import HomeBanner from "../HomeBanner/HomeBanner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div className="mb-8">
      <HomeBanner></HomeBanner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
