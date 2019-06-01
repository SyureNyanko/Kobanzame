<template>
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 5000 4000" width="5000" height="4000" @mousemove="onDrag">
    <rect @click="triggerDrag" :x="c.x" :y="c.y" :width="c.w" :height="c.dh" class="draggable_area"></rect>
    <rect @click="toggleEdit" :x="c.x" :y="c.y+c.dh" :width="c.w" :height="c.h" class="edit_area"></rect>
    <span v-bind:is="textArea" :x="c.x" :y="c.y+c.dh+13" :width="c.w" :height="c.h" text="c.text"></span>
</svg>
</template>

<script>
import ReadOnlyTextComponent from './ReadOnlyTextComponent.vue'
import EditTextComponent from './EditTextComponent.vue'

export default {
    components:{
        'readOnlyTextComponent': ReadOnlyTextComponent,
        'editTextComponent': EditTextComponent,
    },
    data: function(){
        return {
            dragging: false,
            editing: false,
            c : {x: 22, y: 22, w: 100, h: 100, dh: 10},
            initial_offset : {x:100, y:100},
            text: "Hello World!!!!!!",
            componentTypes: ['readOnlyTextComponent', 'editTextComponent'],
        }
    },

    methods: {
        // eslint-disable-next-line
         triggerDrag: function(e) {
             e = e.changedTouches ? e.changedTouches[0] : e

             if (this.dragging == false) {
                this.initial_offset.x = e.offsetX - this.c.x
                this.initial_offset.y = e.offsetY - this.c.y
                this.dragging = true
                this.editing = false

                this.c.x = e.offsetX - this.initial_offset.x
                this.c.y = e.offsetY - this.initial_offset.y
             } else {
                this.c.x = e.offsetX - this.initial_offset.x
                this.c.y = e.offsetY - this.initial_offset.y
                this.dragging = false
             }

         },
         // eslint-disable-next-line
         onDrag: function(e) {
             e = e.changedTouches ? e.changedTouches[0] : e
             if (this.dragging == true) {
                 this.c.x = e.offsetX - this.initial_offset.x
                 this.c.y = e.offsetY - this.initial_offset.y
             }
         },
         // eslint-disable-next-line
         toggleEdit: function(e){
             // eslint-disable-next-line
             e = e.changedTouches ? e.changedTouches[0] : e 
             if (!this.editing){
                 this.editing = true
                 this.dragging = false
             } else {
                 this.stopEdit() // for debug
             }
         },
         stopEdit: function(){
             //e = e.changedTouches ? e.changedTouches[0] : e
             this.editing = false
         }
     },
     computed: {
         textArea: function(){
             if(this.editing) {
                 return this.componentTypes[1]
             }
             return this.componentTypes[0]
         }

     } 
}
</script>
<style scoped>
rect.draggable_area{
  fill: blue;
  opacity: 0.55;
  stroke: #793;
  stroke-width: 1px;
  cursor: pointer;
}
rect.edit_area{
  fill: red;
  opacity: 0.55;
  stroke: #793;
  stroke-width: 1px;
  cursor: pointer;
}
svg{
    position: absolute;
}
div{
    cursor: pointer;
}
</style>