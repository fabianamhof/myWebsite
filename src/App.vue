<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
    >
      <div class="d-flex align-center">
        <h1 class="text-h4 font-weight-light white--text">Fabian Amhof</h1>
      </div>
    </v-app-bar>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.my-app.v-application .primary--text {
  color: white !important;
}
</style>
