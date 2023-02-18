<script lang="ts">
	export let platform: string;
	export let username: string;
	export let url: string;
</script>

<a
	class="opacity-100 mx-3 flex flex-row supportshover:hover:cursor-pointer text-gray-600 supportshover:hover:text-white fill-gray-600 supportshover:hover:fill-white motion-safe:transition-colors motion-safe:ease-in-out motion-safe:duration-200"
	href={url}
	target="_blank"
	rel="noreferrer"
>
	<div class="w-5 h-5">
		<slot />
	</div>
	<span class="mx-4 hidden md:block">{username}</span>
</a>
