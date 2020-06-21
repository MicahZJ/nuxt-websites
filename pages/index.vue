<template>
  <div id="container">
    <nav-bar></nav-bar>
    <div
      v-swiper:swiper="swiperOption"
      class="swiper-container"
      @mouseenter="stopSwiper"
      @mouseleave="startSwiper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in dataImage"
          :key="index"
          class="swiper-slide"
        >
          <img class="image-item" :src="item.imgUrl" />
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import navBar from "../components/nav_bar";
export default {
  components: {
    navBar
  },
  data() {
    return {
      dataImage: [
        {
          imgUrl: require("../assets/images/bgtop.jpg")
        },
        {
          imgUrl: require("../assets/images/bgtop2.jpg")
        },
        {
          imgUrl: require("../assets/images/bgtop3.jpg")
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        lazy: {
          loadPrevNext: true
        },
        setWrapperSize: true, // Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        observeParents: true, // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        grabCursor: true, // 鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        autoHeight: true, // 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        direction: "vertical", // 水平方向移动
        slidesPerView: 1, // 设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        // spaceBetween: 30, // 设置间距
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  beforeMount() {},
  swiper() {
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    return this.$refs.swiperBox.swiper;
  },
  methods: {
    stopSwiper() {
      this.swiper.autoplay.stop();
    },
    startSwiper() {
      this.swiper.autoplay.start();
    }
  }
};
</script>

<style lang="stylus">
#container
  width 100vw
  height 100vh
  .swiper-container
    width 100vw
    height calc(100% - 60px)
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        .image-item
          width 100%
          height 100%
</style>
