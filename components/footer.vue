<template>
  <div class="footer">
    <div class="footer-content">
      <ul class="content-nav">
        <li>
          <p>走进顺兴</p>
          <router-link class="text-decoration" :to="{ name: 'company_page' }">
            <span>发展历程</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'company_page' }">
            <span>企业文化</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'company_page' }">
            <span>资质荣誉</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'company_page' }">
            <span>合作伙伴</span>
          </router-link>
        </li>
        <li>
          <p>新闻资讯</p>
          <router-link class="text-decoration" :to="{ name: 'news_page' }">
            <span>公司新闻</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'news_page' }">
            <span>行业动态</span>
          </router-link>
        </li>
        <li>
          <p>产品中心</p>
          <router-link class="text-decoration" :to="{ name: 'product_page' }">
            <span>介绍视频</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'product_page' }">
            <span>管理模式</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'product_page' }">
            <span>平台目标</span>
          </router-link>
          <router-link class="text-decoration" :to="{ name: 'product_page' }">
            <span>功能模块</span>
          </router-link>
        </li>
        <li>
          <p>联系我们</p>
          <span>邮箱：xxx@163.com</span>
          <span>电话：0538-8259470</span>
          <span
            >地址：山东省泰安市灵山大街三里广场梦想谷商业广场1001 1002 1003
            1005</span
          >
        </li>
      </ul>
      <!--      <img src="./assets/img/ercode.png" alt />-->
    </div>
    <div class="copyright">
      <span>泰安市顺兴电梯有限公司</span>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="stylus">
.footer
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content
    width: 100%;
    margin: 0 auto;
    /*padding-top: 20px;*/
    /*box-sizing border-box*/
    display: flex;
    justify-content: space-between;
    .content-nav
      width 100%;
      display: flex;
      justify-content: space-around;
      li
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        .text-decoration
          text-decoration none
        p
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
          &:after
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background: #fff;
        span
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
    img
      width: 170px;
      height: 170px;
      padding: 10px;
  .copyright
    width 100%
    height: 40px;
    background: #125688;
    span
      display inline-block
      width 100%
      text-align center
      color: #fff;
      line-height: 40px;
</style>
