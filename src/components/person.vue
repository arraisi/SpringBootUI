<template>
	<v-col>
		<v-card class="py-6" rounded="lg" color="rgba(255, 255, 255, 0.75) !important" style="backdrop-filter: blur(10px)">
			<v-row no-gutters class="px-8 d-flex flex-row" align="center">
				<h3>Person</h3>
				<v-spacer></v-spacer>
				<v-text-field v-model="search" append-icon="mdi-magnify" hide-details="true" dense label="Search" clearable style="max-width: 400px"></v-text-field>
			</v-row>
			<v-divider class="mx-8 my-4"></v-divider>
			<v-data-table
				class="mx-8 elevation-2"
				:footer-props="{
					'items-per-page-options': [50, 100, 200, -1]
				}"
				:search="search"
				:items-per-page="50"
				:headers="headers"
				:items="data"
				:loading="loading"
			>
				<template v-slot:[`item.active`]="{ item }">
					<v-icon color="success" v-if="item.active == true">mdi-check</v-icon>
					<v-icon color="primary" v-else>mdi-minus</v-icon>
				</template>
			</v-data-table>
		</v-card>
	</v-col>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		loading: true,
		search: "",
		data: [],
		options: {},
		headers: [
			{ text: "ID", value: "id" },
			{ text: "Name", value: "name" },
			{ text: "Email", value: "email" },
			{ text: "Active", value: "active" }
		]
	}),
	watch: {
		options: {
			handler() {
				this.personList();
			}
		},
		deep: true
	},
	methods: {
		personList() {
			this.loading = true;
			axios.get("/api/person").then((response) => {
				this.loading = false;
				this.data = response.data;
			});
		}
	},
	mounted() {
		this.personList();
	}
};
</script>
