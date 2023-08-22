<script lang="ts">
	import { twMerge } from "tailwind-merge";

    export let reverse: boolean = false
    export let name: string
    export let summary: string
    export let imagePath: string
</script>

<section class={twMerge("grid grid-cols-1 lg:grid-cols-2 bg-gray-800 rounded-md", reverse ? 'flex-row-reverse' : '')}>
	<img class="lg:max-h-96 object-contain" src={imagePath} alt="Quantexa UI"  />
    <div class=" p-8">
        <h2 class="text-3xl font-semibold">{name}</h2>
        <div class="h-4" />
        <span class="text-sm">{summary}</span>
    </div>
</section>