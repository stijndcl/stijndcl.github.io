<script>
	import ExperienceCard from "$lib/components/experience/ExperienceCard.svelte";
	import DeliverectIcon from "../../../assets/icons/deliverect.svg?component";
	import UGentIcon from "../../../assets/icons/ghent_university.svg?component";
	import Kubernetes from "$lib/components/experience/skills/Kubernetes.svelte";
	import Helm from "$lib/components/experience/skills/Helm.svelte";
	import Argo from "$lib/components/experience/skills/Argo.svelte";
	import Python from "$lib/components/experience/skills/Python.svelte";
	import Prometheus from "$lib/components/experience/skills/Prometheus.svelte";
	import Grafana from "$lib/components/experience/skills/Grafana.svelte";
	import MongoDB from "$lib/components/experience/skills/MongoDB.svelte";
	import GoogleCloud from "$lib/components/experience/skills/GoogleCloud.svelte";
	import Flask from "$lib/components/experience/skills/Flask.svelte";
	import TypeScript from "$lib/components/experience/skills/TypeScript.svelte";
	import Vue from "$lib/components/experience/skills/Vue.svelte";
</script>

<div class="mx-auto max-w-screen-xl lg:px-6">
	<div class="grid gap-8 lg:grid-cols-2">
		<ExperienceCard
			companyName="Deliverect"
			companyUrl="https://deliverect.com/"
			role="Infrastructure Engineer"
			startDate={new Date(2022, 9)}
			endDate={new Date(2022, 11)}
		>
			<DeliverectIcon slot="company-icon" />
			<svelte:fragment slot="skills-icons">
				<Kubernetes />
				<Helm />
				<Argo />
				<GoogleCloud />
			</svelte:fragment>
			Created a CD for in-house applications using Argo CD & Helm Charts to create and run custom workflows with Argo Workflows,
			deployed onto a Kubernetes cluster.
		</ExperienceCard>
		<ExperienceCard
			companyName="Deliverect"
			companyUrl="https://deliverect.com/"
			role="Backend Developer"
			startDate={new Date(2022, 6)}
		>
			<DeliverectIcon slot="company-icon" />
			<svelte:fragment slot="skills-icons">
				<Python />
				<MongoDB />
				<Grafana />
				<Prometheus />
			</svelte:fragment>
			Worked on the core product, alongside various inside tools.
		</ExperienceCard>
		<ExperienceCard
			companyName="Ghent University"
			companyUrl="https://www.ugent.be/en"
			role="Software Developer"
			startDate={new Date(2021, 7)}
			endDate={new Date(2021, 11)}
			projectUrl="https://github.com/dodona-edu/judge-html"
		>
			<UGentIcon slot="company-icon" />
			<svelte:fragment slot="skills-icons">
				<Python />
			</svelte:fragment>
			Created an HTML and CSS judge for Dodona, a platform that helps students to learn how to code by providing automated
			feedback on exercises.
		</ExperienceCard>
		<ExperienceCard
			companyName="Deliverect"
			companyUrl="https://deliverect.com/"
			role="Software Developer"
			startDate={new Date(2021, 6)}
		>
			<DeliverectIcon slot="company-icon" />
			<svelte:fragment slot="skills-icons">
				<Python />
				<Flask />
				<GoogleCloud />
				<TypeScript />
				<Vue />
			</svelte:fragment>
			Created a REST API for an SMS and email service, and a tool that automatically generates and posts personalized pamflets
			and flyers to potential future customers.
		</ExperienceCard>
	</div>
</div>
