<template>
  <div>
  <full-page :options="options" id="fullpage" ref="fullpage">
    <div id="section0" class="section" :style="{'background': 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(' + require('@/assets/me_mountains.jpg') + ')', 'background-size': 'cover'}">
      <div class="wrapper">
      <div class="content">
        <p class="text-h3 text-md-h1 font-weight-thin white--text text-center ma-10">Welcome to my website.</p>
        <v-img style="border-radius: 50%; margin: auto;" min-width="7cm" width="20%" src="@/assets/me.jpeg"/>
        <p class="text-h4 text-md-h3 font-weight-thin white--text text-center ma-10">Here you will get to know me a little better...</p>
      </div>
      </div>
    </div>
    <div id="section1" class="section">
      <div class="wrapper">
        <div class="content" style="max-width: 700px">
        <h3 class="text-h5 font-weight-regular ma-10">About me...</h3>
        <p class="text-h5 font-weight-thin">I was born in 1997 and live in Welsberg, South Tyrol. After some great years at the TFO Bruneck I was working at <a class="link" href="https://www.elpo.eu/">Elpo Bruneck</a>. There I was responsible for developing building control systems. After 3 years I decided to develop further and went to Innsbruck to study <a class="link" href="https://www.uibk.ac.at/studium/angebot/ba-informatik-19w/">Computer Science</a>. Now I am in the sixth semester and work on my Bachelor-Thesis about artificial intelligence. In the last three years I could gain a great overview over multiple areas in computer science and software developing. Next to my passion for software development, especially with web-technology, I love practicing sports like Hiking, Soccer and Tennis.
        </p>
        </div>
      </div>
    </div>
    <div id="section2" class="section" >
      <div class="wrapper">
        <h3 class="text-h4 font-weight-thin">Curriculum</h3>
        <div style="margin: 0 auto 0  auto; max-width: 50em;">
        <my-timeline @timeline_changed="rebuild()" style="margin: 20px 10px 0px 10px"/>
        </div>
      </div>
    </div>
    <div id="section3" class="section" >
      <div class="wrapper">
        <h3 class="text-h4 font-weight-thin mb-10 mt-10">Made with...</h3>
        <div class="d-flex" style="align-items: center; justify-content: center; flex-direction: row;">
          <a :href="item.link" class="zoom" v-for="item in frameworks" :key="item.name">
            <img :src="item.img"/>
          </a>
        </div>
        <h3 class="text-h4 font-weight-thin mb-10 mt-10">Hosted on...</h3>
        <div class="d-flex" style="align-items: center; justify-content: center; flex-direction: row;">
          <a :href="item.link" class="zoom" v-for="item in resources" :key="item.name">
            <img :src="item.img"/>
          </a>
        </div>
        <v-divider class="ma-16"></v-divider>
        <div class="d-flex" style="align-items: center; justify-content: center; flex-direction: row;">
          <a :href="item.link" class="color" v-for="item in links" :key="item.name">
            <img :src="item.img"/>
          </a>
        </div>
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
          anchors: ['page1', 'page2', 'page3', 'page4'],
          scrollOverflow: true
        },
        frameworks:[
          {
            name: "Vue",
            link: "https://vuejs.org/",
            img: require("@/assets/vue.png")
          },
          {
            name: "Vuetify",
            link: "https://vuetifyjs.com/",
            img: require("@/assets/vuetify.png")
          },
          {
            name: "FullpageJs",
            link: "https://alvarotrigo.com/fullPage/",
            img: require("@/assets/fullpagejs.png")
          }
        ],
        links:[
          {
            name: "Github",
            link: "https://github.com/fabianamhof/myWebsite",
            img: require("@/assets/github.svg")
          }
        ],
        resources:[
          {
            name: "AWS",
            link: "https://aws.amazon.com/de/",
            img: require("@/assets/aws.svg")
          }
        ],
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
  img{
    float: left;
    width:  auto;
    min-width: 60px;
    max-width: 200px;
    height: 7vw;
    min-height: 60px;
    max-height: 200px;
    object-fit: cover;
    margin: 10px;
  }
  .section{
    text-align: center;
  }
  .link{
    text-decoration: none;
    color: var(--v-primary-base);
    font-weight: 300;
  }
  .zoom{
    transition: transform .2s;
  }
  .zoom:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  .color{
    transition: transform .2s;
  }

  .color:hover{
    -webkit-transition : -webkit-filter 500ms linear;
    filter:  sepia(100%) saturate(1000%) hue-rotate(10deg);
  }
  .content{
    margin: auto;
    padding: 5%;


  }
  .wrapper{
    margin-top: 64px;
  }

  #section1{
    background: linear-gradient(#617084, #8b949c);
  }
  #section2{
    background: linear-gradient(#8b949c, #465164);
  }
  #section3{
    background: linear-gradient(#465164, #262c38);
  }

</style>
