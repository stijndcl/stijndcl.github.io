<script lang="ts">
	export let href: string;
</script>

<a href={`#${href}`} class="text-gray-600 uppercase hover:cursor-pointer">
	{href}
</a>
