<script lang="ts">
	export let label: string;
</script>

<div id={"skills-" + label.toLowerCase().replace(" ", "-")} class="inline-flex items-center justify-center w-full pb-5">
	<hr class="w-full md:w-6/12 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-5" />
	<h2 class="absolute px-5 text-2xl font-bold -translate-x-1/2 left-1/2 bg-gray-900">
		{label}
	</h2>
</div>
<slot />
