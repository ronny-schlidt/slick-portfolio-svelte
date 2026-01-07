<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import { browser, dev } from '$app/environment';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import * as Swetrix from 'swetrix'
	// ? moved to +layout.server.ts : will be deleted when we make sure that everything is alright
	// export const prerender = true;

	onMount(() => onHydrated());

	onMount(() => {
    Swetrix.init('Vkr2NNPVr4M7', {
      apiURL: 'https://swetrixapi-doo40ocwc0scog8g8sko4k8o.escabix.online/log',
    })
    Swetrix.trackViews()
  })
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavMenu />
	<div class="content container"><slot /></div>

		<footer class="p-2 footer-computer-only">
		<a href={`${base}${'privacy-policy'}`} class="nav-menu-item text-gray-500">
			<span class="nav-menu-item-label">{'Datenschutzerklärung'}</span>
		</a>
	</footer>
</div>

<style lang="scss">
	.footer-computer-only {
	  display: none;
	}
  
	@media (min-width: 768px) {
	  .footer-computer-only {
		display: block;
	  }
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
