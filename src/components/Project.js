import React from "react";
import * as Utils from "../utils";

const Project = props => {
  const project =
    Utils.pickProject(props.match.params.id, props.projects) || {};
  const { title = "", body = "", meta = "" } = project;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <span>{meta}</span>
    </div>
  );
};

export default Project;
