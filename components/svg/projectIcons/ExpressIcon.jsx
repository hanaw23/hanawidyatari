import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function ExpressIcon(props) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeaveHover = () => {
    setIsHover(!isHover);
  };
  return (
    <DetailHover
      icon={
        <svg
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-gray-50 fill-[#0e0e0e]cursor-pointer"
          width={props.width}
          height={props.height}
          fill={props.fill}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeaveHover}
        >
          <path d="m40.53 77.82v-27.08h1.47v4.26a5.57 5.57 0 0 0 .48-.6 7.28 7.28 0 0 1 6.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 0 1 .32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 0 1 -5.88-3.88v10.77zm1.47-17.5c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16a6.91 6.91 0 0 0 7.59-4.39 11.77 11.77 0 0 0 -.26-9.68 6.77 6.77 0 0 0 -7.13-3.94 6.59 6.59 0 0 0 -5.89 4.87 33.4 33.4 0 0 0 -.72 3.8z" />
          <path d="m88.41 64a7.92 7.92 0 0 1 -7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 0 1 1.2-7.5 8.37 8.37 0 0 1 8.71-4.67 8 8 0 0 1 7.1 6.09 41.09 41.09 0 0 1 .69 4.5h-16.19c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91z" />
          <path d="m91.39 64.1h1.42a5.69 5.69 0 0 0 3.34 4.9 8.73 8.73 0 0 0 7.58-.2 3.41 3.41 0 0 0 2-3.35 3.09 3.09 0 0 0 -2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41a35.25 35.25 0 0 1 -4.84-1.77c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 0 1 9.76-.15 5.14 5.14 0 0 1 2.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 0 0 -3 .91 3 3 0 0 0 -1.74 3 3 3 0 0 0 2 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 0 1 3.1 4.07 4.81 4.81 0 0 1 -2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 0 1 -1.94-4.75z" />
          <path d="m125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 0 0 -3.54-4.18 8.73 8.73 0 0 0 -5.61.27 3.41 3.41 0 0 0 -2.47 3.25 3.14 3.14 0 0 0 2.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 0 1 1.94.59 5 5 0 0 1 .27 9.31 11.13 11.13 0 0 1 -9 .09 6.24 6.24 0 0 1 -3.76-6.06h.56.74a7.29 7.29 0 0 0 11.1 4.64 3.57 3.57 0 0 0 1.92-3.34 3.09 3.09 0 0 0 -2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 0 1 -4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 0 1 9.92-.11 5.23 5.23 0 0 1 2.51 5.13z" />
          <path d="m38.1 70.51a2.29 2.29 0 0 1 -2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 0 1 -2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 0 1 2.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 0 1 2.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 0 0 0 1.49c2.39 3.17 4.76 6.35 7.2 9.61z" />
          <path d="m70.92 50.66v1.4a7.25 7.25 0 0 0 -7.72 7.49q0 4.94 0 9.88v1.12h-1.43v-19.81h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14z" />
          <path d="m2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 0 0 3.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 0 1 -3.88 5.93 9.4 9.4 0 0 1 -10.95-1.4 9.85 9.85 0 0 1 -2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z" />
        </svg>
      }
      detail="Express"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[10px]"
    />
  );
}
