<script lang="ts">
	import Footer from "$lib/components/footer/Footer.svelte";
	import HeroSection from "$lib/components/hero/HeroSection.svelte";
	import ExperienceSection from "$lib/components/experience/ExperienceSection.svelte";
	import { onMount } from "svelte";
	import PageFadeAnimation from "$lib/components/common/PageFadeAnimation.svelte";
	import { wantsMotion } from "$lib/utils/animation.js";
	import { pageAnimationOver } from "../lib/stores/animations";
	import SkillsSection from "$lib/components/skills/SkillsSection.svelte";
	import ProjectsSection from "$lib/components/projects/ProjectsSection.svelte";

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

<div class="h-screen motion-safe:scroll-smooth overflow-y-scroll custom-scrollbar">
	<PageFadeAnimation>
		<main class="relative">
			<HeroSection />
			<ExperienceSection />
			<SkillsSection />
			<ProjectsSection />
		</main>
	</PageFadeAnimation>
</div>

<style lang="postcss">
	.custom-scrollbar::-webkit-scrollbar {
		width: 16px;
		height: 16px;
	}

	.custom-scrollbar::-webkit-scrollbar-track {
		border-radius: 100vh;
		background: transparent;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: theme(colors.gray.700);
		border-radius: 100vh;
		border: 5px solid theme(colors.gray.900);
	}

	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: theme(colors.gray.600);
	}
</style>
