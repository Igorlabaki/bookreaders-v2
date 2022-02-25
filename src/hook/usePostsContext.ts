import { useContext } from "react";

import {PostsContext} from '../Context/firebase/postsContext'

const usePostsContext = () => useContext(PostsContext)

export default usePostsContext