import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ExamplesList from "./components/examplesList/ExamplesList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
  <Intro/>
  <About/>
  <ExamplesList />
  <Contact/>
  </div>
  );
};

export default App;