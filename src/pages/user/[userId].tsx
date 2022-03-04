import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import { UserPageComponent } from "../../components/layout/Content/UserPage";

export default function Home(){
   const {query:{id}} = useRouter()

   return(
    <Layout>
      <UserPageComponent userId={id}/>
   </Layout>
   ) 
}
