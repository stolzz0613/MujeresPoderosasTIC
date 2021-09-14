import '../styles/globals.scss';
import Header from '../components/Header';
import { AppWrapper } from '../context/globalState';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <NavBar />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
