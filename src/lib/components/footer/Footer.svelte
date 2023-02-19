<script>
	import FooterIcon from "$lib/components/footer/FooterIcon.svelte";
	import LinkedInIcon from "../../../assets/icons/linkedin.svg?component";
	import GitHubIcon from "../../../assets/icons/github.svg?component";
</script>

<footer class="flex flex-row fixed bottom-0 justify-center my-3 py-3">
	<FooterIcon username="stijndcl" url="https://www.github.com/stijndcl/">
		<GitHubIcon />
	</FooterIcon>
	<div class="md:hidden border-r-2 border-gray-600 mx-1" />
	<FooterIcon username="stijn-de-clercq" url="https://www.linkedin.com/in/stijn-de-clercq/">
		<LinkedInIcon />
	</FooterIcon>
</footer>
