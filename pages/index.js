import Team from '../components/Team';
import WhoWeAre from '../components/WhoWeAre';
import HomeCarousel from '../components/Carousel';
import News from '../components/News';

function Home() {

  return (
    <div>
      <News/>
      <WhoWeAre />
      <HomeCarousel />
      <Team/>
    </div>
  )
}

export default Home
