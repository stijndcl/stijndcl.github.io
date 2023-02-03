<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { pageAnimationOver } from "../../stores/animations";

	let visible = false;

	onMount(() => {
		visible = true;
	});

	function onAnimationOver() {
		pageAnimationOver.set(true);
	}
</script>

{#if visible}
	<span in:fade on:introend={onAnimationOver}>
		<slot />
	</span>
{/if}
