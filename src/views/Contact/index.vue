<script setup>
import { ref } from "vue";
import NavBar from '@/components/NavBar/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'

import bg11 from '@/assets/bg11.png'
import icon21 from '@/assets/icon21.png'
import icon22 from '@/assets/icon22.png'
import icon23 from '@/assets/icon23.png'

const data = {
  carouselList: [
    {
      title: '联系我们',
      label: 'contact us',
      type: 'left',
      src: bg11
    },
  ],
  contactWay: {
    blockList: [
      {
        icon: icon21,
        title: '联系',
        label: '131 2012 9592'
      },
      {
        icon: icon22,
        title: '邮箱',
        label: 'dxszwl@digitalx.com.cn'
      },
      {
        icon: icon23,
        title: '地址',
        label: '北京市海淀区蓝靛厂南路25号1幢4层4-6号'
      },
    ]
  },
  consultForm: {
    title: '在线咨询',
    name: {
      type: 'text',
      placeholder:'姓名',

    },

  },
  submitForm:{
    name:''
  }
}
const tableRef = ref()
</script>

<template>
  <div class="container">
    <NavBar ref="navBarRef" />
    <Carousel :carouselList="data.carouselList" />
    <div class="content">
      <div class="contactWay">
        <div class="blockList">
          <div class="block" v-for="block in data.contactWay.blockList">
            <img :src="block.icon" alt="">
            <div class="title">{{ block.title }}</div>
            <div class="label">{{ block.label }}</div>
          </div>
        </div>
      </div>
      <div class="consult">
        <div class="consult-box">
          <div class="title">{{ data.consultForm.title }}</div>
          <div class="consult-form">
            <div class="form-item">
              <div class="form-item-input">
                <a-input v-model:value="value" placeholder="姓名" />
              </div>
              <div class="form-item-input">
                <a-input v-model:value="value" placeholder="邮箱" />
              </div>
            </div>
            <div class="form-item">
              <a-input v-model:value="value" placeholder="公司名称" />
            </div>
            <div class="form-item">
              <a-textarea v-model:value="value" placeholder="咨询内容" :rows="4" />
            </div>
            <div class="form-item">
              <a-button type="primary">提交</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;

  .content {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .contactWay {
      .blockList {
        display: flex;
        padding: 2.5rem 0;

        .block {
          width: 22.5rem;
          height: 20rem;
          display: flex;
          flex-flow: column;
          align-items: center;
          padding: 3rem;
          background: #FFFFFF;
          border: 1px solid #EAEAEA;
          box-shadow: 0 6px 16px 0 #9999991a;
          border-radius: 1rem;
          margin: 0 1.25rem;

          &>.title {
            font-family: MicrosoftYaHei;
            font-size: 1.1rem;
            color: #333333;
            letter-spacing: 0;
            text-align: center;
            line-height: 2rem;
            padding-bottom: 1rem;
            // margin-bottom: 60px;
            border-bottom: 4px solid #21C68E;
            margin-bottom: 1rem;
          }

          &>.label {
            width: 14.5rem;
            font-family: PingFangSC-SNaNpxibold;
            font-weight: 600;
            font-size: 1.25rem;
            color: #333333;
            letter-spacing: 0;
            text-align: center;
            line-height: 2rem;
          }

          &>img {
            width: 3rem;
            height: 3rem;
            margin-bottom: 1.5rem;
          }
        }

        &>.block:hover {
          background: linear-gradient(180deg, #F2FFFC 0%, #FFFFFF 100%);
          border: 1px solid #21C68E;
          box-shadow: 0 6px 16px 0 #9999991a;
          border-radius: 1rem;
        }
      }
    }

    .consult{
      .consult-box{
        &>.title{
          font-family: MicrosoftYaHei-Bold;
          font-weight: 700;
          font-size: 1.5rem;
          color: #282828;
          margin: 2.5rem 0;
        }
        .consult-form{
          width: 69rem;
          display: flex;
          flex-flow: column;
          .form-item{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;
            .form-item-input{
              width: 49%;
            }
            &>.ant-btn-primary{
              width: 10rem;
              height: 3.1rem;
              background: #21C68E;
              border: 1px solid #DDDDDD;
              border-radius: 4px;
              font-weight: 700;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .container .content .contactWay{
    width: 100%;
    .blockList{
      width: 100%;
      display: flex;
      padding: 2.5rem 0;
      align-items: center;
      justify-content: space-around;
      &>.block{
        width: 25%;
        height: 15rem;
        padding: 2%;
        box-sizing: content-box;
        flex-shrink: 0;
        word-break: break-all;
        margin: 0 1rem;
      }
    }
  }
  
  .container .content .consult{
    width: 100%;
    padding: 0 6%;
    .consult-box{
      .consult-form{
        width: 100%;
      }
    }
  }
}

@media (min-width: 1201px) and (max-width: 1380px) {
  .container .content .contactWay .blockList{
    width: 100%;
    display: flex;
    padding: 2.5rem 0;
    &>.block{
      width: 30%;
      height: unset;
    }
  }
  .container .content .consult{
    width: 100%;
    padding: 0 6%;
    .consult-box{
      .consult-form{
        width: 100%;
      }
    }
  }
}
</style>