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
		skills: getSkills('powerapps', 'vba', 'office365', 'sharepoint'),
		name: 'Procurement Excellence Digitalization',
		color: 'red',
		links: [],
		logo: Assets.Weidmueller,
		shortDescription: 'Digitalize procurement processes. Create Power-Apps for internal use.'
	},
	{
		slug: 'mixing-freelance',
		company: 'Self-employed',
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
