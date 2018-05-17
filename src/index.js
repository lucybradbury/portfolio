import React from "react";
import { createClient } from "contentful";
import { render } from "react-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import webgl from "./webgl";
import * as Utils from "./utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <Router>
        <div>
          {/* <Switch> */}
          <Route
            exact
            path="/"
            component={props => (
              <Home {...props} projects={this.state.projects} />
            )}
          />
          <Route
            path="/project/:id"
            component={props => (
              <Project {...props} projects={this.state.projects} />
            )}
          />
          <Route path="/about" component={About} />
          {/* <Route component={Home} /> */}
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

// webgl();
render(<Root />, document.querySelector("[app]"));
