import React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-enroute';

const Home = props => <div> {JSON.stringify(props)} </div>;
const Project = props => <div> {JSON.stringify(props)} </div>;
const About = props => <div> {JSON.stringify(props)} </div>;
const NotFound = props => <div> {JSON.stringify(props)} </div>;

class Root extends React.Component {
  render() {
    const state = {
      location: window.location.pathname
    };
    return (
      <Router {...state}>
        <Route path="/" component={Home} />
        <Route path="/project/:id" component={Project} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

render(<Root />, document.querySelector('[app]'));
