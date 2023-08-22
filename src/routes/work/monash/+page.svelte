<script>
	import SummaryBox from "../SummaryBox.svelte";
	import MonashOverview from "./MonashOverview.svelte";


</script>

<svelte:head>
    <title>Monash | Bradley Kester</title>
</svelte:head>

<article class="flex flex-col items-center">
	<h1 class="text-center">Monash University</h1>

	<div class="summary-box">
		<SummaryBox
			timeline={'2014 - 2016'}
			roles={['Student']}
		/>
	</div>
	<MonashOverview />

</article>

<style>
	h1 {
		font-family: 'Pacifico', sans-serif;
		font-size: calc(2rem + 2vw);
		margin-top: 8rem;
	}

	.summary-box {
		margin-top: 8rem;
		margin-bottom: 8rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
