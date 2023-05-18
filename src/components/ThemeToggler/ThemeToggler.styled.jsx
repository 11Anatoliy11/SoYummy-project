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
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
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
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
