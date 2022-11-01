import getTextResource from '../../assets/textResources';

const Profile = () => {
  const profileImage = require('../../assets/profile.png');
  const aboutMeTitle = getTextResource('aboutMeTitle');
  const aboutMeText = getTextResource('aboutMeText');

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
      </div>
    </div>
  );
};

export default Profile;
