import "./Header.css";

// Components
import Nav from "../Nav/Nav";
import Button from "../Buttons/Buttons";
import Text from "../Text/Text";

export default function Header() {
  return (
    <section id="Home" className="hero-section">
      <div className="top-10">
        <Nav />
      </div>
      <div className="Main-Page">
        <Text />
      </div>
      <div className="btn-master">
          <Button text="Brochure" />
          <Button text="Register Now" />
      </div>
    </section>
  );
}
