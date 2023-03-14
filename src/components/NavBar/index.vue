<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import icon from '@/assets/xl.png'

const router = useRouter()
const data = {
  menulist: [
    {
      label: '产品',
      icon: icon,
      router: 'product'
    },
    // {
    //   label: '应用',
    //   icon: icon,
    //   router: 'product'
    // },
    {
      label: '案例',
      icon: icon,
      router: 'case'
    },
    // {
    //   label: '资源',
    //   icon: icon,
    //   router: 'product'
    // },
    {
      label: '关于',
      icon: icon,
      router: 'brief',
      dropdownList: [
        {
          label: '东旭简介',
          router: 'brief',
        },
        {
          label: '公司资质',
          router: 'qualification',
        },
        {
          label: '联系我们',
          router: 'contact',
        },
      ]
    }
  ]

}

const isShowDropdown = ref(false)
const currentDrop = ref('')
const handleRouter = (e) => {
  console.log('点击了', e);
  if (e.dropdownList) {
    isShowDropdown.value = !isShowDropdown.value
    currentDrop.value = e.label
  } else {
    router.push(e.router)
  }
}

const openWebSite = () => {
  window.open('http://www.digitalx.com.cn/aPaaS/signIn', '_blank')
}
</script>

<template>
  <div class="NavBar">
    <div class="navbar-box">
      <div class="logo" @click="() => { router.push('/') }">
        <img src="@/assets/logo.png" alt="">
        <span>东旭数字未来</span>
      </div>
      <div class="menu-box">
        <div class="menuItem" v-for="item in data.menulist" @click="handleRouter(item)">
          <a-dropdown overlayClassName="overlay">
            <div class="dropdown-btn" @click.prevent>
              <div>{{ item.label }}</div>
              <img class="icon" :src="item.icon" alt="">
            </div>
            <template #overlay>
              <a-menu class="dropdown-overlay" v-if="item.dropdownList && item.dropdownList.length > 0">
                <a-menu-item v-for="dropdown in item.dropdownList">
                  <!-- <a href="javascript:;">1st menu item</a> -->
                  <div @click="router.push(dropdown.router)">{{ dropdown.label }}</div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div class="login">
        <a-button type="default" ghost @click="openWebSite('http://www.digitalx.com.cn/aPaaS/signIn')">登录</a-button>
      </div>
      <div class="register">
        <a-button type="primary" @click="openWebSite('http://www.digitalx.com.cn/aPaaS/signUp')">免费注册</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" >
.NavBar {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 20px 0 #9999991a;

    .navbar-box {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &>.logo{
          flex-shrink: 0;
          display: flex;
          align-items: center;
        &>img {
          width: 2rem;
        }
        &>span{
          font-family: MicrosoftYaHei-Bold;
          font-weight: 700;
          font-size: 1.5rem;
          color: #f2f2f2;
          margin-left: .5rem;
        }
      }

      .menu-box {
        flex: 1;
        display: flex;
        color: white;
        padding-left: 8rem;

        .menuItem {
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          font-family: MicrosoftYaHei;
          font-size: 1rem;
          color: #FFFFFF;
          margin-right: 5rem;

          .dropdown-btn {
            display: flex;
            align-items: center;
          }

          .icon {
            margin-left: .7rem;
            width: 1rem;
            height: 1rem;
          }
        }

        .overlay {
          background: red;
        }

        .dropdown-overlay {
          background: red;
        }
      }
    }

    .btn-group {
      display: flex;
      .login .ant-btn.ant-btn-background-ghost {
        margin-right: 1rem;
        width: 5rem;
        height: 38px;
        border: 1px solid #FFFFFF;
        border-radius: 6px;
        font-family: MicrosoftYaHei;
        font-size: 1rem;
        color: #FFFFFF;
        text-align: center;
      }

      .register .ant-btn-primary {
        height: 100%;
        color: transparent;
        background: #FFFFFF;
        border-radius: 6px;
        font-family: MicrosoftYaHei;
        font-size: 1rem;
        color: #21C68E;
      }
    }
  }
@media only screen and (max-width: 767px) {
  
}
@media (min-width: 767px) and (max-width: 999px) {
  .NavBar .navbar-box .menu-box {
    padding-left: 6rem;
    &>.menuItem{
      margin-right: 3rem;
    }
  }
}
@media  only screen and (min-width: 1000px) {
  .NavBar .navbar-box .menu-box {
    padding-left: 8rem;
    &>.menuItem{
      margin-right: 5rem;
    }
  }
}
</style>