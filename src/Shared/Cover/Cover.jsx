import { ParallaxBanner } from "react-scroll-parallax";

const Cover = ({ coverImage1, coverImage2, heading }) => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: { coverImage1 },
            speed: -20,
          },
          { image: { coverImage2 }, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl text-black font-thin"> {heading} </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Cover;
