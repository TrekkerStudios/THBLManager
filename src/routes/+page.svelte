<script lang="ts">
	import Interface from '$lib/components/Interface.svelte';

	let tabSetParent: number = 0;
	let tabSetChild: number = 0;

	export let data;

	export let pupdad_socials = data.pupdad_socials;
	export let pupdad_links = data.pupdad_links;

	export let snre_socials = data.snre_socials;
	export let snre_links = data.snre_links;
	export let snre_music = data.snre_music;
</script>

<main class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="h-2/3 w-1/2 px-3">
		<h2 class="h2 text-center pb-4">THBL Manager</h2>
		<Interface
			{pupdad_socials}
			{pupdad_links}
			{snre_socials}
			{snre_links}
			{snre_music}
		/>
	</div>
</main>
