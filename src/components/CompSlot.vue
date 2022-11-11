<template>
  <SlotLayout>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis saepe
      molestiae voluptate amet, doloremque, id quis, earum hic magnam quod
      voluptates expedita dolorem eos et dignissimos? Numquam temporibus
      pariatur distinctio?
    </p>
  </SlotLayout>
</template>

<script>
import SlotLayout from './SlotLayout.vue'

export default {
  name: 'CompSlot',
  components: {
    SlotLayout,
  },
};
</script>

<style>
</style>