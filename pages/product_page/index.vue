<template>
  <div id="product-wrapper">
    <nav-bar />
    <banner title="产品展示" :imageS="bannerImg" />
    <div class="product">
      <!--      <banner img="../../assets/images/bgtop.jpg" title="产品中心" />-->
      <div v-loading="loading" class="product-content">
        <div class="p-video">
          <vue-video></vue-video>
        </div>
        <!-- 平台目标 -->
        <div class="target fadeInLeft">
          <h3 class="title">公司目标</h3>
          <p class="eTitle">TARGET</p>
          <div class="target-img">
            <img src="../../assets/images/product_group_3_img.png" alt />
          </div>
        </div>
        <!--功能模块  -->
        <div class="modular">
          <h3 class="title">功能模块</h3>
          <p class="eTitle">MODULAR</p>
          <div class="modular-content">
            <div class="modular-content-same">
              <div class="same-item">
                <div class="same-item-img">
                  <i class="el-icon-set-up" style="font-size: 45px"></i>
                </div>
                <p>质量控制模块</p>
              </div>
              <div class="same-item">
                <div class="same-item-img">
                  <i class="el-icon-reading" style="font-size: 45px"></i>
                </div>
                <p>知识仓库模块</p>
              </div>
              <div class="same-item">
                <div class="same-item-img">
                  <i class="el-icon-bangzhu" style="font-size: 45px"></i>
                </div>
                <p>信息流程模块</p>
              </div>
              <div class="same-item">
                <div class="same-item-img">
                  <i
                    class="el-icon-chat-line-round"
                    style="font-size: 45px"
                  ></i>
                </div>
                <p>定位复核模块</p>
              </div>
            </div>
            <div class="modular-content-center">
              <img src="../../assets/images/product_group_4_img.png" alt />
            </div>
            <div class="modular-content-same">
              <div class="same-item">
                <p>信息处理模块</p>
                <div class="same-item-img">
                  <i class="el-icon-connection" style="font-size: 45px"></i>
                </div>
              </div>
              <div class="same-item">
                <p>材料设备模块</p>
                <div class="same-item-img">
                  <i class="el-icon-s-opportunity" style="font-size: 45px"></i>
                </div>
              </div>
              <div class="same-item">
                <p>进度控制模块</p>
                <div class="same-item-img">
                  <i class="el-icon-pie-chart" style="font-size: 45px"></i>
                </div>
              </div>
              <div class="same-item">
                <p>安全管理模块</p>
                <div class="same-item-img">
                  <i class="el-icon-help" style="font-size: 45px"></i>
                </div>
              </div>
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
import vueVideo from "../../components/vue_video";
export default {
  components: {
    navBar,
    banner,
    footerBox,
    vueVideo
  },
  data() {
    return {
      loading: false,
      bannerImg: require("../../assets/images/bg_product.jpg"),
      videoSrc: "http://www.shkjem.com/video/kj.mp4"
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus" src="./style.styl"></style>
