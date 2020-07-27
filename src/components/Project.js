import React from "react";
import styled from "styled-components";
import { Project as Header } from "./Header";
import { pathOr } from "ramda";
import { media } from "../style";

const Layout = styled.div`
  display: grid;
  grid-template:
    "header" min-content
    "main" min-content
    "gallery" auto
    / 1fr;
  height: 100%;
`;

const Main = styled.div`
  display: grid;
  grid-area: main;
  grid-template:
    "intro body" auto
    / 1fr 3fr;
  grid-gap: 3rem;
  padding: 6rem 12rem 6rem 12rem;
  ${media.mobile`
    padding: 2rem; 
    grid-template:
    "intro" auto
    "body" auto
    / 1fr;
  `};
`;

const Body = styled.p`
  margin: 0;
  grid-area: body;
  font-family: "Maison Book";
  font-size: 2.4rem;
  line-height: 3.7rem;
  width: 80%;
  white-space: pre-line;
  ${media.mobile`
    font-size: 1.8rem;
    line-height: 2.8rem;
  `};
`;

const Intro = styled.div`
  display: grid;
  grid-area: intro;
  grid-template:
    "title" min-content
    "url" min-content
    / 1fr;
  grid-gap: 3rem;
`;

const Title = styled.div`
  grid-area: title;
  font-size: 3.3rem;
  font-family: "Maison Bold";
`;

const Url = styled.a.attrs({
  href: (props) => props.url,
  target: "blank",
})`
  grid-area: url;
  font-size: 2.4rem;
  font-family: "Maison Book";
  text-decoration: none;
  cursor: pointer;
  color: black;
  border-bottom: 2px solid black;
`;

const Gallery = styled.div`
  grid-area: gallery;
  padding: 2rem 12rem;
  ${media.mobile`padding: 2rem;`};
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 3rem;
`;

const Vid = styled.video`
  width: 100%;
  margin-bottom: 3rem;
`;

const Project = ({ title, body, websiteDisplay, websiteUrl, images }) => (
  <Layout>
    <Header />
    <Main>
      <Intro>
        <Title>{title}</Title>
        <div>
          {websiteUrl ? <Url url={websiteUrl}>{websiteDisplay}</Url> : null}
        </div>
      </Intro>
      <Body>{body}</Body>
    </Main>
    <Gallery>
      {images.map(({ fields }, key) => {
        const src = pathOr(false, ["file", "url"], fields);
        const contentType = pathOr("", ["file", "contentType"], fields);

        if (src) {
          if (contentType.includes("video")) {
            return (
              <Vid key={key} autoPlay type={contentType} src={"https:" + src} />
            );
          }
          return <Image key={key} src={`https:${src}`} />;
        }

        return null;
      })}
    </Gallery>
  </Layout>
);

Project.defaultProps = {
  title: "",
  body: "",
  meta: [],
  images: [],
};

export default Project;
