<script setup lang="ts">
import qrcode1 from '@/assets/qrcode1.png'
import qrcode2 from '@/assets/qrcode2.png'


  const data = {
    menuList:[
      {
        label:'产品',
        list:[
          '技术特色',
          '特色功能',
          '场景套件'
        ]
      },
      {
        label:'应用',
        list:[
          '人力',
          '销售',
          '出入库',
          '项目管理',
          '财务',
          '其他'
        ]
      },
      {
        label:'案例',
        list:[
          '多维数字地图',
          '金融担保平台',
          '水务管理平台'
        ]
      },
      {
        label:'资源',
        list:[
          '产品白皮书',
          '帮助中心',
          '资料下载',
          '更新日志',
        ]
      },
      {
        label:'关于',
        list:[
          '东旭简介',
          '公司资质',
          '联系我们'
        ]
      },
    ],
    company:{
      label:'联系我们',
      labelKeyList:[
        '联系：',
        '邮箱：',
        '地址：'
      ],
      labelValueList:[
        '131 2012 9592',
        'dxszwl@digitalx.com.cn',
        '北京市海淀区蓝靛厂南路25号1幢4层4-6号'
      ],
      qrcodeBlock:[
        {
          qrcode:qrcode1,
          label:'东旭服务'
        },
        {
          qrcode:qrcode2,
          label:'在线咨询'
        }
      ]
    }
  }
</script>

<template>
  <div class="Footer">
    <div class="footer-box">
      <div class="menu-box">
        <div class="menu-row" v-for="item in data.menuList">
          <div class="label">{{ item.label }}</div>
          <div class="lb" v-for="lb in item.list">{{ lb }}</div>
        </div>

      </div>
      <div class="company-box">
        <div class="label">{{ data.company.label }}</div>
        <div class="text-box" v-for="item,index in data.company.labelKeyList">
          <span>{{ item }}</span><span>{{ data.company.labelValueList[index] }}</span>
        </div>
        <div class="qrcodeBlock-box">
          <div class="qrcodeBlock" v-for="item in data.company.qrcodeBlock">
            <img :src="item.qrcode" alt="">
            <div>{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <a-divider style="height: 2px; background-color: #F9F9F9" />
    <div class="reference">京公网安备 20220036100036号 ｜ ©2023 东旭数字未来 ｜ 京ICP备2022003610号-2</div>
  </div>
</template>

<style lang="less" scoped>
.Footer{
  width: 100%;
  height: 100%;
  .footer-box{
    display: flex;
    padding: 60px;
    justify-content: center;
    .menu-box{
      width: 40%;
      margin-right: 10%;
      display: flex;
      justify-content: space-around;
      .menu-row{
        &>.label{
          height: 21px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: 700;
          font-size: 16px;
          color: #333333;
          margin-bottom: 20px;
        }
        &>.lb{
          height: 19px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #666666;
          margin-bottom: 15px;
        }
      }
    }
  }
  .company-box{
    &>.label{
      width: 64px;
      height: 21px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: 700;
      font-size: 16px;
      color: #333333;
      margin-bottom: 20px;
    }
    &>.text-box{
      display: flex;
      margin-bottom: 15px;
      &>span{
        color: #666666;
        font-size: 14px;
        text-align: left;
      }
      &>span:last-child{
        font-weight: bold;
      }
    }
    &>.qrcodeBlock-box{
      display: flex;
      margin-top: 40px;
      &>.qrcodeBlock{
        margin-right: 28px;
        img{
          width: 120px;
          height: 120px;
        }
        div{
          height: 19px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #666666;
          text-align: center;
        }
      }
      &>.qrcodeBlock:last-child{
        margin-right: 0;
      }
    }
  }
  .reference{
    width: 100%;
    text-align: center;
    padding-bottom: 24px;
  }
}
</style>