import './AboutUs.css';
import AboutUsCard from "./AboutUsCard";
import { cardDetails } from "./AboutUsCardDetails";

export default function AboutUs() {
  return (
    <>
      <section>
        <div className="about-section">
          <h1>About Us </h1>

          <div className="a">
            <div className="row">
              {cardDetails.map((item, index) => (<AboutUsCard key={index} {...item} />))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
