import React from 'react';
import styled from 'styled-components';
import logoM from '../../images/logo-mastercraft.svg';
import { Button } from '../Button/Button';
const Card = styled.div`
  width: 40%;
  min-height: 28%;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  padding: 0 25px 0px 25px;
  p {
    color: hsl(0, 0%, 48%);
    margin-top: 10px;
  }

  img {
    position: relative;
    top: -30px;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
  }
`;

export const CardHeader = () => {
  return (
    <Card>
      <img src={logoM} alt="React Logo" />
      <h1> Mastercraft Bamboo Monitor Riser </h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div>
        <Button texto="Back this project" />
        <Button texto="Bookmark" />
      </div>
    </Card>
  );
};
