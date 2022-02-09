import { useContext } from "react";

import {ModalContext} from "../Context/Modal/ModalContext";

const useModalContext = () => useContext(ModalContext)

export default useModalContext