import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  position:relative;
  max-width: 767.9px;
  padding: 12px 20px;
  margin: 0 auto;
  display: flex;
  background-color: gray;;

  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 10px 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1980px;
    padding: 10px 16px;
  }
`;
// export const Rectangle = styled.svg`
//   width:20px;
//   @media (min-width: 768px) {
//     width:40px;
//   }
//   @media (min-width: 1280px) {
//     width:50px;
//   }
// `;

export const Title = styled.h1`
  padding-top: 50px;
  padding-left: 16px;
  padding-bottom: ${props => props.paddingBottom};
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;



  display: flex;

  background-color: #ffffff;

  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 10px 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1980px;
    padding: 10px 16px;
  }
`;

