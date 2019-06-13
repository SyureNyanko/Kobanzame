<template>
 <span>
  <div :style="classObject" class="entire-note">
  <div class=notePosition style="position: absolute;" @mousedown="Debug" v-drag:header>
    <div class="stick" id="header"></div>
    <div class="note" contenteditable="true">
    </div>
  </div>
  </div>
  </span>
</template>

<script>
/**
 * Use for to acquire NotePositon position
 */ 
function getAbsolutePosition(elm){
    const {left, top} = elm.getBoundingClientRect();
    const {left: bleft, top: btop} = document.body.getBoundingClientRect();
    let ret = {left: left - bleft + 1, top: top - btop + 1};
    // eslint-disable-next-line
    console.log(left, top);
    return ret;
}

/**
 * Notes Size (except bar)
 */
function getSizeOfNote(elm){
    let height = elm.clientHeight;
    let width = elm.clientWidth;
    return {height: height, width: width}
}


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
      },
      getPosition: function(){
          return getAbsolutePosition(this.$el.getElementsByClassName('notePosition')[0]);
      },
      getSize: function(){
          return getSizeOfNote(this.$el.getElementsByClassName('note')[0]);
      },
      getText: function(){
          return {text : this.$el.getElementsByClassName('note')[0].innerHTML};
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