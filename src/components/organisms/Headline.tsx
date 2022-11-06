const Headline = () => {
  const title = require('../../assets/title.png');

  return (
    <div className='headline'>
      <img className='headline-title' src={title} alt='title'></img>
    </div>
  );
};
export default Headline;
