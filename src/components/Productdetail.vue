<template>
  <div id="app">
    <!-- Navigation bar -->
    <div class="topnav" id="myTopnav">
      <p style="color:white"> RobustTest </p>
    </div><br>
    <!-- end of navigation bar div -->

    <!-- Main div product detail -->
    <div class="container">
      <!-- Images and Product name div -->
      <div class="detail-container">
        <div class="detail-container__image">
          <img v-bind:src="image" alt="Logo"><br/>
          {{Details.name}} <br/>
          <button class="btn-rounded">Select build URL </button> <br><br>
          <button class="btn-rounded">Latest build URL </button>
        </div>
        <!-- End of images and product name div -->

        <!-- Product detail information -->
        <div class="detail-container__info">
          <p>Package Name:&nbsp;&nbsp;{{Details.apps[2].packageName}}</p>
          <p>Build Details:&nbsp;&nbsp;{{Details.apps[2].label}} v{{Details.apps[2].versionName}} #{{Details.apps[2].versionCode}}</p>
          <p>Build Name:&nbsp;&nbsp;{{Details.apps[2].label}} {{Details.apps[2].os}}</p>
          <p>Version Number:&nbsp;&nbsp;{{Details.apps[2].versionName}}</p>
          <p>Version Code:&nbsp;&nbsp;{{Details.apps[2].versionCode}}</p>
          <p>Uploaded By:&nbsp;&nbsp; {{Details.bugRepo.username}}</p>
          <p>Uploaded On:&nbsp;&nbsp;</p>
          <p>Launch Action:&nbsp;&nbsp;{{Details.apps[2].activityClass}}</p>
          <p>Description:&nbsp;&nbsp;{{Details.apps[2].desc}}</p>
        </div>
        <!-- end of product detail information div -->
      </div>
      <br>



    </div>
    <!-- End of main product detail div -->
  </div>
  <!-- End of main app div -->
</template>



<script>
export default{
  name: 'Productdetail',
  data(){
    return{
      Details: [],
      imageLink:''
    }
  },
  computed :{
    image() {
      return `data:image/png;base64, ${this.imageLink}`
    }
  },
  created: function(){
    this.$http.get('https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/project_detail.json').then(response => {
      this.Details = JSON.parse(response.data);
      console.log(response.data);
    },(error) => {
      console.log(error);
    })
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
.container {
  margin: 15px;
}

.detail-container {
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  height: 300px;
  position: relative;
  padding: 15px 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
}

.detail-container__image,
.detail-container__info,
.detail-container__action {
  margin-right: 25px;
}

.detail-container__image {
  min-width: 250px;
  display: flex;
  justify-content: center;button.btn-rounded {
    display: block;
    width: 130px;
    border-radius: 50em;
    background: #98f;
    outline: none;
    border: none;
    padding: 7px;
    color: white;
    margin: 5px auto;
  }
  align-items: center;
  flex-direction: column;
}

.detail-container__action {
  width: 100%;
}

.detail-container__info {
  width: 100%;
}
</style>
