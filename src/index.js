import React from "react";
import { createClient } from "contentful";
import { render } from "react-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { find, propEq } from "ramda";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./style";

const pickProject = (url, xs) => find(propEq("url", url), xs) || {};

const formatPlay = ({ items }) =>
  items[0].fields.gallery.map(x => x.fields.file);

const formatAbout = ({ items: [{ fields }] }) => ({
  body: fields.body,
  social: fields.social.map(x => x.fields)
});

const formatProjects = ({ items }) =>
  items[0].fields.project.map(x => x.fields);

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      about: {
        social: [],
        body: ""
      },
      projects: []
    };
  }

  async componentDidMount() {
    const client = createClient({
      accessToken:
        "3c8746a144e07b86399bd4bd63ee28743250280d17a3a2b6b3586e3ecbc8ccaf",
      space: "41ldn4xmab9t"
    });

    const about = await client.getEntries({
      content_type: "aboutMe"
    });
    const projects = await client.getEntries({
      content_type: "projects"
    });

    const play = await client.getEntries({
      content_type: "play"
    });

    this.setState({
      about: formatAbout(about),
      play: formatPlay(play),
      projects: formatProjects(projects)
    });
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
            component={() => <Home projects={this.state.projects} />}
          />
          <Route
            exact
            path="/about"
            component={() => <About about={this.state.about} />}
          />
          <Route
            exact
            path="/play"
            component={() => <Gallery images={this.state.play} />}
          />
          <Route
            path="/:id"
            component={({ match }) => {
              const { projects } = this.state;
              const project = pickProject(match.params.id, projects);
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

render(<Root />, document.querySelector("[app]"));
