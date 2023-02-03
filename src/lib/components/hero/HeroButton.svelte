<script lang="ts">
	export let href: string;
</script>

<a
	href={`#${href}`}
	class="text-gray-600 uppercase hover:cursor-pointer hover:text-cyan-400 motion-safe:transition-colors motion-safe:duration-200 motion-safe:ease-in-out"
>
	{href}
</a>
