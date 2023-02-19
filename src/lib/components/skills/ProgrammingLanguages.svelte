<script>
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import PythonIcon from "../../../assets/icons/python.svg?component";
	import TSIcon from "../../../assets/icons/typescript.svg?component";
</script>

<SkillSubsection label="Programming Languages">
	<SkillsGrid>
		<SkillCard name="Python">
			<PythonIcon />
		</SkillCard>
		<SkillCard name="TypeScript">
			<TSIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
