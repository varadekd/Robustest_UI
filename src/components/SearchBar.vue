<template>
  <div class="SearchBar">
    <form>
      <div class="input-group">
        <input type="text" class="form-control" name="search">
        <div class="input-group-btn">
          <button class="btn btn-primary" type="submit" v-on:click="buttonClick"> Create New Entry </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods:{
    buttonClick: function(){
      return alert('Youjust click the create new entry button');
    }
  }
}
</script>

<style>
</style>
