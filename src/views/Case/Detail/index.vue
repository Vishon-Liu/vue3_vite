<script setup>
  import { ref } from "vue";
  import NavBar from '@/components/NavBar/index.vue'
  import Carousel from '@/components/Carousel/index.vue'
  import FooterBar from '@/components/FooterBar/index.vue'

  import bg7 from '@/assets/bg7.png'
  import xq from '@/assets/xq.png'
  import pic1 from '@/assets/pic1.png'
  const data = {
    carouselList:[
      {
        title:'案例',
        label:'CASE',
        type:'left',
        src:bg7
      },
    ],
    detailcontent:{
      title:'多维数字地图平台',
      date:'2023-02-02',
      blockList:[
        {
          title:'项目背景',
          describeList:['接触下来我们所有的供应商范围里面，我们的评价应该是的A级。我们认为无论是从产品的设计跟服务，都是超出业界标准。'],
          imgList:[pic1]
        },
        {
          title:'解决方案',
          describeList:[
            '新能源股份有限公司始创于1986年，注册资本901,359,941元。2010年9月，成功在深交所创业板上市，股票代码300118，公司主要从事光伏并网发电系统、光伏独立供电系统、太阳能电池片、组件等的研发、生产和销售。',
            '效率最大化难题作为光伏行业的制造企业，设备管理是东方日升最核心的环节之一，集团价值超过百万的设备数量近一千台。那么如何将设备利用率发挥到极致就尤为重要，传统管理模式下数据难以及时采集、分析，对设备出现维保需求的相应也难以做到第一时间。'
          ],
        },
        {
          title:'应用效果',
          describeList:[
            '效率最大化难题作为光伏行业的制造企业，设备管理最核心的环节之一，集团价值超过百万的设备数量近一千台。那么如将设备利用率发挥到极致就尤为重要，统管理模式下数据难以及时采集、分析，对设备出现维保需求的相应也难以做到第一时间。'
          ],
          imgList:[xq]
        },
      ]
    }
  }
  const tableRef = ref()
</script>

<template>
  
  <div class="container">
    <NavBar ref="navBarRef" />
    <!-- <Carousel :carouselList="data.carouselList"/> -->
    <div class="content">
      <div class="detailcontent">
        <div class="title">{{ data.detailcontent.title }}</div>
        <div class="date">{{ data.detailcontent.date }}</div>
        <a-divider style="height: 2px; background-color: #F9F9F9" />
        <div class="blockList">
          <div class="block" v-for="block in data.detailcontent.blockList">
            <div class="title"><span></span> {{ block.title }}</div>
            <div class="describe" v-for=" describe in block.describeList">{{ describe }}</div>
            <img v-for="img in block.imgList" :src="img" alt="">
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
    
    .detailcontent{
      width: auto;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 40px;
      &>.title{
        font-family: MicrosoftYaHei-Bold;
        font-weight: 700;
        font-size: 36px;
        color: #333333;
        margin-bottom: 24px;
      }
      &>.date{
        font-family: ArialMT;
        font-size: 16px;
        color: #666666;
        text-align: center;
      }
      &>.blockList{
        display: flex;
        flex-flow: column;
        &>.block{
          width: auto;
          display: flex;
          flex-flow: column;
          &>.title{
            display: flex;
            align-items: center;
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
            &>span{
              width: 4px;
              height: 24px;
              background: #21C68E;
              margin-right: 10px;
            }
          }
          &>.describe{
            width: 1200px;
            font-family: MicrosoftYaHei;
            font-size: 18px;
            color: #333333;
            letter-spacing: 0;
            line-height: 32px;
            margin-bottom: 20px;
          }
          &>img{
            width:1200px;
            margin-bottom: 40px;
          }
        }
      }
    }
  }
}
</style>