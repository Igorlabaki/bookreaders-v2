import { useContext } from "react";

import {AuthContext} from '../Context/firebase/authContext'

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext