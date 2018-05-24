import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { About as Header } from './Header';

const Main = styled.div`
  background: #a3ffbe;
  display: grid;
  grid-template:
    'header' min-content
    'body' auto
    / 1fr;
  grid-gap: 10rem;
  height: 100%;
`;

const Body = styled.div`
  display: grid;
  grid-area: body;
  grid-template:
    'intro' min-content
    'footer' auto
    / 1fr;
  grid-gap: 20rem;
`;

const Intro = styled.div`
  grid-area: intro;
  font-size: 3.3rem;
  width: 50%;
  justify-self: center;
  white-space: pre-line;
`;

const Footer = styled.div`
  display: grid;
  grid-area: footer;
  grid-template-columns: min-content 1fr;
  justify-self: center;
  width: 50%;
  grid-gap: 1rem;
  margin-left: -28rem;

  * {
    font-size: 3.3rem;
    white-space: nowrap;
  }

  a {
    color: black;
  }
`;

const Links = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1rem;
`;

const About = ({ about }) => (
  <Main>
    <Header />
    <Body>
      <Intro>{about.body}</Intro>
      <Footer>
        <span>Follow –</span>
        <Links>
          {about.social.map(({ url, display }, key) => (
            <a key={key} href={url}>
              {display}
            </a>
          ))}
        </Links>
      </Footer>
    </Body>
  </Main>
);

export default About;
