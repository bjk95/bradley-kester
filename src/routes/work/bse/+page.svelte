<script>
	import SummaryBox from "../SummaryBox.svelte";
	import BseOverview from "./BseOverview.svelte";


</script>

<svelte:head>
    <title>BSE | Bradley Kester</title>
</svelte:head>

<article class="flex flex-col items-center">
	<h1 class="text-center">Barcelona School of Economics</h1>

	<div class="summary-box">
		<SummaryBox
			timeline={'2017 - 2018'}
			roles={['Student']}
		/>
	</div>
	<BseOverview />

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
