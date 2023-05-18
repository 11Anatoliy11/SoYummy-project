// import styled from '@emotion/styled';

// export const Switcher = styled.div`
//   align-self: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// `;

// export const Check = styled.input`
//   opacity: 0;
//   position: absolute;
//   left: 0;
//   top: 0;

//   &:checked + label > span {
//     transform: translateX(30px);
//   }
// `;

// export const Label = styled.label`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0px 5px;
//   gap: 14px;
//   width: 48px;
//   height: 24px;
//   background-color: ${p =>
//     p.mode === 'dark' ? p.theme.colors.mainAccent : p.theme.colors.switchBg};
//   box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
//   border-radius: ${props => props.theme.radii.switch};
//   cursor: pointer;
// `;

// export const Ball = styled.span`
//   position: absolute;
//   width: 16px;
//   height: 16px;
//   background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
//   border-radius: ${props => props.theme.radii.circle};
//   filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.1));
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
// `;

const { default: styled } = require('@emotion/styled');

export const ThemeWrapper = styled.div`
  position: fixed;
  left: 16px;
  bottom: 18px;

  @media screen and (min-width: 375px) {
    left: calc((100% - 343px) / 2);
  }

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: calc((100% - 704px) / 2);
  }

  @media screen and (min-width: 1280px) {
    position: static;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 61px;
    height: 27px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    background-color: #efefef;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  }

  input:checked + .slider {
    background-color: #8baa36;
    box-shadow: unset;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(34px);
    -ms-transform: translateX(34px);
    transform: translateX(34px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 50px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
