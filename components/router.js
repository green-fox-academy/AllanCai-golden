import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SimpleGoldenAcornApp from '../src/simple/states';
import App from '../src/simple/redux';
import AcornApp from '../src/reducers/index';


const home = () => (
  <div>
    <h2>
      Golden Acorn is life!
      {' '}
      🌰
    </h2>
  </div>
);

const states = () => (
  <div>
    <h1>GoldenAcornApp with states</h1>
    <SimpleGoldenAcornApp />
  </div>
);

const store = createStore(AcornApp);
const redux = () => (
  <div>
    <h1>GoldenAcornApp with redux</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

const RouterApp = () => (
  <Router>
    <div>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        {' '}
        <span>
          <Link to="/simple/states">with States</Link>
        </span>
        {' '}
        <span>
          <Link to="/simple/redux">with Redux</Link>
        </span>
      </div>
      <Route exact path="/" component={home} />
      <Route path="/simple/states" component={states} />
      <Route path="/simple/redux" component={redux} />
    </div>
  </Router>
);

export default RouterApp;
