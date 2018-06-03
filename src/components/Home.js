import React from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { Home as Header } from "./Header";

const link = css`
  a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    font-family: "Maison Book";
    letter-spacing: 0.6px;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template:
    "header" min-content
    "gallery" auto
    / 1fr;
  grid-gap: 5rem;
  height: 100%;
`;

const Gallery = styled.div`
  grid-area: gallery;
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 0 6rem;
  padding-bottom: 18rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Home = ({ projects }) =>
  console.log(projects) || (
    <Main>
      <Header />
      <Gallery>
        {projects.map((props, key) => (
          <Link to={props.url}>
            <Image key={key} src={`https:${props.thumbnail.fields.file.url}`} />
          </Link>
        ))}
      </Gallery>
    </Main>
  );

export default Home;
