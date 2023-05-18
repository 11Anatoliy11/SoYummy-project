const { default: styled } = require('@emotion/styled');

export const FooterCont = styled.footer`
  background-color: var(--search-black-color);
  padding: 28px 0 18px 0;
  color: var(--background-color);
  text-align: center;
  box-shadow: 0 0 0 100vmax var(--search-black-color);
  clip-path: inset(0 -100vmax);
  margin-top: 100px;

  @media screen and (min-width: 768px) {
    padding: 50px 0 24px 0;
    margin-top: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding: 64px 0 50px 0;
  }
`;

export const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 72px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    gap: 159px;
    margin-bottom: 41px;
  }
`;

export const LogoAditInf = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: calc(18 / 18);
    letter-spacing: 0.015em;

    @media screen and (min-width: 768px) {
      justify-content: start;
      margin-bottom: 24px;
      gap: 12px;
      font-size: 28px;
      line-height: calc(28 / 28);

      svg {
        width: 44px;
        height: 44px;
      }
    }
  }
`;

export const AboutUsList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 8px 0px;

    & li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      line-height: calc(18 / 14);
      letter-spacing: -0.02em;

      &::before {
        content: '•';
      }
    }
  }

  @media screen and (min-width: 1280px) {
    width: 418px;
    gap: 12px 0px;
    & li {
      font-size: 18px;
      line-height: calc(24 / 18);
    }
  }
`;

export const LinksContainer = styled.nav`
  @media screen and (min-width: 768px) {
    margin-right: 62px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 0;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 16px;
  }

  .email-input {
    font-weight: 400;
    font-size: 10px;
    line-height: calc(15 / 10);
    color: var(--background-color);
    letter-spacing: -0.02em;
    width: 204px;

    @media screen and (min-width: 768px) {
      width: 259px;
      height: 50px;
    }

    @media screen and (min-width: 1280px) {
      width: 338px;
      height: 60px;
    }

    & .MuiOutlinedInput-root {
      border-radius: 6px;
      border: 2px solid var(--tuna-color);
    }

    &:focus {
      border: 2px solid var(--background-color);
    }

    .css-1wc848c-MuiFormHelperText-root.Mui-error {
      position: absolute;
      top: -19px;
      font-size: 10px;

      @media screen and (min-width: 768px) {
        top: 55px;
      }

      @media screen and (min-width: 1280px) {
        top: -21px;
        font-size: 12px;
      }
    }

    .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border: 1px solid var(--background-color);
      opacity: 0.7;
    }

    & .Mui-error {
      & .css-1c8d5n4-MuiInputAdornment-root {
        svg {
          stroke: var(--persian-red-color);
        }
      }
    }

    input {
      font-weight: 400;
      font-size: 10px;
      line-height: calc(15 / 10);
      color: var(--background-color);
      letter-spacing: -0.02em;
      border-radius: unset;

      &:autofill,
      &:autofill:hover,
      &:autofill:focus,
      &:autofill:active {
        transition: background-color 9999s, color 9999s;
      }

      @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: calc(21 / 14);
      }

      @media screen and (min-width: 1280px) {
        font-size: 18px;
        line-height: calc(27 / 18);
      }
    }

    svg {
      stroke: var(--background-color);

      @media screen and (min-width: 1280px) {
        width: 20px;
        height: 16px;
      }
    }

    .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
      @media screen and (min-width: 768px) {
        padding: 15px 40px 15px 15px;
      }

      @media screen and (min-width: 1280px) {
        padding: 18px 71px 17px 16px;
      }
    }
  }

  .submit-button {
    margin-bottom: 44px;
    line-height: calc(18 / 16);

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      width: 187px;
      height: 50px;
    }

    @media screen and (min-width: 1280px) {
      width: 339px;
      height: 60px;
    }

    &.disabled-btn {
      pointer-events: none;
      opacity: 0.7;
    }
  }
`;

// export const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     '& .MuiOutlinedInput-input::placeholder': {
//       fontFamily: 'Poppins',
//       fontStyle: 'normal',
//       fontWeight: '400',
//       fontSize: '10px',
//       lineHeight: 'calc(15 / 10)',
//       color: '#FAFAFA',
//       letterSpacing: '-0.02em',
//     },
//     '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
//       '-webkit-transition-delay': '9999s',
//       transitionDelay: '9999s',
//       '-webkit-transition-property': 'background-color, color',
//       transitionProperty: 'background-color, color',
//     },
//   },

//   '& .MuiOutlinedInput-input': {
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '10px',
//     lineHeight: 'calc(15 / 10)',
//     color: '#FAFAFA',
//     letterSpacing: '-0.02em',
//   },

//   borderRadius: '6px',
//   backgroundColor: 'transparent', // change border radius
//   '& fieldset': {
//     borderColor: '#FAFAFA',
//     opacity: "0.16",
//      // change border color
//   },
//   '&:hover fieldset': {
//     borderColor: '#FAFAFA', // change border color on hover
//   },
//   '&.Mui-focused fieldset': {
//     borderColor: '#FAFAFA', // change border color on focus
//   },
//   '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
//     '-webkit-transition-delay': '9999s',
//     transitionDelay: '9999s',
//     '-webkit-transition-property': 'background-color, color',
//     transitionProperty: 'background-color, color',
//   },
// }));

export const FormCont = styled.div`
  @media screen and (min-width: 1280px) {
    width: 339px;
  }
`;

export const SubsCont = styled.div`
  @media screen and (min-width: 1280px) {
    text-align: left;

    h3 {
      font-size: 18px;
      line-height: calc(27 / 18);
      margin-bottom: 14px;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: calc(18 / 14);
      margin-bottom: 28px;
      letter-spacing: -0.02em;
    }
  }
`;

export const Socials = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const SocialLinks = styled.a`
  .social-icon {
    fill: var(--green-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Rights = styled.div`
  padding: 28px 0;
  display: flex;
  justify-content: center;
  gap: 14px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
    gap: 28px;
  }

  @media screen and (min-width: 1280px) {
    padding: 50px 0;
    gap: 40px;
  }

  p {
    font-weight: 500;
    font-size: 10px;
    line-height: calc(10 / 10);
    opacity: 0.5;
    letter-spacing: -0.01em;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  a {
    font-size: 10px;
    line-height: calc(10 / 10);
    opacity: 0.5;
    letter-spacing: -0.01em;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const DesctopContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;
