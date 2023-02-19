<script lang="ts">
	export let href: string;
</script>

<a
	href={`#${href}`}
	class="text-gray-600 uppercase supportshover:hover:cursor-pointer supportshover:hover:text-cyan-400 motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out"
>
	{href}
</a>
