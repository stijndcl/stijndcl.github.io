<script>
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import PythonIcon from "../../../assets/icons/python.svg?component";
</script>

<SkillSubsection label="Programming Languages">
	<SkillsGrid>
		<SkillCard name="Python">
			<PythonIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
