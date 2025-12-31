export const customColorFirstWord = (words, color) =>
  words?.split(" ")?.map((word, index) => (
    <span key={index} className={index === 0 ? `text-[${color}]` : ""}>
      {word}{" "}
    </span>
  ));
