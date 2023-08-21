<script>
	export let timeline = '2019 - present';
	export let roles = ['Engineer'];
</script>

<section class="flex space-x-12">
	<div>
		<h2 class="text-gray-400">Timeline</h2>
		<span>{timeline}</span>
	</div>
	<div>
		<h2 class="text-gray-400">Role</h2>
		<div class="flex flex-col">
			{#each roles as role}
				<span>{role}</span>
			{/each}
		</div>
	</div>
</section>
