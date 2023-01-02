<template>
  
  <div class="carousel-box">
    <p class="title-par">Our Partners</p>
    <div class="box-list">
      <div class="box-item">
        <img @click="toPage('https://www.cityu.edu.hk/')" src="@/assets/partner-4.png" alt="" class="img-1 img-partner">
        <br/>
        <p @click="toPage('https://www.cityu.edu.hk/')">https://www.cityu.edu.hk/</p>
      </div>
      
      <div class="box-item">
        <img @click="toPage('https://www.cityu.edu.hk/class/')" src="@/assets/partner-5.png" alt="" class="img-2 img-partner">
        <br/>
        <p @click="toPage('https://www.cityu.edu.hk/class/')">https://www.cityu.edu.hk/class/</p>
      </div>
      <div class="box-item">
        <img @click="toPage('https://www.cityu.edu.hk/com/')" src="@/assets/partner-6.png" alt="" class="img-3 img-partner">
        <br/>
        <p  @click="toPage('https://www.cityu.edu.hk/com/')">https://www.cityu.edu.hk/com/</p>
      </div>
      <div class="box-item">
        <img @click="toPage('https://www.cityu.edu.hk/lamp/')" src="@/assets/partner-1.png" alt="" class="img-4 img-partner">
        <br/>
        <p @click="toPage('https://www.cityu.edu.hk/lamp/')">https://www.cityu.edu.hk/lamp/</p>
      </div>
      <div class="box-item">
        <img @click="toPage('http://www.cityu.edu.hk/cpal/')" src="@/assets/partner-2.png" alt="" class="img-5 img-partner">
        <br/>
        <p  @click="toPage('http://www.cityu.edu.hk/cpal/')">http://www.cityu.edu.hk/cpal/</p>
      </div>
      <div class="box-item">
        <img @click="toPage('https://www.aecair.org/')" src="@/assets/partner-3.png" alt="" class="img-6 img-partner">
        <br/>
        <p @click="toPage('https://www.aecair.org/')" >https://www.aecair.org/</p>
      </div>
    </div>
  </div>
 
</template>
<script setup>
const toPage = (url)=>{
  window.open(url)
}
</script>
<style lang="scss">
.carousel-box{
  width: 1200px;
    margin: 40px auto; 
  .title-par{
    text-align: center;
    font-size: 30px;
    line-height: 1.5;
    color: #c11524;
  }
  .box-list{
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .box-item{
      width: 33.33%;
      margin-bottom: 40px;
      text-align: center;
      img{
        height: 150px;
        cursor: pointer;
        margin-bottom: 10px;
      }
      .img-1{

      }
      .img-2{
        height: auto;
        width: 300px;
        margin-bottom: 80px;
      }
      .img-3{
        height: auto;
        width: 300px;
        margin-bottom: 80px;
      }
      .img-4{
        height: auto;
        width: 300px;
        margin-bottom: 80px;
      }
      .img-5{
        height: auto;
        width: 300px;
        margin-bottom: 50px;
      }
      .img-6{
        height: auto;
        width: 200px;
        margin-bottom: 15px;
      }
      p{
        cursor: pointer;
        color: #222;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style>
