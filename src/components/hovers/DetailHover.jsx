import TriangleIcon from "@hanawidyatari/icons/TriangleIcon";

export default function DetailHover(props) {
  return (
    <div className={props.classNameDiv}>
      {props.icon}
      {props.onHover ? (
        <div className="-ml-[15px] z-10">
          <TriangleIcon height={20} width={20} className="fill-gray-500 ml-6" />
          <div height={10} width={10} className={props.classNameDetail}>
            <div className="border border-transparent rounded-[3px] px-1 py-1 bg-gray-500">
              <p className="text-[10px] font-semibold text-gray-50">{props.detail}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
