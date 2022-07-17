<script>
	import Frameworks from "$lib/components/About/Me/Frameworks.svelte";
	import Languages from "$lib/components/About/Me/Languages.svelte";
	import OtherTechnologies from "$lib/components/About/Me/OtherTechnologies.svelte";
	import Outline from "$lib/components/About/Me/Outline.svelte";
	import Todo from "$lib/components/About/Me/Todo.svelte";
</script>

<!-- TODO make sidebar stay when scrolling main page -->
<div class="grid grid-cols-12 gap-2">
	<Outline class="col-span-2" />
	<div class="prose m-5 col-span-10">
		<h1>About Me</h1>

		<h2><a id="interests">&#8203</a>Interests</h2>
		<h3><a id="interests-languages">&#8203</a>Languages</h3>
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
