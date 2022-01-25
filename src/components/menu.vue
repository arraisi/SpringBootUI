<template>
	<v-app>
		<!-- App Bar -->
		<v-app-bar dense absolute color="rgba(255, 255, 255, 0.75) !important" style="backdrop-filter: blur(10px); padding-left: 56px" elevate-on-scroll scroll-target="#scrolling-techniques-7">
			<v-toolbar-title :style="{ paddingLeft: '8px' }"><b>Quarkus UI</b></v-toolbar-title>
			<v-spacer></v-spacer>
			<v-divider class="mx-4" inset vertical></v-divider>
			<v-btn small class="mr-1" icon @click="logout">
				<v-icon color="primary">mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>
		<!-- App Bar end -->

		<v-navigation-drawer app v-model="drawer" absolute permanent expand-on-hover color="rgba(255, 255, 255, 0.75) !important" style="backdrop-filter: blur(10px)">
			<v-list>
				<v-list-item class="px-2">
					<v-list-item-avatar>
						<v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
					</v-list-item-avatar>
				</v-list-item>

				<v-list-item link>
					<v-list-item-content>
						<v-list-item-title class="text-h6"> {{ $store.state.principal.name }} </v-list-item-title>
						<v-list-item-subtitle>{{ $store.state.principal.email }}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list nav dense>
				<v-list-item to="/person" link>
					<v-list-item-icon>
						<v-icon>mdi-account-multiple</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Person</v-list-item-title>
				</v-list-item>
				<v-list-item to="/product" link>
					<v-list-item-icon>
						<v-icon>mdi-storefront</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Product</v-list-item-title>
				</v-list-item>
				<v-list-item to="/shop" link>
					<v-list-item-icon>
						<v-icon>mdi-basket</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Shop</v-list-item-title>
				</v-list-item>
			</v-list>

			<!-- <template v-slot:append>
				<div class="pa-2">
					<v-btn block> Logout </v-btn>
				</div>
			</template> -->
		</v-navigation-drawer>

		<!-- Sizes your content based upon application components -->
		<v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="100vh">
			<v-main
				:style="{
					backgroundImage: `url('layered-waves-haikei-dark.png')`,
					backgroundSize: 'cover',
					paddingLeft: '56px',
					paddingTop: '63px',
					paddingBottom: '0px',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'row'
				}"
			>
				<v-container fluid>
					<router-view :key="$route.fullPath"></router-view>
				</v-container>
			</v-main>
		</v-sheet>

		<v-footer app>
			<!-- -->
		</v-footer>

		<!-- <img v-show="$root.loader.value" src="loader.svg" class="loader" /> -->
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null,
		collapseOnScroll: true,
		admins: [
			["Management", "mdi-account-multiple-outline"],
			["Settings", "mdi-cog-outline"]
		],
		cruds: [
			["Create", "mdi-plus-outline"],
			["Read", "mdi-file-outline"],
			["Update", "mdi-update"],
			["Delete", "mdi-delete"]
		]
	}),
	methods: {
		logout() {
			this.$store
				.dispatch("logout")
				.then(() => {
					this.$router.push("/");
				})
				.catch(() => {});
		}
	}
};
</script>

<style>
	/* .v-list .v-list-item--active {
							color: darkblue;
						} */
</style>