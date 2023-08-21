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
				'Ran industry showcase sharing best practices and methods to leverage technology when fight fraud.'
			]}
			quotes={[
				{
					author: 'Regional head of product',
					quote: `I have been SO impressed with how Brad has taken up this role. 

					1 - He gets it. Very quickly as understood the fraud risk and Q approach. Focus on identifying cross industry fraud.
2 - Due to (1) he’s able to prioritise really well without me having to instruct.
3 - This is a super challenging project from a technical perspective but also stakeholder management with many many quite demanding customers - he seems to have taken this in his stride.

Finally he is a joy to work with - always positive and with a smile.`
				},
				{
					author: 'Global head of product',
					quote: `Brad has made a huge impression to a complex customer account... he has put in place regular customer success cadence, increased the communication to both the client and internally, set up a quarterly business review plan, introduced confidence on the success metrics with the client CEO (who has specifically called his work our and provided praise for his involvement) as well as started to bring in a clearer path for refinement of technical activities and priorities.
					
					Not only this he organised and co-presented an industry wider event with over 50 attendees across 20+ different organisations.
					
					He has hit some hard client conversations head on and has brought a step change in the client's attitude to the project.`
				}
			]}
			stats={[
				{title: 'Unique insurers', value: '20+', desc: 'Over 20 insurers'},
				{title: 'One platform', value: '1', desc: 'Unified under one solution'},
			]}
		/>
		<Achievement
			title="Procurement Fraud @ Multinational Insurance Conglomerate - Solution Success Manager"
			subtitle="International procurement fraud detection"
			summary="Nurtured development of fraud detection platform growing programme across business lines"
			wins={[
				'Created single source of truth for fraud detection',
				'Built relationships between client and Quantexa to foster trust and momentum towards a cross-functional analytics platform'
			]}
		/>

		<a href="https://quantexa.com" target="_blank">
			<section class="rounded-md bg-gray-800 p-4 flex items-center space-x-4">
				<div class="flex-col space-y-2 px-8">
					<span class="font-medium">Not sure what a Solution Success Manager is?</span>
					<p class="text-sm">
						A Solution Success Manager is Quantexa-specific role which a cross between a Customer
						Success Manager and Product Manager. You're responsible for ensuring the solution solves
						the problem it sets out to and all stakeholders understand it's value. Of course, with
						my DNA as an engineer, it also involves a large degree of technical oversight.
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
					quote:
						'Brad is an excellent technical lead. Overall I’d be delighted to work with Brad again and look forward to the opportunity to do so in future.',
					author: 'Director - Big Four Accounting Firm'
				},
				{
					quote:
						'Adapts well to unforeseen issues, positive attitude throughout the engagement, worked well with the team, delivery schedule was kept on track despite the issues and changes. From my perspective can’t recall any negatives.',
					author: 'Senior Manager & Project Sponsor - Big Four Bank'
				},
				{
					author: 'Senior architect',
					quote: `You have an extended knowledge of the infrastructure we run Quantexa on as well, knowing your way around ES and Spark
					
					You are feeling confident when having to tackle new tasks you might not have any prior experience on. This is also a relief to know that the project will not stumble on unexpected timelines because you will be able to make the necessary progress for it.
					
					More importantly, beside your technical knowledge, I'm actually impressed by your business knowledge. This is a very strong suit that you have here and allows you to be on the frontline and lead any meeting with customers with that confidence of yours. I still have in mind this meeting you had in Sydney with (client), presenting the Quantexa capabilities to the customer which ended up as a masterclass of how these meetings should be ran.`
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
			quotes={[
				{
					author: 'Senior architect',
					quote: `He did a fantastic job on (client) project to help us find the right team and people at (client)... 
					
					The outcome of this determination, ambition, and feeling accountable has led us to implement one of our very close to Quantexa best practices projects in Australia in terms of infra, CICD pipeline, projects timeline and kick off and project data and other pre-requisite enablement.
					
					Overall I have known Brad as a people person who is very easy to work with, very keen to keep the ball rolling and willing to go to back to back meetings to ensure the project team are provided with what they need to implement a successful project. He has a very strong communication and analytical skill sets which I think he has managed to develop brilliantly over the course of past two years of his service at Quantexa.`
				}
			]}
		/>
		<Achievement
			title="Investment Opportunity Detection @ Hedge Fund  - Technical lead"
			subtitle="Short-selling investment detection"
			summary="Led design and implementation of international investment opportunity detection platform that automatically surfaces public equites that are likely fraudulent or associated with poor-track-record executives."
			wins={[
				'Designed data model and scoring to identify serial fraudsters and failures',
				'Quantexa first use case',
				"Built out hedge fund's technical team with hiring and training",
				'Developed and brought back novel tools to share with other projects'
			]}
			quotes={[
				{author: 'Principle project manager', quote: `Product knowledge is definitely your strong point and the way you have been able to instruct and guide (client developer) to increase his own capability has been a testament to your and this flows into Planning as with your guidance we have been able to successfully plan a smooth delivery of Q2.0 solution for (client).`}
			]}
		/>

		<Achievement
			title="AML @ Big Four Bank - Technical lead"
			subtitle="Anti money laundering, counter-terrorism, counter child sexual exploitation"
			summary="Led design and implementation of analytics platform for the bank's complex investigations team. The multimillion dollar project built the foundation for subsequent detection, high volume, correspondent banking and potentially master data management projects."
			wins={['Process over a trillion rows of data', 'Scaled to 80 node elasticsearch cluster']}
			quotes={[
				{
					author: 'Senior architect',
					quote: `I have seen Brad's engineering skills and his solution-driven mind set on many occasions at (client) which resonates he is really a great data / software engineer.`
				}
			]}
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
