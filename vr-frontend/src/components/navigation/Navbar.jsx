import ThemeToggler from "../../theme/ThemeToggler";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

// const Navbar = () => {
//   return (
//     <div className="nav-container">
//       <Link className="logo" to="/">
//         VYBE <span>Realty</span>
//       </Link>
//       <div className="nav-actions">
//         <nav className="nav-links">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li className="down-arrow">
//               <Link to="/properties">Properties</Link>
//               <MdKeyboardArrowDown size={22} />
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>

//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <ThemeToggler />
//     </div>
//   );
// };

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <Link className="logo" to="/">
        VYBE <span>Realty</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
      </button>

      <div className={`nav-actions ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="down-arrow">
              <Link to="/properties" onClick={() => setMenuOpen(false)}>
                Properties
              </Link>
              <MdKeyboardArrowDown size={22} />
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <ThemeToggler />
    </div>
  );
};

export default Navbar;
