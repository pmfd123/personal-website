import { Link } from 'react-router-dom';
import getTextResource from '../../assets/textResources';

interface LinksListProps {
  link?: string;
  imgSrc: string;
  text: string;
}

const LinksList: React.FC<LinksListProps> = ({ link, imgSrc, text }) => {
  return (
    <a className='contact-links-list-element' href={link}>
      <img
        className='contact-links-list-element-image'
        src={imgSrc}
        alt='contact-links-list-element'
      />
      {text}
    </a>
  );
};

const Contact = () => {
  const title = require('../../assets/title.png');
  const logo = require('../../assets/logo.png');
  const personEmail = getTextResource('email');
  const imageEmail = require('../../assets/email_icon.png');
  const personPhone = getTextResource('phone');
  const imagePhone = require('../../assets/phone_icon.png');
  const linkedinUser = getTextResource('linkedin');
  const linkedinLink = getTextResource('linkedinUrl');
  const imageLinkedIn = require('../../assets/linkedin.png');
  const websiteUrl = getTextResource('websiteUrl');
  return (
    <div className='contact'>
      <div className='contact-card'>
        <div className='contact-card-inner'>
          <div className='contact-card-front'>
            <img className='contact-card-title' src={title} alt='title'></img>
          </div>
          <div className='contact-card-back'>
            <div className='contact-container'>
              <img className='contact-logo' src={logo} alt='logo-contact' />
              <Link className='contact-link' to='/'>
                {websiteUrl}
              </Link>
            </div>
            <div className='contact-links-list'>
              <LinksList imgSrc={imagePhone} text={personPhone} />
              <LinksList
                link={`mailto:${personEmail}`}
                imgSrc={imageEmail}
                text={personEmail}
              />
              <LinksList
                link={linkedinLink}
                imgSrc={imageLinkedIn}
                text={linkedinUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
