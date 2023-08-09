<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Background from '$lib/Background.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="mt-8 absolute z-20 w-full flex flex-col items-center">
	<Navbar />
</div>
<main
	class="flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-950 min-h-screen text-white px-8"
>
	<Background />
	<section class="z-10 flex flex-col items-center mt-16 mb-32">
		<slot />
	</section>
	<Footer />
</main>
