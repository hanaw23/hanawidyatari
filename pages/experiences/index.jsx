import { detailExp } from "../../utility/experiences";

export default function Experiences() {
  return (
    <div className="h-screen">
      <div className="flex justify-center mb-8">
        <h1 className="mt-10 text-[40px] font-semibold">Experiences</h1>
      </div>

      <div className="mt-20 w-[68%] mx-20">
        <div className="grid grid-cols-2 gap-8 ">
          {detailExp.map((item, i) => {
            return (
              <div className=" mx-auto border border-transparent backdrop-blur-md bg-white/30 rounded-[10px] py-4 px-4 h-[320px] cursor-pointer hover:scale-125 hover:z-40">
                <div key={i} className="text-center">
                  <div>
                    <h1 className="font-semibold text-[25px]">{item.role}</h1>
                    <div>
                      <span>{item.company}</span>
                      <span> - </span>
                      <span>{item.position}</span>
                    </div>
                    <div className="text-xs">
                      <span>{item.startDate}</span>
                      <span> - </span>
                      <span>{item.endDate}</span>
                    </div>
                  </div>

                  <div className="mt-4 px-3">
                    <p className="text-justify text-[#ed4c6f] font-bold mb-2">Description</p>
                    <p className="w-[420px] text-justify">{item.desc}</p>

                    <div className={`${!item.techs ? "hidden" : "fixed"} mt-2`}>
                      <p className="text-justify text-[#ed4c6f] font-bold mb-2">Technology</p>
                      <div className="grid grid-cols-10 w-[380px] mt-4">
                        {item.techs?.map((tech, i) => {
                          return <div key={i}>{tech.iconHtml}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
