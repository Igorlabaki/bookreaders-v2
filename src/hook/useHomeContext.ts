import { useContext } from "react";

import {HomeContext} from "../Context/Home/HomeContext";

const useHomeContext = () => useContext(HomeContext)

export default useHomeContext