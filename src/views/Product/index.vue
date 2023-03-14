<script setup>
import { ref } from "vue";
import NavBar from '@/components/NavBar/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'

import bg0 from '@/assets/bg0.png'
import bg4 from '@/assets/bg4.png'
import bg5 from '@/assets/bg5.png'
import bg6 from '@/assets/bg6.png'
import icon8 from '@/assets/icon8.png'
import icon9 from '@/assets/icon9.png'
import icon10 from '@/assets/icon10.png'
import icon11 from '@/assets/icon11.png'
import CRM from '@/assets/CRM.png'
const data = {
  carouselList: [
    {
      title: '产品',
      label: 'PRODUCT',
      describe: ['由东旭数字未来自主研发的零代码开发平台', '将内生安全嵌入平台', '解决企业平台系统开发时的痛点、难点', '为平台系统开发的供应链提效赋能'],
      type: 'left',
      src: bg4
    },
  ],
  jsts: {
    title: '技术特色',
    describe: ['东旭数字未来零代码平台作为一种快速构建并部署企业级成用程序的技术', '极大地提高了开发效率', '使企业能够更轻松地实现数字化转型'],
    img: bg5,
    blockList: [
      {
        icon: icon8,
        title: '内生安全',
        describe: ['将安全性融入系统本身，极大的提高了系统的安全管控能力，降低了安全威胁']
      },
      {
        icon: icon9,
        title: '快速排版',
        describe: ['通过组件化技术、工作流抽象化和可视化编辑，实现了任务流程的拆分、定制，可视和封装，极大地简化了应用开发的过程']
      },
      {
        icon: icon10,
        title: '多为融合',
        describe: ['利用数据清洗、特征识别等多种技术，将多种格式数据源进行整合，能够更加准确的反映实际情况，提高数据的准确性和全面性']
      },
      {
        icon: icon11,
        title: '智能分析',
        describe: ['内嵌的智能分析系统，具有高效快捷、灵活可靠、可视化更佳等优势，可以有效的将海量数据转化为有价值的信息，为企业提供更有价值的决策参考']
      },
    ]
  },
  tsgn: {
    title: '特色功能',
    describe: ['东旭数字未来零代码平台拥有快速可视化构建应用的能力，支持扩展式的架构', '可以满足复杂业务开发的需求，同时可以快速实现快速部署和迭代开发'],
    img: bg0,
    blockList: [
      {
        icon: icon8,
        title: '拖拽式构建',
        describe: ['像“搭积木”一样的简易操作，极大的简化了应用的开发过程，并可快速实现构建和部署']
      },
      {
        icon: icon9,
        title: '模块化开发',
        describe: ['每一个业务流程都可以根据需要分解为一系列独立模块，并在不同的环境中复用和组合，显著提升了应用的开发效率，降低管理成本']
      },
      {
        icon: icon10,
        title: '可视化配置',
        describe: ['帮助用户快速、轻松地实现系统的管理与设置，节省时间，节约精力 ']
      },
      {
        icon: icon11,
        title: '自动化流程',
        describe: ['将管理、控制和调度等工作环节流程化，让不同业务场景衔接更加紧密']
      },
      {
        icon: icon10,
        title: '集成文件云盘',
        describe: ['为企业用户实现文件的安全存储，帮助企业团队无论位于何处，都可以实时展开协作']
      },
      {
        icon: icon11,
        title: '向导式编辑器',
        describe: ['帮助用户轻松编辑、管理和创建复杂的工作场景，轻松胜任各种业务环境']
      },
    ]
  },
  cjtj: {
    title: '场景套件',
    img: bg6,
    blockList: [
      {
        icon: CRM,
        title: 'CRM',
        describe: ['像“搭积木”一样的简易操作，极大的简化了应用的开发过程，并可快速实现构建和部署']
      },
      {
        icon: CRM,
        title: '知识库',
        describe: ['每一个业务流程都可以根据需要分解为一系列独立模块，并在不同的环境中复用和组合，显著提升了应用的开发效率，降低管理成本']
      },
    ]
  }
}
const tableRef = ref()
</script>

