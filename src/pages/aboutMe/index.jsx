import { useMemo } from "react";
import { useFindSection } from "@hanawidyatari/hooks";

export default function AboutMePage() {
  const isCurrentSection = useFindSection("aboutMe");

  return (
    <div className="w-full pt-5 lg:py-20 h-[80vh]">
      <div className={`${isCurrentSection ? "opacity-0 animate-fadeIn [animation-delay:100ms]" : "animate-fadeOut [animation-delay:300ms]"}`}>
        <div className="flex justify-center">
          <h1 className="mt-10 text-[40px] lg:text-[55px] font-semibold">
            About <span className="text-[#a934dc]">Me</span>
          </h1>
        </div>
        <div className="flex flex-1 flex-col justify-center text-center lg:text-justify pb-20 px-10 lg:px-[20%]">
          <h3 className="text-[20px] py-3">Hello, I'm Hana Widyatari 👋</h3>
          <hr className="dark:border-gray-50 border-gray-900" />

          <p className="mt-2 lg:px-5  text-justify">
            I'm a Frontend Developer with 2+ years of experience building web and mobile applications across industries including fintech and digital healthcare. I mainly work with React, Vue, and React Native, and I enjoy turning ideas
            into real, usable products. I grow best when I'm learning something new, working closely with a team, and building things that actually matter.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={"assets/documents/HanaWidyatari-resume.pdf"}
              target="_blank"
              className="border rounded-[50px] px-10 py-3 font-semibold border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
