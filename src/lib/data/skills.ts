import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import { skillDescriptions } from './skilldescription';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Software & Platforms', slug: 'software' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Free Time', slug: 'free' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	// Programming Languages
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: skillDescriptions.typescript,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: skillDescriptions.python,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: skillDescriptions.cpp,
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'yellow',
		description: skillDescriptions.java,
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'vba',
		color: 'yellow',
		description: skillDescriptions.vba,
		logo: Assets.VBA,
		name: 'VBA',
		category: 'pro-lang'
	}),

	// R
	defineSkill({
		slug: 'r',
		color: 'blue',
		description: skillDescriptions.r,
		logo: Assets.R,
		name: 'R',
		category: 'pro-lang'
	}),

	// Markup & Style
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: skillDescriptions.css,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: skillDescriptions.html,
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: skillDescriptions.tailwindcss,
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	// defineSkill({
	// 	slug: 'sass',
	// 	color: 'pink',
	// 	description: '',
	// 	logo: Assets.Sass,
	// 	name: 'Sass',
	// 	category: 'markup-style'
	// }),
	// Libaries
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: skillDescriptions.reactjs,
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'shadcn',
		color: 'cyan',
		description: skillDescriptions.shadcn,
		logo: Assets.Shadcn,
		name: 'Shadcn',
		category: 'library'
	}),
	// Database
	defineSkill({
		slug: 'db',
		color: 'green',
		description: skillDescriptions.supabase,
		logo: Assets.Supabase,
		name: 'Supabase',
		category: 'db'
	}),
	// Design
	defineSkill({
		slug: 'figma',
		color: 'blue',
		description: skillDescriptions.figma,
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: skillDescriptions.photoshop,
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'design'
	}),
	// Visio
	defineSkill({
		slug: 'visio',
		color: 'blue',
		description: skillDescriptions.visio,
		logo: Assets.Visio,
		name: 'Visio',
		category: 'design'
	}),
	// Software and Platforms
	defineSkill({
		slug: 'powerapps',
		color: 'purple',
		description: skillDescriptions.powerapps,
		logo: Assets.PowerApps,
		name: 'Power Apps',
		category: 'software'
	}),
	defineSkill({
		slug: 'linux',
		color: 'yellow',
		description: skillDescriptions.linux,
		logo: Assets.Linux,
		name: 'Linux',
		category: 'software'
	}),
	defineSkill({
		slug: 'sharepoint',
		color: 'green',
		description: skillDescriptions.sharepoint,
		logo: Assets.SharePoint,
		name: 'SharePoint',
		category: 'software'
	}),
	defineSkill({
		slug: 'office365',
		color: 'orange',
		description: skillDescriptions.office365,
		logo: Assets.Office365,
		name: 'Office 365',
		category: 'software'
	}),

	// Dev Tools
	defineSkill({
		slug: 'git',
		color: 'red',
		description: skillDescriptions.git,
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'tools',
		color: 'red',
		description: skillDescriptions.huskyPrettierEslint,
		logo: Assets.Unknown,
		name: 'Husky, Prettier, ESLint',
		category: 'devtools'
	}),

	// Free Time
	defineSkill({
		slug: 'piano',
		color: 'gold',
		description: '',
		logo: Assets.Music,
		name: 'Piano',
		category: 'free'
	}),
	defineSkill({
		slug: 'a-guiar',
		color: 'gold',
		description: '',
		logo: Assets.Music,
		name: 'Acoustic Guitar',
		category: 'free'
	}),
	defineSkill({
		slug: 'bass',
		color: 'gold',
		description: '',
		logo: Assets.Music,
		name: 'Bass Guitar',
		category: 'free'
	}),
	defineSkill({
		slug: 'drums',
		color: 'gold',
		description: '',
		logo: Assets.Music,
		name: 'Drums',
		category: 'free'
	}),
	defineSkill({
		slug: 'mixing',
		color: 'blue',
		description: '',
		logo: Assets.Wave,
		name: 'Audio Mixing',
		category: 'free'
	}),
	defineSkill({
		slug: 'producing',
		color: 'blue',
		description: '',
		logo: Assets.Wave,
		name: 'Audio Production',
		category: 'free'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
