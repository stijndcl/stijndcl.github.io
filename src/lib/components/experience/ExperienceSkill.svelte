<script lang="ts">
	export let tooltip: string;
	export let url: string;
</script>

<!-- TODO tooltip on hover? -->
<a
	title={tooltip}
	href={url}
	target="_blank"
	class="w-6 h-6 supportshover:grayscale supportshover:group-hover:grayscale-0 supportshover:hover:cursor-pointer"
>
	<slot />
</a>
