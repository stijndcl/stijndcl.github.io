<script lang="ts">
	export let title: string;
</script>

<section id={title.toLowerCase()} class="min-h-screen flex flex-col text-center items-center z-0 pt-8 pb-16">
	<h2 class="text-3xl md:text-5xl font-semibold pb-8">{title}</h2>
	<slot />
</section>
