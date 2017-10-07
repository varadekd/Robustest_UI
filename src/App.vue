<template>
  <div id="app">
    <MainMenu> </MainMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu';

export default {
  name: 'app',
  components:{
    MainMenu
  }
}
</script>

<style>
#app{
  padding-top: 20px;
}
</style>
