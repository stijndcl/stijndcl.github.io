<script lang="ts">
	import Header from "$lib/components/header/Header.svelte";
	import HeroSection from "$lib/components/hero/HeroSection.svelte";
	import ExperienceSection from "$lib/components/experience/ExperienceSection.svelte";
	import { onMount } from "svelte";
	import PageFadeAnimation from "$lib/components/common/PageFadeAnimation.svelte";
	import { wantsMotion } from "$lib/utils/animation.js";
	import { pageAnimationOver } from "../lib/stores/animations";
	import SkillsSection from "$lib/components/skills/SkillsSection.svelte";

	// Auto-scroll to the part in the URL fragment
	// this doesn't work automatically for whatever reason
	onMount(() => {
		// Wait for the animation to finish
		pageAnimationOver.subscribe((v) => {
			if (!v) return;

			setTimeout(
				() => {
					const url = new URL(window.location.href);
					const hash = url.hash.replace("#", "");
					if (hash !== "") {
						const anchor = document.getElementById(hash);
						anchor.scrollIntoView();
					}
				},
				wantsMotion() ? 200 : 0
			);
		});
	});
</script>

<div class="h-screen motion-safe:scroll-smooth overflow-y-scroll">
	<Header />
	<PageFadeAnimation>
		<main class="relative">
			<HeroSection />
			<ExperienceSection />
			<SkillsSection />
		</main>
	</PageFadeAnimation>
</div>
