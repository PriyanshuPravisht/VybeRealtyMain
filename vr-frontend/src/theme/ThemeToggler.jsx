import { useThemeStore } from "../store/themeStore";
import { IoMoonOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {/* {theme === "light" ? "Dark" : "Light"} Mode */}
      {theme === "light" ? <TiWeatherSunny /> : <IoMoonOutline />}
    </button>
  );
};

export default ThemeToggler;
