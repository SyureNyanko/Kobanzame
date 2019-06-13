<template>
  <div>
    <div class="control-panel">
     <md-button class="md-icon-button md-raised md-primary" @click="addNote">
       <md-icon>add</md-icon>
     </md-button>
     <md-button class="md-icon-button md-raised md-primary" @click="saveNote">
       <md-icon>save</md-icon>
     </md-button>
    </div>
    <span v-for="(item, index) in list" v-bind:key="index">
    <note :ref="'note' + index" :initialTop="item.initialTop" :initialLeft="item.initialLeft"></note>
    </span>
  </div>
</template>
<script>
import Note from './Note.vue';
import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export default {
  components: { Note },
  data: function(){
      return {
        list : []
      } 
  },
  methods: {
    addNote: function() {
      var x = getRandomInt(window.innerHeight - 50) + 25;
      var y = getRandomInt(window.innerWidth);
        this.list.push({initialTop : x, initialLeft: y})
    },
    saveNote: function(){
      for (var i = 0 ; i < Object.keys(this.$refs).length ; i++) {
        // eslint-disable-next-line
        console.log(this.$refs['note' + i]['0']);
         // eslint-disable-next-line
        console.log(this.$refs['note' + i]['0'].getPosition());
      }
    }
  }
}
</script>
<style scoped>
div.control-panel {
  position: fixed;
}

</style>