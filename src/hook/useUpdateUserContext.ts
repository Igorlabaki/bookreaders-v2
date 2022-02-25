import { useContext } from "react";

import {UpdateUserContext} from '../Context/firebase/updateUserContext'

const useUpdateUserContext = () => useContext(UpdateUserContext)

export default useUpdateUserContext