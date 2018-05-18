import React from "react";
import * as Utils from "../utils";
import { Link } from "react-router-dom";
import webgl from "../webgl";

class Home extends React.Component {
  componentDidMount() {
    webgl();
  }
  render() {
    const { match, projects } = this.props;
    const titles = Utils.getProjectTitles(projects);
    return (
      <div>
        {titles.map((props, key) => {
          return (
            <Link key={key} to={"project/" + props.url}>
              {props.title}
            </Link>
          );
        })}
        <div id="canvas" />
      </div>
    );
  }
}

export default Home;
