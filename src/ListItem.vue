<template>
  <li>{{ value }}</li>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
      type: Number,
    },
  },
};
</script>
