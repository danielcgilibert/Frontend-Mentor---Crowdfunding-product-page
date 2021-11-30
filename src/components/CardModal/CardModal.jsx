import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  margin-top: 25px;
  border: solid
    ${(props) => (props.active ? `3px hsl(176, 50%, 47%)` : `1px #80808042`)};
  transition: all 0.2s;
  border-radius: 5px;
  padding: 25px;
  opacity: ${(props) => props.disabled && `0.3`};
  ${({ disabled }) =>
    !disabled &&
    `
     &:hover {
    h3 {
      color: hsl(176, 50%, 47%);
      font-weight: bold;
    }
  }
  `}
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};

  h3 {
    margin: 0 25px 0 25px;
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

const RadioButtonDiv = styled.div`
  border: 1px solid hsl(176, 50%, 47%);
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.active ? `hsl(176, 50%, 47%)` : `white`};
`;

const DescriptionCard = styled.div`
  color: gray;
  padding: 0 25px 0 25px;
  margin-left: 15px;
`;

const DivSelectForm = styled.div`
  color: gray;
  margin: 15px 0 0 0;
  padding: 0 25px 0 25px;
`;

const FormDiv = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  button {
    background-color: hsl(176, 50%, 47%);
    color: white;
    padding: 15px 15px 15px 15px;
    border: none;
    font-weight: bold;
    -webkit-border-radius: 40px 40px 40px 40px;
    -moz-border-radius: 40px 40px 40px 40px;
    border-radius: 40px 40px 40px 40px;
    cursor: pointer;
  }

  input {
    font-weight: bold;
    width: 100px;
    border: solid 1px gray;
    padding: 10px 0px 10px 0px;
    text-align: center;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    border-radius: 36px;
    margin: 0 15px 0 0;
  }
`;

export const CardModal = ({
  id,
  titulo,
  precio,
  totalR,
  textoDescripcion,
  selectId,
  setSelectId,
}) => {
  const handleSelectReward = (e) => {
    setSelectId(id);
  };
  return (
    <CardDiv
      disabled={totalR === 0 && true}
      onClick={totalR !== 0 ? handleSelectReward : undefined}
      active={selectId === id ? true : false}
    >
      <TitleCard disabled={totalR === 0 && true}>
        <div>
          <RadioButtonDiv active={selectId === id ? true : false} />
          <h3>{titulo}</h3>
          {precio !== '0' && <h3> Piedge ${precio} or more</h3>}
        </div>
        <div>{totalR != null && <h4> {totalR} Left</h4>}</div>
      </TitleCard>

      <DescriptionCard>{textoDescripcion}</DescriptionCard>

      {selectId === id && (
        <DivSelectForm>
          <hr />
          <FormDiv>
            <span>Enter your piedge</span>
            <div>
              <input type="text" value={precio} placeholder={precio} />
              <button>Continue</button>
            </div>
          </FormDiv>
        </DivSelectForm>
      )}
    </CardDiv>
  );
};
