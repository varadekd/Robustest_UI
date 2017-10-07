<template>
  <div class="app-container">
    <div class="app-container__item" v-for="item in projectList">
      <center>
        <br>
        <img v-bind:src="image" alt="Logo"><hr>
        <a><strong>{{item.name}}</strong></a>
      </center>
    </div>
 </div>
</template>

<script>
export default{
  name: 'ProjectlistCard',
  data(){
    return{
      projectList: [],
      imageLink: ''
    }
  },
  computed :{
    image() {
      return `data:image/png;base64, ${this.imageLink}`
    }
  },
  created: function(){
    this.$http.get('https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/project_list.json').then(response => {
      this.projectList = JSON.parse(response.data);
    },(error) =>{
      console.log(error)
    });
  },
  methods: {
    fetchImage: function(){
      this.$http.get('https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/project_image.json').then(response =>{
        var data = JSON.parse(response.data);
        this.imageLink = data.result;
        console.log(data.result);
      }, (error) => {
        console.log(error);
      });
    }
  },
  mounted: function(){
    this.fetchImage()
  }
}
</script>

<style>
.app-container{
  display: flex;
  /*justify-content: center;*/
  max-width: 790px;
  height:100%;
  flex-flow: row wrap;
  margin:0 auto;
}

.app-container__item{
  margin:5px;
  width:180px;
  height: 180px;
  border: 1px solid #ddd;
}

.img-width{
  width: 130px
}
</style>
