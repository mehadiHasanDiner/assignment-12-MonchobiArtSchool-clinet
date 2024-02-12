import { ParallaxBanner } from "react-scroll-parallax";
import coverImage01 from "../../assets/coverImage.jpg";
import coverImage02 from "../../assets/coverImage2.jpg";

const Cover = ({ heading }) => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image:  coverImage02 ,
            speed: -20,
          },
          { image:  coverImage01 , speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl text-white font-thin"> {heading} </h1>
        </div>
      </ParallaxBanner>
    </>
  );
};

export default Cover;
