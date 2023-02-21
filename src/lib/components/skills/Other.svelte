<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import TextSkillCard from "$lib/components/skills/TextSkillCard.svelte";
</script>

<SkillSubsection label="Other">
	<SkillsGrid>
		<TextSkillCard name="REST APIs" />
		<TextSkillCard name="Concurrency" />
		<TextSkillCard name="TDD" />
		<TextSkillCard name="CLI Tools" />
		<TextSkillCard name="Websockets" />
	</SkillsGrid>
</SkillSubsection>
