import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: ${({showModal} )=> showModal ? "visible" : "hidden"};
  z-index: ${({showModal}) => showModal ? "10" : "-1"} ;
`;

export const ModalContainer = styled.div`
     background: white;
  border-radius: 15px;
  width: 90vw;
  height: 30vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
` 