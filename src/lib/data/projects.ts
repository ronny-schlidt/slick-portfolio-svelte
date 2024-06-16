import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'cafe-app',
		color: '#ff3e00',
		description:
			'The Restaurant App is a volunteer project designed to efficiently manage and operate the cafe at my hometown church. It offers functionalities to manage products, take orders, and oversee open orders. Orders can be updated to various statuses, and those ready for pickup are displayed on a separate screen, similar to the system used by popular fast food restaurants. Additionally, the app provides statistical insights and user management capabilities for your team.',
		shortDescription:
			'App, to take orders, manage orders, manage products, user management, etc...',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.Cafe,
		name: 'Restaurant App',
		period: 'Since 2023',
		status: 'In Progress',
		skills: getSkills('reactjs', 'ts', 'tailwind', 'figma'),
		type: 'Web App',
		screenshots: [
			{
				label: 'New order',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihaL-rF-M4VfDe7o3X9PrYsE2gX8FCAu2rr9pmixBsCdMNoOyL2WaoAMT_OoUxO-RqnikLGJQiqeJXIuhC1uwfo7BrtQOiFKRHM=s1600-rw-v1'
			},
			{
				label: 'Open orders',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZhKKOXsvLmcObiNeyAbEqYCRNlhn3n3_QQyvxk-JQk0LGIvnj2VgkcfLsT0-zjIQzzeZVZ3CqEfKN9aBRnWdChP--Q-mzyoto=s1600-rw-v1'
			},
			{
				label: 'Ready for pick-up',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYyRh4NN4jC2fczsaTXgxAdGnSiCV3zCo5rx7LnTHqVOCeIoVgsEX1_kZYIbJSC4v0a78ZGXXIzH8koH89-fOS14OBn7fg24fs=s1600-rw-v1'
			},
			{
				label: 'Statistics',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbheIp3cJAUi9sgpTtWqAXsmr1QoV9CRaCokbPDo_HZQincoHgY5ohrXSXu964NOOTvzlqDNslK4o0pPPTEOWZPqTUNE3h8pWk=s1600-rw-v1'
			},
			{
				label: 'Settings & user management',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihZIUo18l8IoA9P7KUKabiqYkN5BP7adcS5olCyj2gcklBGWgTre42eu2pWKilDhEYwJJCx2xXkqx3V7NAzWZcc4sLgRXYmzrWg=s1600-rw-v1'
			},
			{
				label: 'Dark & Light mode',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbZ1zKvMDgMTaj3pdvBqJTyBZBohlSslgMKSRtEDjRUo807ZFsCDcLIownS1fcPPWLfP8zguGGtQ_IKDUzurckhLGqOVchBPQ=s1600-rw-v1'
			}
		]
	},
	{
		slug: 'telegram-bot',
		color: '#491fd1',
		description:
			'The Telegram bot is my volunteer project designed to help musicians organize and create song sets automatically, and manage keys for musicians and singers.<br><br>Each Sunday (or other designated days), we assign specific songs and lead singers. The bot uses an API to fetch the songs for each day. When creating a set, it retrieves all the song keys from the past and transposes the songs into these keys. A set within a song app is created for every musician, eliminating the need to send songs to each person individually.<br><br>The bot also generates PDF files for singers/musicians and files for the media team to display the lyrics. Additionally, it creates folders for each song, downloads the song audio from YouTube, and transposes the audio into the key needed for the next event. The singers or instrumentalists can use these files to prepare for the upcoming event without needing to search for the material themselves (chords and correct audio).<br><br>Furthermore, the bot allows different keys to be saved and shows statistics, such as how often each singer performs and which songs we have sung frequently throughout the year.<br><br>I have set up a Linux server that continuously monitors changes in our church organization software and waits for requests in Telegram.',
		shortDescription: 'Used to request data via Apis, manipulate data on servers.',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.Bot,
		name: 'Telegram Bot',
		period: 'Since 2021',
		status: 'In Progress',
		skills: getSkills('linux', 'python', 'office365', 'git'),
		type: 'Organization Software',
		screenshots: [
			{
				label: 'Trigger bot with commands',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihb2_sHHQSuzJTe_D1JZ5h8NyaDyb4SnPkW3Sl9wdGU1uXfX3FlHGUbobC74xS-8NuPCWNBlDAdu6Zqn8ylNTfhZfoG8PzuNCg=s1600-rw-v1'
			},
			{
				label: 'Manage song keys',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbYh6jIoo3D6YQINuq0sCLv3fywiOprg3iNyV4qbY3NPzM6dpv0rwD5op3-CZLDoy7rWUTXAkPBL1qr7HW64pE-ZFKj_R8WaKQ=s1600-rw-v1'
			},
			{
				label: 'Exercise files',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihYV8LOoMo5ttJlNaips1nufEZLavmY1EAnozB_7_w7Xn2v6uPykHtYe0_dT2m5It-E3XWsshe6aTTttTVBj0C1H_s6PGkx1l2E=s2560'
			},
			{
				label: 'PDF and audio files',
				src: 'https://lh3.googleusercontent.com/drive-viewer/AKGpihbDmEzQbgABBgB-qP8eVD2h3vJnlB9n0unhmweq0oBUplaDrX8nX2p3fgxhhzGRA2vpDtGy8MxAXUrOu-W4DyqGxfmXY7w-xXQ=s2560'
			}
		]
	},
	{
		slug: 'PowerApps',
		color: 'purple',
		description:
			'I developed two PowerApps to enhance workflow efficiency within the company. The first app allows employees to submit issues related to software or other concerns. The digitalization team can manage these issues, update their statuses, and respond directly to the reported problems. Additionally, the app features an analysis screen to identify the most common issues, helping prioritize what needs to be addressed first.<br><br>The second PowerApp was designed for the onboarding process of new employees. The CEO could select various topics, which would then generate a personalized onboarding plan for the new hire.',
		shortDescription: 'Internal Apps for Streamlined Workflows.',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.PowerApps,
		name: 'PowerApps',
		period: '2023',
		status: 'Finished',
		skills: getSkills('powerapps', 'sharepoint', 'office365'),
		type: 'Workflow'
	},

	{
		slug: 'VBA-automation',
		color: 'green',
		description:
			'Excel & Word:<br>The VBA script, triggered by a button in a Word file, read data from an Excel file, transformed it, and wrote the data into the Word template. Additionally, it created bar charts and inserted them into the Word file. This script was used for quality checks for customers.<br><br>Visio & Excel:<br>The script read data from an Excel file and placed multiple shapes with data and connections to other shapes. This data landscape illustrated the interactions between different software systems and the data flow between them. It also identified the responsible persons or groups for maintaining specific data. Due to the large number of data fields, I used this script to eliminate repetitive work.',
		shortDescription: 'Automate tasks in Excel, Word and Visio with VBA.',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.VBA,
		name: 'VBA Automation',
		period: '2023',
		status: 'Finished',
		skills: getSkills('vba', 'visio', 'office365'),
		type: 'Automation'
	},

	{
		slug: 'music',
		color: 'purple',
		description:
			'',
		shortDescription: 'Click here to see some of my music projects.',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.Music,
		name: 'Music Projects',
		period: '',
		status: 'Finished',
		skills: getSkills('audio', 'a-guiar', 'piano',"bass", "drums", "mixing", "producing"),
		type: 'Automation'
	}

	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: '2024',
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export const title = 'Projects';
