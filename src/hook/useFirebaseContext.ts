import { useContext } from "react";

import {FirebaseContext} from '../Context/firebase/firebaseContext'

const useFireBaseContext = () => useContext(FirebaseContext)

export default useFireBaseContext