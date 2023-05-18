import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  position: relative;
  max-width: 767.9px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 1280px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 1980px;
  }
  .firstRectangleIcon {
    position: absolute;
    top: 12px;
    left: 104px;
    width: 12px;
    height: 12px;
    rect{
      width: 8px;
      height: 8px;
    }
    fill: ${props => props.theme.colors.mainAccent};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      top: 21px;
      left: 187px;
      width: 22px;
      height: 22px;
      rect{
      width: 14px;
      height: 14px;
    }
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      top: 56px;
      left: 193px;
    }
  }
  .secondRectangleIcon {
    position: absolute;
    top: 45px;
    right: 0px;
    width: 12px;
    height: 12px;
    rect{
      width: 8px;
      height: 8px;
    }
    fill: ${props => props.theme.colors.mainAccent};
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      top: 34px;
      left: 694px;
      width: 22px;
      height: 22px;
      rect{
      width: 14px;
      height: 14px;
    }
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      top: 69px;
      left: 1150px;
    }
  }

  .thirdRectangleIcon {
    position: absolute;  
    top: 78px;
    right: 94px;
    width: 12px;
    height: 12px;
      fill: ${props => props.theme.colors.mainHeaderText};    
    rect{
      width: 8px;
      height: 8px;
    }

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      position: absolute;
      top: 91px;
      left: 420px;
      width: 22px;
      height: 22px;
      rect{
      width: 14px;
      height: 14px;
    }
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      top: 144px;
      left: 734px;
    }
  }
`;

export const Title = styled.h1`
  padding-top: 50px;
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.sectionHeader};
  

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 72px;
    padding-bottom: 3px;
    font-size: 32px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 100px;
    padding-bottom: 15px;
    font-size: 44px;
  }
`;