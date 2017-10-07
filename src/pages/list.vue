<template>
  <div class="list">
    <div class="container">
      <SearchBar></SearchBar><br/>
      <ProjectlistCard></ProjectlistCard>
    </div>
  </div>
</template>

<script>
import ProjectlistCard from '@/components/ProjectlistCard'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'list',
  components:{
    ProjectlistCard,
    SearchBar
  }
}
</script>
