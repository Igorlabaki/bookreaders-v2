import {AppProps} from 'next/app'
import {GlobalStyle} from '../styles/global'
import { BookContextProvider } from '../Context/book/bookContext';
import { AuthContextProvider } from '../Context/firebase/authContext';
import { ModalContextProvider }  from "../Context/Modal/ModalContext";
import { PostsContextProvider } from '../Context/firebase/postsContext'
import { BooksFirebaseContextProvider } from '../Context/firebase/booksFirebase';
import { UpdateUserContextProvider } from '../Context/firebase/updateUserContext'
import { PaginationContextProvider } from '../Context/Pagination/paginationContext';
import 'swiper/css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <UpdateUserContextProvider>
      	<BooksFirebaseContextProvider>
        <PostsContextProvider>
        <PaginationContextProvider>
          <BookContextProvider>
            <ModalContextProvider>
              <Head>
                <title>BookReaders</title>
              </Head>
              <GlobalStyle/>
              <Component {...pageProps} />
            </ModalContextProvider>
          </BookContextProvider>
          </PaginationContextProvider>
        </PostsContextProvider>
      </BooksFirebaseContextProvider>
    </UpdateUserContextProvider>
  </AuthContextProvider>
  )
}

export default MyApp