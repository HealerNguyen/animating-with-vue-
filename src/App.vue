<template>
  <div>
    <img class="logo-vue" alt="Vue logo" src="./assets/logo.png" />
  </div>
  <router-link to='/'><b>Trang chủ</b></router-link> |
  <router-link to='/one'><b>Modal</b></router-link> |
  <router-link to='/two'><b>Page</b></router-link> |
  <router-link to='/three'><b>Group</b></router-link> |

  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-vue {
  width: 100px;
}
.composition {
  padding: 16px;
}
b {
  color: #1967d2;
}
/* .fade-enter {
  opacity: 0;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-leave-to {
  opacity: 0;
} */

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>