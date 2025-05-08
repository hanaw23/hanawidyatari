import LightIcon from "@hanawidyatari/icons/LightIcon";
import DarkIcon from "@hanawidyatari/icons/DarkIcon";

const ThemeToggle = (props) => {
  return (
    <div className="flex items-center px-2">
      <label className="relative inline-block w-14 h-8 cursor-pointer">
        <input type="checkbox" checked={!props.isDarkTheme} onChange={props.onChange} className="sr-only peer" />
        <div className="bg-gray-300 dark:bg-[#a934dc] peer-checked:bg-gray-400 peer-checked:dark:bg-bg-gray-400 rounded-full w-full h-full transition-colors duration-300" />
        <div className="absolute top-1 left-1 peer-checked:left-[calc(100%-2rem)] transition-all duration-300 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
          {props.isDarkTheme ? <DarkIcon className="w-4 h-4 text-gray-800" /> : <LightIcon className="w-4 h-4 text-gray-800" />}
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
