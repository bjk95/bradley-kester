<script lang="ts">
	import type { Quote } from "$lib/models/quote";


    export let title: string
    export let subtitle: string
    export let summary: string
    export let wins: string[]
    export let quotes: Quote[] = []
</script>

<section class="my-6">
    <h3 >{title}</h3>
    <span class="slug text-gray-200">{subtitle}</span>

    <div class="h da"></div>
    <p class="mt-8">{summary}</p>

    <ol class="list-disc p-4">
        {#each wins as win}
            <li>{win}</li>
        {/each}
    </ol>

    <div class="p-4 space-y-4">
        {#each quotes as quote}
            <div class="rounded-md bg-gray-800 p-4 space-y-4">
                <div class="flex item">

                </div>
                <span class="text-center text-lg w-full font-semibold italic">"{quote.quote}"</span>
                <h4 class="text-sm">{quote.author}</h4>
            </div>
        {/each}
    </div>
</section>


<style>
    h3 {
        font-size: 24px;
    }

    .slug{
        font-size: 12px;
    }
    
</style>
