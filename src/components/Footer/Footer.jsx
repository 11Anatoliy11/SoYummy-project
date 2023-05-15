import { Navigation } from './Navigation';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from './FollowUs';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'images/svg/footer-logo.svg';
import { useIsMobileScreen } from 'hooks/useIsMobileScreen';
import {
  FooterCont,
  LogoAditInf,
  FooterWrapper,
  AboutUsList,
  Rights,
  DesctopContainer,
} from './Footer.styled';

export const Footer = () => {
  const isMobile = useIsMobileScreen();

  return (
    <>
      <FooterCont>
        <DesctopContainer>
        <FooterWrapper>
          <LogoAditInf>
            <Link to="/main">
              <LogoIcon style={{ fill: 'none' }} />
              So Yummy
            </Link>
            {!isMobile && (
              <AboutUsList>
                <li>Database of recipes that can be replenished </li>
                <li>Flexible search for desired and unwanted ingredients</li>
                <li>Ability to add your own recipes with photos</li>
                <li>Convenient and easy to use</li>
              </AboutUsList>
            )}
          </LogoAditInf>
          <Navigation />
        </FooterWrapper>
        <SubscribeForm />
        </DesctopContainer>
        <FollowUs />
      </FooterCont>
      <Rights>
        <p>© 2023 All Rights Reserved.</p>
        <a
          href="https://www.techtarget.com/whatis/definition/terms-of-service-ToS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </Rights>
    </>
  );
};
