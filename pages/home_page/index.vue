<template>
  <section class="qk-banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in dataImage"
          :key="index"
          class="swiper-slide"
        >
          <img :src="item.imgUrl" />
        </div>
      </div>
      <div
        v-if="dataImage.length > 1"
        slot="pagination"
        class="swiper-pagination"
        style="bottom: .08rem"
      ></div>
    </div>
  </section>
</template>
<script>
export default {
  components: {
    // swiper,
    // swiperSlide
  },
  data() {
    return {
      dataImage: [
        {
          imgUrl: require('../../assets/images/bgtop.jpg')
        },
        {
          imgUrl: require('../../assets/images/bgtop.jpg')
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        lazy: {
          loadPrevNext: true
        },
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'qk-banner-bullet',
          bulletActiveClass: 'qk-banner-active-bullet'
        }
      }
    }
  },
  beforeMount() {},
  methods: {}
}
</script>
