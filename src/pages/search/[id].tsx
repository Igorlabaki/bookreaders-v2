import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { SearchComponent } from "../../components/Layout/Content/Search";
import useBookContext from "../../hook/useBookContext";

export default function Home(){
    
   const {query:{id}} = useRouter()
   return(
    <Layout>    
      <SearchComponent id={id}></SearchComponent>
   </Layout>
   ) 
}
