<template>
  <div class="con-box">
    <div class="con-left"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$router.push({ name: 'index' })"
        >首页</el-menu-item
      >
      <el-menu-item index="2" @click="$router.push({ name: 'home_page' })"
        >关于我们</el-menu-item
      >
      <el-menu-item index="3" @click="$router.push({ name: 'product_page' })"
        >产品展示</el-menu-item
      >
      <el-menu-item index="4" @click="$router.push({ name: 'news_page' })"
        >新闻中心</el-menu-item
      >
      <el-menu-item index="5">工程案例</el-menu-item>
      <el-menu-item index="6">服务体系</el-menu-item>
      <el-menu-item index="7">人才招聘</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  computed: {
    ...mapGetters(["barIndex"])
  },
  created() {},
  mounted() {
    this.getIndex();
  },
  methods: {
    ...mapMutations({
      change_index: "CHANGE_INDEX"
    }),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      // 每次切换导航栏，会把当前状态同步到vuex中
      this.change_index(this.activeIndex);
    },
    getIndex() {
      this.activeIndex = sessionStorage.getItem("barIndex");
    }
  }
};
</script>

<style scoped lang="stylus">
.con-box
  width 100%
  height 60px
  display flex
  justify-content space-between
  align-items center
  .con-left
    width 45%
    height 100%
    background url("../assets/images/fantasy-5062585_1920.jpg") no-repeat
    background-size cover
    border-bottom solid 1px #e6e6e6;
  .el-menu-demo
    width 55%
</style>
