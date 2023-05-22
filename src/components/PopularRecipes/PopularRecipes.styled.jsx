import styled from "@emotion/styled";


export const Title = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    margin-bottom:36px;
    color:${props => props.theme.colors.secondaryDark};
`  ;

export const PopTitle = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: calc(20/16);
    letter-spacing: -0.24px;
    margin-bottom:4px;
    color:${props => props.theme.colors.secondaryDark};
`  ;

export const PopDescription = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: calc(16/12);
    letter-spacing: -0.24px;
    color:${props => props.theme.colors.mainGrey};
`  ;

export const Socials = styled.ul`
  display: flex;
  justify-content: flex-start;
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
    width:30px;
    height:30px;
    justify-content: center;
    align-items: center;
  }
`;

export const FollowUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 102px;
`;

export const CommonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export const ImagePop = styled.img`
    width:97px;
    height:85px;
    border-radius: 8px;
`;

export const ImageWrapperPop = styled.div`
    display: flex;
    gap:11px;
    margin-bottom: 13px;
`;

export const PopularWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:11px;
`;
