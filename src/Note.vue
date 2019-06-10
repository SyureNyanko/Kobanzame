<template>
 <span>
  <div :style="classObject" class="entire-note">
  <div style="position: absolute;" @mousedown="Debug" v-drag:header>
    <div class="stick" id="header"></div>
    <div class="note" contenteditable="true">
    </div>
  </div>
  </div>
  </span>
</template>

<script>
// import drag from '@branu-jp/v-drag'
import drag from '@syurenyanko/v-drag'

export default {
  directives: {
    drag
  },
  props: ['initialTop', 'initialLeft'],
  data: function(){
      return {
          text: 'default',
          classObject: {
              position: 'relative',
              top: this.initialTop + 'px',
              left: this.initialLeft + 'px'
          }
      } 
  },
  methods: {
      Debug: function(event){
          // eslint-disable-next-line
          console.log('(X:' + event.clientX + ', Y:' + event.clientY + ')');
      } 
  }
}
</script>
<style scoped>
div.note {
    width: 100px;
    background-color:#fff176

;
    min-height: 100px;
}
div.stick {
    width: 100px;
    height:25px;
    background-color:#fff176

;
}

div.stick:hover {
    background-color:#cabf45;
}
div.entire-note {
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
}

</style>