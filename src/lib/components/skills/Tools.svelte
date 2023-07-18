<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import GitIcon from "../../../assets/icons/git.svg?component";
	import TuxIcon from "../../../assets/icons/tux.svg?component";
	import MarkdownIcon from "../../../assets/icons/markdown.svg?component";
	import DockerIcon from "../../../assets/icons/docker.svg?component";
	import LatexIcon from "../../../assets/icons/latex.svg?component";
	import GitHubActions from "../../../assets/icons/github_actions.svg?component";
	import HugoIcon from "../../../assets/icons/hugo.svg?component";
	import GrafanaIcon from "../../../assets/icons/grafana.svg?component";
	import PrometheusIcon from "../../../assets/icons/prometheus.svg?component";
	import KubernetesIcon from "../../../assets/icons/kubernetes.svg?component";
	import ArgoIcon from "../../../assets/icons/argo.svg?component";
	import GCPIcon from "../../../assets/icons/google_cloud.svg?component";
</script>

<SkillSubsection label="Tools">
	<SkillsGrid>
		<SkillCard name="Git">
			<GitIcon />
		</SkillCard>
		<SkillCard name="Linux">
			<TuxIcon />
		</SkillCard>
		<SkillCard name="Markdown">
			<MarkdownIcon />
		</SkillCard>
		<SkillCard name="Docker">
			<DockerIcon />
		</SkillCard>
		<SkillCard name="LaTeX">
			<LatexIcon />
		</SkillCard>
		<SkillCard name="GitHub Actions">
			<GitHubActions />
		</SkillCard>
		<SkillCard name="Hugo">
			<HugoIcon />
		</SkillCard>
		<SkillCard name="Grafana">
			<GrafanaIcon />
		</SkillCard>
		<SkillCard name="Prometheus">
			<PrometheusIcon />
		</SkillCard>
		<SkillCard name="Kubernetes">
			<KubernetesIcon />
		</SkillCard>
		<SkillCard name="Argo">
			<ArgoIcon />
		</SkillCard>
		<SkillCard name="Google Cloud Platform">
			<GCPIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
