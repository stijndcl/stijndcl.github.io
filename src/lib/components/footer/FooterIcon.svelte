<script lang="ts">
	export let platform: string;
	export let username: string;
	export let url: string;
</script>

<a
	class="opacity-100 flex flex-row hover:cursor-pointer text-gray-600 hover:text-cyan-400 fill-gray-600 hover:fill-cyan-400 motion-safe:transition-colors motion-safe:ease-in-out motion-safe:duration-200"
	href={url}
	target="_blank"
>
	<div class="w-5">
		<slot />
	</div>
	<span class="mx-4 hidden md:block">{username}</span>
</a>
