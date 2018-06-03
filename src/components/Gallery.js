import React from "react";
import styled from "styled-components";
import { Project as Header } from "./Header";
import { pathOr } from "ramda";

const Layout = styled.div`
  display: grid;
  grid-template:
    "header" min-content
    "gallery" auto
    / 1fr;
  height: 100%;
`;

const Title = styled.div`
  grid-area: title;
  font-size: 3.3rem;
  font-family: "Maison Bold";
  letter-spacing: 0.6px;
`;

const Gallery = styled.div`
  grid-area: gallery;
  padding: 2rem 12rem;
  display: grid;
  grid-gap: 3rem;

  * {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 3rem;
`;

const Project = ({ images }) => (
  <Layout>
    <Header />
    <Gallery>
      {images.map(({ contentType, url }, key) => {
        if (contentType.includes("video")) {
          return (
            <video key={key} autoPlay type={contentType} src={"https:" + url} />
          );
        }

        return <img key={key} src={url} />;
      })}
    </Gallery>
  </Layout>
);

Project.defaultProps = {
  title: "",
  body: "",
  meta: [],
  images: []
};

export default Project;
