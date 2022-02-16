import axios from "axios";
import { useEffect, useState } from "react";


export function useGoogleApi(url: string){

    const [data, setdata]             = useState([]);
    const [isFetching,setIsFetching]  =  useState(true)

    useEffect(() => {
      axios.get(url)
      .then(resp => {
        setdata(resp.data.items)
      })
      .finally(()=>{
        setIsFetching(false)
      })
    }, [])

    return {data,isFetching} 
}