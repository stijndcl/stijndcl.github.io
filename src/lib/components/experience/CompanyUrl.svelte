<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<a class="supportshover:hover:cursor-pointer supportshover:hover:underline" href={url} target="_blank">{name}</a>
