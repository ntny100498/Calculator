<template>
  <DemoSlot>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis saepe
      molestiae voluptate amet, doloremque, id quis, earum hic magnam quod
      voluptates expedita dolorem eos et dignissimos? Numquam temporibus
      pariatur distinctio?
    </p>
  </DemoSlot>
</template>

<script>
import DemoSlot from '@/pages/DemoSlot.vue'

export default {
  name: 'PageSlot',
  components: {
    DemoSlot,
  },
};
</script>

<style>
</style>