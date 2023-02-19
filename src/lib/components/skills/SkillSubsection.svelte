<script lang="ts">
	export let label: string;
</script>

<div class="inline-flex items-center justify-center w-full">
	<hr class="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-5" />
	<span
		class="absolute px-3 text-2xl font-bold text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
		>{label}</span
	>
</div>
