import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="/" exact component={About} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={Project} />
      
      <Footer />
      </div>
    </Router>

  );
}

export default App;
