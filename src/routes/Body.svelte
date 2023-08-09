<script>
	import ExpandableCard from "$lib/ExpandableCard.svelte";

</script>

<section class="py-32 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
    <ExpandableCard title="Weeve" subtitle="Personalized AI" img="img/weeve-white.svg" classes="bg-purple-500" />
    
    <ExpandableCard 
        title="Quantexa" 
        subtitle="The Platform to Transform Your Decision Making" 
        classes="bg-teal-500 lg:col-span-2" />
    
    <ExpandableCard 
        title="Barcelona School of Economics" 
        subtitle="Master of Specialized Economic Analysis - Econometrics"  
        img="img/bse.png"
        classes="bg-cyan-500 lg:col-span-2" 
        />
    
        <ExpandableCard 
        title="Monash University" 
        subtitle="Bachelor of Business - Economics and Law"  
        img="img/monash.svg"
        classes="bg-blue-700 " 
        />
</section>