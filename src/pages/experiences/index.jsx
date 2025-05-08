import ExperienceCard from "@hanawidyatari/components/cards/ExperienceCard";
import { detailExp } from "@hanawidyatari/utils/experiences";

export default function ExperiencesPage() {
  return (
    <div className="bg-gradient-to-tr from-[#344ddc] to-rose-600 py-5 lg:py-20 text-white w-full">
      <div className="flex justify-center mb-4 lg:mb-8">
        <h1 className="mt-10 text-[40px] font-semibold">Experiences</h1>
      </div>

      <div className="mt-10 lg:mt-20 mx-4 lg:mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {detailExp.map((item, i) => {
            return <ExperienceCard index={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
