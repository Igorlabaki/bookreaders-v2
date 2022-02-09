import {AppProps} from 'next/app'
import { FireBaseContextProvider } from '../Context/firebase/firebaseContext'
import {GlobalStyle} from '../styles/global'
import { ModalContextProvider }  from "../Context/Modal/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <FireBaseContextProvider>
    <ModalContextProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ModalContextProvider>
  </FireBaseContextProvider>
  )
}

export default MyApp