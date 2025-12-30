import { useMemo, useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { projects } from "@hanawidyatari/utils/projectsList";
import BackIcon from "@hanawidyatari/icons/BackIcon";
import NextIcon from "@hanawidyatari/icons/NextIcon";

const SLIDE_HEIGHT = 400;

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const projectId = id;
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [positions, setPositions] = useState([]);
  const [x, setX] = useState(0);

  const data = useMemo(() => projects?.find((item) => item.id === projectId), [projectId]);

  // Measure slide positions AFTER render
  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const pos = [];
    let current = 0;

    slideRefs.current.forEach((el) => {
      pos.push(current);
      current += el.offsetWidth + 16; // gap-4
    });

    setPositions(pos);
  }, [data]);

  const goTo = (index) => {
    if (!positions[index]) return;

    setActiveIndex(index);

    animate(x, -positions[index], {
      type: "spring",
      stiffness: 260,
      damping: 30,
    });
  };

  const prev = () => goTo(Math.max(activeIndex - 1, 0));
  const next = () => goTo(Math.min(activeIndex + 1, data?.heroPics?.length - 1));

  return (
    <div className="flex flex-col w-full h-full py-4">
      <div className="lg:m-10">
        <div className="relative mt-4 overflow-hidden">
          {/* TRACK */}
          {/* <motion.div ref={trackRef} className="flex items-center gap-4" style={{ x }}>
            {data?.heroPics?.map((item, i) => (
              <motion.div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                className="flex items-center justify-center"
                animate={{
                  scale: i === activeIndex ? 1 : 0.92,
                  opacity: i === activeIndex ? 1 : 0.75,
                }}
                transition={{ duration: 0.3 }}
                style={{ height: SLIDE_HEIGHT }}
              >
                <Image src={item} alt="Hero image" width={1000} height={1000} priority={i === activeIndex} className="h-full w-auto object-cover rounded-xl select-none" />
              </motion.div>
            ))}
          </motion.div> */}

          <Image src={data?.heroPics[0]} alt="Hero image" priority width={900} height={600} className="h-full w-auto object-cover rounded-xl select-none" />

          {/* CONTROLS */}
          {/* <div className="absolute bottom-6 right-6 z-10 flex gap-4">
            <button onClick={prev} className="w-16 h-16 rounded-full bg-black/80 hover:bg-black backdrop-blur-xl shadow-xl flex items-center justify-center">
              <BackIcon />
            </button>

            <button onClick={next} className="w-16 h-16 rounded-full bg-black/80 hover:bg-black backdrop-blur-xl shadow-xl flex items-center justify-center">
              <NextIcon />
            </button>
          </div> */}
        </div>

        {/* CONTROLS */}
        <div className="absolute bottom-6 right-6 z-10">
          <div className="flex gap-4">
            <div onClick={() => scrollToIndex("prev")} className="w-16 h-16 rounded-full bg-black/80 hover:bg-black backdrop-blur-xl shadow-xl flex items-center justify-center">
              <BackIcon />
            </div>

            <div onClick={() => scrollToIndex("next")} className="w-16 h-16 rounded-full bg-black/80 hover:bg-black backdrop-blur-xl shadow-xl flex items-center justify-center">
              <NextIcon />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-2">
          <div className="mx-6 lg:mx-20 mt-6">
            <h1 className="mt-10 text-[45px] lg:text-[65px] font-semibold">{data?.name}</h1>
          </div>

          <div className="mx-6 lg:mx-20">
            <p className="mt-4 text-base text-justify">{data?.desc}</p>
          </div>

          <div className="mx-6 mt-4 lg:mt-6 lg:mx-20">
            <div className="mt-4 lg:mt-6">
              <h1 className="text-xl font-semibold mb-6 dark:text-white lg:mb-8">Link Project</h1>
              {data?.link ? (
                <a href={data.link.url} target="_blank" className="cursor-pointer">
                  <p className="dark:text-white font-semibold underline text-sm lg:text-base hover:opacity-70 transition">Link to project</p>
                </a>
              ) : (
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  {data?.links?.map((item, i) => (
                    <a href={item.link} target="_blank" className="cursor-pointer hover:opacity-70 transition" key={i}>
                      <div>{item?.iconHtml}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Techonologies */}
            <div className="mt-4 lg:mt-6 py-4">
              <h3 className="text-xl font-semibold mb-6 dark:text-white lg:mb-8">Technologies</h3>
              <div className="relative overflow-hidden">
                <div className="flex gap-20 animate-scroll">
                  {/* First set of icons */}
                  {data?.icons?.map((icon, i) => (
                    <div key={i} className="flex-shrink-0">
                      {icon?.iconHtml}
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {data?.icons?.map((icon, i) => (
                    <div key={`duplicate-${i}`} className="flex-shrink-0">
                      {icon?.iconHtml}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
