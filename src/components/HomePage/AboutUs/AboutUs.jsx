import AboutUsCol from "./AboutUsCol";
// ^ Importing Components

import "./AboutUs.css";
// ^ Importing CSS

export default function AboutUs() {
  return (
    <>
      <div className="aboutUsMainDiv mt-10">
        <h2>About Us</h2>
        <div className="wrap">
          <AboutUsCol
            title="ST Pauls College"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dignissimos at, tempore enim similique praesentium odio nulla modi perferendis laudantium iste, voluptatem porro. Quaerat nostrum cupiditate officiis voluptatibus optio?"
          />
          <AboutUsCol
            title="Department"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dignissimos at, tempore enim similique praesentium odio nulla modi perferendis laudantium iste, voluptatem porro. Quaerat nostrum cupiditate officiis voluptatibus optio?"
          />
        </div>
      </div>
    </>
  );
}
