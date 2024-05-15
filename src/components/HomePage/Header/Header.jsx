import clgLogo from "../../../assets/img/College logo.png";
import deptLogo from "../../../assets/img/Department log.png";

import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <div className="al-L">
            <img src={clgLogo} alt="" />
          </div>
          <div className="al-R">
            <img src={deptLogo} alt="" />
          </div>
        </div>
      </header>
      <nav className="mt-40">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>

    </>
  );
}
