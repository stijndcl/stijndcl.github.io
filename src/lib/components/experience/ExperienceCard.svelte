<script lang="ts">
	import CompanyUrl from "$lib/components/experience/CompanyUrl.svelte";

	export let companyName: string;
	export let companyUrl: string;
	export let role: string;
	export let startDate: Date;
	export let endDate: Date | undefined = undefined;

	function formatDates(): string {
		const localeOptions: Intl.DateTimeFormatOptions = {
			month: "short",
			year: "numeric",
		};

		const startFormatted = startDate.toLocaleDateString("en-GB", localeOptions);
		const endFormatted = endDate != undefined ? ` — ${endDate.toLocaleDateString("en-GB", localeOptions)}` : "";

		return startFormatted + endFormatted;
	}
</script>

<article
	class="p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-lg shadow-black text-start supportshover:opacity-40 supportshover:hover:opacity-100 supportshover:hover:border-cyan-400 motion-safe:transition-colors motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-in-out"
>
	<div class="flex justify-between items-center mb-5 text-gray-500">
		<span class="font-bold text-xl text-white mr-5">
			<CompanyUrl name={companyName} url={companyUrl} />
		</span>
		<span class="text-sm">{formatDates()}</span>
	</div>
	<h2 class="mb-2 text-2xl font-bold tracking-tight text-white">{role}</h2>
</article>
