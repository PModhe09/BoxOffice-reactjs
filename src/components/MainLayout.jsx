import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import Apptitle from "./AppTitle";
const Mainlayout=()=>{
    return(
        <div>
            <Apptitle />
            <Navs/>
            <Outlet/>
        </div>
    )
}
export default  Mainlayout;