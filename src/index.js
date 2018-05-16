import React from 'react';
import { createClient } from 'contentful';
import { render } from 'react-dom';
import { Route, Router } from 'react-enroute';

const Home = props => <div> {JSON.stringify(props)} </div>;
const Project = props => <div> {JSON.stringify(props)} </div>;
const About = props => <div> {JSON.stringify(props)} </div>;
const NotFound = props => <div> {JSON.stringify(props)} </div>;

const client = createClient({
  accessToken:
    '3c8746a144e07b86399bd4bd63ee28743250280d17a3a2b6b3586e3ecbc8ccaf',
  space: '41ldn4xmab9t'
});

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: {}
    };
  }

  async componentDidMount() {
    const entries = await client.getEntries();
    console.log(entries);
    this.setState({ entries });
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
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

render(<Root />, document.querySelector('[app]'));
