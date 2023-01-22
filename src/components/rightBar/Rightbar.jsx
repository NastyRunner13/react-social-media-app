import "./rightbar.scss";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <span>Prince Gupta</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <span>Prince Gupta</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <p>
                <span>Prince Gupta</span> changed thier cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
