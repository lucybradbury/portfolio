import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 4rem 6rem;
  a {
    color: ${({ color }) => color};
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Maison Bold';
    letter-spacing: 0.1rem;
  }
  a:last-of-type {
    justify-self: end;
  }
`;

export const Home = () => (
  <Header color="white">
    <Link to="/">Lucy Bradbury</Link>
    <Link to="/about">About</Link>
  </Header>
);

export const Project = () => (
  <Header color="black">
    <Link to="/">Lucy Bradbury</Link>
    <Link to="/">Close</Link>
  </Header>
);

export const About = () => (
  <Header color="black">
    <Link to="/">Lucy Bradbury</Link>
    <Link to="/">Projects</Link>
    <Link to="/about">About</Link>
  </Header>
);
