import { ParallaxBanner } from "react-scroll-parallax";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden z-0 opacity-0 animate-fadeUp [animation-delay:400ms]">
      <ParallaxBanner
        layers={[
          { image: "assets/images/background.png", speed: -30 },
          {
            speed: -40,
            children: (
              <div className="absolute inset-0 flex items-center justify-center -mt-[120%] md:-mt-[80%] lg:-mt-[30%]">
                <h1 className="text-center text-6xl lg:text-8xl text-gray-200 font-thin mx-8">Explore My Works</h1>
              </div>
            ),
          },
          { image: "assets/images/objectnowindow.png", speed: -15 },
        ]}
        className="aspect-[3/4] lg:aspect-[2/1]"
      />
    </div>
  );
}
