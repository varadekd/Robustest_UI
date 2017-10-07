<template>
  <div class="Testicon">
      <!-- Additional details -->
      <div class="icon-container">
        <!--  Icon for Manual test -->
        <div class="icon-container__item">
          <center>
            <img src="../assets/manual.png" style="width:128px" v-on:click="MsgManual">
            <p>Manual</p>
          </center>
        </div>
        <!-- end of Manual test-->

        <!--  Icon for Automate test -->
        <div class="icon-container__item">
          <center>
            <img src="../assets/target.png" style="width:128px" v-on:click="MsgTarget"><br> Automate
          </center>
        </div>
        <!-- end of automate test-->

        <!--  Icon for  Test Cases -->
        <div class="icon-container__item">
          <center>
            <img src="../assets/tag.png" style="width:128px" v-on:click="MsgTag"><br> Test Cases
          </center>
        </div>
        <!-- end of test cases-->

        <!--  Icon for test suits-->
        <div class="icon-container__item">
          <center>
            <img src="../assets/brief.png" style="width:128px" v-on:click="MsgBrief"><br> Test Suits
          </center>
        </div>
        <!-- end of test suits-->

        <!--  Icon for test -->
        <div class="icon-container__item" data-toggle="modal" data-target="#Devicepop">
          <center>
            <img src="../assets/news.png" style="width:128px"><br>
            <p>Test Run</p>
          </center>
        </div>
        <!-- end of test suits-->
      </div>
      <!-- End of Addtional Detail -->


      <!-- Pop content start here -->
      <div id="Devicepop" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="popup">
          <div class="grid-container">

            <!-- for available devices -->
            <div class="product-block" v-for="x in Devices.available">
              <div class="product-block__img">
                <center>
                  <img src="image.jpg" style="width:100px" alt="Device Image"></center>
              </div>
              <div class="product-block__detail" >
                <div class="product-heading">
                  {{x.name}}
                </div>
                <ul>
                  <li>v{{x.version}}</li>
                  <li>{{x.resolution}}</li>
                </ul>
                <button class="product-btn" v-on:click="showMessage">Select</button>
              </div>
            </div>

            <!-- For offline devices -->
            <div class="product-block"  v-for="x in Devices.offline">
              <div class="product-block__img">
                <center>
                  <img src="image.jpg" style="width:100px" alt="Device Image"></center>
              </div>
              <div class="product-block__detail">
                <div class="product-heading">
                  {{x.name}}
                </div>
                <ul>
                  <li>v{{x.version}}</li>
                  <li>{{x.resolution}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
  export default{
    name: 'Testicon',
    data(){
      return{
        Devices: []
      }
    },
    created:function(){
      this.$http.get('https://raw.githubusercontent.com/izinga/UI_DEMO/master/json/device_list.json').then(response => {
        this.Devices = JSON.parse(response.data);
        console.log(response.data);
      },(error) => {
        console.log(error);
      });
    },
    methods:{
      MsgManual: function(){
        return alert('You can perform manual testing from here!');
      },
      MsgTarget: function(){
        return alert('You can perform automation testing from here!')
      },
      MsgTag: function(){
        return alert('Test cases can be viewed!');
      },
      MsgBrief: function(){
        return alert('Test Suits can be viewed!');
      },
      showMessage: function(){
        return alert('This device is avaiable for testing');
      }
    }
  }
</script>

<style>
/* Main CSS for test isons */
.icon-container {
  display: flex;
  /*justify-content: center;*/
  max-width: 990px;
  height: 100%;
  flex-flow: row wrap;
  margin: 0 auto;
}

.icon-container__item {
  margin: 5px;
  width: 180px;
  height: 180px;
  border: 1px solid #ddd;
}

/* Pop CSS Goes here */
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 70%;
  height: 40%;
  position: relative;
  transition: all 5s ease-in-out;
}


.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}


/* CSS for content wrap in pop-up */
.grid-container{
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

.product-block{
  width:130px;
  height:225px;
  box-shadow: 0 2px 5px rgba(0,0,0,.16);
  margin: 15px;
  overflow: hidden;
  position: relative;
}

.product-block .product-block__img{
  height:90px;
  width: 100%;
}

.product-block__detail{
  height: 100%;
  display: flex;
  flex-direction:column;
}

.product-block .product-block__detail .product-heading{
  border:1px solid #eee;
  text-align: center;
  padding: 10px 0;
}

.product-block .product-btn{
  background-color: #98f;
  font-size: 16px;
  color: white;
  border: none;
  outline: none;
  padding: 2px 0;
  position: absolute;
  bottom:0;
  width: 100%;
}


</style>
