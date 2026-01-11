<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills, siteExplanation } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { items as navItems } from '@data/navbar';
	import { base } from '$app/paths';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="flex flex-col-reverse self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName}</MainTitle>
		<p class="hidden md:block text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<p class="md:hidden text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			Welcome you to my personal portfolio website.
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
		<div class="mt-5 md:hidden flex flex-col gap-2 w-full mb-8">
			{#each navItems as item}
				<a
					href={`${base}${item.to}`}
					class="group flex items-center gap-3 text-[var(--tertiary-text)] decoration-none text-lg p-3 border border-solid border-[var(--border)] rounded-lg hover:bg-[var(--main-hover)] transition-colors"
				>
					<UIcon icon={item.icon} classes="text-1.5em group-hover:text-[var(--primary-text)] transition-colors" />
					<span class="font-medium group-hover:text-[var(--primary-text)] transition-colors">{item.title}</span>
					<div class="flex-1" />
					<UIcon icon="i-carbon-chevron-right" classes="text-1.2em opacity-50 group-hover:opacity-100 transition-opacity" />
				</a>
			{/each}
		</div>
	</div>
	<img src="personal-photo.jpg" alt="person" class="mt-4 mb-4 md:mb-0 md:ml-4 w-50 h-50 rounded-full shadow-lg" />
	<!-- <Carrousel items={skills ?? skillsItems} /> -->
</div>
<!-- <p>
		{@html siteExplanation}
	</p> -->
