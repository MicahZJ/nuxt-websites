<template>
  <div class="banner">
    <div class="mm"></div>
    <div class="banner-img">
      <img v-if="false" src="../assets/images/bg_product.jpg" />
      <el-image :src="imageS" :fit="fit"></el-image>
    </div>
    <div class="banner-title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: ""
    },
    imageS: {
      type: String,
      default: ""
    },
    fit: {
      type: String,
      default: "cover"
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  .mm {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: -10px;
    filter: blur(80px);
    background-image: url(../assets/images/bg_product.jpg);
    background-position: center;
    background-size: 100%;
  }
  img {
    position: absolute;
    //width: 1240px;
    height: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  &-title {
    position: absolute;
    color: #fff;
    font-size: 45px;
    font-weight: 400;
    line-height: 300px;
    text-align: center;
    width: 100%;
  }
}
</style>
