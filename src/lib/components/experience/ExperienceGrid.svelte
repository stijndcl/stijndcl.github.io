<script>
	import ExperienceCard from "$lib/components/experience/ExperienceCard.svelte";
	import ArgoIcon from "../../../assets/icons/argo.svg?component";
	import DeliverectIcon from "../../../assets/icons/deliverect.svg?component";
	import HelmIcon from "../../../assets/icons/helm.svg?component";
	import KubernetesIcon from "../../../assets/icons/kubernetes.svg?component";
	import ExperienceSkill from "$lib/components/experience/ExperienceSkill.svelte";
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
			<!--			<DeliverectIcon slot="icon" />-->
			<svelte:fragment slot="skills-icons">
				<ExperienceSkill>
					<KubernetesIcon />
				</ExperienceSkill>
				<ExperienceSkill>
					<HelmIcon />
				</ExperienceSkill>
				<ExperienceSkill>
					<ArgoIcon />
				</ExperienceSkill>
			</svelte:fragment>
		</ExperienceCard>
		<ExperienceCard
			companyName="Deliverect"
			companyUrl="https://deliverect.com/"
			role="Backend Developer"
			startDate={new Date(2022, 6)}
		>
			<!--			<DeliverectIcon slot="icon" />-->
		</ExperienceCard>
		<ExperienceCard
			companyName="Ghent University"
			companyUrl="https://www.ugent.be/en"
			role="Software Developer"
			startDate={new Date(2021, 7)}
			endDate={new Date(2021, 11)}
		>
			<!--			<DeliverectIcon slot="icon" />-->
		</ExperienceCard>
		<ExperienceCard
			companyName="Deliverect"
			companyUrl="https://deliverect.com/"
			role="Backend Developer"
			startDate={new Date(2021, 6)}
		>
			<!--			<DeliverectIcon slot="icon" />-->
		</ExperienceCard>
	</div>
</div>
