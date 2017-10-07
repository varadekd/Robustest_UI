<template>
  <div class="MainMenu">
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <router-link to="/">
          <a class="navbar-brand">Robustest</a>
        </router-link>
        <router-link to ="/list">
          <a class="navbar-brand"> Product List </a>
        </router-link>
        <router-link to ="/detail">
          <a class="navbar-brand"> Product Detail </a>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style>
</style>
