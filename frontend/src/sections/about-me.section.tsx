import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Research Intern',
				place: 'Samsung R&D Institute India',
				timePeriod: 'Mar 2025 - Nov 2025',
				description: (
					<ul>
						<li>
							Designed and implemented a data-aware Tensor Train decomposition
							framework for LLaMA-2 7B, focusing on model compression and
							inference efficiency.
						</li>
						<li>
							Re-implemented SVD-LLM and optimized Tensor Train
							hyperparameters including rank selection, scheduler strategies,
							and Adam optimizer tuning.
						</li>
						<li>
							Achieved <strong>20% parameter compression</strong>,
							<strong> 20% memory reduction</strong>, and
							<strong> 1.2× faster inference</strong> while preserving model
							accuracy.
						</li>
					</ul>
				),
			},
			{
				title: 'Full-Stack Developer',
				place: 'GreenJobs – Solar is My Passion',
				timePeriod: 'Feb 2026 - Apr 2026',
				description: (
					<ul>
						<li>
							Built and deployed a production-grade MERN platform for the
							renewable energy sector within 12 weeks while leading a team of
							3 developers.
						</li>
						<li>
							Integrated authentication, payments, role-based access control,
							API rate limiting, and AWS infrastructure.
						</li>
						<li>
							Helped onboard <strong>60+ recruiters</strong> across
							<strong> 30+ companies</strong> within the first month.
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
				title: 'Bachelor of Technology in Computer Science and Engineering',
				place: 'SRM Institute of Science and Technology',
				timePeriod: '2023 - Present',
				description: (
					<p>
						<strong>CGPA: 9.66 / 10.0</strong> · Top 5% of Computer Science
						cohort
					</p>
				),
			},
			{
				title: 'Higher Secondary Education (12th)',
				place: 'CMS Montessori School',
				timePeriod: '2021 - 2022',
				description: (
					<p>
						<strong>95.75%</strong>
					</p>
				),
			},
			{
				title: 'Matriculation (10th)',
				place: 'Modern Academy Inter College',
				timePeriod: '2019 - 2020',
				description: (
					<p>
						<strong>90.60%</strong>
					</p>
				),
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
					<img
						src='./vansh.png'
						alt='Vansh Srivastava'
						style={{
							width: '180px',
							height: '180px',
							borderRadius: '50%',
							objectFit: 'cover',
						}}
					/>

					<p style={{ marginTop: '20px' }}>
						Hey, I'm Vansh Srivastava, an{' '}
						<strong>AI & Full Stack Developer</strong> interested in building
						intelligent, practical and user-focused applications.
					</p>

					<p>
						My work spans <strong>machine learning, generative AI and
						full-stack development</strong>. I've worked on Transformer-based
						models, LLM optimization, RAG pipelines and AI-powered
						recommendation systems, while also building and deploying
						production-ready web applications.
					</p>

					<p>
						I enjoy taking a problem from{' '}
						<strong>idea → experimentation → working prototype → deployment</strong>.
						I'm particularly interested in using AI to simplify workflows,
						automate repetitive tasks and create tools that are genuinely
						useful to people.
					</p>
				</div>

				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>

							{items.map(
								({ title, place, timePeriod, description }, idx) => (
									<div
										className='timeline-list'
										key={idx}
									>
										<div className='timeline-item'>
											<p className='designation'>{title}</p>

											<p className='place'>
												{place} | {timePeriod}
											</p>

											<div className='timeline-description'>
												{description}
											</div>
										</div>
									</div>
								)
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};