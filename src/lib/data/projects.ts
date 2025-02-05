import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { ScreenshotsAssets } from './screenshots';

export const items: Array<Project> = [
	{
		slug: 'restaurant-app',
		color: '#ff3e00',
		description: `The Restaurant App is a volunteer project designed to efficiently manage and operate the cafe at my hometown church. It offers functionalities to manage products, take orders, and oversee open orders.<br><br>
    **Key Features include:**<br><br>
    - **Order Management:** Orders can be updated to various statuses, and those ready for pickup are displayed on a separate screen, similar to the system used by popular fast food restaurants.<br><br>
    - **Product Management:** Manage products efficiently.<br><br>
    - **Statistical Insights:** Provides statistical insights.<br><br>
    - **User Management:** User management capabilities for your team.<br><br>
		- **Receipt Printing:** Print receipts for both staff and customers.<br><br>
		- **Text-to-Speech Notification:** If an order is not picked up, the audio system announces, "Order number x is ready to be picked up."`,
		shortDescription:
			'App, to take orders, manage orders, manage products, user management, inventory management, etc...',
		links: [{ to: 'https://github.com/Immanuel-Detmold/cafe', label: 'GitHub', newTab: true }],
		logo: Assets.Cafe,
		name: 'Restaurant App',
		period: 'Since 2023',
		status: 'In Progress',
		skills: getSkills('reactjs', 'ts', 'tailwind', 'figma', 'css', 'html', 'supabase', 'shadcn'),
		type: 'Web App',
		screenshots: [
			{
				label: 'New order',
				src: ScreenshotsAssets.cafeNewOrder
			},
			{
				label: 'Open orders',
				src: ScreenshotsAssets.cafeOpen
			},
			{
				label: 'Ready for pick-up',
				src: ScreenshotsAssets.cafeReadyToPickup
			},
			{
				label: 'Statistics',
				src: ScreenshotsAssets.cafeStatistics
			},
			{
				label: 'Settings & user management',
				src: ScreenshotsAssets.cafeSettingsWithUserManagement
			},
			{
				label: 'Dark & Light mode',
				src: ScreenshotsAssets.cafeLightAndDarkMode
			},
			{
				label: 'Inventory management',
				src: ScreenshotsAssets.cafeInventoryManagement
			}
		]
	},
	{
		slug: 'esports-tournament-saas',
		color: '#0070f3',
		description: `The Esports Tournament SaaS Application is a project designed to manage and organize virtual esports tournaments efficiently. It offers features like tournament creation, player/team management, match result entry, and data visualization.<br><br>
    **Key Features include:**<br><br>
    - **Tournament Creation:** Easily create and manage tournaments.<br><br>
    - **Player/Team Management:** Manage players and teams efficiently.<br><br>
    - **Match Result Entry:** Enter and update match results.<br><br>
    - **Data Visualization:** Visualize tournament data effectively.<br><br>
    Built with a focus on security, the application ensures safe handling of user and tournament data. Development is ongoing, with new features being added regularly to enhance the platform’s functionality.`,
		shortDescription:
			'Manage tournaments, player and team data, submit match results, and analyze tournament statistics securely.',
		links: [],
		logo: Assets.ElevateEsports,
		name: 'Esports Tournament SaaS',
		period: 'Since 2024',
		status: 'In Progress',
		skills: getSkills(
			'nextjs',
			'supabase',
			'typescript',
			'tailwind',
			'css',
			'html',
			'docker',
			'linux',
			'figma',
			'ts'
		),
		type: 'Web App'
	},

	{
		slug: 'telegram-bot',
		color: '#491fd1',
		description: `The Telegram bot is my volunteer project designed to help musicians organize and create song sets automatically, and manage keys for musicians and singers.<br><br>
    **Key Features include:**<br><br>
    - **Song Set Creation:** Automatically create song sets for each event.<br><br>
    - **Key Management:** Manage keys for musicians and singers.<br><br>
    - **API Integration:** Fetch songs for each day using an API.<br><br>
    - **PDF Generation:** Generate PDF files for singers/musicians and files for the media team to display lyrics.<br><br>
    - **Audio Processing:** Download song audio from YouTube and transpose it into the needed key.<br><br>
    - **Statistics:** Show statistics such as how often each singer performs and frequently sung songs.<br><br>
    I have set up a Linux server that continuously monitors changes in our church organization software and waits for requests in Telegram.`,
		shortDescription:
			'Used to request data via Apis, manipulate data on servers, generate files, and send them to users.',
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
				src: ScreenshotsAssets.telegramBotHelp
			},
			{
				label: 'Manage song keys',
				src: ScreenshotsAssets.telegramBotManageKeys
			},
			{
				label: 'Exercise files',
				src: ScreenshotsAssets.telegramBotExerciseFiles
			},
			{
				label: 'PDF and audio files',
				src: ScreenshotsAssets.telegramBotExerciseFilesMP3
			}
		]
	},
	{
		slug: 'browser-automation',
		color: '#28a745', // Green for productivity
		// Green for productivity
		description: `A collection of Tampermonkey scripts that automate various tasks within web browsers. These scripts leverage JavaScript and browser APIs to interact with web pages, extract data, modify content, and automate actions.<br><br>
		**Examples of implemented functionalities include:**<br><br>
		- **Data Extraction:** Extracting specific information from web pages, such as product prices, contact details, or article summaries.<br><br>
		- **Content Modification:** Modifying web page elements, such as removing ads, changing styles, or translating text.<br><br>
		- **Workflow Automation:** Automating repetitive tasks, such as filling out forms, clicking buttons, and navigating between pages.<br><br>
		- **Data Entry Simplification:** Simplifying data entry processes by automatically filling in fields or copying relevant information to the clipboard.`,
		shortDescription:
			'Automate web tasks with custom scripts for increased efficiency and productivity.',
		links: [
			{ to: 'https://github.com/Immanuel-Detmold/tampermonkey', label: 'GitHub', newTab: true }
		],
		logo: Assets.Tampermonkey, // Consider adding a small icon or logo for the project
		name: 'Browser Automation Scripts',
		period: '2025',
		status: 'Completed',
		skills: getSkills('js', 'css', 'html'),
		type: 'Browser Extension (Tampermonkey)'
	},
	{
		slug: 'PowerApps',
		color: 'purple',
		description: `I developed two PowerApps to enhance workflow efficiency within the company.<br><br>
    **Key Features include:**<br><br>
    - **Issue Submission:** Employees can submit issues related to software or other concerns.<br><br>
    - **Issue Management:** The digitalization team can manage these issues, update their statuses, and respond directly to the reported problems.<br><br>
    - **Analysis Screen:** Identify the most common issues to help prioritize what needs to be addressed first.<br><br>
    - **Onboarding Process:** The second PowerApp was designed for the onboarding process of new employees. The CEO could select various topics, which would then generate a personalized onboarding plan for the new hire.`,
		shortDescription: 'Internal Apps for Streamlined Workflows.',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.PowerApps,
		name: 'PowerApps',
		period: '2023',
		status: 'Finished',
		skills: getSkills('powerapps', 'sharepoint', 'office365', 'powerautomate', 'virtualagents'),
		type: 'Workflow'
	},

	{
		slug: 'VBA-automation',
		color: 'green',
		description: `**Excel & Word**:<br>
    The VBA script, triggered by a button in a Word file, read data from an Excel file, transformed it, and wrote the data into the Word template. Additionally, it created bar charts and inserted them into the Word file. This script was used for quality checks for customers.<br><br>
    **Visio & Excel**:<br>
    The script read data from an Excel file and placed multiple shapes with data and connections to other shapes. This data landscape illustrated the interactions between different software systems and the data flow between them. It also identified the responsible persons or groups for maintaining specific data. Due to the large number of data fields, I used this script to eliminate repetitive work.`,
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

	// Bachelorarbeit. Vergleich von exakten optimierungsalgorithmen für das 2D-Binpacking Problem in Python
	{
		slug: 'bachelor-thesis',
		color: 'green',
		description:
			'This project addresses the 2D Bin Packing problem, arranging various rectangular objects in same-size bins without rotation or cutting, to benchmark solvers.<br><br>Objectives: Evaluate Gurobi, CPLEX, and SCIP solvers; compare Primal Simplex, Dual Simplex, and Barrier methods.<br><br>Methods: Implement the problem, use solvers (Gurobi, CPLEX, SCIP) with three methods (Primal Simplex, Dual Simplex, Barrier), and develop performance profiles.<br><br>Tools: Python, Gurobi, CPLEX, SCIP.<br><br>Outcomes: Detailed performance comparison; insights into the most efficient solver and method; performance profiles.',
		shortDescription:
			'Comparison of Optimization Algorithms for the 2D Bin Packing Problem in Python.',
		links: [],
		logo: Assets.Learn,
		name: 'Bachelor Thesis',
		period: '2021',
		status: 'Finished',
		skills: getSkills('python', 'gurobi'),
		type: 'Research'
	},
	// Project Shiny Dashboard in R -> Shows Impact of Covid-19 on the Economy
	{
		slug: 'R',
		color: 'green',
		description:
			'The Shiny Dashboard was a university project and shows the impact of COVID-19 on the economy.<br>The dashboard retrieves data from an API and allows users to compare infections and equities/precious metals side by side within a selected date range.',
		shortDescription: 'Visualize the impact of COVID-19 on the economy with R.',
		links: [{ to: 'https://github.com/ronny-schlidt/Shiny-App-R', label: 'GitHub', newTab: true }],
		logo: Assets.R,
		name: 'Shiny Dashboard in R',
		period: '2020',
		status: 'Finished',
		skills: getSkills('r'),
		type: 'Data Visualization',
		screenshots: [
			{
				src: ScreenshotsAssets.dashboardR,
				label: 'Dashboard'
			}
		]
	},

	{
		slug: 'music',
		color: 'purple',
		description: '',
		shortDescription: 'Click here to see some of my music projects.',
		// links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		links: [],
		logo: Assets.Music,
		name: 'Music Projects',
		period: '',
		status: 'Finished',
		skills: getSkills(
			'audio',
			'a-guiar',
			'piano',
			'bass',
			'drums',
			'mixing',
			'producing',
			'flstudio'
		),
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
