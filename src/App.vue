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
       <input ref="uploadDom" style="display: none" @change="submitNote" type="file" id="file">
     </md-button>
     <md-button class="md-icon-button md-raised md-primary" @click="deleteAllNote">
       <md-icon>delete</md-icon>
     </md-button>
    </div>
    <span v-for="(item, index) in list" v-bind:key="index">
    <note :ref="'note' + index" :top="item.top" :left="item.left" :width="item.width" :height="item.height" :text="item.text" :id="index"></note>
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
        this.list.push({top : x, left: y, width: 100, height: 100, text:""})
    },
    deleteAllNote: function(){
       this.list = [];
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
    },
    submitNote: function(e){
      const file = e.target.files[0];
      var json = [];
      if (!file) { return false }
        let reader = new FileReader();
          reader.onload = (e) => {
          json = JSON.parse(e.target.result);
          this.addToSavedList(json);
        }

      reader.readAsText(file);
      document.getElementById("file").value = '';
    },
    addToSavedList: function(json){
      this.list = [];
      for (var item of json) {
        this.list.push(item);
      }
      // eslint-disable-next-line
      console.log(this.list);
    }
  }
}

</script>
<style scoped>
div.control-panel {
  position: fixed;
}

</style>