import '../styles/globals.scss';
import Header from '../components/Header';
import { AppWrapper } from '../context/globalState';
import NavBar from '../components/NavBar';
import WhoWeAre from '../components/WhoWeAre';
import Team from '../components/Team'
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <NavBar />
      <WhoWeAre />
      <Team />
      <Footer />
    </AppWrapper>
  )
}

export default MyApp
