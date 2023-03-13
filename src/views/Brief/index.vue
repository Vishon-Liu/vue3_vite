<script setup>
  import { ref } from "vue";
  import NavBar from '@/components/NavBar/index.vue'
  import Carousel from '@/components/Carousel/index.vue'
  import FooterBar from '@/components/FooterBar/index.vue'

  import bg8 from '@/assets/bg8.png'
  import bg9 from '@/assets/bg9.png'
  import pic5 from '@/assets/pic5.png'
  import icon18 from '@/assets/icon18.png'
  import icon19 from '@/assets/icon19.png'
  import icon20 from '@/assets/icon20.png'
  const data = {
    carouselList:[
      {
        title:'东旭简介',
        label:'BRIEF INTRODUCTION',
        type:'left',
        src:bg8
      },
    ],
    dxszwl:{
      title:'东旭数字未来',
      label:'About US',
      describe:[
        '东旭数字未来(北京) 信息科技有限公司，作为国家高新技术企业是一家面向数字化社会，提供数字化应用敏捷开发、实现以及数字安全保障的数字化整体解决方案提供商。',
        '公司将安全产品与零代码敏捷开发平台有机结合，实现”应用”与”数据”的一致安全，为客户提供&quot;交钥匙式”的数字应用整体解决方案、网络安全运维服务和网络安全培训业务。'
      ],
      img:pic5,
    },
    qywh:{
      title:'企业文化',
      label:'corporate culture',
      img:bg9,
      blockList:[
        {
          img:icon18,
          title:'使命',
          describe:['用创新科技和行业智慧赋能企业增长']
        },
        {
          img:icon19,
          title:'愿景',
          describe:['安全产品与零代码敏捷开发平台有机结合']
        },
        {
          img:icon20,
          title:'价值观',
          describe:['以客户成功定义成功用成长驱动增长']
        },
      ]
    }

  }
  const tableRef = ref()
</script>

<template>
  
  <div class="container">
    <NavBar ref="navBarRef"/>
    <Carousel :carouselList="data.carouselList"/>
    <div class="content">
      <div class="dxszwl">
        <img :src="data.dxszwl.img" alt="">
        <div class="dxszwl-box">
          <div class="title-box">
            <div class="title">{{ data.dxszwl.title }}</div>
            <div class="label">{{ data.dxszwl.label }}</div>
          </div>
          <div class="describe" v-for="describe in data.dxszwl.describe">{{ describe }}</div>
        </div>
      </div>
      <div class="qywh">
        <img :src="data.qywh.img" alt="">
        <div class="title">{{ data.qywh.title }}</div>
        <div class="label">{{ data.qywh.label }}</div>
        <div class="blockList">
          <div class="block" v-for="block in data.qywh.blockList">
            <img :src="block.img" alt="">
            <div class="title">{{ block.title }}</div>
            <div class="block-describe" v-for="block_describe in block.describe">{{ block_describe }}</div>
          </div>
        </div>
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
    padding: 5rem;
    .dxszwl{
      display: flex;
      margin-bottom: 100px;
      z-index: 2;
      &>img{
        width: 39rem;
        height: 28rem;
      }
      &>.dxszwl-box{
        padding: 1.87rem 3.75rem;
        &>.title-box{
          position: relative;
          margin-bottom: 3.75rem;
          &>.title{
            position: absolute;
            top: 2.87rem;
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            font-size: 2.87rem;
            color: #333333;
          }
          &>.label{
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            font-size: 4.1rem;
            color: rgba(153, 153, 153, 0.1)
          }
        }
        &>.describe{
          width: 31.8rem;
          font-family: MicrosoftYaHei;
          font-size: 1.1rem;
          color: #333333;
          margin-bottom: 1.875rem;
        }
      }
    }
    .qywh{
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      &>img{
        position: absolute;
        width: 71rem;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        top: -15.6rem;
        z-index: 1;
      }
      &>.title{
        font-family: MicrosoftYaHei-Bold;
        font-weight: 700;
        font-size: 2.875rem;
        color: #282828;
        text-align: center;
        padding-bottom: .9rem;
        margin-bottom: 1.25rem;
        border-bottom: 5px solid #21C68E;
      }
      &>.label{
        font-family: ArialMT;
        font-size: 1.25rem;
        color: #282828;
        text-align: center;
      }
      &>.blockList{
        margin: 6.875rem;
        width: 62.5rem;
        display: flex;
        justify-content: space-between;
        &>.block{
          display: flex;
          flex-flow: column;
          align-items: center;
          &>.title{
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            font-size: 1.8rem;
            color: #282828;
            text-align: center;
            margin: 2.2rem 0;
          }
          &>.block-describe{
            width: 12.5rem;
            font-family: MicrosoftYaHei;
            font-size: 1rem;
            color: #282828;
            text-align: center;
            line-height: 1.9rem;
          }
          &>img{
            width: 3.75rem;
            height: 3.75rem;
          }
        }
      }
    }
  }
}
// @media only screen and (max-width: 767px) {

// }

@media (min-width: 768px) and (max-width: 1200px) {
  .container .content .dxszwl{
    display: flex;
    margin-bottom: 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 2;
    &>img{
      width: 36rem;
      height: 100%;
    }
    &>.dxszwl-box{
      padding: 1.87rem 0;
      margin-left: 3rem;
    }
  }

  .container .content .qywh > .blockList{
    margin: 6.875rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 1201px) and (max-width: 1380px) {
  .container .content .dxszwl{
    display: flex;
    margin-bottom: 100px;
    justify-content: center;
    align-items: center;
    z-index: 2;
    &>img{
      width: 32rem;
      height: 100%;
    }
    &>.dxszwl-box{
      padding: 1.87rem 0;
      margin-left: 3rem;
    }
  }
}

// @media only screen and (min-width: 1381px) {
//   .container .content .blockList .block{
//     width: 34%;
//   }
// }
</style>