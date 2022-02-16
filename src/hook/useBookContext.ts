import { useContext } from "react";

import {BookContext} from '../Context/book/bookContext'

const useBookContext = () => useContext(BookContext)

export default useBookContext