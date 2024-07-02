import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'proc-digitalization',
		company: 'Weidmüller',
		description:
			'Digitalize procurement processes. Create Power-Apps for internal use. VBA scripts -> use Excel Data to generate PDF files.',
		contract: ContractType.PartTime,
		type: 'proc-digi',
		location: 'Detmold',
		period: 'August 2022 - February 2024',
		skills: getSkills('powerapps', 'vba', 'office365', 'sharepoint', 'powerautomate', "virtualagents"),
		name: 'Procurement Excellence Digitalization',
		color: 'red',
		links: [],
		logo: Assets.Weidmueller,
		shortDescription: 'Digitalize procurement processes. Create Power-Apps for internal use.'
	},
	{
		slug: 'mixing-freelance',
		company: 'Immanuel Detmold Church',
		description:
			'As a dedicated volunteer at <a href="https://www.immanuel-detmold.de/">Immanuel Detmold Church</a>, I have taken on the responsibility of leading a team of audio engineers to ensure the seamless execution of events.<br> My role involves organizing and coordinating personnel on event days, building the necessary infrastructure, and maintaining the audio system to ensure optimal performance.<br><br> In addition to these tasks, I conduct training sessions for new volunteers, equipping them with the skills and knowledge required to support our audio operations.<br> My efforts contribute to creating a cohesive and efficient team capable of delivering high-quality audio experiences for all attendees.',
		contract: ContractType.PartTime,
		type: '',
		location: 'Detmold',
		period: 'Since 2021',
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
		period: 'Juli 2019 - Mai 2021',
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
