<script lang="ts">
	let _class: string;
	export { _class as class };
</script>

<aside class={`m-2 drawer ${_class}`}>
	<div class="drawer-side">
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
			<li class="menu-title">
				<span class="px-0 hover:link" href="#interests">Interests</span>
			</li>
			<li><a href="#interests-languages">Languages</a></li>
		</ul>
	</div>
</aside>
