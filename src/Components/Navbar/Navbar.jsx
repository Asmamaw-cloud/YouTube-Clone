import { CiCircleMore, CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { FaYoutube } from "react-icons/fa";
import { RiMenu2Fill, RiVideoUploadFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <RiMenu2Fill className="icon menu-icon" onClick={() =>setSidebar(prev => prev===false ? true : false )} />
        <Link to='/'><FaYoutube className="icon logo" /></Link>
        <span>AKTube</span>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" name="" id="" placeholder="Search" />
          <CiSearch className="icon search-icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <RiVideoUploadFill className="icon" />
        <CiCircleMore className="icon" />
        <IoNotifications className="icon" />
        <CgProfile className="icon user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
