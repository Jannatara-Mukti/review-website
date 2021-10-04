import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Sevices/Services';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/articles">
            <Articles></Articles>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
       <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
