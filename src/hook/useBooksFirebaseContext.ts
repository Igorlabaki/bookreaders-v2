import { useContext } from "react";

import {BooksFirebaseContext} from '../Context/firebase/booksFirebase'

const useBookFirebaseContext = () => useContext(BooksFirebaseContext)

export default useBookFirebaseContext