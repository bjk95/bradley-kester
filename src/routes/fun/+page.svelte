<script>
	import ActivityCard from "./ActivityCard.svelte";

</script>

<svelte:head>
    <title>Fun | Bradley Kester</title>
</svelte:head>

<article>
    <h1 class="text-center">Fun</h1>
    
    <section class="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <ActivityCard name="Muay Thai & Brazilian Jiu Jitsu" 
            summary="I've been training, mainly Muay Thai and bit of BJJ since 2018 at Immersion MMA. Never done a fight because I don't want CTE but it's an awesome way to stay fit and the most fun part of my week."
            imagePath='/img/mt.jpeg'
            />
        <ActivityCard name="Traveling"
            summary="Since 2015 I've traveled to over 50 countries spending most of that time studying in Spain, volunteering in a Tanzanian Orphanage and working across Asia and the UK."
            imagePath='/img/travel.jpeg'
        />
        <ActivityCard name="Formula 1" 
            summary="Back in 2019 I got on a plane to the UK with Drive to Survive downloaded on my laptop and I've loved it ever since. I love the combination of engineering, danger and glamour and yes, I'm still mad my parents never got me into karting."
            imagePath='/img/f1.jpeg'
            
        />
    </section>
</article>
<style>
	h1 {
		font-family: 'Pacifico', sans-serif;
		font-size: 90px;
		margin-top: 8rem;
		margin-bottom: 8rem;
	}
</style>