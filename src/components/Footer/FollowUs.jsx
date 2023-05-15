import { ReactComponent as FacebookIcon } from 'images/svg/facebook.svg';
import { ReactComponent as YoutubeIcon } from 'images/svg/youtube.svg';
import { ReactComponent as TwitterIcon } from 'images/svg/twitter.svg';
import { ReactComponent as InstagramIcon } from 'images/svg/instagram.svg';
import { Socials, SocialLinks } from './Footer.styled';

export const FollowUs = () => {
  return (
    <Socials>
      <li>
        <SocialLinks
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon  className='social-icon'/>
        </SocialLinks>
      </li>
      <li>
        <SocialLinks
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon className='social-icon'/>
        </SocialLinks>
      </li>
      <li>
        <SocialLinks
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <TwitterIcon className='social-icon'/>
        </SocialLinks>
      </li>
      <li>
        <SocialLinks
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className='social-icon'/>
        </SocialLinks>
      </li>
    </Socials>
  );
};
