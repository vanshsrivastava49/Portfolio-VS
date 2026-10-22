import { MouseEvent } from 'react';
import { FaExternalLinkAlt, FaGithub, FaGlobe } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';

type Project = {
  title: string;
  description: string; // TODO: replace with your own one-liners
  tags: string[]; // TODO: replace with the real stack
  accent: string; // "r, g, b" so CSS can use it at any opacity
  link: string;
};

type ProjectGroup = {
  heading: string;
  items: Project[];
};

const projects: ProjectGroup[] = [
  {
    heading: 'AI & Machine Learning',
    items: [
      {
        title: 'BrandGenius',
        description:
          'Generates brand names, taglines and visual direction from a short business brief.',
        tags: ['Python', 'LLMs',' RAG'],
        accent: '239, 197, 59',
        link: 'https://github.com/vanshsrivastava49/BrandGenius',
      },
      {
        title: 'Deepfake Detection',
        description:
          'Deep learning model that flags manipulated faces in images and video.',
        tags: ['PyTorch', 'CNN', 'OpenCV'],
        accent: '230, 61, 18',
        link: 'https://github.com/vanshsrivastava49/Deepfake-Detection',
      },
      {
        title: 'ESGGuardian',
        description:
          'Scores company reports on environmental, social and governance risk.',
        tags: ['Python', 'NLP', 'Data analysis'],
        accent: '102, 230, 59',
        link: 'https://github.com/vanshsrivastava49/ESGGuardian',
      },
      {
        title: 'CampusBuzz Chatbot',
        description:
          'Answers student questions about campus events, clubs and schedules.',
        tags: ['RAG', 'Node.js', 'Render'],
        accent: '74, 127, 232',
        link: 'https://campusbuzz-chatbot-bp19.onrender.com/',
      },
    ],
  },
  {
    heading: 'Full Stack & Product',
    items: [
      {
        title: 'GreenJobs',
        description:
          'Job board focused on climate and sustainability roles.',
        tags: ['React', 'Node.js', 'MongoDB'],
        accent: '74, 127, 232',
        link: 'https://jobs.solarismypassion.com/',
      },
      {
        title: 'CampusBuzz',
        description:
          'One place for campus events, announcements and club activity.',
        tags: ['Next.js', 'Vercel', 'REST API'],
        accent: '239, 197, 59',
        link: 'https://campusbuzz.vercel.app/',
      },
      {
        title: 'UniHub',
        description:
          'Student platform for notes, resources and collaboration.',
        tags: ['React', 'Express', 'MongoDB'],
        accent: '236, 60, 230',
        link: 'https://github.com/vanshsrivastava49/UniHub',
      },
      {
        title: 'ParkLink',
        description:
          'Find, reserve and manage parking spots in real time.',
        tags: ['React', 'Node.js', 'Maps API'],
        accent: '102, 230, 59',
        link: 'https://github.com/vanshsrivastava49/ParkLink',
      },
    ],
  },
];

// Moves the spotlight to follow the cursor inside a card.
const trackPointer = (e: MouseEvent<HTMLAnchorElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const ProjectCard = ({ title, description, tags, accent, link }: Project) => {
  const isRepo = link.includes('github.com');

  return (
    <a
      className="project-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={trackPointer}
      style={{ '--accent': accent } as React.CSSProperties}
      aria-label={`${title} – ${isRepo ? 'view source on GitHub' : 'open live site'}`}
    >
      <div className="project-card__top">
        <span className="project-card__icon">
          {isRepo ? <FaGithub /> : <FaGlobe />}
        </span>
        <span className="project-card__kind">
          {isRepo ? 'Source' : 'Live'}
          <FaExternalLinkAlt aria-hidden="true" />
        </span>
      </div>

      <h4 className="project-card__title">{title}</h4>
      <p className="project-card__desc">{description}</p>

      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </a>
  );
};

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div>
        <SectionTitle title="My" subTitle="Work" />
      </div>

      <div className="projects-grid">
        {projects.map((group) => (
          <div key={group.heading} className="projects-group">
            <h3 className="projects-group__title">{group.heading}</h3>

            <div className="projects-row">
              {group.items.map((item) => (
                <ProjectCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};