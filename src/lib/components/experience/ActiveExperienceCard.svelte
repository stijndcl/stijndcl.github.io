<script lang="ts">
	import { setContext } from "svelte";
	import CompanyUrl from "$lib/components/experience/CompanyUrl.svelte";

	export let companyName: string;
	export let companyUrl: string;
	export let role: string;
	export let startDate: Date;
	export let projectUrl: string | null = null;

	function formatDates(): string {
		const localeOptions: Intl.DateTimeFormatOptions = {
			month: "short",
			year: "numeric",
		};

		const startFormatted = startDate.toLocaleDateString("en-GB", localeOptions);
		return startFormatted + " — Now";
	}

	setContext("active", { active: true });
</script>

<article
	class="mx-2 md:mx-32 lg:mx-0 p-6 bg-gray-900 motion-safe:supportshover:hover:group-hover/grid:scale-105 motion-safe:supportshover:group-hover/grid:[&:not(:hover)]:scale-95 rounded-lg border border-lighthouseOrange shadow-lg shadow-black text-start group/card motion-safe:transition motion-safe:duration-300 motion-safe:ease-in-out"
>
	<div class="flex justify-between items-center mb-5 text-gray-500">
		<span class="font-bold text-xl text-white mr-5">
			<CompanyUrl name={companyName} url={companyUrl}>
				<slot name="company-icon" slot="company-icon" />
			</CompanyUrl>
		</span>
		<span class="text-sm text-right">{formatDates()}</span>
	</div>
	<h2 class="mb-2 text-2xl font-bold tracking-tight text-white">{role}</h2>
	<div class="flex space-x-3">
		<slot name="skills-icons" />
	</div>
	<p class="mt-5">
		<slot />
	</p>
	{#if projectUrl !== null}
		<div class="mt-5 text-sm text-gray-500">
			Project URL:
			<a href={projectUrl} target="_blank" rel="noreferrer" class="hover:underline">
				{projectUrl}
			</a>
		</div>
	{/if}
</article>
