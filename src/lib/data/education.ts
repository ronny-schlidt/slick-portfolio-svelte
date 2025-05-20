import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Foreign Semester - School of Economics and Management',
		description: '',
		location: 'China, Shanghai',
		logo: Assets.Learn,
		name: '',
		organization: 'Tongji University',
		period: 'Summer 2024',
		shortDescription: '',
		slug: 'foreign-semester',
		subjects: ['Economics', 'Management', 'Leadership', 'Chinese']
	},
	{
		degree: 'Master degree of Business Informatics',
		description: '',
		location: 'Germany',
		logo: Assets.Learn,
		name: '',
		organization: 'University of Paderborn',
		period: '2022 - 2025',
		shortDescription: '',
		slug: 'master',
		subjects: [
			'Data-Driven Engineering',
			'Business Process Management',
			'Project Management',
			'Innovation Management'
		]
	},
	{
		degree: 'Bachelor degree of Business Informatics',
		description: '',
		location: 'Germany',
		logo: Assets.Learn,
		name: '',
		organization: 'University of Paderborn',
		period: '2017-2021',
		shortDescription: '',
		slug: 'bachelor',
		subjects: [
			'C',
			'Python',
			'C++',
			'Java',
			'R',
			'Algorithms and Data structures',
			'Databases',
			'IT Security',
			'Management',
			'Economics'
		]
	},
	{
		degree: 'Highschool A-levels',
		description: '',
		location: 'Germany Horn-Bad Meinberg',
		logo: Assets.Learn,
		name: '',
		organization: '',
		period: '2009-2017',
		shortDescription: '',
		slug: 'highschool',
		subjects: []
	}
];

export const title = 'Education';
