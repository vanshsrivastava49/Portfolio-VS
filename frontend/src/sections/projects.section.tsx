import { FaGithub } from 'react-icons/fa';
import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const projects = [
  {
    heading: 'Featured Projects',
    items: [
      {
        title: 'Portfolio Website',
        icon: <FaGithub color='white' />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
      {
        title: 'E-commerce App',
        icon: <FaGithub color='white' />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
      {
        title: 'Chat Application',
        icon: <FaGithub color='white' />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
    ],
  },
  {
    heading: 'Mini Projects',
    items: [
      {
        title: 'Weather App',
        icon: <FaGithub color='white' />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
      {
        title: 'Todo App',
        icon: <FaGithub color='white' />,
        color: 'rgba(255, 255, 255, 0.4)',
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
  <div className="projects-grid">
    {projects.map((projectGroup, index) => (
      <div key={index}>
        <p>{projectGroup.heading}</p>
        <div className="projects-row">
          {projectGroup.items.map((item, itemIndex) => (
            <GlowBox
              key={itemIndex}
              icon={item.icon}
              color={item.color}
              title={item.title}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
  <div>
    <SectionTitle title="My" subTitle="Work" />
  </div>
</section>
  );
};
