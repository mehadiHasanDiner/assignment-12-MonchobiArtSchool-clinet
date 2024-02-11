import { ParallaxBanner } from "react-scroll-parallax";

const Cover = ({ coverImage, heading }) => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: { coverImage },
            speed: -20,
          },
          { image: "/static/banner-foreground.png", speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl text-white font-thin"> {heading} </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Cover;
