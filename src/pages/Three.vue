<template>
  <div>
    <h4>Example with group transition</h4>
    <input placeholder="Enter to add item" type="text" v-model="userName" @keyup.enter="addItem()"/>
    <button @click="sorts()">Sort</button>
    <transition-group name="list" tag="ul" appear>
      <li v-for="(namx, index) in users" :key="index">{{namx}}</li>
    </transition-group>
  </div> 
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    const userName = ref("")
    const users = ref(["Nguyến Đức Tuấn","Thu Trang","Ngọc Ánh"])
    const addItem = () => {
      users.value.push(userName.value)
      userName.value = ""
    }
    const sorts = () => {
      return users.value.sort()
    }
    return {
      addItem,
      userName,
      users,
      sorts
    }
  }
}
</script>
<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s ease;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>