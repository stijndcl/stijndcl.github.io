<script lang="ts">
	export let label: string;
</script>

<div
	id={"skills-" + label.toLowerCase().replace(" ", "-")}
	class="inline-flex items-center justify-center w-full [&:not(:first)]:pt-10 pb-5"
>
	<hr class="w-full md:w-6/12 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-5" />
	<span
		class="absolute px-5 text-2xl font-bold text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
		>{label}</span
	>
</div>
<slot />
