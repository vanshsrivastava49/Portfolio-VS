import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Research Intern',
				place: 'Samsung R&D Institute India',
				timePeriod: '2025 - Present',
				description: (
					<ul>
						<li>
							Designed and implemented multi-objective optimization algorithms for tuning hyperparameters (Input/Output
							Configuration, SVD Decomposition, Bond Dimension) of Tensorized LLMs.
						</li>
						<li>
							Currently working on compressing the model using LoRETTA approach to improve efficiency and performance.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)',
				place: 'SRM Institute of Science and Technology',
				timePeriod: '2023 - Present',
				description: '',
			},
			{
				title: 'Higher Secondary Education (12th)',
				place: 'CMS Montessori School',
				timePeriod: '2021 - 2022',
				description: '',
			},
			{
				title: 'Matriculation (10th)',
				place: 'Modern Academy Inter College',
				timePeriod: '2019 - 2020',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Vansh Srivastava, a Full Stack Developer.
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Node</strong> for more than <strong>two years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
