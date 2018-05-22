import React from "react";
import * as Utils from "../utils";
import { Link } from "react-router-dom";
import enhance from "../webgl/enhance";
import styled, { css, keyframes } from "styled-components";

const anim = deg => keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(${deg}); }
`;

const getAnim = left => ({ index }) => {
  const cond = index & 1;
  return left
    ? anim(cond ? "360deg" : "-360deg")
    : anim(cond ? "-360deg" : "360deg");
};

const link = css`
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    font-family: "Maison Book";
    letter-spacing: 1px;
  }
`;

const Main = styled.div`
  background: #ffb3ba;
  display: grid;
  grid-template:
    "header" 5rem
    "links" auto
    / 1fr;
  grid-gap: 16rem;
  height: 100%;
`;

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0 2rem;
  ${link};
  a:last-of-type {
    justify-self: end;
  }
`;

const Links = styled.div`
  grid-area: links;
  display: grid;
  justify-content: center;
  grid-template-columns: ${({ length }) => css`repeat(${length}, auto)`};
  grid-gap: 2rem;
  z-index: 10;
`;

const Title = styled.div`
  animation: ${getAnim(true)} 10s linear infinite;
  transform-origin: 50% 17px;
  ${link};
  a:hover {
    opacity: 0;
  }
`;

const Wrap = styled.div`
  animation: ${getAnim(false)} 10s linear infinite;
`;

const Home = ({ projects = [], name }) => (
  <Main>
    <Header>
      <Link to="/">Lucy Bradbury</Link>
      <Link to="/about">About</Link>
    </Header>
    <Links length={projects.length}>
      {projects.map((props, key) => (
        <Title index={key} key={key}>
          <Wrap index={key}>
            <Link key={key} to={props.url}>
              {props.title}
            </Link>
          </Wrap>
        </Title>
      ))}
    </Links>
  </Main>
);

export default enhance(Home);
