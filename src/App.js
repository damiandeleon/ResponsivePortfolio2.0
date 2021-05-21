import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Project />
      
      
      
      <Footer />
      </div>
    </Router>

  );
}

export default App;
