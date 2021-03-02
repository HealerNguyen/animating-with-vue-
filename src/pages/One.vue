<template>
  <div>
    <h4>Example with transition</h4>
    <button @click="toggleModal()">Open Modal</button>
    <div class="modal" v-if="isOpen">
      <button @click="toggleModal()">Close Modal</button>
    </div>
  </div>  
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    const isOpen = ref(false)
    const toggleModal = () => {
      return isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggleModal
    }
  }
}
</script>
<style scoped>
  .modal {
    width: 300px;
    background-color: gray;
    margin: auto;
    text-align: center;
    padding: 64px 48px;
    margin-top: 24px;
  }
  .v-enter {
    opacity: 0;
  }
</style>