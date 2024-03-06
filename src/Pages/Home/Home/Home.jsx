import { Helmet } from "react-helmet-async";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div className="mb-8">
      <Helmet>
        <title>Home | Monchobi Art School </title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      
    </div>
  );
};

export default Home;
