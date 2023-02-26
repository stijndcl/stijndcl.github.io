<script lang="ts">
	export let name: string | undefined = undefined;
</script>

<div class="group/card">
	<div
		class="inline-block rounded-lg border border-gray-700 p-6 shadow-lg shadow-black/50 supportshover:group-hover/card:scale-110 supportshover:group-hover/card:border-cyan-400 motion-safe:transition-[border-color,transform] motion-safe:duration-300 motion-safe:ease-in-out"
	>
		<div class="w-16">
			<slot />
		</div>
	</div>
	<div
		class="py-3 font-bold text-gray-500 supportshover:group-hover/card:text-cyan-400 motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
	>
		{name}
	</div>
</div>
