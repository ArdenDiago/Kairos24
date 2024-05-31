import "./OurTeam.css";

import CardTeam from "./CardTeam";

const imgset = [
  "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg",
];

export default function OurTeam() {
  return (
    <>
      <div class="container-block container">
        <p class="text-blk team-head-text">Our Team</p>

        <div class="responsive-container-block teamcard-container pb-10">
          <CardTeam
            imageFile={imgset}
            designation="Project Manager"
            name="James Bond"
          />
        </div>
      </div>
    </>
  );
}
