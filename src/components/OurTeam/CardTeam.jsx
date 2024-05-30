import insta from "./instagram.svg"
import linke from "./Linkedin.svg"


export default function CardTeam({ imageFile, name, designation }) {
  return (
    <>
      <div class="team-card">
        <div class="team-img-wrapper">
          <img class="team-img" src={imageFile} />
        </div>
        <div class="team-card-content">
          <p class="text-blk name">{name}</p>
          <p class="text-blk position">{designation}</p>
        </div>
        <div class="team-card-content imgCSS">
          <div><p>Connect with us :</p></div>
          <a href=""><img src={insta} alt="" class="filter-white" /></a>
          <a href=""><img src={linke} alt="" class="filter-white" /></a>
        </div>
        </div>
        
        
        
    </>
  );
}
