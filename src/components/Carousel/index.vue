<script setup lang="ts">
import banner_bg from '@/assets/banner_bg.png'
import bg1 from '@/assets/bg1.png'
import bg2 from '@/assets/bg2.png'

  const data = {
    carouselList:[
      {
        title:'东旭数字未来',
        describe:'顶层设计能力',
        src:banner_bg
      },
      {
        title:'东旭设计能力',
        describe:'顶层数字未来',
        src:bg1
      },
      {
        title:'东旭顶层未来',
        describe:'数字设计能力',
        src:bg2
      },
    ]
  }
  const onChange = () => {

  }
</script>

<template>
  <div class="Carousel">
    <a-carousel :after-change="onChange">
      <div class="carousel-box" v-for="item in data.carouselList">
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="describe">{{ item.describe }}</div>
        </div>
        <!-- <img src="../../assets/bg1.png" alt=""> -->
        <img :src="item.src" alt="">
      </div>
    </a-carousel>
  </div>
</template>

<style lang="less" scoped>
.Carousel{
  width: 100%;
  height: 100%;
  .carousel-box{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
      position: absolute;
      top: 30%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      .title{
        width: 276px;
        height: 66px;
        font-family: SourceHanSansSC-Bold;
        font-weight: 700;
        font-size: 46px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-bottom: 15px;
      }
      .describe{
        width: 528px;
        height: 96px;
        font-family: SourceHanSansSC-Heavy;
        font-weight: 900;
        font-size: 66px;
        color: #FFFFFF;
        letter-spacing: 22px;
        text-align: center;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>