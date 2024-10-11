<script lang="ts">
	import { getContext } from "svelte";

	export let tooltip: string;
	export let url: string;

	// @ts-expect-error: context is always set, but impossible to type
	const { active } = getContext("active");
</script>

<!-- TODO tooltip on hover? -->
<a
	title={tooltip}
	href={url}
	target="_blank"
	rel="noreferrer"
	class={`w-6 h-6 supportshover:hover:cursor-pointer ${active ? "" : "supportshover:grayscale supportshover:group-hover/card:grayscale-0"}`}
>
	<slot />
</a>
