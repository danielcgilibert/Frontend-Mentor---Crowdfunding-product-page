import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  margin-top: 25px;
  border: solid 1px #66666618;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    h3 {
      color: hsl(176, 50%, 47%);
      font-weight: bold;
    }
  }
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  h3 {
    margin: 0 15px 0 15px;
  }
  div {
    display: flex;
    justify-content: baseline;
    align-items: baseline;
  }
  text-align: center;
  span {
    font-weight: bold;
    color: hsl(176, 50%, 47%);
  }
`;

const DescriptionCard = styled.div`
  color: gray;
  padding: 0 25px 0 25px;
`;

export const CardModal = () => {
  return (
    <CardDiv>
      <TitleCard>
        <div>
          <input type="radio" name="gender" />
          <h3>Bamboo Stand</h3>
          <h3> Piedge $55 or more</h3>
        </div>
        <div>
          <h4> 101 Left</h4>
        </div>
      </TitleCard>

      <DescriptionCard>
        You get a Black Special Edition computer stand and a personal thank you.
        You’ll be added to our Backer member list. Shipping is included.
      </DescriptionCard>
    </CardDiv>
  );
};