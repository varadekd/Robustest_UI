<template>
  <div class="list">
    <Productdetail></Productdetail>
    <Testicons></Testicons>

  </div>
</template>

<script>
import Productdetail from '@/components/Productdetail'
import Testicons from '@/components/Testicons'

export default {
  name: 'detail',
  components:{
    Productdetail,
    Testicons
  }
}
</script>
