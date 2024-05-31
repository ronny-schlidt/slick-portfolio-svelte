import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ronny';

export const lastName = 'Schlidt';

export const description = 'Welcome to my Portfolio Website!';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/ronny-schlidt-78771021b/'
	},
	{
		platform: Platform.Email,
		link: 'r.schlidt1@web.de'
	},
	{ platform: Platform.GitHub, link: 'https://github.com/ronny-schlidt' }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
