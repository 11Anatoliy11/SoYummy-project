import styled from '@emotion/styled';

export const SearchTypeSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 24px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 28px;
    gap: 18px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 43px;
  }

  .SearchTypeSelectorLabel {
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: ${props => props.theme.colors.sectionHeader};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 14px;
      line-height: 1.29;
  }
  }

  .CustomSelect {
    position: relative;
    display: inline-block;
    background: ${props => props.theme.colors.searchTypeBg};
    border: 1px solid ${props => props.theme.colors.searchTypeBorder};
    border-radius: 6px;
    padding: 8px 14px;
    width: 146px;
    height: 34px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 10px 14px;
      width: 175px;
      height: 41px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        padding: 14px;
      width: 198px;
      height: 49px;
  }
  }

  .CustomSelectValue {
    display: flex;
    justify-content: space-between;
    position: relative;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.searchTypeTx};
    opacity: 0.5;
    cursor: pointer;
    align-items: center;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 14px;
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
    background: ${props => props.theme.colors.searchTypeOp};
    border-radius: 6px;
    z-index: 1;
  }

  .CustomSelectOption {
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.searchTypeTx};
    opacity: 0.5;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 14px;
    line-height: 21px;
  }

  }

  .SearchTypeSelectorContainer {
    margin-bottom: 16px;
  }


`;
