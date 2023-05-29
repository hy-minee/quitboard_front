import { Link } from "react-router-dom";
import "./Header.css";
import Applogo from "../assets/images/applogo.svg";

function Header() {
  return (
    <header>
      <nav className="Navbar">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontFamily: "DMSans-Regular",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          Home
        </Link>
        <Link
          to="/features"
          style={{
            textDecoration: "none",
            fontFamily: "DMSans-Regular",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          Features
        </Link>

        <img src={Applogo} alt="mainlogo" />

        <Link
          to="/search"
          style={{
            textDecoration: "none",
            fontFamily: "DMSans-Regular",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          Search
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            fontFamily: "DMSans-Regular",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
