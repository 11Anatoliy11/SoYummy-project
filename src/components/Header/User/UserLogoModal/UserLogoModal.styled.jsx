import styled from "styled-components";

export const ModalWrapper = styled.div`
width: 161px;
padding: 18px;
border: 1px solid var(--green-color);
border-radius: 8px;
background-color: var(--background-color);

  @media (min-width: 768px) {
    width: 177px;
    border: none;
  }

.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.5;
  @media (min-width: 768px) {
    width: 141px;
    height: 43px;
    margin-top: 32px;
  }
  >svg{
    width: 18px;
    height: 18px;
  }
}
`;

export const EditWrapper = styled.button`
display: flex;
gap: 37px;
align-items: center;
cursor: pointer;
>svg{
  width: 14px;
  height: 14px;
}
`;
export const EditText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 1.57;
color: var(--edit-modal-text-color);
`;
