<script lang="ts">
	import PortfolioSection from "$lib/components/common/PortfolioSection.svelte";
	import ProgrammingLanguages from "$lib/components/skills/ProgrammingLanguages.svelte";
	import Frameworks from "$lib/components/skills/Frameworks.svelte";
	import Tools from "$lib/components/skills/Tools.svelte";
	import DatabaseTechnologies from "$lib/components/skills/DatabaseTechnologies.svelte";
	import Software from "$lib/components/skills/Software.svelte";
	import Todo from "$lib/components/skills/Todo.svelte";
	import Other from "$lib/components/skills/Other.svelte";
</script>

<PortfolioSection title="Skills">
	<span class="mb-5 text-gray-500 italic">In order of proficiency and frequency of use</span>
	<ProgrammingLanguages />
	<Frameworks />
	<Tools />
	<DatabaseTechnologies />
	<Software />
	<Other />
	<Todo />
</PortfolioSection>
