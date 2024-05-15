import clgLogo from "../../../assets/img/ClgLogo/College logo.png";
import deptLogo from "../../../assets/img/ClgLogo/Department log.png";
import background from '../../../assets/img/Background/jjk.jpg';

import Background from "../Background/Background";

import "./Header.css";

export default function Header() {
  return (
    <div className="header-main">
      <Background />
      {/* <img src={background} className='setBackground' alt="" /> */}
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
    </div>
  );
}
