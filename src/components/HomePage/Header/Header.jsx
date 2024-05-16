import background from "../../../assets/img/Background/jjk.jpg";

import HeaderImages from "../HeaderImages/HeaderImages";
import HomeBtn from "../HomeBtn/HomeBtn";

import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-main">
        {/* <img src={background} className='setBackground' alt="" /> */}
        <HeaderImages />
        <nav className="mt-40">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
        <div className="align-btn">
          <HomeBtn />
          <HomeBtn />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
