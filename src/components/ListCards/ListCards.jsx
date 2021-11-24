import React from 'react';
import { Card } from '../Card/Card';
import styled from 'styled-components';
const List = styled.div`
  position: absolute;
  top: 80%;
  background-color: white;
  height: 100%;
  width: 40%;
  border-radius: 5px;
  padding: 25px;
`;

const InfoProject = styled.div`
  strong {
    margin-bottom: 15px;
    display: inline-block;
  }
  p {
    color: hsl(0, 0%, 48%);
    line-height: 30px;
    margin-bottom: 15px;
  }
`;

export const ListCards = () => {
  return (
    <List>
      <InfoProject>
        <strong>About this project</strong>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>

        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <Card
          titulo="Bamboo Stand"
          precio="54"
          totalR="101"
          textoDescripcion="        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list."
        />

        <Card
          titulo="Bamboo Stand"
          precio="54"
          totalR="101"
          textoDescripcion="        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list."
        />

        <Card
          titulo="Bamboo Stand"
          precio="54"
          totalR="101"
          textoDescripcion="        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list."
        />
      </InfoProject>
    </List>
  );
};
