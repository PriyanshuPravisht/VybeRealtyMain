// components/ThemeSwitcher.js
import ThemeToggler from "../../theme/ThemeToggler";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link className="logo" to="/">
        VYBE <span>Realty</span>
      </Link>
      <div className="nav-actions">
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="down-arrow">
              <Link to="/properties">Properties</Link>
              <MdKeyboardArrowDown size={22} />
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>

            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;
