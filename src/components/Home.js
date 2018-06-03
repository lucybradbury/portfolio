import React from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { Home as Header } from "./Header";
import { pathOr } from "ramda";

const hoverPath = pathOr(false, ["thumbnailHover", "fields", "file", "url"]);

const Main = styled.div`
  display: grid;
  grid-template:
    "header" min-content
    "gallery" auto
    / 1fr;
  height: 100%;
  grid-gap: 5rem;
`;

const Gallery = styled.div`
  grid-area: gallery;
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  grid-gap: 4rem 7rem;
  padding: 0 6rem;
  padding-bottom: 18rem;
`;

const Wrap = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: min-content auto;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.span`
  font-size: 2.2rem;
  font-family: "Maison Book";
  color: black;
  justify-self: center;
`;

class ImageHover extends React.Component {
  constructor(props) {
    super();
    this.state = {
      src: props.src
    };
    this.setSrc = this.setSrc.bind(this);
  }
  setSrc(src) {
    this.setState({ src });
  }

  render() {
    return (
      <Image
        src={`https:${this.state.src}`}
        onMouseEnter={() => this.setSrc(this.props.hover || this.props.src)}
        onMouseLeave={() => this.setSrc(this.props.src)}
      />
    );
  }
}

const Home = ({ projects }) => (
  <Main>
    <Header />
    <Gallery>
      {projects.map((props, key) => (
        <Wrap key={key}>
          <Link to={props.url}>
            <ImageHover
              src={props.thumbnail.fields.file.url}
              hover={hoverPath(props)}
            />
          </Link>
          <Title>{props.title}</Title>
        </Wrap>
      ))}
    </Gallery>
  </Main>
);

export default Home;
