import React from 'react';
import styled from 'styled-components';
import logoM from '../../images/logo-mastercraft.svg';
const Card = styled.div`
  width: 40%;
  height: 30%;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: 450px;
  text-align: center;
  font-size: 16px;
  padding: 0 25px 0 25px;
  p {
    color: hsl(0, 0%, 48%);
    margin-top: 10px;
  }

  img {
    position: relative;
    top: -30px; /* ajustar los valores para mover la imagen */
  }

  button {
    -webkit-border-radius: 40px 40px 40px 40px;
    -moz-border-radius: 40px 40px 40px 40px;
    border-radius: 40px 40px 40px 40px;
    background-color: hsl(176, 50%, 47%);
    color: white;
    padding: 15px 35px 15px 35px;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: hsl(176, 72%, 28%);
    }
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
        <button>Back this project</button>
        <button>Bookmark</button>
      </div>
    </Card>
  );
};
