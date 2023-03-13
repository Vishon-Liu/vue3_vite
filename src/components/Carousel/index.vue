<script setup>
  const props = defineProps({
    carouselList:{
      type: Array,
      required: true
    }
  })

  const data = {
    
  }
  const onChange = () => {

  }
</script>

<template>
  <div class="Carousel">
    <a-carousel :after-change="onChange">
      <div class="carousel-box" v-for="item in props.carouselList">
        <div :class="'content-'+item.type">
          <div class="title">{{ item.title }}</div>
          <div class="label">{{ item.label }}</div>
          <div class="describe" v-if="item.describe" v-for="describe in item.describe">{{ describe }}</div>
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
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    &>.content-center{
      position: absolute;
      top: 30%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      &>.title{
        font-family: SourceHanSansSC-Bold;
        font-weight: 700;
        font-size: 3rem;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-bottom: 1rem;
      }
      &>.label{
        font-family: SourceHanSansSC-Heavy;
        font-weight: 900;
        font-size: 4.5rem;
        color: #FFFFFF;
        letter-spacing: 1.5rem;
        text-align: center;
      }
    }
    &>.content-left{
      position: absolute;
      display: flex;
      flex-flow: column;
      width: 70%;
      justify-content: center;
      &>.title{
        font-family: SourceHanSansSC-Heavy;
        font-weight: 900;
        font-size: 2.5rem;
        color: #FFFFFF;
      }
      &>.label{
        font-family: SourceHanSansSC-Heavy;
        font-weight: 900;
        font-size: 2.1rem;
        color: rgba(255, 255, 255, 0.75);
      }
      &>.describe{
        font-family: SourceHanSansSC-Bold;
        font-weight: 700;
        font-size: 1.1rem;
        color: #FFFFFF;
        line-height: 1.6rem;
      }
    }
    img{
      width: 100%;
      min-height: 25rem;
      object-fit: cover;
      object-position: center center;
    }
  }
}
</style>