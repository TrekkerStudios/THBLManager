<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import Table from '$lib/components/Table.svelte';

	let tabSetParent: number = 0;
	let tabSetChild: number = 0;

	//Add in all tables as props
	export let pupdad_socials;
	export let pupdad_links;

	export let snre_socials;
	export let snre_links;
	export let snre_music;
</script>

<div>
	<TabGroup>
		<Tab
			bind:group={tabSetParent}
			on:click={() => (tabSetChild = 0)}
			name="tab1"
			value={0}>pupdad</Tab
		>
		<Tab
			bind:group={tabSetParent}
			on:click={() => (tabSetChild = 0)}
			name="tab2"
			value={1}>SNRE</Tab
		>

		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSetParent === 0}
				<!-- pupdad -->
					<TabGroup>
						<Tab bind:group={tabSetChild} name="tab1" value={0}>Socials</Tab>
						<Tab bind:group={tabSetChild} name="tab2" value={1}>Links</Tab>
						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							{#if tabSetChild === 0}
								<!-- Add more tables as necessary -->
								<Table input={pupdad_socials[1]} key={pupdad_socials[0]} />
							{:else if tabSetChild === 1}
								<Table input={pupdad_links[1]} key={pupdad_links[0]} />
							{/if}
						</svelte:fragment>
					</TabGroup>
			{:else if tabSetParent === 1}
				<TabGroup>
					<!-- SNRE -->
					<Tab bind:group={tabSetChild} name="tab1" value={0}>Socials</Tab>
					<Tab bind:group={tabSetChild} name="tab2" value={1}>Links</Tab>
					<Tab bind:group={tabSetChild} name="tab2" value={2}>Music</Tab>

					<!-- Tab Panels --->
					<svelte:fragment slot="panel">
						{#if tabSetChild === 0}
							<Table input={snre_socials[1]} key={snre_socials[0]} />
						{:else if tabSetChild === 1}
							<Table input={snre_links[1]} key={snre_links[0]} />
						{:else if tabSetChild === 2}
							<Table input={snre_music[1]} key={snre_music[0]} />
						{/if}
					</svelte:fragment>
				</TabGroup>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