<template>
  <div class="container">
    <NavBar ref="navBarRef" />
    <!-- <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Carousel :carouselList="data.carouselList" />
      </div>
      <div class="content">
        <div class="section">
          <div class="jsts">
            <div class="jsts-box">
              <div class="title">{{ data.jsts.title }}</div>
              <div class="describe" v-for="describe in data.jsts.describe">{{ describe }}</div>
              <div class="blockList">
                <div class="block" v-for="block in data.jsts.blockList">
                  <img :src="block.icon" alt="">
                  <div class="title">{{ block.title }}</div>
                  <div class="block-describe" v-for="block_describe in block.describe">{{ block_describe }}</div>
                </div>
              </div>
            </div>
            <img :src="data.jsts.img" alt="">
          </div>
        </div>
        <div class="section">
          <div class="tsgn">
            <div class="tsgn-box">
              <div class="title">{{ data.tsgn.title }}</div>
              <div class="describe" v-for="describe in data.tsgn.describe">{{ describe }}</div>
              <div class="blockList">
                <div class="block" v-for="block in data.tsgn.blockList">
                  <div class="block-box">
                    <img :src="block.icon" alt="">
                    <div class="title">{{ block.title }}</div>
                  </div>
                  <div class="block-describe" v-for="block_describe in block.describe">{{ block_describe }}</div>
                </div>
              </div>
            </div>
            <img :src="data.tsgn.img" alt="">
          </div>
        </div>
        <div class="section">
          <div class="cjtj">
            <div class="cjtj-box">
              <div class="title">{{ data.cjtj.title }}</div>
              <div v-if="data.cjtj.describe" class="describe" v-for="describe in data.cjtj.describe">{{ describe }}</div>
              <div class="blockList">
                <div class="block" v-for="block in data.cjtj.blockList">
                  <div class="title">{{ block.title }}</div>
                  <img :src="block.icon" alt="">
                </div>
              </div>
            </div>
            <img :src="data.cjtj.img" alt="">
          </div>
        </div>
      
      
      
    </div>
    </full-page> -->
    <Carousel :carouselList="data.carouselList" />
    <div class="content">
      <div class="jsts">
        <div class="jsts-box">
          <div class="title">{{ data.jsts.title }}</div>
          <div class="describe" v-for="describe in data.jsts.describe">{{ describe }}</div>
          <div class="blockList">
            <div class="block" v-for="block in data.jsts.blockList">
              <img :src="block.icon" alt="">
              <div class="title">{{ block.title }}</div>
              <div class="block-describe" v-for="block_describe in block.describe">{{ block_describe }}</div>
            </div>
          </div>
        </div>
        <img :src="data.jsts.img" alt="">
      </div>
      <div class="tsgn">
        <div class="tsgn-box">
          <div class="title">{{ data.tsgn.title }}</div>
          <div class="describe" v-for="describe in data.tsgn.describe">{{ describe }}</div>
          <div class="blockList">
            <div class="block" v-for="block in data.tsgn.blockList">
              <div class="block-box">
                <img :src="block.icon" alt="">
                <div class="title">{{ block.title }}</div>
              </div>
              <div class="block-describe" v-for="block_describe in block.describe">{{ block_describe }}</div>
            </div>
          </div>
        </div>
        <img :src="data.tsgn.img" alt="">
      </div>
      <div class="cjtj">
        <div class="cjtj-box">
          <div class="title">{{ data.cjtj.title }}</div>
          <div v-if="data.cjtj.describe" class="describe" v-for="describe in data.cjtj.describe">{{ describe }}</div>
          <div class="blockList">
            <div class="block" v-for="block in data.cjtj.blockList">
              <div class="title">{{ block.title }}</div>
              <img :src="block.icon" alt="">
            </div>
          </div>
        </div>
        <img :src="data.cjtj.img" alt="">
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<style lang="less" scoped>
.container {
    .content {
      .jsts {
        position: relative;
        width: 100%;
        height: 100vh;
        padding: 1vh 0;


        &>.jsts-box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          z-index: 2;

          &>.title {
            z-index: 2;
            font-family: SourceHanSansSC-Bold;
            font-weight: 700;
            font-size: 4vh;
            color: #282828;
            text-align: center;
            margin-bottom: 2vh;
          }

          &>.describe {
            z-index: 2;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            font-size: 2vh;
            color: #666666;
            text-align: center;
            line-height: 4vh;
          }

          &>.blockList {
            z-index: 2;
            margin-top: 2vh;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &>.block {
              width: 17.5rem;
              height: 35vh;
              background: #fff;
              margin: 2vh;
              padding: 0 3vh;
              border-radius: 16px;
              display: flex;
              flex-flow: column;
              align-items: center;

              &>img {
                width: 10vh;
                height: 10vh;
                margin: 2.5vh 0;
              }

              &>.title {
                font-family: SourceHanSansSC-Bold;
                font-weight: 700;
                font-size: 2.5vh;
                color: #333333;
                margin-bottom: 2vh;
              }

              &>.block-describe {
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                font-size: 0.9rem;
                line-height: 2.5vh;
                color: #666666;
              }
            }

            &>.block:hover {
              background: linear-gradient(180deg, #F2FFFC 0%, #FFFFFF 100%);
              border: 1px solid #21C68E;
              box-shadow: 0 6px 16px 0 #9999991a;
            }
          }
        }

        &>img {
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

      .tsgn {
        position: relative;
        width: 100%;
        padding: 3rem 0;

        &>.tsgn-box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          z-index: 2;

          &>.title {
            font-family: SourceHanSansSC-Bold;
            font-weight: 700;
            font-size: 2.8rem;
            color: #FFFFFF;
            text-align: center;
            margin-bottom: 0.95rem;
            z-index: 2;
          }

          &>.describe {
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            font-size: 1.125rem;
            color: #FFFFFF;
            text-align: center;
            line-height: 2, 5rem;
            z-index: 2;
          }

          &>.blockList {
            margin-top: 3.75rem;
            display: flex;
            flex-wrap: wrap;
            max-width: 80%;
            justify-content: center;
            z-index: 2;

            // align-items: center;
            &>.block {
              width: 24rem;
              height: 16rem;
              background: #fff;
              margin: 0.6rem;
              padding: 2.5rem;
              border-radius: 1rem;
              display: flex;
              flex-flow: column;
              align-items: center;

              &>.block-box {
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 2.5rem;

                &>img {
                  width: 3.75rem;
                  height: 3.75rem;
                  margin-right: 1rem;
                }

                &>.title {
                  font-family: SourceHanSansSC-Bold;
                  font-weight: 700;
                  font-size: 1.5rem;
                  color: #333333;
                }
              }

              &>.block-describe {
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                font-size: 0.8rem;
                line-height: 1.8rem;
                color: #666666;
              }
            }

            &>.block:hover {
              background: linear-gradient(180deg, #F2FFFC 0%, #FFFFFF 100%);
              border: 1px solid #21C68E;
              box-shadow: 0 6px 16px 0 #9999991a;
            }
          }
        }

        &>img {
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

      .cjtj {
        position: relative;
        width: 100%;
        padding: 3rem 0;

        &>.cjtj-box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          z-index: 2;

          &>.title {
            font-family: SourceHanSansSC-Bold;
            font-weight: 700;
            font-size: 2.87rem;
            color: #282828;
            text-align: center;
            margin-bottom: 1rem;
            z-index: 2;
          }

          &>.blockList {
            margin-top: 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 2;

            &>.block {
              position: relative;
              margin: 0 0.6rem;
              border-radius: 1rem;
              display: flex;
              flex-flow: column;
              align-items: center;

              &>img {
                width: 36.7rem;
                height: 30rem;
              }

              &>.title {
                position: absolute;
                top: 5rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: 700;
                font-size: 2.8rem;
                color: #FFFFFF;
                text-align: center;
                line-height: 2.8rem;
              }

              &>.block-describe {
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                font-size: 0.8rem;
                line-height: 1.8rem;
                color: #666666;
              }
            }
          }
        }

        &>img {
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
    }
  }
@media only screen and (max-width: 767px) {}

@media (min-width: 767px) and (max-width: 999px) {
  .container {
    .content {
      .jsts {
        height: 100vh;
        .jsts-box .blockList{
          justify-content: center;
          flex-wrap: wrap;
          &>.block{
            width: 34%;
          }
        }
      }

      .tsgn .tsgn-box .blockList{
        max-width: unset;
      }

      .cjtj .cjtj-box .blockList .block{
        width: 48%;
        &>img{
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (min-width: 1000px) {
  .container {
    .content {
      .jsts .jsts-box .blockList{
        margin-top: 6vh;
        justify-content: space-between;
        flex-wrap: unset;
        &>.block{
          width: 17.5rem;
          height: 100%;
          &>img{
            margin: 4.5vh 0;
          }
          &>.block-describe{
            line-height: 3.5vh;
          }
        }
      }

      .tsgn .tsgn-box .blockList{
        max-width: 80%;
      }

      .cjtj .cjtj-box .blockList .block{
        width: unset;
        &>img{
          width: 36.7rem;
          height: 30rem;
        }
      }
    }
  }
}
</style>