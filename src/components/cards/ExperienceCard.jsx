const ExperienceCard = (props) => {
  return (
    <div className="border border-transparent backdrop-blur-md bg-white/30 rounded-[10px] cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:z-40 hover:shadow-2xl p-4 w-full max-w-[500px] mx-auto max-h-[360px] flex flex-col justify-between">
      <div key={props.index} className="text-center ">
        <h1 className="font-semibold text-xl sm:text-2xl mt-2">{props.item.role}</h1>
        <div className="text-sm sm:text-base">
          <span>{props.item.company}</span>
          <span> - </span>
          <span>{props.item.position}</span>
        </div>
        <div className="text-xs">
          <span>{props.item.startDate}</span>
          <span> - </span>
          <span>{props.item.endDate}</span>
        </div>

        <div className="h-[150px] lg:h-full overflow-y-auto overflow-x-hidden mt-6 sm:mt-4">
          <div className="px-2 sm:px-4 text-center sm:text-left ">
            <p className="text-[#a934dc] font-bold mb-2">Description</p>
            <p className="text-justify text-sm sm:text-base">{props.item.desc}</p>

            {props.item.techs && (
              <div className="mt-4 pb-6">
                <p className="text-[#a934dc] font-bold mb-4">Technology</p>
                <div className="grid grid-cols-10 lg:grid-cols-8">
                  {props.item.techs.map((tech, i) => (
                    <div key={i} className="px-2">
                      {tech.iconHtml}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
