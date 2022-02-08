import {AppProps} from 'next/app'
import { FireBaseContextProvider } from '../Context/firebase/firebaseContext'
import {GlobalStyle} from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <FireBaseContextProvider>
    <GlobalStyle/>
    <Component {...pageProps} />
  </FireBaseContextProvider>
  )
}

export default MyApp