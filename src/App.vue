<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item active-class="green"
                v-for="item in items"
                :key="item.title"
                :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card>
      <v-toolbar color="green" tile>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Vue Test App with Vuetify</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn :key="item.title"
                 v-for="item in items"
                 elevation="0"
                 text
                 :to="item.url">
            <v-icon left color="black">{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </v-card>

    <v-container>
      <router-view></router-view>
    </v-container>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
              {title: `Home`, icon: `mdi-home`, url: `/`},
              {title: `Login`, icon: `mdi-lock`, url: `/login`},
              {title: `Registration`, icon: `mdi-face`, url: `/registration`},
              {title: `Orders`, icon: `mdi-bookmark`, url: `/orders`},
              {title: `New ad`, icon: `mdi-note-plus`, url: `/new`},
              {title: `My ads`, icon: `mdi-view-list`, url: `/list`},
              ],
      drawer: false
    }
  }
}
</script>

<style>

</style>