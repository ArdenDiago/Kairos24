import "./Background.scss";

import EventCategories from "./EventCategories";


export default function Background() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
      <br />
        <span>PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div>
      <EventCategories types={['gaming','cultural','technical']}/>
    </>
  );
}
