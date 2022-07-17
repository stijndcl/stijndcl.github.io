<script>
	import Frameworks from "$lib/components/About/Me/Frameworks.svelte";
	import Languages from "$lib/components/About/Me/Languages.svelte";
	import OtherTechnologies from "$lib/components/About/Me/OtherTechnologies.svelte";
	import Outline from "$lib/components/About/Me/Outline.svelte";
	import Todo from "$lib/components/About/Me/Todo.svelte";
</script>

<div class="fixed flex w-full h-full">
	<Outline />
	<div class="prose pl-5 m-5 flex-1 overflow-auto">
		<h1>About Me</h1>

		<h2><a id="skills">&#8203</a>Skills</h2>
		<h3><a id="skills-languages">&#8203</a>Languages</h3>
		<Languages />
		<h3>Frameworks</h3>
		<Frameworks />
		<h3>Other Technologies</h3>
		<OtherTechnologies />
		<h3># To-Do</h3>
		<p>There are a lot of technologies I'd still like to learn.</p>
		<Todo />
	</div>
</div>
