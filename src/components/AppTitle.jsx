export default function Apptitle(props){
    const {title='BoxOffice',subtitle='Entertainment NonStop!'}=props;
    return(
        <div>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
        </div>
    );
}