import { HashRouter as Router, Route, } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectList from "./Components/ProjectList";


function App() {

  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={ProjectList}  />

          <Footer />
        </div>
      </Router>

    </div>


  );
}

export default App;
