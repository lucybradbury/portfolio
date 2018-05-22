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
  padding: 1rem 1rem 1rem 0;
  grid-gap: 1rem;
`;

const Header = styled.header`
  grid-area: header;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
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
  padding: 1rem;
  overflow: scroll;
`;

const Project = ({ title, body, meta, images }) => (
  <Layout>
    <Gallery>
      {images.map(({ fields }, key) => (
        <Image key={key} src={`https:${fields.file.url}`} />
      ))}
    </Gallery>
    <Sidebar>
      <Header>{title}</Header>
      <Body>{body}</Body>
      <Meta>{meta}</Meta>
    </Sidebar>
  </Layout>
);

Project.defaultProps = {
  title: "",
  body: "",
  meta: [],
  images: []
};

export default Project;
