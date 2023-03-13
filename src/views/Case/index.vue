<script setup>
  import { ref } from "vue";
  import { useRouter } from 'vue-router';
  import NavBar from '@/components/NavBar/index.vue'
  import Carousel from '@/components/Carousel/index.vue'
  import FooterBar from '@/components/FooterBar/index.vue'

  import bg7 from '@/assets/bg7.png'
  import pic2 from '@/assets/pic2.png'
  import pic3 from '@/assets/pic3.png'
  import pic4 from '@/assets/pic4.png'
  const router = useRouter()
  const data = {
    carouselList:[
      {
        title:'案例',
        label:'CASE',
        type:'left',
        src:bg7
      },
    ],
    blockList:[
      {
        title:'多维数字地图平台',
        icon:pic2,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028现以及数字安全保障…']
      },
      {
        title:'金融担保平台',
        icon:pic3,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、提供数字化应用敏捷开发…']
      },
      {
        title:'水务管理平台',
        icon:pic4,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028现数字化社会…']
      },
      {
        title:'多维数字地图平台',
        icon:pic2,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028现国家高新…']
      },
      {
        title:'多维数字地图平台',
        icon:pic3,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028现以及数字安全保障…']
      },
      {
        title:'金融担保平台',
        icon:pic4,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028数字化敏捷开发…']
      },
      {
        title:'水务管理平台',
        icon:pic2,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028现以及数字化社会…']
      },
      {
        title:'多维数字地图平台',
        icon:pic3,
        date:'2023-02-02',
        describe:['东旭数字未来(北京) 信息科技有限公司\u2028作为国家高新技术企业是一家面向数字\u2028化社会，提供数字化应用敏捷开发、实\u2028现国家高新技术…']
      },
    ]
  }
  const tableRef = ref()
</script>

<template>
  
  <div class="container">
    <NavBar ref="navBarRef"/>
    <Carousel :carouselList="data.carouselList"/>
    <div class="content">
      <div class="blockList">
        <div class="block" v-for="block in data.blockList" @click="router.push('caseDetail')">
          <img :src="block.icon" alt="">
          <div class="block-box">
            <div class="title">{{ block.title }}</div>
            <div class="date">{{ block.date }}</div>
            <div class="describe" v-if="block.describe" v-for="block_describe in block.describe">{{ block_describe }}</div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <a-pagination v-model:current="current" :total="50" show-less-items />
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<style lang="less" scoped>
.container{
    width: 100%;
    .content{
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      background: #F2F8FF;
      .blockList{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2.5rem 0;
        // max-width: 80%;
        .block{
          flex-shrink: 0;
          display: flex;
          width: 80%;
          height: 15rem;
          background: #FFFFFF;
          margin: 0.6rem;
          box-shadow: 0 6px 16px 0 #9999991a;
          &>img{
            width: 16.25rem;
            height: 15rem;
          }
          &>.block-box{
            padding: 1.25rem;
            &>.title{
              font-family: MicrosoftYaHei-Bold;
              font-weight: 700;
              font-size: 1.25rem;
              color: #333333;
              margin-bottom: 0.6rem;
            }
            &>.date{
              font-family: ArialMT;
              font-size: .9rem;
              color: #999999;
              margin-bottom: .9rem;
            }
            &>.describe{
              font-family: MicrosoftYaHei;
              font-size: 1rem;
              color: #666666;
              line-height: 1.6rem;
            }
          }
        }
      }
      .pagination{
        margin-bottom: 2.5rem;
      }
    }
  }
@media only screen and (max-width: 767px) {

}

@media (min-width: 768px) and (max-width: 1200px) {
  .container .content .blockList .block{
    width: 80%;
  }
}

@media (min-width: 1201px) and (max-width: 1380px) {
  .container .content .blockList .block{
    width: 46%;
  }
}

@media only screen and (min-width: 1381px) {
  .container .content .blockList .block{
    width: 34%;
  }
}


</style>