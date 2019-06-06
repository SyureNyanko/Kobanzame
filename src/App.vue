<template>
  <div>
    <h1>Hello!</h1>
    <note initialVal="ああ" initialTop="100" initialLeft="100"></note>
  </div>
</template>
<script>
import Note from './Note.vue';

export default {
  components: { Note },
};
</script>
