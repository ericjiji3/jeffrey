import logo from './logo.svg';
import styles from "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Tinder from './pages/Tinder';
import Modal from "react-modal";
import mail from './components/pics/mail.png';

function App() {
  return (
    <div className="container-fluid">
      <div className = "row">
        <div className = "header">
          <Header/>
        </div>
      </div>
      <div className = "afterHeader row">
      <Router>
          <Switch>
            <Route path = '/videos' component = {Videos}/>
            <Route path = '/gallery' component = {Gallery}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/portfolio' component = {Portfolio}/>
            <Route path = '/tinder' component = {Tinder}/>
            <Route path = '/' exact component = {Home}/>
          </Switch>
      </Router>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
