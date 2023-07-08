import ShowCard from "./ShowCard";
const ShowGrid=({shows})=>{
   return(
    <div style={{backgroundColor:"#ff4d4d",color:"white"}}>
      {shows.map(data=>
         <ShowCard key={data.show.id} id={data.show.id} name={data.show.name} 
            image = {data.show.image ? data.show.image.medium : "/No-Image-Placeholder.png"} summary={data.show.summary}
         />
      )}
    </div>
   )
}
export default ShowGrid;