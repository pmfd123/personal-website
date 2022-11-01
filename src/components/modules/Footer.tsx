import getTextResource from '../../assets/textResources';

const Footer = () => {
  const footerText = getTextResource('footerText');
  return <div className='footer'>{footerText}</div>;
};

export default Footer;
