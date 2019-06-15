<template>
  <div>
    <div class="control-panel">
     <md-button class="md-icon-button md-raised md-primary" @click="addNote">
       <md-icon>add</md-icon>
     </md-button>
     <md-button class="md-icon-button md-raised md-primary" @click="saveNote">
       <md-icon>save</md-icon>
     </md-button>
     <md-button type="submit" class="md-icon-button md-raised md-primary" @click="loadNote">
       <md-icon>open_in_browser</md-icon>
       <input ref="uploadDom" style="display: none" @change="loadNote" type="file">
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

function stickyNotesDownload(json_format_var) {
  let blob = new Blob([JSON.stringify(json_format_var, null, 2)], {type : 'application/json'})
  let link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'note.json';
  link.click()
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
        this.list.push({initialTop : x, initialiLeft: y})
    },
    saveNote: function(){
      let download_temp = []
      for (var i = 0 ; i < Object.keys(this.$refs).length ; i++) {
        // exclude other refs
        if(this.$refs['note' + i]) {
          let position = this.$refs['note' + i]['0'].getPosition();
          let size = this.$refs['note' + i]['0'].getSize();
          let text = this.$refs['note' + i]['0'].getText();
          download_temp.push(Object.assign(text, position, size));
        }
      }
      stickyNotesDownload(download_temp);
    },
    loadNote: function() {
      this.$refs.uploadDom.click();
    }
  }
}
</script>
<style scoped>
div.control-panel {
  position: fixed;
}

</style>