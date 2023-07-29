<script lang="ts">
	import { writable } from 'svelte/store';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { trpc } from '$lib/trpc';

	export let input;
	export let key: string;
	let tableInput = input;

	function addRow() {
		$tableFormat = [...$tableFormat, [...newRow]];
		newRow = columns;
	}
	function deleteRow(rowToBeDeleted: any) {
		$tableFormat = $tableFormat.filter((row) => row != rowToBeDeleted);
	}
	let columns = ['ID', 'Name', 'Link'];
	let newRow = [...columns];

	let tableFormat = writable(tableMapperValues(tableInput, ['id', 'name', 'link']));

	const submit = trpc.submitKV.mutation();

	function submitHandler() {
		let tableToSubmit: any[] = [];
		$tableFormat.forEach((item) => {
			item = {id: item[0], name: item[1].replace(/[^\x20-\x7E]/gmi, ""), link: item[2].replace(/[^\x20-\x7E]/gmi, "")};
			tableToSubmit.push(item);
		})
		$submit.mutate({table: tableToSubmit, key: key});
	}
</script>

<table class="table table-hover">
	<thead>
		<tr>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>

	<tbody>
		{#each $tableFormat as row}
			<tr>
				{#each row as cell}
					<td contenteditable="true" bind:innerText={cell} />
				{/each}
				<button on:click={() => deleteRow(row)}>X</button>
			</tr>
		{/each}
		<tr>
			{#each newRow as column}
				<td contenteditable="true" bind:innerText={column} />
			{/each}
			<button on:click={addRow}>Add</button>
		</tr>
	</tbody>
</table>

<button on:click={submitHandler}>Submit</button>
