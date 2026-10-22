import { BiLogoTypescript } from 'react-icons/bi';
import {
	FaAws,
	FaDocker,
	FaGitAlt,
	FaGithub,
	FaGoogle,
	FaNodeJs,
	FaPython,
	FaReact,
} from 'react-icons/fa';

import {
	SiCplusplus,
	SiExpress,
	SiFastapi,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNumpy,
	SiOpencv,
	SiPandas,
	SiPytorch,
	SiScikitlearn,
	SiTailwindcss,
	SiTensorflow,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'AI / Machine Learning',
		items: [
			{
				title: 'PyTorch',
				icon: <SiPytorch color='rgb(238, 76, 44)' />,
				color: 'rgba(238, 76, 44, 0.55)',
			},
			{
				title: 'Transformers',
				icon: <FaPython color='rgb(255, 210, 70)' />,
				color: 'rgba(255, 210, 70, 0.45)',
			},
			{
				title: 'TensorFlow',
				icon: <SiTensorflow color='rgb(255, 111, 0)' />,
				color: 'rgba(255, 111, 0, 0.55)',
			},
			{
				title: 'OpenCV',
				icon: <SiOpencv color='rgb(90, 190, 90)' />,
				color: 'rgba(90, 190, 90, 0.5)',
			},
			{
				title: 'Scikit-learn',
				icon: <SiScikitlearn color='rgb(245, 130, 32)' />,
				color: 'rgba(245, 130, 32, 0.5)',
			},
		],
	},

	{
		heading: 'Generative AI',
		items: [
			{
				title: 'LangGraph',
				icon: <FaPython color='rgb(120, 220, 150)' />,
				color: 'rgba(120, 220, 150, 0.5)',
			},
			{
				title: 'LangChain',
				icon: <FaPython color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.35)',
			},
			{
				title: 'RAG',
				icon: <FaPython color='rgb(190, 130, 255)' />,
				color: 'rgba(190, 130, 255, 0.5)',
			},
			{
				title: 'NLP',
				icon: <FaPython color='rgb(80, 170, 255)' />,
				color: 'rgba(80, 170, 255, 0.5)',
			},
			{
				title: 'Qwen2.5',
				icon: <FaPython color='rgb(255, 170, 90)' />,
				color: 'rgba(255, 170, 90, 0.5)',
			},
		],
	},

	{
		heading: 'Backend & APIs',
		items: [
			{
				title: 'Python',
				icon: <FaPython color='rgb(55, 118, 171)' />,
				color: 'rgba(55, 118, 171, 0.55)',
			},
			{
				title: 'FastAPI',
				icon: <SiFastapi color='rgb(0, 150, 136)' />,
				color: 'rgba(0, 150, 136, 0.55)',
			},
			{
				title: 'Node.js',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgba(104, 160, 99, 0.5)',
			},
			{
				title: 'Express.js',
				icon: <SiExpress color='white' />,
				color: 'rgba(255, 255, 255, 0.35)',
			},
			{
				title: 'REST APIs',
				icon: <FaGithub color='white' />,
				color: 'rgba(255, 255, 255, 0.3)',
			},
		],
	},

	{
		heading: 'Data & Storage',
		items: [
			{
				title: 'Pandas',
				icon: <SiPandas color='rgb(130, 100, 200)' />,
				color: 'rgba(130, 100, 200, 0.55)',
			},
			{
				title: 'NumPy',
				icon: <SiNumpy color='rgb(75, 150, 200)' />,
				color: 'rgba(75, 150, 200, 0.5)',
			},
			{
				title: 'MongoDB',
				icon: <SiMongodb color='rgb(71, 162, 72)' />,
				color: 'rgba(71, 162, 72, 0.55)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.6)',
			},
		],
	},

	{
		heading: 'Cloud & DevOps',
		items: [
			{
				title: 'AWS',
				icon: <FaAws color='rgb(255, 153, 0)' />,
				color: 'rgba(255, 153, 0, 0.55)',
			},
			{
				title: 'Google Cloud',
				icon: <FaGoogle color='rgb(66, 133, 244)' />,
				color: 'rgba(66, 133, 244, 0.55)',
			},
			{
				title: 'Docker',
				icon: <FaDocker color='rgb(36, 150, 237)' />,
				color: 'rgba(36, 150, 237, 0.55)',
			},
			{
				title: 'Git',
				icon: <FaGitAlt color='rgb(240, 80, 50)' />,
				color: 'rgba(240, 80, 50, 0.55)',
			},
			{
				title: 'GitHub',
				icon: <FaGithub color='white' />,
				color: 'rgba(255, 255, 255, 0.35)',
			},
		],
	},

	{
		heading: 'Frontend',
		items: [
			{
				title: 'React',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgba(97, 219, 251, 0.55)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.55)',
			},
			{
				title: 'JavaScript',
				icon: <SiJavascript color='rgb(247, 223, 30)' />,
				color: 'rgba(247, 223, 30, 0.4)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgba(6, 182, 212, 0.6)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>

						<div className='tech-row'>
							{tech.items.map((item, itemIndex) => (
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
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};