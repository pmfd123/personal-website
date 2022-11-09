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
          require.context('../../assets/skills/frontend', false)
        );
      case 'Backend':
        return importAll(require.context('../../assets/skills/backend', false));
      case 'Other Tech':
        return importAll(require.context('../../assets/skills/other', false));
    }
  }, [title]);

  return (
    <div className='skills-card'>
      <h3 className='skills-card-title'>{title}</h3>
      <div className='skills-card-container'>
        {skills.map((imgSrc, index) => {
          return <img className='skills-image' src={imgSrc} key={index} />;
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
