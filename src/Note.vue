<template>
  <div style="position: absolute;" v-drag:header>
    <div class="stick" id="header"></div>
    <div class="note" contenteditable="true">
        {{ text }}
    </div>
  </div>
</template>

<script>
import drag from '@branu-jp/v-drag'

export default {
  directives: {
    drag
  },
  data: function(){
      return {
          text: 'default'
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

</style>