import { useRouter } from "next/router";
import { Layout } from "../../../components/layout";
import { SearchComponent } from "../../../components/layout/Content/Search/id";

export default function Home(){
   const {query:{id}} = useRouter()

   return(
    <Layout>
      <SearchComponent id={id}/>
   </Layout>
   ) 
}
