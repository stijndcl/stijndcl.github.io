<script lang="ts">
	import SkillSubsection from "$lib/components/skills/SkillSubsection.svelte";
	import SkillsGrid from "$lib/components/skills/SkillsGrid.svelte";
	import SkillCard from "$lib/components/skills/SkillCard.svelte";
	import PostgresIcon from "../../../assets/icons/postgresql.svg?component";
	import MongoDBIcon from "../../../assets/icons/mongodb.svg?component";
	import RedisIcon from "../../../assets/icons/redis.svg?component";
	import MariaDBIcon from "../../../assets/icons/mariadb.svg?component";
	import FirestoreIcon from "../../../assets/icons/firestore.svg?component";
</script>

<SkillSubsection label="Database Technologies">
	<SkillsGrid>
		<SkillCard name="PostgreSQL">
			<PostgresIcon />
		</SkillCard>
		<SkillCard name="MongoDB">
			<MongoDBIcon />
		</SkillCard>
		<SkillCard name="Redis">
			<RedisIcon />
		</SkillCard>
		<SkillCard name="MariaDB">
			<MariaDBIcon />
		</SkillCard>
		<SkillCard name="Firebase Firestore">
			<FirestoreIcon />
		</SkillCard>
	</SkillsGrid>
</SkillSubsection>
