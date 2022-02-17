<template>
  <div>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div id="section0" class="section" v-bind:style="{'background': 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(' + require('@/assets/me_mountains.jpg') + ')'}">
      <div class="wrapper">
      <div class="content">
        <p class="text-h3 text-md-h1 font-weight-thin white--text text-center ma-10">Welcome to my website.</p>
        <v-img style="border-radius: 50%; margin: auto;" width="20%" src="@/assets/me.jpeg"/>
        <p class="text-h4 text-md-h3 font-weight-thin white--text text-center ma-10">Here you will get to know me a little better...</p>
      </div>
      </div>
    </div>
    <div id="section1" class="section">
      <div class="wrapper">
        <div class="content" style="max-width: 700px">
        <h3 class="text-h5 font-weight-regular ma-10">About me...</h3>
        <p class="text-h5 font-weight-thin">I was born in 1997 and live in Welsberg, South Tyrol. After some great years at the TFO Bruneck I was working at <a class="link" href="https://www.elpo.eu/">Elpo Bruneck</a>. There I was responsible for developing building control systems. After 3 years I decided to develop further and went to Innsbruck to study Computer Science. Now I am in the sixth semester and work on my Bachelor-Thesis about artificial intelligence. In the last three years I could gain a great overview over multiple areas in computer science and software developing. Next to my passion for software development, especially with web-technology, I love practicing sports like Hiking, Soccer and Tennis.
        </p>
        </div>
      </div>
    </div>
    <div id="section2" class="section" >
      <div class="wrapper">
        <h3 class="text-h4 font-weight-thin">Curriculum</h3>
        <my-timeline @timeline_changed="rebuild()" style="margin: 20px auto 0px auto"/>
      </div>
    </div>
  </full-page>
  </div>
</template>

<script>
  import Timeline from './Timeline'
  export default {
    name: 'FullPageContent',
    components:{
      'my-timeline': Timeline
    },
    data: function () {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          scrollOverflow: true
        }
      }
    },
    methods:{
      rebuild(){
        this.$refs.fullpage.api.reBuild();
      }
    }
  }
</script>

<style scoped>
  .section{
    text-align: center;
  }
  .link{
    text-decoration: none;
    color: var(--v-primary-base);
    font-weight: 300;
  }
  .content{
    margin: auto;
    padding: 5%;
  }
  .wrapper{
    margin-top: 64px;
  }

  #section0{
    background: linear-gradient(#72839f,#9e867a);
  }
  #section1{
    background: linear-gradient(#9e867a,#5c371c);
  }
  #section2{
    background: linear-gradient(#5c371c,#130f04);
  }

</style>
