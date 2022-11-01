import { useMemo } from 'react';

interface SkillsCardProps {
  title: 'Frontend' | 'Backend' | 'Other Tech';
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title }) => {
  const importAll = (r: any) => {
    return r.keys().map(r);
  };
  const skills: string[] = useMemo(() => {
    switch (title) {
      case 'Frontend':
        return importAll(
          require.context('../../assets/skills/frontend', false, /(\w)*\.(png)/)
        );
      case 'Backend':
        return importAll(
          require.context('../../assets/skills/backend', false, /(\w)*\.(png)/)
        );
      case 'Other Tech':
        return importAll(
          require.context('../../assets/skills/other', false, /(\w)*\.(png)/)
        );
    }
  }, [title]);
  console.log(skills);
  return (
    <div className='skills-card'>
      <h3>{title}</h3>
      <div className='skills-card-container'>
        {skills.map((imgSrc, index) => {
          const alt = imgSrc.split('/').at(-1)?.split('.')[0];
          return (
            <img className='skills-image' src={imgSrc} key={index} alt={alt} />
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className='skills'>
      <SkillsCard title='Frontend' />
      <SkillsCard title='Backend' />
      <SkillsCard title='Other Tech' />
    </div>
  );
};

export default Skills;
