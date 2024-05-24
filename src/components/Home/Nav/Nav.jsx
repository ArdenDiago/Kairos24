import "./Nav.css";

// images
import clgLogo from "../../../assets/img/ClgLogo/Collegelogo.png";
import deptLogo from "../../../assets/img/ClgLogo/DepartmentLog.png";

export default function Nav() {
  return (
    <>
      <div className="master-nav">
        <div className="Header-Bar">
          <div className="Clg-Logo">
            <img src={clgLogo} />
          </div>
          <div>
            <img src={deptLogo} />
          </div>
        </div>
      </div>

      <div className="nav-links">
        <div>
          <nav className="nav-container">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">AboutUs</a>
              </li>
              <li className="nav-item">
                <a href="#">Events</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#">Brouchere</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
