import React from 'react';
import { createClient } from 'contentful';
import { render } from 'react-dom';
import { Route, Router } from 'react-enroute';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import webgl from './webgl';
import * as Utils from './utils';

webgl();
const client = createClient(Utils.auth);

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      about: {},
      projects: {}
    };
  }

  async componentDidMount() {
    const { items } = await client.getEntries();
    const types = Utils.getTypes(items);
    const about = Utils.getAbout(types);
    const projects = Utils.getProjects(types);
    this.setState({ about, projects });
  }

  render() {
    const state = Object.assign(this.state, {
      location: window.location.pathname
    });
    return (
      <Router {...state}>
        <Route path="/" component={Home} />
        <Route path="/project/:id" component={Project} />
        <Route path="/about" component={About} />
        <Route path="*" component={Home} />
      </Router>
    );
  }
}

render(<Root />, document.querySelector('[app]'));
