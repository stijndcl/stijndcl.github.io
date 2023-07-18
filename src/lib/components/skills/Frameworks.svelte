<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import FastAPIIcon from "../../../assets/icons/fastapi.svg?component";
	import SQLAlchemyIcon from "../../../assets/icons/sqlalchemy.svg?component";
	import ReactIcon from "../../../assets/icons/react.svg?component";
	import SvelteIcon from "../../../assets/icons/svelte.svg?component";
	import Tailwind from "../../../assets/icons/tailwindcss.svg?component";
	import Flask from "../../../assets/icons/flask.svg?component";
	import Bootstrap from "../../../assets/icons/bootstrap.svg?component";
	import Vue from "../../../assets/icons/vue.svg?component";
	import Android from "../../../assets/icons/android.svg?component";
	import Fiber from "../../../assets/icons/fiber.svg?component";
	import Electron from "../../../assets/icons/electron.svg?component";
	import Helm from "../../../assets/icons/helm.svg?component";
</script>

<SkillSubsection label="Frameworks">
	<SkillsGrid>
		<SkillCard name="SQLAlchemy">
			<SQLAlchemyIcon />
		</SkillCard>
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
			<Tailwind />
		</SkillCard>
		<SkillCard name="Flask">
			<Flask />
		</SkillCard>
		<SkillCard name="Bootstrap">
			<Bootstrap />
		</SkillCard>
		<SkillCard name="VueJS">
			<Vue />
		</SkillCard>
		<SkillCard name="Android">
			<Android />
		</SkillCard>
		<SkillCard name="Fiber">
			<Fiber />
		</SkillCard>
		<SkillCard name="Electron">
			<Electron />
		</SkillCard>
		<SkillCard name="Helm">
			<Helm />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
