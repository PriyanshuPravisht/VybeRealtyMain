import { useThemeStore } from "../store/themeStore";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? (
        <MdSunny size={30} style={{ color: "yellow" }} />
      ) : (
        <IoMoon size={30} style={{ color: "white" }} />
      )}
    </button>
  );
};

export default ThemeToggler;
