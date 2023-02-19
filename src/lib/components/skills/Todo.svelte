<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import FlutterIcon from "../../../assets/icons/flutter.png";
	import UnrealIcon from "../../../assets/icons/unreal_engine.svg?component";
	import ComposeIcon from "../../../assets/icons/jetpack_compose.png";
	import ComposeMPFIcon from "../../../assets/icons/compose_mpf.svg?component";
</script>

<SkillSubsection label="TODO">
	<span class="mb-10 text-gray-500 italic">Technologies I still want to learn about in the future</span>
	<SkillsGrid>
		<SkillCard name="Flutter">
			<img src={FlutterIcon} alt="Flutter" />
		</SkillCard>
		<SkillCard name="Unreal Engine">
			<UnrealIcon />
		</SkillCard>
		<SkillCard name="Jetpack Compose">
			<img src={ComposeIcon} alt="Jetpack Compose" />
		</SkillCard>
		<SkillCard name="Compose Multiplatform">
			<ComposeMPFIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
