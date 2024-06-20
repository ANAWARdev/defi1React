import logo from "./logo.svg";
import "./App.css";
// Déclaration des components ou composants
const Title = ({ content }) => <h1>{content}</h1>;
const ComponentReact = () => {
  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
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
  const libraries = ["Learn React", "Learn Angular", "Learn Vue"];
  return (
    <div className="App">
      <header className="App-header">
        <Title content="Welcome !" />
        <ComponentReact />
        <ComponentVue />
        <ComponentAngular />
        
      </header>
    </div>
  );
}

export default App;
