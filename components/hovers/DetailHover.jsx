import TriangleIcon from "../svg/TriangleIcon";

export default function DetailHover(props) {
  return (
    <div>
      <TriangleIcon height={20} width={20} className="fill-gray-500 ml-6" />
      <div height={10} width={10} className="w-fit -mt-3">
        <div className="border border-transparent rounded-[3px] px-1 py-1 bg-gray-500">
          <p className="text-[10px] font-semibold text-gray-50">{props.detail}</p>
        </div>
      </div>
    </div>
  );
}
