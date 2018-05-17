import React from "react";
import * as Utils from "../utils";
import { Link } from "react-router-dom";

const Home = ({ match, projects }) => {
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
    </div>
  );
};

export default Home;
