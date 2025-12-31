import { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@hanawidyatari/components/cards/ExperienceCard";
import { detailExp } from "@hanawidyatari/utils/experiences";

export default function ExperiencesPage() {
  const containerScrollRef = useRef(null);

  return (
    <div className="bg-gradient-to-tr from-[#344ddc] to-rose-600 py-10 lg:py-20 text-white w-full">
      <div className="flex justify-center">
        <h1 className="text-[40px] lg:text-[55px] font-semibold">Work Experience</h1>
      </div>

      <div ref={containerScrollRef} className="overflow-hidden h-full py-3">
        <div className="w-[565vw] lg:w-[200vw]">
          <div className="lg:mt-20 mx-4 lg:mx-10 ">
            <div className="flex gap-10">
              <motion.div drag="x" dragConstraints={containerScrollRef} dragElastic={0.1} className="flex gap-10 cursor-grab">
                {detailExp?.map((item, i) => {
                  return <ExperienceCard index={i} item={item} />;
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
