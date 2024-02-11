import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div className="bg-red-300 mb-8">
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <HomeBanner></HomeBanner>
      </div>
    </div>
  );
};

export default Home;
