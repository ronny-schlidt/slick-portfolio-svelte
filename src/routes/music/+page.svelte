<script lang="ts">
	import SearchPage from './../../lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { title, items } from '$lib/data/music';
	import type { Education } from '$lib/types';
	import type { PageData } from './$types';
	import type { Music } from '$lib/types.ts';

	// export let data: PageData;
	let search = '';

	let result: Array<Music> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.title.toLowerCase().includes(s) ||
				it.artist.toLowerCase().includes(s) ||
				it.year.toString().includes(s)
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<h5 class="ml-2 text-gray-400 mb-4">This page presents some of my music projects.</h5>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each result as music, index}
				<div
					class={`flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[10px]`}
				>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" />
					</div>

					<div class="col flex-1 items-stretch">
						<Card color={music.color}>
							<div class="flex-1 col gap-2 items-stretch">
								<div class="w-full aspect-video">{@html music.youtube}</div>
								<!-- <img
									src={getAssetURL(music.logo)}
									alt={music.title}
									height="50"
									width="50"
									class="mb-5 rounded-lg"
								/> -->
								<!-- <div class="text-[1.3em]">{music.artist}</div> -->

								<div class="text-[var(--accent-text)] text-[0.9em] font-200 mb-2">
									<Chip>{music.year}</Chip>
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>
