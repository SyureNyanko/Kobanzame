<template>
  <div>
    <h1>Hello!</h1>
     <button @click="addNote">Add</button>
    <span v-for="item in list" v-bind:key="item.id">
    <note :initialTop="item.initialTop" :initialLeft="item.initialLeft"></note>
    </span>
  </div>
</template>
<script>
import Note from './Note.vue';

export default {
  components: { Note },
  data: function(){
      return {
        list : []
      } 
  },
  methods: {
    addNote: function() {
        this.list.push({initialTop : '100', initialLeft: '100'})
    }
  }
};
</script>
