import React from 'react';
import styled from 'styled-components';
import { Project as Header } from './Header';
import { pathOr } from 'ramda';

const Layout = styled.div`
  display: grid;
  grid-template:
    'header' min-content
    'main' min-content
    'gallery' auto
    / 1fr;
  height: 100%;
`;

const Main = styled.div`
  display: grid;
  grid-area: main;
  grid-template:
    'intro body' auto
    / 1fr 2fr;
  grid-gap: 3rem;
  padding: 6rem 12rem 6rem 12rem;
`;

const Body = styled.p`
  margin: 0;
  grid-area: body;
  font-size: 2.5rem;
  font-family: 'Maison Book';
  letter-spacing: 0.1rem;
  line-height: 4rem;
  width: 90%;
  white-space: pre-line;
`;

const Intro = styled.div`
  display: grid;
  grid-area: intro;
  grid-template:
    'title' min-content
    'url' min-content
    / 1fr;
  grid-gap: 3rem;
`;

const Title = styled.div`
  grid-area: title;
  font-size: 3.3rem;
  font-family: 'Maison Bold';
  letter-spacing: 0.1rem;
`;

const Url = styled.a.attrs({
  href: props => props.url
})`
  grid-area: url;
  font-size: 3.3rem;
  font-family: 'Maison Book';
  letter-spacing: 0.1rem;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const Gallery = styled.div`
  grid-area: gallery;
  padding: 2rem 12rem;
`;

const Image = styled.img`
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
        const src = pathOr(false, ['file', 'url'], fields);
        return src ? <Image key={key} src={`https:${src}`} /> : null;
      })}
    </Gallery>
  </Layout>
);

Project.defaultProps = {
  title: '',
  body: '',
  meta: [],
  images: []
};

export default Project;
