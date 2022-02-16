import {AppProps} from 'next/app'
import { FireBaseContextProvider } from '../Context/firebase/firebaseContext'
import {GlobalStyle} from '../styles/global'
import { ModalContextProvider }  from "../Context/Modal/ModalContext";
import 'swiper/css';
import { BookContextProvider } from '../Context/book/bookContext';

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <FireBaseContextProvider>
    <BookContextProvider>
      <ModalContextProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ModalContextProvider>
    </BookContextProvider>
  </FireBaseContextProvider>
  )
}

export default MyApp