import styled from '@emotion/styled';

export const PaginatorContainer = styled.div`
  .paginator {
    box-shadow: ${props => props.theme.colors.paginationShadow};
    border-radius: 26px;
    margin-top: 40px;
    padding: 12px 28px;
    justify-content: center;
    width: max-content;
    gap: 10px;
    background-color: ${props => props.theme.colors.recipeBlockBg};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 14px 24px;
        }

    .paginator-item {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      justify-content: center;
      color: ${props => props.theme.colors.paginationText};

      align-items: center;
      &.active {
        background-color: ${props => props.theme.colors.paginationBg};
        color: ${props => props.theme.colors.paginationText};
      }
      &:hover,
      &:focus {
        background-color: ${props => props.theme.colors.paginationBg};
        color: ${props => props.theme.colors.paginationText};
        .paginator-link .button svg {
          fill: ${props => props.theme.colors.paginationText};
        }
      }
      .paginator-link {
        .button {
          display: flex;
          svg {
            fill: ${props => props.theme.colors.paginationText};
          }
        }
      }
      &.disabled {
        .paginator-link .button svg {
          fill: rgba(169, 169, 169, 0.73);
        }
      }
    }

    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      li {
        &:first-of-type {
          margin-right: 24px;
        }
        &:last-child {
          margin-left: 24px;
        }
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      li {
        &:first-of-type {
          margin-right: 40px;
        }
        &:last-child {
          margin-left: 40px;
        }
      }
        }

  }
`;
