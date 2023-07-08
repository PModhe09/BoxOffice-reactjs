// import {Link} from 'react-router-dom';
import { useState } from "react";
import { searchForShows,searchForPeople } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
import { useQuery } from "@tanstack/react-query";
const Home=()=>{

    const [filter,setFilter]=useState(null);
    const {data:apiData,error:apiDataError}=useQuery({
        queryKey:['search',filter],
        queryFn:()=>filter.searchOption === 'shows' ? searchForShows(filter.q) : searchForPeople(filter.q),
        enabled: !!filter,
        refetchOnWindowFocus:false,
    })
    
    // const [apiData,setApiData] =  useState(null);
    // const [apiDataError,setApiDataError]=useState(null);
   
    const onSearch =  async ({q,searchOption}) =>{
        setFilter({q,searchOption});
      // e.preventDefault();
    //    try{
    //     setApiDataError(null);
    //     let result;
    //     if(searchOption === 'shows'){
    //         result= await searchForShows(q);
    //         setApiData(result);
    //     }
    //     else{
    //         result= await searchForPeople(q);
    //         setApiData(result);
    //     }
        
    //    }
    //    catch(error){
    //      setApiDataError(error);
    //    }
    };

    const renderApiData=()=>{
        if(apiDataError){
            return <div>Error Occured : {apiDataError.message}</div>
        }
        if(apiData?.length === 0){
            return <div>No Results</div>
        }
        if(apiData){
            return apiData[0].show ? <ShowGrid shows={apiData}/>
                :
                 <ActorsGrid actors={apiData}/>
        }
        return null;
    }

    return(
        <div style={{backgroundColor:"#ff4d4d"}}>
            <SearchForm onSearch={onSearch}/>
            <div>{renderApiData()}</div>
        </div>
    )
}
export default Home;