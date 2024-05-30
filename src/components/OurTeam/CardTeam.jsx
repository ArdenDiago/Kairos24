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
      </div>
    </>
  );
}
