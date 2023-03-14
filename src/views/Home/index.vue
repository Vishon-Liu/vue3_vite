<script setup>
  import NavBar from '@/components/NavBar/index.vue'
  import Carousel from '@/components/Carousel/index.vue'
  import ContentCard from '@/components/ContentCard/index.vue'
  import FooterBar from '@/components/FooterBar/index.vue'
  import banner_bg from '@/assets/banner_bg.png'
  import banner2_bg from '@/assets/banner2_bg.png'
  import banner3_bg from '@/assets/banner3_bg.png'
  import bg1 from '@/assets/bg1.png'
  import bg2 from '@/assets/bg2.png'
  import bg3 from '@/assets/bg3.png'
  import icon1 from '@/assets/icon1.png'
  import icon2 from '@/assets/icon2.png'
  import icon3 from '@/assets/icon3.png'
  import icon4 from '@/assets/icon4.png'
  import icon5 from '@/assets/icon5.png'
  import icon6 from '@/assets/icon6.png'
  import icon7 from '@/assets/icon7.png'
  const data = {
    carouselList:[
      {
        title:'东旭数字未来',
        label:'顶层设计能力',
        type:'center',
        src:banner_bg
      },
      {
        title:'东旭数字未来',
        label:'数字化平台建设',
        type:'center',
        src:banner2_bg
      },
      {
        title:'东旭数字未来',
        label:'网络安全能力',
        type:'center',
        src:banner3_bg
      },
    ],
    ContentCardList:[
      {
        title:'一站式数字化解决方案',
        describeList:['拥有先进的数字化技术','为客户快速实现数字化体系顶层设计'],
        funcblock:[
          {
            title:'数字化',
            describe:'解决方案顶层规划设计',
            icon:icon1
          },
          {
            title:'信息化',
            describe:'网络安全顶层规划设计',
            icon:icon2
          },
        ],
        img:bg1
      },
      {
        title:'助力企业数字化转型',
        describeList:['拥有完善的核心产品体系','能够满足客户的多样化需求'],
        funcblock:[
          {
            title:'东旭',
            describe:'敏捷开发平台',
            icon:icon3
          },
          {
            title:'东旭',
            describe:'统一身份认证系统',
            icon:icon4
          },
          {
            title:'东旭',
            describe:'数据加密安全传输系统',
            icon:icon5
          },
        ],
        img:bg2
      },
      {
        title:'筑牢信息化网络安全',
        describeList:['拥有优质的服务保障','为客户提供多种样式的安全服务'],
        funcblock:[
          {
            title:'网络安全服务',
            icon:icon6
          },
          {
            title:'网络安全培训',
            icon:icon7
          },
        ],
        img:bg3
      },
    ]
  }
</script>

<template>
  
  <div>
    <NavBar />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Carousel :carouselList="data.carouselList"/>
      </div>
      <div class="section" v-for="item in data.ContentCardList">
        <ContentCard :content="item" type="homeContent" />
      </div>
      <div class="section">
        <FooterBar />
      </div>
    </full-page>
    <!-- <Carousel :carouselList="data.carouselList"/>
    <ContentCard v-for="item in data.ContentCardList" :content="item" type="homeContent" /> -->
    <!-- <FooterBar /> -->
  </div>
</template>

<style lang="less" scoped>

</style>