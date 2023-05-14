import styled from "styled-components";

export const ModalWrapper = styled.div`
width: 125px;
/* height: 130px; */
padding: 18px;
border: 1px solid #8BAA36;
border-radius: 8px;
background-color: var(--background-color);

.btn{
  margin-top: 20px;
}
`;


export const ButtonEdit = styled.div`

>svg{
  width: 14px;
  height: 14px;
}
`;
export const EditWrapper = styled.div`
display: flex;
justify-content: space-between;
`;
export const EditText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 1.57;
color: var(--edit-modal-text-color);
`;
