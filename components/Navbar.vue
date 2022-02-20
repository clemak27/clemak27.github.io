<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        dense
        nav
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Content
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.navi"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<v-app-bar
      absolute
      color="blue"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- todo: add prper title -->
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      selectedItem: 1,
      items: [
        { title: 'Home', icon: 'mdi-home', navi: '/' },
        { title: 'Linux Setup', icon: 'mdi-fedora', navi: 'linux_setup' },
        { title: 'Homelab', icon: 'mdi-nix', navi: 'home_network' },
        { title: 'Random Cat', icon: 'mdi-cat', navi: 'cats' },
        { title: 'About Me', icon: 'mdi-account', navi: 'cv' },
        { title: 'About this page', icon: 'mdi-card-search', navi: 'about' },
      ],
    }),
  }
</script>
