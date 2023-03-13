<script setup lang="ts">
import { useRouter } from 'vue-router';
import icon from '@/assets/xl.png'

  const router = useRouter()
  const data = {
    menulist:[
      {
        label:'产品',
        icon:icon,
        router:'product'
      },
      {
        label:'应用',
        icon:icon,
        router:'product'
      },
      {
        label:'案例',
        icon:icon,
        router:'product'
      },
      {
        label:'资源',
        icon:icon,
        router:'product'
      },
      {
        label:'关于',
        icon:icon,
        router:'product'
      }
    ]

  }
  const aaa = (e:string):void => {
    console.log('点击了',e);
    router.push(e)
  }
</script>

<template>
  <div class="NavBar">
    <div class="navbar-box">
      <div class="logo" @click="()=>{router.push('/')}">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="menu-box">
        <div class="menuItem" v-for="item in data.menulist">
          <div @click="aaa(item.router)">{{ item.label }}</div>
          <img class="icon" :src="item.icon" alt="">
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div class="login">
        <a-button type="default" ghost>登录</a-button>
      </div>
      <div class="register">
        <a-button type="primary">免费注册</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.NavBar{
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  padding: 15px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .logo img{
      width: 170px;
      height: 29px;
      margin-right: 166px;
    }
    
    .menu-box{
      display: flex;
      color: white;
      .menuItem{
        display: flex;
        align-items: center;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #FFFFFF;
        margin-right: 60px;
        .icon{
          margin-left: 7px;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .btn-group{
    display: flex;
    .login .ant-btn.ant-btn-background-ghost{
      margin-right: 16px;
      width: 88px;
      height: 38px;
      border: 1px solid #FFFFFF;
      border-radius: 6px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #FFFFFF;
      text-align: center;
    }
    .register .ant-btn-primary{
      height: 38px;
      color: transparent;
      background: #FFFFFF;
      border-radius: 6px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #21C68E;
    }
  }
}
</style>