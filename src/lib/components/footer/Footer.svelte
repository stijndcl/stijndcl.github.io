<script>
	import FooterIcon from "$lib/components/footer/FooterIcon.svelte";
	import LinkedInIcon from "../../../assets/icons/linkedin.svg?component";
	import GitHubIcon from "../../../assets/icons/github.svg?component";
</script>

<footer class="flex flex-row fixed bottom-0 justify-center my-3 py-3">
	<FooterIcon brandColour="#fff" platform="GitHub" username="stijndcl" url="https://www.github.com/stijndcl/">
		<GitHubIcon />
	</FooterIcon>
	<FooterIcon
		brandColour="#fff"
		platform="LinkedIn"
		username="stijn-de-clercq"
		url="https://www.linkedin.com/in/stijn-de-clercq/"
	>
		<LinkedInIcon />
	</FooterIcon>
</footer>
