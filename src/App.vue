<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(100, 100, 100, 0.2)"
    >
      <div class="d-flex align-center">
        <h1 class="text-h4 font-weight-light white--text">Fabian Amhof</h1>
      </div>
      <v-spacer/>
      <LocaleChanger/>
    </v-app-bar>
    <router-view/>
  </v-app>
</template>

<script>

import LocaleChanger from "@/components/LocaleChanger";
export default {
  name: 'App',
  components: {LocaleChanger},
  data: () => ({
    //TODO Decrease size
  }),
};
</script>

<style>
.my-app.v-application .primary--text {
  color: white !important;
}
</style>
