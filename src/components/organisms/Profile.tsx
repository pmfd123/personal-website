import { NavLink } from 'react-router-dom';
import getTextResource from '../../assets/textResources';

const IconCV = () => (
  <div className='letter-image'>
    <div className='animated-mail'>
      <div className='back-fold'></div>
      <div className='letter'>
        <div className='letter-border'></div>
        <div className='letter-title'></div>
        <div className='letter-context'></div>
        <div className='letter-stamp'>
          <div className='letter-stamp-inner'></div>
        </div>
      </div>
      <div className='top-fold'></div>
      <div className='body'></div>
      <div className='left-fold'></div>
    </div>
  </div>
);

const RightArrow = () => (
  <svg
    className='profile-redirect-arrow'
    x='0px'
    y='0px'
    width='50px'
    height='50px'
    viewBox='0 0 512 512'
  >
    <path d='M511.746,252.725c-0.061-0.427-0.11-0.852-0.194-1.275c-0.076-0.382-0.18-0.749-0.275-1.125  c-0.092-0.362-0.171-0.726-0.279-1.085c-0.112-0.369-0.251-0.726-0.38-1.089c-0.127-0.354-0.244-0.711-0.388-1.06  c-0.143-0.34-0.307-0.666-0.464-0.998c-0.168-0.355-0.327-0.715-0.514-1.064c-0.171-0.321-0.366-0.624-0.552-0.936  c-0.203-0.34-0.394-0.684-0.616-1.015c-0.234-0.351-0.493-0.68-0.745-1.015c-0.205-0.272-0.393-0.549-0.608-0.815  c-0.489-0.594-1.002-1.167-1.548-1.71l-116.36-116.363c-9.086-9.089-23.822-9.089-32.912,0c-9.089,9.089-9.089,23.824,0,32.912  l76.634,76.639H23.273C10.42,232.729,0,243.149,0,256.002c0,12.853,10.42,23.273,23.273,23.273h409.272l-76.636,76.634  c-9.089,9.089-9.089,23.824,0,32.913c4.544,4.544,10.501,6.817,16.457,6.817c5.956,0,11.913-2.271,16.455-6.817l116.36-116.36  c0.546-0.543,1.06-1.116,1.548-1.711c0.216-0.264,0.403-0.543,0.608-0.813c0.251-0.335,0.51-0.664,0.745-1.015  c0.223-0.33,0.414-0.675,0.616-1.015c0.186-0.312,0.382-0.614,0.552-0.936c0.186-0.351,0.346-0.709,0.514-1.066  c0.157-0.332,0.321-0.658,0.464-0.998c0.144-0.349,0.261-0.706,0.388-1.06c0.129-0.362,0.268-0.718,0.38-1.089  c0.107-0.358,0.188-0.721,0.279-1.085c0.095-0.374,0.199-0.743,0.275-1.125c0.084-0.422,0.133-0.849,0.194-1.275  c0.047-0.326,0.109-0.647,0.143-0.976c0.15-1.53,0.15-3.07,0-4.6C511.854,253.372,511.792,253.051,511.746,252.725z' />
  </svg>
);

const Profile = () => {
  const profileImage = require('../../assets/profile.png');
  const aboutMeTitle = getTextResource('aboutMeTitle');
  const aboutMeText = getTextResource('aboutMeText');
  const checkCVText = getTextResource('checkCVText');

  return (
    <div className='profile'>
      <div className='profile-image-container'>
        <div className='profile-image'>
          <img src={profileImage} alt='profile'></img>
        </div>
      </div>

      <div className='profile-about-me'>
        <h3 className='profile-about-me-title'>{aboutMeTitle}</h3>
        <p className='profile-about-me-text'>{aboutMeText}</p>
        <div className='profile-redirect-cv'>
          <h4 className='profile-redirect-cv-text'>{checkCVText}</h4>
          <RightArrow />
          <NavLink className='profile-redirect-cv-link' to='/resume'>
            <IconCV />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
