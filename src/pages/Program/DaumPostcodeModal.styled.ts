// src/pages/Program/DaumPostcodeModal.styled.ts
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalSection = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 500px;
  height: 600px;
  background: #fff;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 375px) {
    width: 95%;
    height: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const PostcodeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
