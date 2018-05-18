import {
  pipe,
  path,
  groupBy,
  prop,
  map,
  always,
  values,
  F,
  propEq,
  when,
  head,
  sortBy,
  find
} from "ramda";

export const auth = {
  accessToken:
    "3c8746a144e07b86399bd4bd63ee28743250280d17a3a2b6b3586e3ecbc8ccaf",
  space: "41ldn4xmab9t"
};

export const getTypes = pipe(groupBy(path(["fields", "type"])));

export const getAbout = path(["about", 0, "fields"]);

export const getProjects = pipe(prop(["project"]), map(prop("fields")));

export const getProjectTitles = sortBy(prop("order"));

export const pickProject = (url, xs) => find(propEq("url", url), xs);