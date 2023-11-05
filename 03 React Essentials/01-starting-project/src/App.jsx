import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxUiImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Learn'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(3)];

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title}
                        description={CORE_CONCEPTS[0].description}
                        img={CORE_CONCEPTS[0].image} />
          <CoreConcepts title={CORE_CONCEPTS[1].title}
                        description={CORE_CONCEPTS[1].description}
                        img={CORE_CONCEPTS[1].image} />
          <CoreConcepts title={CORE_CONCEPTS[2].title}
                        description={CORE_CONCEPTS[2].description}
                        img={CORE_CONCEPTS[2].image} />
          <CoreConcepts title={CORE_CONCEPTS[3].title}
                        description={CORE_CONCEPTS[3].description}
                        img={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
