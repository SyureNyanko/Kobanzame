<template>
  <div :style="classObject">
      {{ val }}
  <div style="position: absolute;" v-drag:header>
    <div class="stick" id="header"></div>
    <div class="note" contenteditable="true">
        {{ val }}
    </div>
  </div>
  </div>
</template>

<script>
import drag from '@branu-jp/v-drag'

export default {
  directives: {
    drag
  },
  props: ['initialVal', 'initialTop', 'initialLeft'],
  data: function(){
      return {
          text: 'default',
          val: this.initialVal,
          classObject: {
              position: 'relative',
              top: '100px',
              left: '100px'
          }
      }
  }
}
</script>
<style scoped>
div.note {
    width: 100px;
    background-color:aqua;
    min-height: 100px;
}
div.stick {
    width: 100px;
    height:25px;
    background-color:aqua;
}
div.outer {
    position: relative;
    top: 90px;
    left:90px;
}

</style>