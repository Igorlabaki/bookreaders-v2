import { useEffect } from "react";
import useFireBaseContext from "../../../../../hook/useFirebaseContext";
import { BoxComponent } from "../../util/Box";
import { PostContainer } from "./styles";

export function FeedComponent(){

    const {} = useFireBaseContext()

    useEffect(() => {
        
    }, [])
    

    return(
        <>
            <BoxComponent title="My Posts">
                {
                   
                }
            </BoxComponent>
        </>
    )
}