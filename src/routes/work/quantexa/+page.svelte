<script>
	import Overview from './QuantexaOverview.svelte';
	import Projects from './Achievements.svelte';
	import SummaryBox from '../SummaryBox.svelte';
</script>

<svelte:head>
    <title>Quantexa | Bradley Kester</title>
</svelte:head>

<article class="flex flex-col items-center">
	<h1>Quantexa</h1>
	<div class="summary-box">
		<SummaryBox
			timeline={'2019 - present'}
			roles={['Solution Success Manager', 'Technical Lead']}
		/>
	</div>
	<img class="p-4" src="/img/q-screenshot.png" alt="Quantexa UI" />
	<a href="https://quantexa.com" target="_blank">
		<section class="rounded-md bg-gray-800 mt-8 p-4 flex items-center space-x-4">
			<span>Want to find out more about Quantexa? <br />Find out what we do</span>
			<img src="/img/question.svg" alt="?" />
		</section>
	</a>
	<Overview />

	<Projects />
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
