<script setup lang="ts">
const props = withDefaults(defineProps<{
  content?: any
  type?: string
}>(), {
  content: {},
  type:'homeContent'
})
  console.log('props',props.content);
  
  const data = {
    
  }
  const onChange = () => {

  }
</script>

<template>
  <div class="ContentCard">
    <div class="content-box">
      <div class="title">{{ props.content.title }}</div>
      <div class="describeList">
        <div v-for="item in props.content.describeList">{{ item }}</div>
      </div>
      <div class="funcblock-box">
        <div class="funcblock" v-for="item in props.content.funcblock">
          <div class="icon"><img :src="item.icon" alt=""></div>
          <div class="title">{{ item.title }}</div>
          <div class="describe" v-if="item.describe">{{ item.describe }}</div>
        </div>
      </div>
      
    </div>
    <div class="bg_img"><img :src="props.content.img" alt=""></div>
  </div>
</template>

<style lang="less" scoped>
.ContentCard{
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  .content-box{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    &>.title{
      font-family: SourceHanSansSC-Bold;
      font-weight: 700;
      font-size: 56px;
      color: #FFFFFF;
      text-align: center;
      margin-bottom: 20px;
    }
    &>.describeList{
      font-family: SourceHanSansSC-Regular;
      font-weight: 400;
      font-size: 28px;
      color: #FFFFFF;
      text-align: center;
      margin-bottom: 80px;
    }
    .describeList>div{
      line-height: 46px;
    }
    .funcblock-box{
      display: flex;
      .funcblock{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 186px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        margin-right: 35px;
        &>.icon img{
          width: 70px;
          height: 70px;
          margin-bottom: 12px;
        }
        &>.title{
          color: #ffffffff;
          font-size: 20px;
          font-face: SourceHanSansSC;
          font-weight: 700;
          line-height: 150%;
          letter-spacing: 0;
          text-align: center;
        }
        &>.describe{
          color: #ffffffff;
          font-size: 16px;
          font-face: SourceHanSansSC;
          font-weight: 400;
          letter-spacing: 0;
          text-align: center;
        }
      }
      .funcblock:last-child{
        margin: 0;
      }
      
    }
    
  }
  .bg_img img{
    width: 100%;
  }
}
</style>