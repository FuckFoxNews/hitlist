<template>
  <v-app>
    <v-navigation-drawer
      id="nav-drawer"
      clipped
      dark>
      <v-list>
        <v-list-item
          v-for="(item, i) in generalNav"
          :key="i"
          link>
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-subheader class="grey--text text--darken-1" dense>
        HITLIST
      </v-subheader>
      <v-list>
        <v-list-item
          v-for="(item, i) in hitlistNav"
          :key="i"
          link>
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-subheader class="grey--text text--darken-1" dense>
        ORGANIZATION
      </v-subheader>
      <v-list>
        <v-list-item
          v-for="(item, i) in organizationNav"
          :key="i"
          link>
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary">
      <div class="d-flex align-center">
        <h1 id="title">
          PROTEST WITH YOUR WALLET
        </h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    generalNav: [
      {
        title: 'My Profile',
        path: '',
        icon: 'mdi-account-circle-outline',
      },
      {
        title: 'Tasks',
        path: '',
        icon: 'mdi-checkbox-multiple-marked-outline',
      },
    ],
    hitlistNav: [
      {
        title: 'New Report',
        path: '',
        icon: 'mdi-crosshairs-gps',
      },
      {
        title: 'All Reports',
        path: '',
        icon: 'mdi-layers-triple-outline',
      },
    ],
    organizationNav: [
      {
        title: 'Ongoing Projects',
        path: '',
        icon: 'mdi-sprout-outline',
      },
      {
        title: 'Directory',
        path: '',
        icon: 'mdi-book-account-outline',
      },
    ],
  }),
  components: {
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --primary: #FFFFFF;
  --accent-yellow: #F6B912;
  --accent-red: #DD4063;
  --accent-green: #58CA8E;
  --accent-aqua: #15A7F9;
  --accent-blue: #3A6BCF;
  --gradient-1: #069273;
  --gradient-2: #94C83F;
}
#title {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.8rem;
}

p {
  font-family: 'Roboto', sans-serif;
}

#nav-drawer {
  margin-top: 64px;
}
</style>
