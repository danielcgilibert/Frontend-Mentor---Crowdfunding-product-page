import React from 'react';
import styled from 'styled-components';
import iconClose from '../../images/icon-close-modal.svg';
import { CardModal } from '../CardModal/CardModal';
const ModalStyled = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 45%;
  height: 80%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  padding: 25px;

  p {
    color: gray;
    margin-top: 15px;
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: black;
  }
`;

const HeaderModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 25px;
`;

export const Modal = ({ setShowModal }) => {
  return (
    <ModalStyled>
      <ModalContent>
        <HeaderModal>
          <img
            onClick={() => setShowModal(false)}
            src={iconClose}
            alt="React Logo"
          />
        </HeaderModal>
        <h1>Back this project</h1>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <CardModal />
        <CardModal />
        <CardModal />
      </ModalContent>
    </ModalStyled>
  );
};
