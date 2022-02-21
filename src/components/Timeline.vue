<template>
  <v-timeline style="margin: 10px" light :dense="this.$vuetify.breakpoint.name === 'xs'">
    <v-timeline-item v-for="item in timeline_data" :key="item.header" :color="item.color">
      <template v-slot:opposite>
        <p class="font-weight-thin" style="margin: 0">{{item.from + (item.to == null ? '' : ' - ' + item.to)}}</p>
      </template>
      <v-card @mouseover="item.show = true; $emit('timeline_changed')" @mouseleave="item.show = false; $emit('timeline_changed')">
        <v-card-title>{{ $t(item.header) }}</v-card-title>
        <v-expand-transition>
          <div v-show="item.show">
            <v-divider></v-divider>
            <v-card-text>{{$t(item.content)}}</v-card-text>
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
          header: "section3.itemBirth.header",
          content: "section3.itemBirth.content",
          from: '22.11.1997',
          color: '#8B9BB5',
          show: false,
        },
        {
          header: "section3.itemElementary.header",
          content: "section3.itemElementary.content",
          from: '2003',
          to: '2008',
          color: '#D0CCC3',
          show: false,
        },
        {
          header: "section3.itemMiddleSchool.header",
          content: "section3.itemMiddleSchool.content",
          from: '2008',
          to: '2011',
          color: '#E5B07E',
          show: false,
        },
        {
          header: "section3.itemHighSchool.header",
          content: "section3.itemHighSchool.content",
          from: '2011',
          to: '2016',
          color: '#A86E49',
          show: false,
        },
        {
          header: "section3.itemElpo.header",
          content: "section3.itemElpo.content",
          from: '2016',
          to: '2019',
          color: '#4F2F16',
          show: false,
        },
        {
          header: "section3.itemComputerScience.header",
          content: "section3.itemComputerScience.content",
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