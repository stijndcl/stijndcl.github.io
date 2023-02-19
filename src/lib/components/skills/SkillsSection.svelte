<script>
	import PortfolioSection from "$lib/components/common/PortfolioSection.svelte";
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import ProgrammingLanguages from "$lib/components/skills/ProgrammingLanguages.svelte";
</script>

<PortfolioSection title="Skills">
	<span class="mb-5 text-gray-500 italic">In order of proficiency and frequency of use</span>
	<ProgrammingLanguages />
	<SkillSubsection label="Frameworks" />
	<SkillSubsection label="Tools" />
	<SkillSubsection label="Database Technologies" />
	<SkillSubsection label="Software" />
	<SkillSubsection label="Other" />
	<SkillSubsection label="#TODO" />
</PortfolioSection>
