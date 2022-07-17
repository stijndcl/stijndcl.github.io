<script lang="ts">
	export let id: string;
</script>

<div class="hover:link">
	<slot />
	<a {id}>&#8203</a>
</div>
