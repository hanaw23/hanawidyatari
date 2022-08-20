import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

export default function ProjectDetailModal(props) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const cardDetailModal = (
    <div className={props.className}>
      <div className=" px-8 py-4">
        <h2 className="text-center text-[25px] font-semibold text-[#a934dc]">{props.name}</h2>
        <div className="flex justify-center gap-3">
          {props.pics?.map((pic) => {
            return (
              <div className="mt-10  gap-5">
                <img src={pic.urlPic} alt="admin" height={250} width={250} />
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <h3 className="text-m font-semibold mb-2 text-[#a934dc]">Description</h3>
          <p className="text-justify text-sm">{props.desc}</p>
        </div>

        {!props.link ? null : (
          <div className="mt-4">
            <h3 className="text-m font-semibold mb-2 text-[#a934dc]">Link Project</h3>
            <a href={props.link} target="_blank">
              {props.link}
            </a>
          </div>
        )}

        <div className="mt-4">
          <h3 className="text-m font-semibold mb-4 text-[#a934dc]">Technology</h3>
          <div className="grid grid-cols-10 gap-x-1 gap-y-3 w-[550px]">
            {props.icons?.map((icon, i) => {
              return <div key={i}>{icon.iconHtml}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(cardDetailModal, document.body);
  } else {
    return null;
  }
}
