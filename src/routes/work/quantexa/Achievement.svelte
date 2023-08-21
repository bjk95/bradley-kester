<script lang="ts">
	import type { Quote } from '$lib/models/quote';
	import type { Stat } from '$lib/models/stat';
	import Stats from './Stats.svelte';

	export let title: string;
	export let subtitle: string;
	export let summary: string;
	export let wins: string[];
	export let quotes: Quote[] = [];
	export let stats: [Stat, Stat] | undefined = undefined;
</script>

<section class="my-6">
	<h3>{title}</h3>
	<span class="slug text-gray-200">{subtitle}</span>
	{#if stats}
		<div class="w-full flex items-center mt-8">
			<Stats {stats} />
		</div>
	{/if}

	<div class="h da" />
	<p class="mt-8">{summary}</p>

	<ol class="list-disc p-4">
		{#each wins as win}
			<li>{win}</li>
		{/each}
	</ol>

	<div class="p-4 space-y-4">
		{#each quotes as quote}
			<div class="rounded-md bg-gray-800 p-4 space-y-4">
				<div class="flex item" />
				<span class="text-center text-lg w-full font-semibold italic">"{quote.quote}"</span>
				<h4 class="text-sm">- {quote.author}</h4>
			</div>
		{/each}
	</div>
</section>

<style>
	h3 {
		font-size: 24px;
	}

	span {
		white-space: pre-line;
	}

	.slug {
		font-size: 12px;
	}
</style>
