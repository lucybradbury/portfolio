import React from "react";
import * as Utils from "../utils";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template:
    "gallery sidebar " 1fr
    / 4fr 1fr;
  height: 100%;
`;

const Sidebar = styled.div`
  display: grid;
  grid-template:
    "header " min-content
    "body " auto
    "meta " min-content
    / 1fr;
`;

const Header = styled.header`
  grid-area: header;
`;

const Body = styled.p`
  margin: 0;
  grid-area: body;
`;

const Meta = styled.span`
  grid-area: meta;
`;

const Gallery = styled.div`
  grid-area: gallery;
`;

const Project = ({ match, projects }) => {
  const project = Utils.pickProject(match.params.id, projects);
  const { title = "", body = "", meta = [], images = [] } =
    Utils.pickProject(match.params.id, projects) || {};
  return (
    <Layout images={images}>
      <Gallery>{images.map(props => <Image {...props} />)}</Gallery>
      <Sidebar>
        <Header>{title}</Header>
        <Body>{body}</Body>
        <Meta>{meta}</Meta>
      </Sidebar>
    </Layout>
  );
};

export default Project;
