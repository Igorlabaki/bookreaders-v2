import { useState }    from "react";
import useAuthContext  from "../../../../../../hook/useAuthContext";
import usePostsContext from "../../../../../../hook/usePostsContext";
import moment          from 'moment';
import { InputPost } from "./styles";
import { LoadComponent } from "../../Loading";

export function InputPostComponent(){
    
    const {user}       = useAuthContext()
    const {createPost,isLoading} = usePostsContext()

    const [text, setText] = useState('')

    return(
        <>
            <InputPost>
            <>
            <textarea placeholder={"I Love Books..."} value={text} onChange={(e) => setText(e.target.value)}/>
            <div>
                <button 
                    onClick={ (e) =>{
                        e.preventDefault();
                        createPost({
                            text:text, 
                            uid:user.uid,
                            photoUrl:user.avatar,
                            username: user.username,
                            postedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
                        });               
                        setText("")}
                    }>
                    <p>Post</p>
                </button>
            </div>
            </>
            </InputPost>
        </>
    )
}
