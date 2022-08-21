import { Children } from "react";

export default function LinkButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children ? <Children /> : props.text}
    </button>
  );
}
