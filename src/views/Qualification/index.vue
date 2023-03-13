<script setup>
  import { ref } from "vue";
  import NavBar from '@/components/NavBar/index.vue'
  import Carousel from '@/components/Carousel/index.vue'
  import FooterBar from '@/components/FooterBar/index.vue'

  import bg10 from '@/assets/bg10.png'
  import pic5_1 from '@/assets/pic5_1.png'
  import pic5_2 from '@/assets/pic5_2.png'
  import pic5_3 from '@/assets/pic5_3.png'
  import pic5_4 from '@/assets/pic5_4.png'
  import pic5_6 from '@/assets/pic5_6.png'
  import pic5_7 from '@/assets/pic5_7.png'

  import pic5_8 from '@/assets/pic5_8.png'
  import pic5_9 from '@/assets/pic5_9.png'
  import pic5_10 from '@/assets/pic5_10.png'
  import pic5_11 from '@/assets/pic5_11.png'
  import pic5_12 from '@/assets/pic5_12.png'

  import IPv4 from '@/assets/IPv4.png'
  import IPv6_1 from '@/assets/IPv6_1.png'
  import IPv6_2 from '@/assets/IPv6_2.png'
  import IPv6_3 from '@/assets/IPv6_3.png'
  import zs1 from '@/assets/zs1.png'
  import zs2 from '@/assets/zs2.png'
  import zs3 from '@/assets/zs3.png'
  import zs4 from '@/assets/zs4.png'
  import zs5 from '@/assets/zs5.png'
  import zs6 from '@/assets/zs6.png'
  import zs7 from '@/assets/zs7.png'
  import zs8 from '@/assets/zs8.png'
  import zs9 from '@/assets/zs9.png'
  import zs10 from '@/assets/zs10.png'
  import zs11 from '@/assets/zs1.png'
  import zs12 from '@/assets/zs2.png'
  import zs13 from '@/assets/zs3.png'
  import zs14 from '@/assets/zs4.png'
  import zs15 from '@/assets/zs5.png'
  import zs16 from '@/assets/zs6.png'

  const data = {
    carouselList:[
      {
        title:'公司资质',
        label:'Company qualification',
        type:'left',
        src:bg10
      },
    ],
    qyzz:{
      title:'企业资质',
      blockList:[
        {
          img:pic5_1,
          title:'国家高新技术企业',
        },
        {
          img:pic5_2,
          title:'东旭营业执照',
        },
        {
          img:pic5_3,
          title:'中关村高新技术企业',
        },
      ]
    },
    rzhj:{
      titleList:['IOS认证','获奖情况'],
      blockList:[
        {
          img:pic5_4,
          title:'ISO 9001',
        },
        {
          img:pic5_4,
          title:'ISO 27001',
        },
        {
          img:pic5_6,
          title:'第一届创安杯（一等奖）',
        },
        {
          img:pic5_7,
          title:'第二届创安杯（二等奖）',
        },
      ]
    },
    rjzzq:{
      title:'软件著作权',
      blockList:[
        {
          img:IPv4,
          title:'IPv4网络资产探测平台',
        },
        {
          img:IPv6_1,
          title:'IPv6网络节点特征分析平台',
        },
        {
          img:IPv6_2,
          title:'IPv6网络资产探测平台',
        },
        {
          img:IPv6_3,
          title:'IPv6协议安全检测软件',
        },
        {
          img:zs1,
          title:'Web漏洞扫描软件',
        },
        {
          img:zs2,
          title:'代码变形软件',
        },
        {
          img:zs3,
          title:'代码自动混淆软件',
        },
        {
          img:zs4,
          title:'服务表示标识和证书探测软件',
        },
        {
          img:zs5,
          title:'网络爬虫通用框架软件',
        },
        {
          img:zs6,
          title:'自动化安全检测软件',
        },
        {
          img:zs7,
          title:'安全流媒体服务系统',
        },
        {
          img:zs8,
          title:'统一身份认证系统',
        },
        {
          img:zs9,
          title:'安全解码器软件',
        },
        {
          img:zs10,
          title:'安全传输系统',
        },
        {
          img:zs11,
          title:'安全视频管理系统',
        },
        {
          img:zs12,
          title:'流媒体签名服务系统',
        },
        {
          img:zs13,
          title:'信息发布安全终端',
        },
        {
          img:zs14,
          title:'信息发布安全服务系统',
        },
        {
          img:zs15,
          title:'特权账号系统',
        },
        {
          img:zs16,
          title:'东旭数字未来电商平台',
        },
      ]
    },
    jyxkz:{
      title:'增值电信业务经营许可证',
      blockList:[
        {
          img:pic5_8,
        },
        {
          img:pic5_9,
        },
        {
          img:pic5_10,
        },
        {
          img:pic5_11,
        },
        {
          img:pic5_12,
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
      <div class="qyzz">
        <div class="title">{{ data.qyzz.title }}</div>
        <div class="blockList">
          <div class="block" v-for="block in data.qyzz.blockList">
            <img :src="block.img" alt="">
            <div class="title">{{ block.title }}</div>
          </div>
        </div>
      </div>
      <div class="rzhj">
        <div class="rzhj-box">
          <div class="titleList">
            <div class="title" v-for="title in data.rzhj.titleList">{{ title }}</div>
          </div>
          <div class="blockList">
            <div class="block" v-for="block in data.rzhj.blockList">
              <div class="block-img">
                <img :src="block.img" alt="">
              </div>
              <div class="title">{{ block.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rjzzq">
        <div class="title">{{ data.rjzzq.title }}</div>
        <div class="blockList">
          <div class="block" v-for="block in data.rjzzq.blockList">
            <div class="block-img">
              <img :src="block.img" alt="">
            </div>
            <div class="title">{{ block.title }}</div>
          </div>
        </div>
      </div>
      <div class="jyxkz">
        <div class="title">{{ data.jyxkz.title }}</div>
        <div class="blockList">
          <div class="block" v-for="block in data.jyxkz.blockList">
            <div class="block-img">
              <img :src="block.img" alt="">
            </div>
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
    .qyzz{
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      padding: 5rem 0;
      &>.title{
        font-family: MicrosoftYaHei-Bold;
        font-weight: 700;
        font-size: 2.87rem;
        color: #282828;
        text-align: center;
        padding-bottom: 1rem;
        margin-bottom: 3.75rem;
        border-bottom: 5px solid #21C68E;
      }
      &>.blockList{
        margin-bottom: 1.88rem;
        display: flex;
        justify-content: space-between;
        &>.block{
          display: flex;
          flex-flow: column;
          align-items: center;
          width: 24.25rem;
          background: #FFFFFF;
          border: 1px solid #EAEAEA;
          box-shadow: 0 6px 16px 0 #9999991a;
          border-radius: 8px;
          margin: 0 10px;
          &>.title{
            font-family: MicrosoftYaHei;
            font-size: 1rem;
            color: #282828;
            text-align: center;
            margin: 2.2rem 0;
          }
          &>img{
            width: 23rem;
            height: 15.25rem;
          }
        }
      }
    }
    .rzhj{
      width: 100%;
      background: #F2F8FF;
      display: flex;
      justify-content: center;
      .rzhj-box{
        width: auto;
        display: flex;
        flex-flow: column;
        align-items: center;
        position: relative;
        padding: 5rem 0;
        &>.titleList{
          width: 100%;
          display: flex;
          justify-content: space-around;
          &>.title{
            font-family: MicrosoftYaHei-Bold;
            font-weight: 700;
            font-size: 2.88rem;
            color: #282828;
            text-align: center;
            padding-bottom: 1rem;
            margin-bottom: 3.75rem;
            border-bottom: 5px solid #21C68E;
          }
        }
        &>.blockList{
          margin-bottom: 1.88rem;
          display: flex;
          justify-content: space-between;
          &>.block{
            display: flex;
            flex-flow: column;
            align-items: center;
            margin: 0 10px;
            &>.title{
              font-family: MicrosoftYaHei;
              font-size: 1rem;
              color: #282828;
              text-align: center;
              margin: 1.25rem 0;
            }
            &>.block-img{
              padding: 10px;
              background: #fff;
              border: 1px solid #EAEAEA;
              box-shadow: 0 6px 16px 0 #9999991a;
              border-radius: 8px;
              &>img{
                width: 11.5rem;
                height: 17rem;
              }
            }
          }
        }
      }
    }
    .rjzzq{
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      padding: 5rem 0;
      &>.title{
        font-family: MicrosoftYaHei-Bold;
        font-weight: 700;
        font-size: 2.88rem;
        color: #282828;
        text-align: center;
        padding-bottom: 1rem;
        margin-bottom: 3.75rem;
        border-bottom: 5px solid #21C68E;
      }
      &>.blockList{
        width: 81.25rem;
        margin-bottom: 1.88rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &>.block{
          display: flex;
          flex-flow: column;
          align-items: center;
          background: #FFFFFF;
          margin: 0 10px;
          &>.title{
            font-family: MicrosoftYaHei;
            font-size: 1rem;
            color: #282828;
            text-align: center;
            margin: 2.2rem 0;
          }
          &>.block-img{
            padding: 10px;
            background: #fff;
            border: 1px solid #EAEAEA;
            box-shadow: 0 6px 16px 0 #9999991a;
            border-radius: 8px;
            &>img{
              width: 12.88rem;
              height: 17rem;
            }
          }
        }
      }
    }
    .jyxkz{
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      padding: 5rem 0;
      background: #F2F8FF;
      &>.title{
        font-family: MicrosoftYaHei-Bold;
        font-weight: 700;
        font-size: 2.88rem;
        color: #282828;
        text-align: center;
        padding-bottom: 1rem;
        margin-bottom: 3.75rem;
        border-bottom: 5px solid #21C68E;
      }
      &>.blockList{
        width: 81.25rem;
        margin-bottom: 1.88rem;
        display: flex;
        flex-wrap: wrap;
        // justify-content: center;
        justify-content: flex-start;
        &>.block{
          display: flex;
          flex-flow: column;
          align-items: center;
          background: #FFFFFF;
          // border: 1px solid #EAEAEA;
          // box-shadow: 0 6px 16px 0 #9999991a;
          // border-radius: 8px;
          margin: 10px;
          &>.title{
            font-family: MicrosoftYaHei;
            font-size: 1rem;
            color: #282828;
            text-align: center;
            margin: 2.2rem 0;
          }
          &>.block-img{
            padding: 10px;
            background: #fff;
            border: 1px solid #EAEAEA;
            box-shadow: 0 6px 16px 0 #9999991a;
            border-radius: 8px;
            &>img{
              width: 12.88rem;
              height: 17rem;
            }
          }
        }
      }
    }
  }
}
// @media only screen and (max-width: 767px) {

// }

@media (min-width: 768px) and (max-width: 1200px) {
  .container .content .qyzz > .blockList > .block{
    display: flex;
    flex-flow: column;
    align-items: center;
    width: unset;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0 6px 16px 0 #9999991a;
    border-radius: 8px;
    margin: 0 15px;
    &>img{
      width: 100%;
      height: 100%;
    }
    &>.title{
      margin: 1.5rem 0;
    }
  }
  .container .content .rjzzq > .blockList{
    width: unset;
    margin-bottom: 1.88rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 2rem;
  }
  .container .content .jyxkz{
    justify-content: center;
    &>.blockList{
      width: 85%;
      justify-content: flex-start;
      &>.block{
        margin: 10px;
      }
    }
  }
}

@media (min-width: 1201px) and (max-width: 1380px) {
  .container .content .qyzz > .blockList > .block{
    display: flex;
    flex-flow: column;
    align-items: center;
    width: unset;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0 6px 16px 0 #9999991a;
    border-radius: 8px;
    margin: 0 15px;
    &>img{
      width: 100%;
      height: 100%;
    }
    &>.title{
      margin: 1.5rem 0;
    }
  }
  .container .content .rjzzq > .blockList{
    width: unset;
    margin-bottom: 1.88rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 2rem;
  }
  .container .content .jyxkz{
    justify-content: center;
    &>.blockList{
      width: 85%;
      justify-content: flex-start;
      &>.block{
        margin: 10px;
      }
    }
  }
}

// @media only screen and (min-width: 1381px) {
//   .container .content .blockList .block{
//     width: 34%;
//   }
// }
</style>