const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <div style={{margin: "auto",
    width: "50vw",
    padding: "10px",border:"1px white solid",color:"white"}}>
      <div>
        <img src={image} alt="actor"height="200vh" width="200vw" style={{borderRadius:"50%"}}/>
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p >{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};
export default ActorCard;