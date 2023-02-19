<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import PyCharmIcon from "../../../assets/icons/pycharm.png";
	import IntelliJIcon from "../../../assets/icons/intellij.png";
	import GoLandIcon from "../../../assets/icons/goland.png";
	import CLionIcon from "../../../assets/icons/clion.png";
	import TyporaIcon from "../../../assets/icons/typora.png";
	import PostmanIcon from "../../../assets/icons/postman.svg?component";
	import InkscapeIcon from "../../../assets/icons/inkscape.png";
	import VSCodeIcon from "../../../assets/icons/vscode.png";
</script>

<!-- Some icons here are .png's instead of .svg's, because of
 		a bug with linear gradients in the svg plugin -->
<SkillSubsection label="Software">
	<SkillsGrid>
		<SkillCard name="PyCharm">
			<img src={PyCharmIcon} alt="PyCharm" />
		</SkillCard>
		<SkillCard name="IntelliJ IDEA">
			<img src={IntelliJIcon} alt="IntelliJ IDEA" />
		</SkillCard>
		<SkillCard name="GoLand">
			<img src={GoLandIcon} alt="GoLand" />
		</SkillCard>
		<SkillCard name="CLion">
			<img src={CLionIcon} alt="CLion" />
		</SkillCard>
		<SkillCard name="Typora">
			<img src={TyporaIcon} alt="Typora" />
		</SkillCard>
		<SkillCard name="Postman">
			<PostmanIcon />
		</SkillCard>
		<SkillCard name="Inkscape">
			<!--	This is very ironically not an SVG		-->
			<img src={InkscapeIcon} alt="Inkscape" />
		</SkillCard>
		<SkillCard name="Visual Studio Code">
			<img src={VSCodeIcon} alt="Visual Studio Code" />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
