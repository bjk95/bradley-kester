<script>
	import Achievement from './Achievement.svelte';
</script>

<section class="w-full max-w-screen-sm">
	<h2 class="text-center">Achievements</h2>

	<div class="flex flex-col">
		<Achievement
			title="Insurance Fraud @ Asian Insurance Conglomerate - Solution Success Manager"
			subtitle="Cross-insurer automotive fraud detection"
			summary="Spearheaded industry-wide platform development, designing solution to combine over twenty insurer's data and create a unified user experience and scorecard. "
			wins={[
				'Coordinated between over twenty insurers to unify risk detection framework and workflow enablement.',
				'Provided technical oversight in creation of company-first real-time ingestion and scoring framework.',
                "Ran industry showcase sharing best practices and methods to leverage technology when fight fraud."
			]}
		/>
		<Achievement
			title="Procurement Fraud @ Multinational Insurance Conglomerate - Solution Success Manager"
			subtitle="International procurement fraud detection"
			summary="Nurtured development of fraud detection platform growing programme across business lines"
			wins={[
				'Created single source of truth for fraud detection',
                "Built relationships between client and Quantexa to foster trust and momentum towards a cross-functional analytics platform"
			]}
		/>

		<a href="https://quantexa.com" target="_blank">
			<section class="rounded-md bg-gray-800 p-4 flex items-center space-x-4">
				<div class="flex-col space-y-2 px-8">
					<span class="font-medium">Not sure what a Solution Success Manager is?</span>
					<p class="text-sm">
						A Solution Success Manager is Quantexa-specific role which a cross between a Customer
						Success Manager and Project Manager. You're responsible for ensuring the solution solves the problem it sets out to and all stakeholders understand it's value. Of course, with my DNA as an engineer, it also involves a large degree of technical oversight.
					</p>
				</div>
				<img src="/img/question.svg" alt="?" />
			</section>
		</a>
		<Achievement
			title="Correspondent Banking @ Big Four Bank - Technical lead"
			subtitle="Correspondent banking specific anti money laundering, counter-terrorism, counter child sexual exploitation"
			summary="Led cross-organisation, collaborative project with big four bank & big four accounting firm to develop never-done-before payment flow analysis tool."
			wins={[
				'Completed in 12 weeks to meet tight regulatory deadline',
				'Developed custom payment-flow analysis tool to cater for complexity of correspondent banking transactions'
			]}
			quotes={[
				{
					quote: "Brad is fantastic tech lead and I'd love to work with him again",
					author: 'Director - Big Four Accounting Firm'
				},
				{
					quote: 'Works incredibly hard and delivered a great outcome',
					author: 'Senior Manager & Project Sponsor - Big Four Bank'
				}
			]}
		/>

		<Achievement
			title="Covid Response @ State Government  - Technical lead"
			subtitle="Rapid rollout network analytics solution combatting Covid-19"
			summary="Led design and implementation of networks analytics platform to help an Australian state government fight the Covid-19 pandemic"
			wins={[
				"Completed in under 12 weeks to rapidly aid effort combatting the pandemic at it's peak",
				'Developed solution for entirely new use-case with small team and little outside assistance',
				'Achieved while also simultaneously leading two other projects'
			]}
		/>
		<Achievement
			title="Investment Opportunity Detection @ Hedge Fund  - Technical lead"
			subtitle="Short-selling investment detection"
			summary="Led design and implementation of international investment opportunity detection platform that automatically surfaces public equites that are likely fraudulent or associated with poor-track-record executives."
			wins={[
                "Designed data model and scoring to identify serial fraudsters and failures",
				"Quantexa first use case",
				"Built out hedge fund's technical team with hiring and training",
				'Developed and brought back novel tools to share with other projects'
			]}
		/>

		<Achievement
			title="AML @ Big Four Bank - Technical lead"
			subtitle="Anti money laundering, counter-terrorism, counter child sexual exploitation"
			summary="Led design and implementation of analytics platform for the bank's complex investigations team. The multimillion dollar project built the foundation for subsequent detection, high volume, correspondent banking and potentially master data management projects."
			wins={['Process over a trillion rows of data', 'Scaled to 80 node elasticsearch cluster']}
		/>
	</div>
</section>

<style>
	h2 {
		font-family: 'Pacifico', sans-serif;
		font-size: 45px;
		margin-top: 4rem;
		margin-bottom: 2rem;
	}
</style>
