<script lang="ts">
	export let tooltip: string;
	export let url: string;
</script>

<!-- TODO tooltip on hover? -->
<a
	title={tooltip}
	href={url}
	target="_blank"
	rel="noreferrer"
	class="w-6 h-6 supportshover:grayscale supportshover:group-hover/card:grayscale-0 supportshover:hover:cursor-pointer"
>
	<slot />
</a>
