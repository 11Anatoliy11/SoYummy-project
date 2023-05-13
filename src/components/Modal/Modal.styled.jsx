import styled from "styled-components";

export const Overlay = styled.div`
z-index: 15;
position: fixed;
left: 0;
top: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalWindow = styled.div`
  background-color: var(--background-color);
  width: 161px;
 height: 130px;
 padding: 18px;
`;
