import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./screens/Home/Home.jsx"
import FoundCity from "./screens/FoundCity/FoundCity.jsx";
import NotFound from "./screens/NotFound/NotFound.jsx";
import Loading from "./screens/Loading/Loading.jsx";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
            <Route path="/found/:id" >
                <FoundCity />
            </Route>
            <Route path="/loading">
                <Loading/>
            </Route>
            <Route>
                <NotFound/>
            </Route>

        </Switch>

      </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
