import React, { useState } from 'react';
import image from '../images/image-hero-desktop.jpg';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import { CardHeader } from '../components/cardHeader/CardHeader';
import { ListCards } from '../components/ListCards/ListCards';
import { CardStatistics } from '../components/CardStatistics/CardStatistics';

const Header = styled.header`
  height: 500px;
  width: 100%;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-size: 16px;
`;

const Nav = styled.nav`
  padding: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap row;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin: 15px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    border-bottom: solid 1px white;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 450px;
  /* left: 40%; */
`;

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header style={{ backgroundImage: `url(${image})` }}>
        <Nav>
          <img src={logo} alt="React Logo" />
          <List>
            <Item>About</Item>
            <Item>Discover</Item>
            <Item> Get Started</Item>
          </List>
        </Nav>
      </Header>

      <Section>
        <CardHeader showModal={showModal} setShowModal={setShowModal} />
        <CardStatistics />
        <ListCards showModal={showModal} setShowModal={setShowModal} />
      </Section>
    </>
  );
};
