<script lang="ts">
	import "../app.css";
</script>

<slot />

<style lang="postcss">
	:global(html) {
		color: theme(colors.white);
		background-color: theme(colors.gray.900);
	}

	@media (prefers-reduced-motion: no-preference) {
		:global(html) {
			scroll-behavior: smooth;
		}
	}
</style>
