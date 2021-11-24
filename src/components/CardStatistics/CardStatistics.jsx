import React from 'react';
import styled from 'styled-components';

const CardStatisticsStyled = styled.div`
  background-color: white;
  height: 100%;
  width: 40%;
  padding: 0 25px 50px 25px;
  margin: 30px;
`;

const Statistics = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding: 35px 0 35px 0;
`;

const Section = styled.div`
  padding-right: 25px;

  &:first-child {
    border-right: 1px solid #80808029;
  }

  &:last-child {
    border-left: 1px solid #80808029;
    padding-left: 25px;
  }

  span {
    color: gray;
  }
`;

const ProgessBar = styled.div`
  width: 50%;
  height: 100%;
  background-color: hsl(176, 50%, 47%);
  border-radius: 25px;
`;

const ContainerProgessBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: #80808014;
  border-radius: 25px;
  margin: 50;
`;

export const CardStatistics = () => {
  return (
    <CardStatisticsStyled>
      <Statistics>
        <Section>
          <h1>$89,914</h1>
          <span>of $100,000 backed</span>
        </Section>
        <Section>
          <h1>5,007</h1>
          <span>total backers</span>
        </Section>
        <Section>
          <h1>56</h1>
          <span>days left</span>
        </Section>
      </Statistics>

      <ContainerProgessBar>
        <ProgessBar />
      </ContainerProgessBar>
    </CardStatisticsStyled>
  );
};
