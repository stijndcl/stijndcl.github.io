<script>
	import HeroButtonContainer from "$lib/components/hero/HeroButtonContainer.svelte";
	import HeroButton from "$lib/components/hero/HeroButton.svelte";
</script>

<section class="min-h-screen flex flex-col text-center items-center justify-center z-0">
	<h1 class="font-semibold text-4xl md:text-6xl">Stijn De Clercq</h1>
	<HeroButtonContainer>
		<HeroButton href="experience" />
		<span class="text-gray-600 px-2"> · </span>
		<HeroButton href="skills" />
	</HeroButtonContainer>
</section>
