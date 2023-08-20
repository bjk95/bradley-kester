<script>
	import { NavbarTab, TabPath, isCurrent } from "./models/navbar-tab";
    import { page } from '$app/stores';
	import { twMerge } from "tailwind-merge";

    let tab = TabPath[$page.route.id || '/']; 
</script>

<nav>
    <ul class="flex space-x-2">
        {#each Object.values(NavbarTab) as tab}
            <li>
                <a href="{TabPath[tab]}" class={twMerge("bg-gray-600 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-full", isCurrent(tab, $page.route.id || '') ? 'bg-cyan-400' : '')}>
                    {tab}
                </a>
            </li>
        {/each}
    </ul>
</nav>

