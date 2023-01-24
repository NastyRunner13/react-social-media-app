import {
  EmailOutlined,
  FacebookTwoTone,
  Instagram,
  Language,
  LinkedIn,
  MoreVert,
  Pinterest,
  Place,
  Twitter,
} from "@mui/icons-material";
import "./profile.scss";
import Posts from "../../components/posts/Posts";

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="https://www.instagram.com/_princegupta1301/">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com/princegupta1301">
              <Twitter fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/princegupta1301/">
              <LinkedIn fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Prince Gupta</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>India</span>
              </div>
              <div className="item">
                <Language />
                <span>prince.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}
