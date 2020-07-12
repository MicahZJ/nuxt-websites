<template>
  <div id="company-wrapper">
    <nav-bar />
    <banner title="走进顺兴" :image-s="bannerImg" />
    <div v-loading="loading" class="company-section">
      <div class="company-section-content">
        <div class="content-summary">
          <div class="summary-left">
            <p class="title">公司简介</p>
            <p class="eTitle">ABOUT US</p>
            <p class="content">
              泰安市顺兴电梯有限公司，本团队在山东泰安地区从事电梯销售、安装、维修、改造工作二十余年，与2010年注册成立泰安市顺兴电梯有限公司（泰安市顺兴电梯下属了一家溧阳市顺兴电梯工程有限公司
              安装维修b级资质）。
              是集电梯销售、安装、维修、保养、技术服务于一体的专业电梯公司。公司现有员工39人，其中高级工程师一人，中级工程师三人、安装、维保人员均取得双证，公司办公场地面积两百平米及配件库房一个，本团队是山东泰安地区电梯销售、安装、维修、保养、技术服务的先驱。
              坚持以质量管理体系严格要求，规范操作、优质服务为宗旨。以赢得客户的认同和信赖。
              本团队认真贯彻执行国家电梯相关法律、法规，在社会新的发展机遇面前，立足与“因为您的需要，所以我们努力服务”的服务精神，竭诚为广大用户提供满意优质的服务。
            </p>
          </div>
          <div class="summary-right">
            <el-image
              :src="companyImage"
              lazy
              class="item-img"
              :fit="fits"
            ></el-image>
          </div>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <!-- 发展历程 -->
        <div class="content-course">
          <div class="top">
            <h3>发展历程</h3>
            <p>DEVELOPMENT</p>
            <div class="border"></div>
            <div class="timeline"></div>
          </div>
          <div class="course-time">
            <swiper ref="mySwiper" :options="swiperOption">
              <div
                v-for="(courseOne, one) in courseList"
                :key="one"
                class="swiper-slide"
              >
                <div class="time-show">
                  <div class="time-show-item">
                    <div
                      class="item-top"
                      :class="{ 'order-top': one % 2 === 1 }"
                    ></div>
                    <el-divider>
                      <i class="el-icon-mobile-phone"></i>
                    </el-divider>
                    <div class="item-bottom" :class="{ order: one % 2 === 1 }">
                      <div class="item-bottom-content">
                        <p>{{ courseOne.Content }}</p>
                        <p>{{ courseOne.Year }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="content-culture">
          <h3>企业文化</h3>
          <h3>CULTURE</h3>
          <p>凝聚领先科技，打造百年企业</p>
          <span>求实、创新、诚信、奉献</span>
          <span>精益求精，打造金牌品质</span>
          <span>技术现代化，制度规范化</span>
          <span>管理人性化，利润合理化</span>
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
  name: "Example",
  components: {
    navBar,
    banner,
    footerBox
  },
  data() {
    return {
      loading: false,
      bannerImg: require("../../assets/images/bg_company.jpg"),
      companyImage: require("../../assets/images/company_image.jpg"),
      fits: "cover",
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 5,
        slidesPerGroup: 2,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      courseList: [
        {
          Content: "泰安市顺兴电梯有限公司成立",
          Id: 10,
          Year: "2010年"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus" src="./style.styl"></style>
