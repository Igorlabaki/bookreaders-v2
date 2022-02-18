import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../../../components/Layout";
import { SearchComponent } from "../../../components/Layout/Content/Search/id";
import { SearchListComponent } from "../../../components/Layout/Content/Search/list";
import useBookContext from "../../../hook/useBookContext";

export default function Home(){
   const {query:search} = useRouter()

   return(
    <Layout>
       <SearchListComponent search={search}/>
   </Layout>
   ) 
}
