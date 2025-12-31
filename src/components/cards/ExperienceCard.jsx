const ExperienceCard = (props) => {
  return (
    <div className="w-full py-6 border border-transparent backdrop-blur-md bg-white/30 rounded-[20px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:z-40 hover:shadow-2xl mt-6 lg:mt-0">
      <div key={props.index} className="text-center ">
        <h1 className="font-semibold text-3xl sm:text-2xl mt-2">{props.item.role}</h1>
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

        <div className="overflow-hidden mt-6 sm:mt-4">
          <div className="lg:px-6 px-4 text-justify ">
            <p className="text-lg font-bold mb-2">Description</p>
            <p className="text-justify text-sm sm:text-base">{props.item.desc}</p>

            {props.item.website && (
              <div className="mt-6 sm:mt-4">
                <p className="text-lg font-bold mb-2">Website</p>
                <p className="text-justify text-sm sm:text-base underline cursor-pointer hover:text-[#9207ce]">{props.item.website}</p>
              </div>
            )}

            {props.item.techs && (
              <div className="mt-4 ">
                <p className="text-lg font-bold mb-4">Technologies</p>
                <div className="gap-2 grid grid-cols-10 lg:grid-cols-8">
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
