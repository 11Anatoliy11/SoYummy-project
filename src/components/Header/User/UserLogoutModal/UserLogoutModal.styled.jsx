import styled from 'styled-components';

// export const Wrapper = styled.div`
//   padding: 44px 24px;
// `;
export const Text = styled.p`
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media (min-width: 768px) {
      gap: 16px;
  }
  .logoutBtn {
    font-size: 14px;
    line-height: 1.29;
    @media (min-width: 768px) {
      width: 192px;
      font-size: 16px;
    line-height: 1.12;
  }


  &:hover {
    background-color: var(--search-black-color);
  }
}
  .cancelBtn {
    font-size: 14px;
    line-height: 1.29;
    @media (min-width: 768px) {
      width: 192px;
      font-size: 16px;
    line-height: 1.12;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid var(--edit-modal-text-color);
  }
  }
`;
