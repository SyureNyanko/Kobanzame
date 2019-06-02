<template>
<div>
    hello
</div>
</template>
<script>
export default {
    props: ['text']
}

</script>
<style scoped>
.p-modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  &.is-open {
    visibility: visible;
    opacity: 1;
    z-index: 100;
  }
}
</style>

