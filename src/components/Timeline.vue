<template>
  <v-timeline style="margin: 10px" light :dense="this.$vuetify.breakpoint.name === 'xs'">
    <v-timeline-item v-for="item in timeline_data" :key="item.header" :color="item.color">
      <template v-slot:opposite>
        <p class="font-weight-thin" style="margin: 0">{{item.from + (item.to == null ? '' : ' - ' + item.to)}}</p>
      </template>
      <v-card @mouseover="item.show = true; $emit('timeline_changed')" @mouseleave="item.show = false; $emit('timeline_changed')">
        <v-card-title>{{item.header}}</v-card-title>
        <v-expand-transition>
          <div v-show="item.show">
            <v-divider></v-divider>
            <v-card-text>{{item.content}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>

export default {
  name: "Timeline",
  props: ['timeline_changed'],
  data: function () {
    return {
      timeline_data: [
        {
          header: 'Birth',
          content: 'Born in 1997',
          from: '22.11.1997',
          color: '#8B9BB5',
          show: false,
        },
        {
          header: 'Elementary School',
          content: 'Attended elementary school in Welsberg',
          from: '2003',
          to: '2008',
          color: '#D0CCC3',
          show: false,
        },
        {
          header: 'Middle School',
          content: 'Attended middle school in Welsberg',
          from: '2008',
          to: '2011',
          color: '#E5B07E',
          show: false,
        },
        {
          header: 'High School',
          content: 'Attended technological high school in Bruneck. After two year I have chosen to specialize in electrical engineering and automation and so I got basic knowledge of programming and electronics.',
          from: '2011',
          to: '2016',
          color: '#A86E49',
          show: false,
        },
        {
          header: 'Elpo',
          content: 'After the high school I decided to work as a smart building system developer at Elpo in Bruneck. By programming smart homes, intelligent lighting systems I was able to gain skills in KNX but also some Javascript.',
          from: '2016',
          to: '2019',
          color: '#4F2F16',
          show: false,
        },
        {
          header: 'Studies in Computer Science',
          content: 'After 3 exciting years I felt it was time to educate further and dive deeper into the software engineering area. Therefore starting studying computer science was the most straightforward decision, and it turned out to be a good one. Right now I am writing my bachelor thesis about artificial intelligence.',
          from: '2019',
          to: 'now',
          color: '#1F1607',
          show: false,
        },
      ]
    }
    },
}
</script>

<style scoped>
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>