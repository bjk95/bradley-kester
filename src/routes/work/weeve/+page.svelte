<script>
	import SummaryBox from "../SummaryBox.svelte";
	import WeeveOverview from "./WeeveOverview.svelte";


</script>

<article class="flex flex-col items-center">
	<h1>Weeve</h1>
	<div class="summary-box">
		<SummaryBox
			timeline={'2023 - present'}
			roles={['Founder']}
		/>
	</div>
	<img class="" src="/img/weeve-concepts.png" alt="Quantexa UI" />
	<a href="https://weeve.cc" target="_blank">
		<section class="rounded-md bg-gray-800 mt-8 p-4 flex items-center space-x-4">
			<span>Think Weeve sounds useful? <br />Have a play and tell me if you think it can solve your problems</span>
			<img src="/img/question.svg" alt="?" />
		</section>
	</a>
	<WeeveOverview />

</article>

<style>
	h1 {
		font-family: 'Pacifico', sans-serif;
		font-size: 90px;
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
