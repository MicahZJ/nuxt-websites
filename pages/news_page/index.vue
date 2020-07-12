<template>
  <div id="news-wrapper">
    <nav-bar />
    <banner title="新闻资讯" :imageS="bannerImg" />
    <div v-loading="loading" class="news-section">
      <div class="news-section-content">
        <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newsType == 1 }"
            @click="newsType = 1"
          >
            <span class="name-text">公司新闻</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newsType == 2 }"
            @click="newsType = 2"
          >
            <span class="name-text">行业动态</span>
          </div>
        </div>
        <el-row class="content-nav-item" :gutter="60">
          <el-col v-for="(item, index) in newsList" :key="index" :span="8">
            <div class="item-list">
              <el-image
                :src="item.Img"
                lazy
                class="item-img"
                :fit="item.fits"
              ></el-image>
              <p class="item-list-title">{{ item.Title }}</p>
              <p class="item-list-content">{{ item.Content }}</p>
              <div class="item-list-more">
                <!-- <img src="../assets/img/sanjiao.png" />-->
                <span>more</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <div v-if="false" class="content-nav-item">
          <div v-for="(item, index) in newsList" :key="index" class="item-list">
            <div v-lazy:background-image="item.Img" class="item-img"></div>
            <p class="item-list-title">{{ item.Title }}</p>
            <p class="item-list-content">{{ item.Content }}</p>
            <div class="item-list-more">
              <!-- <img src="../assets/img/sanjiao.png" />-->
              <span>more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-box />
  </div>
</template>

<script>
import navBar from "../../components/nav_bar";
import banner from "../../components/banner";
import footerBox from "../../components/footer";
export default {
  name: "News",
  components: {
    navBar,
    banner,
    footerBox
  },
  data() {
    return {
      loading: false,
      bannerImg: require("../../assets/images/bg_news.jpg"),
      newsList: [],
      newsType: 1
    };
  },
  watch: {
    newsType(type) {
      window.console.log(type);
      this.loadData();
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.newsList = [
        {
          Content:
            "一、底坑和顶层，底坑为安装缓冲器和容纳轿厢底，顶层要安装曳引机。有的跃层无法挖底坑顶层高度小等家用电梯必须灵活设计因地制宜。一般小底坑150mm，无底坑可利用装饰地面借用底坑，然后电梯再抬高一个台阶。",
          CreateTime: "2019-04-25T09:13:08.51",
          Id: 23,
          fits: "fill",
          Img: require("../../assets/images/6-1.jpg"),
          Title: "家用电梯安装需要注意的三方面",
          Type: 1
        },
        {
          Content:
            "电梯轿厢一般都在井道最高层内安装。在安装时，首先将最高层的脚手架拆去，在上端站层门对面的井道壁上打两个洞或安设一个支架，与层门之间搁两根支撑枕木或钢梁。将轿厢架下横粱平放在支撑梁上，校正好梁上平面的水平度、导轨端面与安全钳端面间隙。吊起两侧立柱。用搭接板与下梁固定，再用手拉葫芦将上梁吊起，然后将其与两立柱用螺栓固定好。安装轿底时，根据不同形式的轿底结构（固定式或带减振元件的活络轿底）特点确定安装工艺。安装轿底时应保证水平。轿底安装好后装轿壁。一般先装后壁，后装侧壁，再装前壁，应拧紧所有的螺栓。将轿顶预先组装好后用吊索悬挂起来，待轿壁全部装好后再将轿顶放下，并按设计要求与轿壁固定",
          CreateTime: "2018-09-29T19:04:52.56",
          Id: 21,
          Img: require("../../assets/images/6-1.jpg"),
          Title: "梯轿厢如何安装",
          Type: 1
        },
        {
          Content:
            "步骤之一：事先的准备\n" +
            "\n" +
            "步骤之二：让自己的情绪达到巅峰状态\n" +
            "\n" +
            "步骤之三：与顾客建立信赖感\n" +
            "\n" +
            "步骤之四：了解顾客的问题、需求\n" +
            "\n" +
            "步骤之五：提出解决方案并塑造产品的价值\n" +
            "\n" +
            "步骤之六：做竞争对手的分析\n" +
            "\n" +
            "步骤之七：解除反\n" +
            "\n" +
            "步骤之八：成交对意见\n" +
            "\n" +
            "步骤之九：请顾客转介绍\n" +
            "\n" +
            "步骤之十：售后服务",
          CreateTime: "2018-09-29T19:04:52.56",
          Id: 21,
          Img: require("../../assets/images/6-1.jpg"),
          Title: "十步搞定电梯销售",
          Type: 1
        },
        {
          Content:
            "一、电梯企业该关注的电梯技术提升\n" +
            "\n" +
            "由于特种设备安全法的颁布和即将修改的电梯标准，所以2014年电梯企业首先要准备着如何着手满足特种设备安全法对行业的影响，这个法律是第一次针对特 种设备的法律，而法律将高于现有的法规和各地的规定，因此，在2014年各省市必将都出台一些符合《特种设备安全法》的一些新规章和规定，而更可能各省市 有所不同。 ﻿而电梯企业就必须去面对各省市不同的法规和规定，以满足用户电梯安装需要和电梯安全需要。",
          CreateTime: "2018-09-29T19:04:52.56",
          Id: 21,
          Img: require("../../assets/images/6-1.jpg"),
          Title: "2014年电梯技术该关注哪些方面",
          Type: 1
        },
        {
          Content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing nulla quis fermentum hendrerit, nisi diam viverra feugiat viverra diam.felis tortor",
          CreateTime: "2018-09-29T19:04:52.56",
          Id: 21,
          Img: require("../../assets/images/6-1.jpg"),
          Title: "News！",
          Type: 1
        }
      ];
    }
  }
};
</script>

<style scoped lang="stylus" src="./style.styl"></style>
