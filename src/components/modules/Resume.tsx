const Resume = () => {
  const CV = require('../../assets/CV.jpg');
  return (
    <div className='resume'>
      <div className='resume-container'>
        <h2 className='resume-title'>My Resume</h2>
        <img src={CV} alt='CV'></img>
      </div>
    </div>
  );
};

export default Resume;
