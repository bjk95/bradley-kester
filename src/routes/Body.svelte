<script>
	import ExpandableCard from '$lib/ExpandableCard.svelte';
</script>

<section class="py-32 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
	<a href="/work/weeve">
		<ExpandableCard
			title="Weeve"
			subtitle="Personalized AI"
			img="img/weeve-white.svg"
			classes="bg-purple-500"
		/>
	</a>

	<a href="/work/quantexa">
		<ExpandableCard
			title="Quantexa"
			subtitle="The Platform to Transform Your Decision Making"
			classes="bg-teal-500 lg:col-span-2"
		/>
	</a>

	<a href="/work/bse">
		<ExpandableCard
			title="Barcelona School of Economics"
			subtitle="Masters - Econometrics"
			img="img/bse.png"
			classes="bg-cyan-500 lg:col-span-2"
		/>
	</a>

	<a href="/work/monash">
		<ExpandableCard
			title="Monash University"
			subtitle="Undergrad - Economics and Law"
			img="img/monash.svg"
			classes="bg-blue-700 "
		/>
	</a>
</section>
