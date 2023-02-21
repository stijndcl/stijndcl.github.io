<script lang="ts">
	export let name: string | undefined = undefined;
</script>

<div
	class="rounded-lg border border-gray-700 p-6 supportshover:hover:scale-110 supportshover:hover:border-cyan-400 motion-safe:transition-[border-color,transform] motion-safe:duration-300 motion-safe:ease-in-out"
>
	<div class="w-16">
		<slot />
	</div>
	<!-- TODO figure out how to add the label while keeping this square	-->
	<!--{#if name !== undefined}-->
	<!--	<div>-->
	<!--		{name}-->
	<!--	</div>-->
	<!--{/if}-->
</div>
