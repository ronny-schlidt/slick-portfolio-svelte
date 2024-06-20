import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ronny';

export const lastName = 'Schlidt';

export const description =
	"Welcome you to my personal portfolio website. Here, you'll find a collection of my work, experiences, and passions.";

export const siteExplanation= "In the Skills section, you'll see a detailed list of my technical abilities and soft skills, showcasing what I bring to the table in any professional setting.<br><br>The Projects tab highlights some of the most impactful and rewarding projects I've been a part of, providing insights into my problem-solving approach and technical prowess.<br><br>In the Experience section, you'll find my professional journey laid out, detailing the roles and responsibilities I've undertaken and the industries I've contributed to.<br><br>The Education tab covers my academic achievements, certifications, and courses that have helped shape my career and expertise.<br><br>Lastly, the Music section is a personal favorite of mine. Here, I share my musical endeavors, offering a glimpse into my creative world outside of my professional career.<br><br>Feel free to explore each section to learn more about me and my work. Thank you for visiting, and I hope you enjoy your time here!"

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
