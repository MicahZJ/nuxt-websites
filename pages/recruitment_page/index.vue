<template>
  <div id="recruitment-wrapper">
    <nav-bar />
    <banner title="人才招聘" :image-s="bannerImg" />
    <div v-loading="loading" class="recruitment-section">
      <div class="recruitment-section-content">
        <div
          v-for="(item, index) in caseList"
          :key="index"
          class="recruitment-section-content-list"
        >
          <el-image
            :src="item.Img"
            lazy
            class="item-img"
            :fit="item.fits"
          ></el-image>
          <div
            class="content-list-abstract"
            :class="{ 'abstract-active': index % 2 != 1 }"
          >
            <p class="abstract-title">{{ item.Title }}</p>
            <p class="abstract-content">{{ item.Content }}</p>
            <div v-if="false" class="more">
              <router-link
                class="text-decoration"
                :to="{ name: 'casedetails', params: { id: item.Id } }"
              >
                <span>more</span>
                <img src="../assets/img/sanjiao.png" />
              </router-link>
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
  name: "Example",
  components: {
    navBar,
    banner,
    footerBox
  },
  data() {
    return {
      loading: false,
      bannerImg: require("../../assets/images/bg_project.jpg"),
      caseList: [
        {
          Content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing nulla quis fermentum hendrerit, nisi diam viverra feugiat viverra diam.felis tortor",
          CreateTime: "2018-09-29T19:04:52.56",
          Id: 21,
          Img: require("../../assets/images/6-1.jpg"),
          Title: "News！",
          Type: 1
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus" src="./style.styl"></style>
