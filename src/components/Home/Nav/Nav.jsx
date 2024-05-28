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
                <a href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#Events">Events</a>
              </li>
              <li className="nav-item">
                <a href="#Reg">Registration</a>
              </li>
              <li className="nav-item">
                <a href="#AbtUs">AboutUs</a>
              </li>
              <li className="nav-item">
                <a href="https://drive.google.com/file/d/1SUgLUW10s4OFs89hcw16qaFM_JAu8RlR/view?usp=drive_link" target="blank">Brochure</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}