<template>
  <div id="news-wrapper">
    <nav-bar />
    <banner title="新闻资讯" />
    <div v-loading="loading" class="news-section">
      <div class="news-section-content">
        <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newstype == 1 }"
            @click="newstype = 1"
          >
            <span class="name-text">公司新闻</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newstype == 2 }"
            @click="newstype = 2"
          >
            <span class="name-text">行业动态</span>
          </div>
        </div>

        <div class="content-nav-item">
          <div v-for="(item, index) in newsList" :key="index" class="item-list">
            <div v-lazy:background-image="" class="item-img"></div>
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
      newsList: [],
      newstype: 1
    };
  },
  watch: {
    newstype(type) {
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
            "热烈庆祝上海科建工程管理股份有限公司在第七届中国（上海）国际技术进出口交易会中取得圆满成功，此次展会中我司采用移动信息化技术自主研发的“工程管理标准化+互联网协作平台”吸引来众多业内人士关注，尤其是长三角地区工程行业专业人员的极大兴趣。↵在展会中我司接受了头条新闻和科技报等媒体的专访，现场技术人员接待了众多参展人员的咨询，并给予详细讲解，让更多人了解“工程管理标准化+互联网协作平台”在工程管理工作中所创造的优势。↵专访连接：http://www.duob.cn/cont/809/209943.html?from=singlemessage↵https://mp.weixin.qq.com/s/gI3MqUDqy6eNao7JXG_jUA↵",
          CreateTime: "2019-04-25T09:13:08.51",
          Id: 23,
          Img: "/imagestore/2019/0425/9975d64f-f2b4-4065-b054-69a7e9986f3f.jpg",
          Title: "热烈祝贺公司会展活动取得圆满成功",
          Type: 1
        },
        {
          Content:
            "上海科建工程管理股份有限公司于2018年9月27日在上海股权交易中心成功举行挂牌仪式。↵↵科建股份（代码：300209）属于专业技术服务行业的工程管理服务行业，主要为工程建设项目提供项目管理和工程监理服务。公司创造性的将传统的人管理模式改变成软件辅助管理。公司自主开发出“工程管理标准化+互联网协作平台”软件系统实现网络化协同管理，为项目管理和监理工作中标准化作业指导，为项目提供全覆盖检查、全过程控制、全方位协调服务。↵",
          CreateTime: "2018-09-29T19:04:52.56",
          Id: 21,
          Img: "/imagestore/2018/0929/e37efd97-eea2-49ca-9463-4a24cf4f6f44.jpg",
          Title: "热烈祝贺上海科建工程管理股份有限公司成功举行挂牌仪式！",
          Type: 1
        }
      ];
    }
  }
};
</script>

<style scoped lang="stylus" src="./style.styl"></style>
