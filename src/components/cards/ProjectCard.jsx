import Image from "next/image";
import BackIcon from "@hanawidyatari/icons/BackIcon";
import NextIcon from "@hanawidyatari/icons/NextIcon";
const ProjectCard = (props) => {
  const isShowBackButton = props.isDataMoreThanOne && !props.isFirstData;
  const isShowNextButton = props.isDataMoreThanOne && !props.isLastData;

  return (
    <div className="relative border border-transparent backdrop-blur-xl bg-black/10 dark:bg-white/10 rounded-[50px] h-[600px] lg:h-[700px] shadow-xl shadow-black/30 mx-4 lg:mx-2 overflow-hidden">
      {/* Project Picture - Full top coverage */}
      <div className="w-full overflow-hidden rounded-t-[50px]">
        <Image
          src={props.currentData.pic}
          height={620}
          width={2200}
          className={`w-full h-full transition-all object-cover duration-700 transform ${props.isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
          alt="Picture of project"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/_next/image?url=/placeholder.jpg&w=16&q=1"
        />
      </div>

      {/* Navigation Buttons - Positioned over the image */}
      <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex gap-4 items-center z-10">
        {/* Back Button */}
        {isShowBackButton ? (
          <div className="p-3 rounded-full dark:bg-black/50 bg-white/50 hover:bg-white/70 dark:hover:bg-black/70 backdrop-blur-md cursor-pointer shadow-lg" onClick={() => props.backToPrevious()}>
            <BackIcon />
          </div>
        ) : (
          <div className="w-12" />
        )}

        {/* Next Button */}
        {isShowNextButton ? (
          <div className="p-3 rounded-full dark:bg-black/50 bg-white/50 hover:bg-white/70 dark:hover:bg-black/70 backdrop-blur-md cursor-pointer shadow-lg" onClick={() => props.goToNext()}>
            <NextIcon />
          </div>
        ) : (
          <div className="w-12" />
        )}
      </div>

      {/* Sub Project Information */}
      <div className={`overflow-y-auto px-4 lg:px-8  transition-all duration-700 transform ${props.isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}>{props.renderProjects}</div>

      {/* Page Counter */}
      {props.isDataMoreThanOne && (
        <div className="absolute bottom-4 left-0 w-full hidden lg:flex justify-center items-center pb-8">
          <div className="flex gap-2">
            {props.data.map((item, i) => {
              return <div key={i} className={`border border-transparent w-2 h-2 rounded-[100%] ${props.indexProject === i ? "bg-[#a934dc]" : "bg-gray-200"}`} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
