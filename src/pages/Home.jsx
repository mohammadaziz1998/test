import DoForMe from '../ui/home/DoForMe';
import FirebeeBox from '../ui/home/FirebeeBox';
import Guarante from '../ui/home/Guarante';
import Questions from '../ui/home/Questions';
import Signals from '../ui/home/Signals';
import Specification from '../ui/home/Specification';

function Home() {
  return (
    <div>
      <Specification />
      <Guarante />
      <Signals />
      <DoForMe />
      <FirebeeBox />
      <Questions />
    </div>
  );
}

export default Home;
