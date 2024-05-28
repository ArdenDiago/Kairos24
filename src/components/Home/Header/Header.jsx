import "./Header.css";

// Components
import Nav from "../Nav/Nav";
import Button from "../Buttons/Buttons";
import Text from "../Text/Text";

export default function Header() {
  function eventClicked(id) {}
  return (
    <section id="Home" className="hero-section">
      <div className="top-10">
        <Nav />
      </div>
      <div className="Main-Page">
        <Text />
      </div>
      <div className="btn-master">
      <button 
        className="button-27 bc" 
        onClick={() => window.open('https://drive.google.com/file/d/1SUgLUW10s4OFs89hcw16qaFM_JAu8RlR/view', '_blank')}
      >
        Brochure
      </button>
      <button 
        className="button-27 reg" 
        onClick={() => window.location.href = '#Reg'}
      >
        Register Now
      </button>
    </div>
    </section>
  );
}
