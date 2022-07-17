<script>
	import Frameworks from "$lib/components/About/Me/Frameworks.svelte";
	import Languages from "$lib/components/About/Me/Languages.svelte";
	import OtherTechnologies from "$lib/components/About/Me/OtherTechnologies.svelte";
	import Outline from "$lib/components/About/Me/Outline.svelte";
	import Todo from "$lib/components/About/Me/Todo.svelte";
	import ReferableLink from "$lib/components/Common/ReferableLink.svelte";
</script>

<div class="fixed flex">
	<Outline />
	<!-- TODO fix scrollbar -->
	<div class="prose pl-5 m-5 flex-1 overflow-auto">
		<h1>About Me</h1>

		<h2><ReferableLink id="skills">Skills</ReferableLink></h2>
		<p><i>In order of proficiency and frequency of use</i></p>
		<h3><ReferableLink id="skills-languages">Languages</ReferableLink></h3>
		<Languages />
		<h3><ReferableLink id="skills-frameworks">Frameworks</ReferableLink></h3>
		<Frameworks />
		<h3><ReferableLink id="skills-other-technologies">Other Technologies</ReferableLink></h3>
		<OtherTechnologies />
		<h3><ReferableLink id="skills-todo"># Todo</ReferableLink></h3>
		<p>There are a lot of technologies I'd still like to learn about.</p>
		<Todo />
	</div>
</div>
