<script lang="ts">
	import CompanyIcon from "$lib/components/experience/CompanyIcon.svelte";

	export let name: string;
	export let url: string;
</script>

<div class="flex flex-row">
	<CompanyIcon>
		<slot name="company-icon" />
	</CompanyIcon>
	<a class="supportshover:hover:cursor-pointer supportshover:hover:underline my-auto" href={url} target="_blank">
		{name}
	</a>
</div>
