<script lang="ts">
	import { twMerge } from "tailwind-merge";

    export let reverse: boolean = false
    export let name: string
    export let summary: string
</script>

<section class={twMerge("flex bg-gray-800 rounded-md", reverse ? 'flex-row-reverse' : '')}>
	<img class="w-2/3" src="/img/weeve-concepts.png" alt="Quantexa UI" />
    <div class="w-1/3 p-8">
        <h2 class="t text-3xl font-semibold">{name}</h2>
        <div class="h-4" />

        <span class="text-sm">{summary}</span>
    </div>



</section>