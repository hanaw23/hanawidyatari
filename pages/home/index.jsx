import { ParallaxBanner } from "react-scroll-parallax";

export default function index() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-hidden z-0">
      <ParallaxBanner
        layers={[
          { image: "assets/images/background.png", speed: -30 },
          {
            speed: -40,
            children: (
              <div className="absolute inset-0 flex items-center justify-center -mt-[425px]">
                <h1 className="text-8xl text-gray-200 font-thin">Explore My Works</h1>
              </div>
            ),
          },
          { image: "assets/images/objectnowindow.png", speed: -15 },
        ]}
        className="aspect-[2/1]"
      />
    </div>
  );
}
