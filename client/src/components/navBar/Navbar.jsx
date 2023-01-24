import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import { DarkModeContext } from "../../Context/darkModeContext";
import "./navbar.scss";

export default function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialMedia</span>
        </Link>
        <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggle} />
        ) : (
          <DarkModeOutlined onClick={toggle} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}
