import { UserPageContainer } from "./style";

interface userPage{
    userId: any
}

export function UserPageComponent({userId}:userPage){
    return(
        <UserPageContainer>
            {userId}
        </UserPageContainer>
    )
}