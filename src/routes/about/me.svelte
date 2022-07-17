<script>
	import Languages from "$lib/components/About/Me/Languages.svelte";
	import Outline from "$lib/components/About/Me/Outline.svelte";
	import Todo from "$lib/components/About/Me/Todo.svelte";
</script>

<!-- TODO make sidebar stay when scrolling main page -->
<div class="grid grid-cols-12 gap-2">
	<Outline class="col-span-2" />
	<div class="prose m-5 col-span-10">
		<h1>About Me</h1>

		<h2>Interests</h2>
		<h3>Languages</h3>
		<Languages />

		<h3>Frameworks & Tools</h3>
		<h3># To-Do</h3>
		<p>There are a lot of technologies I'd still like to learn.</p>
		<Todo />
	</div>
</div>
