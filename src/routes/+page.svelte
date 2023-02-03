<script lang="ts">
	import Header from "$lib/components/header/Header.svelte";
	import HeroSection from "$lib/components/hero/HeroSection.svelte";
	import ExperienceSection from "$lib/components/experience/ExperienceSection.svelte";
	import { onMount } from "svelte";

	// Auto-scroll to the part in the URL fragment
	// this doesn't work automatically for whatever reason
	onMount(() => {
		const url = new URL(window.location.href);
		const hash = url.hash.replace("#", "");
		if (hash !== "") {
			const anchor = document.getElementById(hash);
			anchor.scrollIntoView();
		}
	});
</script>

<div class="h-screen motion-safe:scroll-smooth overflow-y-scroll">
	<Header />
	<main class="relative">
		<HeroSection />
		<ExperienceSection />
	</main>
</div>
