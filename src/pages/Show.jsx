import { useParams } from "react-router-dom";

const Show=()=>{
    const {showId} = useParams();
    return(
        <div>
            <h1>Show Page for {showId}</h1>
        </div>
    )
}
export default Show;