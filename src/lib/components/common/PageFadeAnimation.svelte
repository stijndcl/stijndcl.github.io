<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { wantsMotion } from "../../utils/animation";

	let visible = false;
	let reducedMotion = false;

	onMount(() => {
		reducedMotion = wantsMotion();
		visible = true;
	});
</script>

{#if visible}
	<span in:fade>
		<slot />
	</span>
{/if}
