import { FaGithub } from 'react-icons/fa';
import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const projects = [
  {
    heading: 'Featured Projects',
    items: [
      {
        title: 'ParkMate',
        icon: <FaGithub color="white" />,
        color: 'rgba(74, 127, 232, 0.4)',
        link: 'https://github.com/vanshsrivastava49/ParkMate',
      },
      {
        title: 'UniHub',
        icon: <FaGithub color="white" />,
        color: 'rgba(236, 60, 230, 0.4)',
        link: 'https://github.com/vanshsrivastava49/UniHub',
      },
      {
        title: 'CampusBuzz',
        icon: <FaGithub color="white" />,
        color: 'rgba(239, 197, 59, 0.4)',
        link: 'https://campushuzz.vercel.app/',
      },
      {
        title: 'ESGGuardian',
        icon: <FaGithub color="white" />,
        color: 'rgba(102, 230, 59, 0.4)',
        link: 'https://github.com/vanshsrivastava49/ESGGuardian',
      },
    ],
  },
  {
    heading: 'Chatbot & AI Projects',
    items: [
      {
        title: 'CampusBuzz Chatbot',
        icon: <FaGithub color="white" />,
        color: 'rgba(239, 197, 59, 0.4)',
        link: 'https://campusbuzz-chatbot-bp19.onrender.com/',
      },
      {
        title: 'Kitchen Sakhi',
        icon: <FaGithub color="white" />,
        color: 'rgba(230, 61, 18, 0.4)',
        link: 'https://github.com/vanshsrivastava49/KitchenSakhi',
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div>
        <SectionTitle title="Dev" subTitle="Work" />
      </div>
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
                  link={item.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
