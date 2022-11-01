import getTextResource from '../../assets/textResources';

const Headline = () => {
  const personName = getTextResource('name');
  const job = getTextResource('job');

  return (
    <div className='headline'>
      <h1 className='title'> {personName}</h1>
      <h4 className='subtitle'>{job}</h4>
    </div>
  );
};
export default Headline;
