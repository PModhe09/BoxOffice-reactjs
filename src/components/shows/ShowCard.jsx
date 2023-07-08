const ShowCard=({name,image,id,summary})=>{
    const summaryStripped = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
    return(
        <div style={{margin: "auto",
        width: "50vw",
        padding: "10px",border:"1px white solid"}}>
            <img src={image} alt={name} height="200vh" width="200vw" style={{borderRadius:"50%"}}/>
            <h1 style={{fontSize:"4vh"}}>{name}</h1>
            <p>{summaryStripped}</p>
            <div>
                <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read More</a>
                <button type="button">Star Me</button>
            </div>
        </div>
    )
}
export default ShowCard;