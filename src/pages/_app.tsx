import {AppProps} from 'next/app'
import {GlobalStyle} from '../styles/global'
import { BookContextProvider } from '../Context/book/bookContext';
import { AuthContextProvider } from '../Context/firebase/authContext';
import { ModalContextProvider }  from "../Context/Modal/ModalContext";
import { PostsContextProvider } from '../Context/firebase/postsContext'
import { UpdateUserContextProvider } from '../Context/firebase/updateUserContext'
import { PaginationContextProvider } from '../Context/Pagination/paginationContext';
import 'swiper/css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsContextProvider>
      <AuthContextProvider>
        <UpdateUserContextProvider>
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
        </UpdateUserContextProvider>
      </AuthContextProvider>
    </PostsContextProvider>
  )
}

export default MyApp