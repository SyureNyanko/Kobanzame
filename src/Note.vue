<template>
<span>
<edit-modal-component v-if="isModalActive">
  { clickで表示したいmodal_content部分 }
</edit-modal-component>
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 5000 4000" width="5000" height="4000" @mousemove="onDrag">
    <rect @click="triggerDrag" :x="c.x" :y="c.y" :width="c.w" :height="c.dh" class="draggable_area"></rect>
    <rect @click="toggleEdit" :x="c.x" :y="c.y+c.dh" :width="c.w" :height="c.h" class="edit_area"></rect>
    <read-only-text-component @click="toggleEdit" v-bind:text="text" :x="c.x" :y="c.y+c.dh+13" :width="c.w"></read-only-text-component>
</svg>
</span>
</template>

<script>
import ReadOnlyTextComponent from './ReadOnlyTextComponent.vue'
import EditModalComponent from './EditModalComponent.vue'

export default {
    components: { ReadOnlyTextComponent, EditModalComponent },
    data: function(){
        return {
            dragging: false,
            editing: false,
            c : {x: 22, y: 22, w: 100, h: 100, dh: 10},
            initial_offset : {x:100, y:100},
            text: 'Hello World!!!!!!',
            isModalActive: false,
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
             this.isModalActive = !this.isModalActive 

         },
         stopEdit: function(){
             //e = e.changedTouches ? e.changedTouches[0] : e
             this.editing = false
         }
     }
}
</script>
<style scoped>
rect.draggable_area{
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
    fill: yellow;
    cursor: pointer;
}
</style>