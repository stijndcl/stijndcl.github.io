<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import FastAPIIcon from "../../../assets/icons/fastapi.svg?component";
	import ReactIcon from "../../../assets/icons/react.svg?component";
	import SvelteIcon from "../../../assets/icons/svelte.svg?component";
	import TailwindIcon from "../../../assets/icons/tailwindcss.svg?component";
	import FlaskIcon from "../../../assets/icons/flask.svg?component";
	import AndroidIcon from "../../../assets/icons/android.svg?component";
	import ComposeIcon from "../../../assets/icons/jetpack_compose.png";
	import KtorIcon from "../../../assets/icons/ktor.svg?component"
</script>

<SkillSubsection label="Frameworks">
	<SkillsGrid>
		<SkillCard name="FastAPI">
			<FastAPIIcon />
		</SkillCard>
		<SkillCard name="ReactJS">
			<ReactIcon />
		</SkillCard>
		<SkillCard name="Svelte">
			<SvelteIcon />
		</SkillCard>
		<SkillCard name="TailwindCSS">
			<TailwindIcon />
		</SkillCard>
		<SkillCard name="Ktor">
			<KtorIcon />
		</SkillCard>
		<SkillCard name="Android">
			<AndroidIcon />
		</SkillCard>
		<SkillCard name="Jetpack Compose">
			<img src={ComposeIcon} alt="Jetpack Compose" />
		</SkillCard>
		<SkillCard name="Flask">
			<FlaskIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
