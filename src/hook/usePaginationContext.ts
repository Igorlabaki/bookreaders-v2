import { useContext } from "react";

import {PaginationContext} from '../Context/Pagination/paginationContext'

const usePaginationContext = () => useContext(PaginationContext)

export default usePaginationContext