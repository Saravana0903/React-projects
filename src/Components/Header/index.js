import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div className="bg-head">
    <div>
      <div className="left-con">
        <h1 className="logo-head">MEETME</h1>
      </div>
      <div className="right-con">
        <div className="item">
          <Link to="/home" className="link-item">
            Home
          </Link>
        </div>
        <div className="item">
          <Link to="/about" className="link-item">
            About
          </Link>
        </div>
        <div className="item">
          <Link to="/projects" className="link-item">
            Projects
          </Link>
        </div>
        <div className="item">
          <Link to="/contact" className="link-item">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default Header;
