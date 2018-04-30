// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import IntegrationContext from './IntegrationContext';
import React from 'react';

const Home = () => <h1><img src={IntegrationContext.environment.baseCdnUrl + "/images/ialogo-client-fr.png"} ></img></h1>;
const About = () => <h1>{IntegrationContext.language}</h1>;
const Contact = () => <h1>Contact</h1>;

// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => (
  <Router basename="/eemwpnpt/react">
    <div>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);
export default App
