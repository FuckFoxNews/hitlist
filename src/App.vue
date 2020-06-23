<template>
  <v-app>
    <v-navigation-drawer
      id="nav-drawer"
      clipped
      dark>
      <v-subheader class="mt-4 grey--text text--darken-1">
        HITLIST
      </v-subheader>
      <v-list dense>
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
    hitlistNav: [
      {
        title: 'Submit',
        path: '',
        icon: 'mdi-crosshairs',
      },
      {
        title: 'Review',
        path: '',
        icon: 'mdi-message-text-outline',
      },
      {
        title: 'Expiring',
        path: '',
        icon: 'mdi-timer-sand',
      },
    ],
  }),
  components: {
  },
};
</script>

<style>
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
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1rem;
}

#nav-drawer {
  margin-top: 48px;
  background-image: linear-gradient(var(--gradient-1), var(--gradient-2));
}
</style>
