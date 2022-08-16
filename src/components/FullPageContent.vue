<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div id="section0" class="section">
        <v-card height="100%">
          <v-img src="@/assets/me_mountains.jpg" class="white--text align-end" height="90vh">
            <v-card-title class="text-h2 white--text" v-text="$t('section1.greeting')"></v-card-title>
          </v-img>
          <v-card-subtitle class="text-h3 font-weight-thin" v-text="$t('section1.content')"></v-card-subtitle>
        </v-card>
      </div>
      <div id="section1" class="section fp-auto-height-responsive">
        <div class="wrapper">
          <v-card class="content" style="max-width: 70%">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div style="width: 80%">
                <v-card-title class="text-h5 font-weight-regular ma-10">{{ $t("section2.header") }}</v-card-title>
                <i18n class="text-h5 font-weight-thin" path="section2.content">
                  <a place="Elpo" class='link' href="https://www.elpo.eu/">Elpo Bruneck</a>
                  <a place="UIBK" class="link" href="https://www.uibk.ac.at/studium/angebot/ba-informatik-19w/">Computer
                    Science</a>
                </i18n>
              </div>
              <v-avatar style="width: 20%; height: auto" class="ma-5">
                <v-img src="@/assets/me.jpeg" style="border-radius: 50%;"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </div>
      </div>
      <div id="section2" class="section fp-auto-height-responsive">
        <div class="wrapper">
          <h3 class="text-h4 font-weight-thin text-center">{{ $t("section3.header") }}</h3>
          <div style="margin: 0 auto 0  auto; max-width: 50em;">
            <my-timeline @timeline_changed="rebuild()" style="margin: 20px 10px 0px 10px" />
          </div>
        </div>
      </div>
      <div id="section3" class="section">
        <div class="wrapper">
          <h3 class="text-h4 font-weight-thin mb-10 mt-10">{{ $t("section4.MadeWith") }}</h3>
          <div class="d-flex" style="align-items: center; justify-content: center; flex-direction: row;">
            <a :href="item.link" class="zoom" v-for="item in frameworks" :key="item.name">
              <img :src="item.img" />
            </a>
          </div>
          <h3 class="text-h4 font-weight-thin mb-10 mt-10">{{ $t("section4.HostedOn") }}</h3>
          <div class="d-flex" style="align-items: center; justify-content: center; flex-direction: row;">
            <a :href="item.link" class="zoom" v-for="item in resources" :key="item.name">
              <img :src="item.img" />
            </a>
          </div>
          <v-divider class="ma-16"></v-divider>
          <div class="d-flex" style="align-items: center; justify-content: center; flex-direction: row;">
            <a :href="item.link" class="color" v-for="item in links" :key="item.name">
              <img :src="item.img" />
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
  components: {
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
        scrollOverflow: true,
        responsiveWidth: 600,
      },
      frameworks: [
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
      links: [
        {
          name: "Github",
          link: "https://github.com/fabianamhof/myWebsite",
          img: require("@/assets/github.svg")
        }
      ],
      resources: [
        {
          name: "AWS",
          link: "https://aws.amazon.com/de/",
          img: require("@/assets/aws.svg")
        }
      ],
    }
  },
  methods: {
    rebuild() {
      var self = this;
      if (this.$vuetify.breakpoint.name !== 'xs') {
        setTimeout(function () {
          self.$refs.fullpage.api.reBuild();
        }, 100);
      }
    }
  },
  mounted() {
    this.$eventBus.$on("language_changed", () => {
      this.rebuild();
    });
  }
}
</script>

<style scoped>
img {
  float: left;
  width: auto;
  min-width: 60px;
  max-width: 200px;
  height: 7vw;
  min-height: 60px;
  max-height: 200px;
  object-fit: cover;
  margin: 10px;
}

.section {}

.link {
  text-decoration: none;
  color: var(--v-primary-base);
  font-weight: 300;
}

.zoom {
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.5);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.color {
  transition: transform .2s;
}

.color:hover {
  -webkit-transition: -webkit-filter 500ms linear;
  filter: sepia(100%) saturate(1000%) hue-rotate(10deg);
}

.content {
  margin: auto;
  padding: 5%;

}

.wrapper {
  margin-top: 64px;
}

#section1 {
  background: white;
}

#section2 {
  background: white;
}

#section3 {
  background: white;
}
</style>
