const ShowMainData=({image,name,rating,summary,genres})=>{
    return(
        <div>
          <img src={image? image.original : "No-Image-Placeholder.png"}/>
          <div>
            <h1>{name}</h1>
            <div>{rating.average || 'N/A'}</div>
          </div>
          <div>
            Genres:
            <div>
                {genres.map(genre=>(
                    <span key={genre}>{genre}</span>
                ))}
                {summary}
            </div>
          </div>
        </div>
    )
}
export default ShowMainData;