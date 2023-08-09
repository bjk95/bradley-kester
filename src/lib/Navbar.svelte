<script>
	import { NavbarTab, TabPath } from "./models/navbar-tab";
    import { page } from '$app/stores';

    export let tab = NavbarTab.Home; 
</script>

<nav>
    <ul class="flex space-x-2">
        {#each Object.values(NavbarTab) as tab}
            <li>
                <a href="{TabPath[tab]}" class="bg-gray-600 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-full">
                    {tab}
                </a>
            </li>
        {/each}
    </ul>
</nav>