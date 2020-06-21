<template>
  <div id="product-wrapper">
    <nav-bar />
    <banner title="产品展示" />
    <div v-loading="loading" class="news-section">
      <div class="news-section-content"></div>
    </div>
    <footer-box />
  </div>
</template>

<script>
import navBar from "../../components/nav_bar";
import banner from "../../components/banner";
import footerBox from "../../components/footer";
export default {
  components: {
    navBar,
    banner,
    footerBox
  },
  data() {
    return {
      loading: false,
      newsList: []
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus" src="./style.styl"></style>
