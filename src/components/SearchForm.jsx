import { useState } from "react";
const SearchForm=({onSearch})=>{
    const [searchStr,setSearchStr] = useState("");
    const [searchOption,setSearchOption]=useState('shows');
    console.log(searchOption);

    const onSearchInputChange=(e)=>{
        setSearchStr(e.target.value)
    }

    const onRadioChange = e =>{
        setSearchOption(e.target.value);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const options={
            q:searchStr,
            searchOption,
        }
        onSearch(options);
    }

   return (
    <form onSubmit={onSubmit} style={{border: "5px #ffa502 solid",
        margin: "auto",
        width: "50vw",
        padding: "10px",
        backgroundColor:"#fff200",
        fontFamily:"cursive"
        }}>
                <input type="text" value={searchStr} onChange={onSearchInputChange} style={{width:"50vw",height:"5vh",fontSize:"4vh"}}/>
                
                <label>
                    Shows
                    <input type="radio" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange}/>
                </label>
                <label>
                    Actors
                    <input type="radio" name="search-option" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange}/>
                </label>
                <button type="submit" style={{marginLeft:"36vw",backgroundColor:"blue",color:"white"}}><img src="../assets/search.png" alt="Search"/></button>
    </form>
   )
}
export default SearchForm;