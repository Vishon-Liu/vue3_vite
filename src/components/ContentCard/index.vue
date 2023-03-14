<script setup>
const props = defineProps({
  content: {},
  type: 'homeContent'
})
console.log('props', props.content);

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
.ContentCard {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 15rem 0;
  overflow: hidden;

  .content-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    z-index: 2;

    &>.title {
      font-family: SourceHanSansSC-Bold;
      font-weight: 700;
      font-size: 3.5rem;
      color: #FFFFFF;
      text-align: center;
      margin-bottom: 1.25rem;
    }

    &>.describeList {
      font-family: SourceHanSansSC-Regular;
      font-weight: 400;
      font-size: 1.75rem;
      color: #FFFFFF;
      text-align: center;
      margin-bottom: 5rem;
    }

    .describeList>div {
      line-height: 2.8rem;
    }

    .funcblock-box {
      display: flex;

      .funcblock {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 12.5rem;
        height: 11.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        margin-right: 2.1rem;

        &>.icon img {
          width: 4.3rem;
          height: 4.3rem;
          margin-bottom: .9rem;
        }

        &>.title {
          color: #ffffffff;
          font-size: 1.25rem;
          font-face: SourceHanSansSC;
          font-weight: 700;
          line-height: 1.8rem;
          letter-spacing: 0;
          text-align: center;
        }

        &>.describe {
          color: #ffffffff;
          font-size: 1rem;
          font-face: SourceHanSansSC;
          font-weight: 400;
          letter-spacing: 0;
          text-align: center;
        }
      }

      .funcblock:last-child {
        margin: 0;
      }

    }

  }

  .bg_img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
@media only screen and (max-width: 767px) {}

@media (min-width: 767px) and (max-width: 999px) {
  .ContentCard{
    padding: 10rem 0
  }
}

@media only screen and (min-width: 1000px) {
  .ContentCard{
    padding: 15rem 0
  }
}
</style>