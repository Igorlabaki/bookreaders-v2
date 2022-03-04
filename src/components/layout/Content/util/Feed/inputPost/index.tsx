import { useState }    from "react";
import useAuthContext  from "../../../../../../hook/useAuthContext";
import usePostsContext from "../../../../../../hook/usePostsContext";
import moment          from 'moment';
import { InputPost } from "./styles";
import { LoadComponent } from "../../Loading";

interface InputPost{
    postId?: string
}

export function InputPostComponent({postId}: InputPost){
    
    const {user}       = useAuthContext()
    const {createPost,createComentPost} = usePostsContext()

    const [text, setText] = useState('')

    function handleButton(){
        if(postId){
            return(
                <>
                    <button onClick={(e) => 
                    {e.preventDefault();
                    createComentPost({
                        text:text, 
                        uid:user.uid,
                        photoUrl:user.avatar,
                        username: user.username,
                        postedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
                        postId: postId
                    });
                    setText("")}
                    }>
                        Post
                    </button>
                </>
            )
        }else{
            return(
            <>
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
            </>
            )
        }
    }

    return(
        <>
            <InputPost>
            <>
            <textarea placeholder={"I Love Books..."} value={text} onChange={(e) => setText(e.target.value)}/>
            <div>
                {handleButton()}
            </div>
            </>
            </InputPost>
        </>
    )
}
