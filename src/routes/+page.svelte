<script lang="ts">
	import Header from "$lib/components/header/Header.svelte";
	import HeroSection from "$lib/components/hero/HeroSection.svelte";
	import ExperienceSection from "$lib/components/experience/ExperienceSection.svelte";
	import { onMount } from "svelte";
	import PageFadeAnimation from "$lib/components/common/PageFadeAnimation.svelte";
	import { wantsMotion } from "$lib/utils/animation.js";

	// Auto-scroll to the part in the URL fragment
	// this doesn't work automatically for whatever reason
	onMount(() => {
		setTimeout(
			() => {
				const url = new URL(window.location.href);
				const hash = url.hash.replace("#", "");
				if (hash !== "") {
					const anchor = document.getElementById(hash);
					anchor.scrollIntoView();
				}
			},
			wantsMotion() ? 1000 : 0
		);
	});
</script>

<div class="h-screen motion-safe:scroll-smooth overflow-y-scroll">
	<Header />
	<PageFadeAnimation>
		<main class="relative">
			<HeroSection />
			<ExperienceSection />
		</main>
	</PageFadeAnimation>
</div>
