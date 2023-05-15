import styled from '@emotion/styled';

export const SearchTypeSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 24px;
  @media (min-width: 768px) {
    padding-top: 28px;
    gap: 18px;
  }
  @media (min-width: 1280px) {
    padding-top: 43px;
  }

  .CustomSelect {
    position: relative;
    display: inline-block;
    background: #d9d9d9;
    border-radius: 6px;
    padding: 8px 14px;
    width: 118px;
    @media (min-width: 768px) {
      padding: 10px 14px;
      width: 155px;
    }
    @media (min-width: 1280px) {
        padding: 14px;
      width: 170px;
  }
  }

  .CustomSelectValue {
    display: flex;
    justify-content: space-between;
    position: relative;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #000000;
    opacity: 0.5;
    cursor: pointer;
    align-items: center;
    @media (min-width: 768px) {
        font-size: 14px;
    line-height: 21px;
  }
  }

  .CustomSelectArrow {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  .CustomSelectValue.isOpen .CustomSelectArrow {
    transform: rotate(180deg);
  }

  .CustomSelectOptions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background: #d9d9d9;
    border-radius: 6px;
    z-index: 1;
  }

  .CustomSelectOption {
    padding: 8px 16px;
    cursor: pointer;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #000000;
    opacity: 0.5;
    @media (min-width: 768px) {
        font-size: 14px;
    line-height: 21px;
  }

  }

  .SearchTypeSelectorContainer {
    margin-bottom: 16px;
  }

  .SearchTypeSelectorLabel {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;
    color: #001833;
    @media (min-width: 768px) {
        font-size: 14px;
    line-height: 18px;
  }

  }
`;
