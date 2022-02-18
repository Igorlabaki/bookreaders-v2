import {AppProps} from 'next/app'
import { FireBaseContextProvider } from '../Context/firebase/firebaseContext'
import {GlobalStyle} from '../styles/global'
import { ModalContextProvider }  from "../Context/Modal/ModalContext";
import 'swiper/css';
import { BookContextProvider } from '../Context/book/bookContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <FireBaseContextProvider>
    <BookContextProvider>
      <ModalContextProvider>
        <Head>
          <title>BookReaders</title>
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ModalContextProvider>
    </BookContextProvider>
  </FireBaseContextProvider>
  )
}

export default MyApp