import Team from '../components/Team';
import WhoWeAre from '../components/WhoWeAre';
import Highlights from '../components/Highlights';
import News from '../components/news';

function Home() {

  return (
    <div>
      <News/>
      <WhoWeAre />
      <Highlights />
      <Team/>
    </div>
  )
}

export default Home
