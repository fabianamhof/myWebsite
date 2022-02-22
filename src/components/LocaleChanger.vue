<template>
  <div class="locale-changer">
    <v-btn v-for="lang in langs" :class="$i18n.locale === lang ? 'underlined' : ''" :key="lang" text @click="changeLang(lang)">{{lang}}</v-btn>
  </div>
</template>

<script>
export default {
  name: "LocaleChanger",
  data(){
    return { langs: ['de', 'en'] }
  },
  methods:{
    changeLang(lang){
      this.$i18n.locale = lang;
      this.$eventBus.$emit("language_changed");
    }
  }
}
</script>

<style scoped>
  .underlined{
    transition: transform .5s;
    text-decoration: underline;
  }
</style>