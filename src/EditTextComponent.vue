<template>
<textarea> a </textarea>
</template>
<script>
export default {
    props: ['text']
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
    position: absolute;
    z-index: 9999;
}
</style>

