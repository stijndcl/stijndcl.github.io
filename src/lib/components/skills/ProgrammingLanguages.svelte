<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import PythonIcon from "../../../assets/icons/python.svg?component";
	import TSIcon from "../../../assets/icons/typescript.svg?component";
	import JSIcon from "../../../assets/icons/javascript.svg?component";
	import GoIcon from "../../../assets/icons/go.svg?component";
	import KotlinIcon from "../../../assets/icons/kotlin.svg?component";
	import RustIcon from "../../../assets/icons/rust.svg?component";
	import CIcon from "../../../assets/icons/c.svg?component";
	import CppIcon from "../../../assets/icons/cpp.svg?component";
	import JavaIcon from "../../../assets/icons/java.svg?component";
	import HTMLIcon from "../../../assets/icons/html5.svg?component";
	import CSSIcon from "../../../assets/icons/css3.svg?component";
</script>

<SkillSubsection label="Programming Languages">
	<SkillsGrid>
		<SkillCard name="Python">
			<PythonIcon />
		</SkillCard>
		<SkillCard name="Go">
			<GoIcon />
		</SkillCard>
		<SkillCard name="Kotlin">
			<KotlinIcon />
		</SkillCard>
		<SkillCard name="Rust">
			<RustIcon />
		</SkillCard>
		<SkillCard name="TypeScript">
			<TSIcon />
		</SkillCard>
		<SkillCard name="JavaScript">
			<JSIcon />
		</SkillCard>
		<SkillCard name="C">
			<CIcon />
		</SkillCard>
		<SkillCard name="Java">
			<JavaIcon />
		</SkillCard>
		<SkillCard name="C++">
			<CppIcon />
		</SkillCard>
		<SkillCard name="HTML5">
			<HTMLIcon />
		</SkillCard>
		<SkillCard name="CSS3">
			<CSSIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
