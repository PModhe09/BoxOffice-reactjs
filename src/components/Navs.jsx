import {Link} from 'react-router-dom'

const LINKS=[
    {
    text:'Home',
    to:'/',
},
{
    text:'Starred',
    to:'/starred',
},
]
const Navs=()=>{
    return(
        <div style={{backgroundColor:"#e55039",padding:"0.1vh"}}>
            <ul>
                {LINKS.map((item)=>
                (<li key={item.to} style={{float: "left",marginLeft:"4vw",fontSize:"3vh",backgroundColor:"white",listStyle:"none"}}>
                <Link to={item.to}>
                    {item.text}
                </Link>
                </li>))}
            </ul>
            <br/>
            <br/>
        </div>
    )
}
export default Navs;