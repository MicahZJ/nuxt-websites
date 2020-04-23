<template>
  <div
    v-swiper:swiper="swiperOption"
    @mouseenter="stopSwiper"
    @mouseleave="startSwiper"
  >
    <div class="swiper-wrapper">
      <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataImage: [
        {
          imgUrl: require("../../assets/images/bgtop.jpg")
        },
        {
          imgUrl: require("../../assets/images/bgtop2.jpg")
        },
        {
          imgUrl: require("../../assets/images/bgtop3.jpg")
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 30,
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
