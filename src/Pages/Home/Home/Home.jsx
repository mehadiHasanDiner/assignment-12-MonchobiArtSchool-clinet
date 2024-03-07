import { Helmet } from "react-helmet-async";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Success from "../Success/Success";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="mb-8">
      <Helmet>
        <title>Home | Monchobi Art School </title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <Success></Success>
      <Contact></Contact>
    </div>
  );
};

export default Home;
