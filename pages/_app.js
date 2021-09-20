import '../styles/globals.scss';
import Header from '../components/Header';
import { AppWrapper } from '../context/globalState';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  )
}

export default MyApp
