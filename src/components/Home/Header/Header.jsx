import "./Header.css";

// Components
import Nav from "../Nav/Nav";
import Button from "../Buttons/Buttons";
import Text from "../Text/Text";

export default function Header() {
  return (
    <section className="hero-section">
      <div className="top-10">
        <Nav />
      </div>
      <div className="Main-Page">
        <Text />
      </div>
      <div className="btn-master">
          <a className="ha" href="https://drive.google.com/file/d/1SUgLUW10s4OFs89hcw16qaFM_JAu8RlR/view?usp=drive_link"><Button  text="Brochure"  /></a>
          <a className="ha" href=""><Button text="Register Now" /></a>
      </div>
    </section>
  );
}
