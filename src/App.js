import logo from "./logo.svg";
import "./App.css";

// Déclaration des components ou composants autonomes
// pour appliquer le principe de modularité
const Title = ({ content }) => <h1>{content}</h1>;

const Component = ({ title, link }) => {
  return (
    <>
      <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn {title}
      </a>
      <br />
    </>
  );
};

const ComponentVue = () => {
  return (
    <>
      <a
        className="App-link"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Vue
      </a>
      <br />
    </>
  );
};

const ComponentAngular = () => {
  return (
    <>
      <a
        className="App-link"
        href="https://angularjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Angular
      </a>
      <br />
    </>
  );
};

function App() {
  // const libraries = ["Learn React", "Learn Angular", "Learn Vue"];
  return (
    <div className="App">
      <header className="App-header">
        <Title content="Welcome!" />
        <Component title="React" link="https://reactjs.org" />
        <ComponentVue />
        <ComponentAngular />
      </header>
    </div>
  );
}

export default App;
