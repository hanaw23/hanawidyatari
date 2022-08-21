import Styles from "../../styles/Styles.module.scss";

export default function index() {
  return (
    <div className={`h-screen overflow-x-hidden ${Styles.background}`}>
      <div className="overflow-hidden">
        <div className="mb-10 ">
          <h1 className="text-center text-[75px] mt-32 font-semibold text-[#ffffff]">Explore My Works</h1>
        </div>
      </div>
    </div>
  );
}
