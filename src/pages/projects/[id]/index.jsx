import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { projects } from "@hanawidyatari/utils/projectsList";
import BackIcon from "@hanawidyatari/icons/BackIcon";
import NextIcon from "@hanawidyatari/icons/NextIcon";
import { customColorFirstWord } from "@hanawidyatari/utils/utils";

export default function ProjectDetailPage() {
  const scrollContainerRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;
  const projectId = id;
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const data = useMemo(() => projects?.find((item) => item.id === projectId), [projectId]);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  // styling motion when enter page
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.main variants={container} initial="hidden" animate="show">
      <div className="flex flex-col w-full h-full py-2">
        {/* Title */}
        <motion.section id="title" variants={item} transition={{ duration: 0.6 }}>
          <div className="mx-6 lg:mx-20 mt-2">
            <h1 className="mt-10 text-[45px] lg:text-[65px] font-bold">{customColorFirstWord(data?.name, "#a934dc")}</h1>
          </div>
        </motion.section>

        <div className="m-4">
          {/* Hero Picture Section */}
          <motion.section id="hero pics" variants={item} transition={{ duration: 0.6 }}>
            <div className="relative w-full bg-gradient-to-b py-4 px-8">
              <div className="mx-auto">
                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  onScroll={checkScroll}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 rounded-3xl"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {data?.heroPics?.map((el, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 relative group"
                      style={{
                        width: el?.isPotrait ? "320px" : "1200px",
                      }}
                    >
                      <div className="relative h-[650px] overflow-hidden rounded-3xl shadow-2xl transition-transform duration-300 ">
                        <Image src={el?.url} alt={`Hero image ${i + 1}`} fill height={650} width={el?.isPotrait ? "320px" : "1200px"} className="object-cover select-none" priority />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Hero Buttons */}
            <div className="flex justify-end gap-2 mx-8 mb-10">
              <div className="flex gap-4">
                {canScrollLeft && (
                  <div onClick={() => scroll("left")} className="p-2 rounded-full dark:bg-black/80 dark:hover:bg-black backdrop-blur-xl shadow-xl flex items-center justify-center cursor-pointer">
                    <BackIcon />
                  </div>
                )}
                {canScrollRight && (
                  <div onClick={() => scroll("right")} className="p-2 rounded-full dark:bg-black/80 dark:hover:bg-black backdrop-blur-xl shadow-xl flex items-center justify-center cursor-pointer">
                    <NextIcon />
                  </div>
                )}
              </div>
            </div>
          </motion.section>

          {/* Content */}
          <div className="mb-6">
            <div className="mx-6 lg:mx-20">
              <h1 className="text-xl lg:text-2xl font-semibold mb-6 dark:text-white">Detail Project</h1>
              <p className="text-sm lg:text-lg text-justify">{data?.desc}</p>
            </div>

            <div className="mx-6 mt-4 lg:mt-6 lg:mx-20">
              <div className="mt-4 lg:mt-6">
                <h1 className="text-xl lg:text-2xl font-semibold mb-6 dark:text-white lg:mb-8">Link Project</h1>
                {data?.link ? (
                  <a href={data.link.url} target="_blank" className="cursor-pointer">
                    <p className="font-semibold underline text-[#a934dc] text-base lg:text-lg hover:opacity-70 transition">Link to project</p>
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
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 dark:text-white lg:mb-8">Technologies</h3>
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
    </motion.main>
  );
}
