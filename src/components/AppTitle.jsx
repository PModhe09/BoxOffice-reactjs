export default function Apptitle(props){
    const {title='BoxOffice',subtitle='Entertainment NonStop!'}=props;
    return(
        <div style={{
        backgroundColor:"#EA2027",padding:"1.5vh 0.5vw 1.5vh 0.2vw",color:"white"}}>
            <h1 style={{margin: "auto",
        width: "50vw",borderRadius:"20%",padding:"0.2vh 1vw 0.2vh 1vw"}}>{title} : {subtitle}</h1>
        </div>
    );
}