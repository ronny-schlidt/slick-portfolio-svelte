import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'bowridge-software-engineer',
		company: 'bowridge Software GmbH',
		description:
			'Software Engineer with a focus on cybersecurity, network security, and test development.',
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Munich',
		period: 'Since May 2025',
		skills: getSkills('cybersecurity', 'network-security', 'testing', 'development'),
		name: 'Software Engineer',
		color: 'purple',
		links: [],
		logo: Assets.bowbridge,
		shortDescription: 'Software Engineer specializing in cybersecurity, network security, and testing.'
	},
	{
		slug: 'proc-digitalization',
		company: 'Weidmüller',
		description:
			'Digitalized procurement processes. Created Power-Apps for internal use. Used VBA scripts to generate PDF files from Excel data.',
		contract: ContractType.PartTime,
		type: 'proc-digi',
		location: 'Detmold',
		period: 'August 2022 - February 2024',
		skills: getSkills(
			'powerapps',
			'vba',
			'office365',
			'sharepoint',
			'powerautomate',
			'virtualagents'
		),
		name: 'Procurement Excellence Digitalization',
		color: 'red',
		links: [],
		logo: Assets.Weidmueller,
		shortDescription: 'Digitalize procurement processes. Create Power-Apps for internal use.'
	},
	{
		slug: 'mixing-freelance',
		company: 'Immanuel Detmold Church',
		description: `As a dedicated volunteer at <a href="https://www.immanuel-detmold.de/">Immanuel Detmold Church</a>, I have taken on the responsibility of leading a team of audio engineers to ensure the seamless execution of events.<br><br>
    **Key Responsibilities:**<br><br>
    - Organizing and coordinating personnel on event days.<br><br>
    - Building the necessary infrastructure.<br><br>
    - Maintaining the audio system to ensure optimal performance.<br><br>
    - Conducting training sessions for new volunteers, equipping them with the skills and knowledge required to support our audio operations.<br><br>
    My efforts contribute to creating a cohesive and efficient team capable of delivering high-quality audio experiences for all attendees.`,
		contract: ContractType.PartTime,
		type: '',
		location: 'Detmold',
		period: 'January 2021 - May 2025',
		skills: getSkills('mixing', 'producing'),
		name: 'Leading Audio Mixing Team',
		color: 'green',
		links: [],
		logo: Assets.Wave,
		shortDescription: 'Leading a team of audio engineers, building & maintaining infrastructure.'
	},
	{
		slug: 'audio-mixing',
		company: '',
		description: 'Mixing and mastering music for customers. Improving, fixing and repairing audio.',
		contract: ContractType.Freelance,
		type: '',
		location: 'Home',
		period: 'Juli 2019 - Juni 2021',
		skills: getSkills('mixing', 'producing'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Fiver,
		shortDescription:
			'Mixing and mastering music for customers. Improving, fixing and repairing audio.'
	},
	{
		slug: 'package-delivery',
		company: 'DHL',
		description: '',
		contract: ContractType.PartTime,
		type: 'Package',
		location: 'Horn-Bad Meinberg',
		period: '2017 - 2021',
		skills: [],
		name: 'Package Delivery',
		color: 'blue',
		links: [],
		logo: Assets.DHL,
		shortDescription: ''
	}
];

export const title = 'Experience';
