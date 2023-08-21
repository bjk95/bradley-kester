<script lang="ts">
    	import type { Stat } from '$lib/models/stat';

        export let stats: [Stat, Stat] | undefined
</script>

<div class="grid md:grid-cols-2 w-full gap-4">
    <div class="stat bg-gray-800 rounded-md">
        <div class="stat-figure text-primary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                /></svg
            >
        </div>
        <div class="stat-title">{stats?.[0].title}</div>
        <div class="stat-value text-primary">{stats?.[0].value}</div>
        <div class="stat-desc">{stats?.[0].desc}</div>
    </div>

    <div class="stat bg-gray-800 rounded-md">
        <div class="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                /></svg
            >
        </div>
        <div class="stat-title">{stats?.[1].title}</div>
        <div class="stat-value text-primary">{stats?.[1].value}</div>
        <div class="stat-desc">{stats?.[1].desc}</div>
    </div>
</div>