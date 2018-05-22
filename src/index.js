import React from 'react';
import { createClient } from 'contentful';
import { render } from 'react-dom';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import * as Utils from './utils';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './style';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      about: {},
      projects: {}
    };
  }

  async componentDidMount() {
    const client = createClient(Utils.auth);
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
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              const projects = Utils.sortByOrder(this.state.projects);
              return <Home name="jack" projects={projects} />;
            }}
          />
          <Route exact path="/about" component={About} />
          <Route
            path="/:id"
            component={({ match }) => {
              const { projects } = this.state;
              const project = Utils.pickProject(match.params.id, projects);
              return (
                <Project
                  title={project.title}
                  body={project.body}
                  link={project.link}
                  images={project.images}
                  websiteDisplay={project.websiteDisplay}
                  websiteUrl={project.websiteUrl}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

render(<Root />, document.querySelector('[app]'));
