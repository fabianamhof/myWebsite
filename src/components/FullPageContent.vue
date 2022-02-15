<template>
  <div>
  <full-page :options="options" id="fullpage" >
    <div class="section" v-bind:style="{'background': 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(' + require('@/assets/me_mountains.jpg') + ')'}">
      <p class="text-h2 font-weight-thin white--text text-center ma-10">Welcome to my website.</p>
      <v-img style="border-radius: 50%; margin: auto;" width="20%" src="@/assets/me.jpeg"/>
      <p class="text-h4 font-weight-thin white--text text-center ma-10">Here you will get to know me a little better</p>
    </div>
    <div class="section">
      <div class="slide">
        <h3>Slide 2.1</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.2</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.3</h3>
      </div>
    </div>
    <div class="section">
      <h3>Section 3</h3>
    </div>
  </full-page>
  </div>
</template>

<script>
  export default {
    name: 'FullPageContent',

    data: function () {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
  }
</script>

<style>

</style>
