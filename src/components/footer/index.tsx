import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Footer: FC = () => {
  return (
    <>
      <footer className='footer'>
        <p className='footer__title'>Yogesh Kumar</p>
        <div className='footer__social'>
          <a
            href='https://twitter.com/yogeshmbs199'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faTwitter} />
          </a>
          <a
            href='https://www.instagram.com/stylish_yogesh1/'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faInstagram} />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=919592329040'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faWhatsapp} />
          </a>
          <a
            href='mailto: malepatiyogeshkumar@gmail.com'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faPaperPlane} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
