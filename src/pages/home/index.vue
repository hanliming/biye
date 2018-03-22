<template>
  <div class="hello">
    <div class="header">
      <div class="header_calendar">
        <Icon type="android-calendar"></Icon>
      </div>
      <div class="header_name" >毒舌电影</div>
      <div  class="header_search" v-on:click="search">
        <Icon type="ios-search"></Icon>
      </div>
    </div>
    <template>
      <Tabs value="name1">
          <TabPane label="热门" name="name1">
            <popular-page></popular-page>
          </TabPane>
          <TabPane label="文章" name="name2">
            <article-page></article-page>
          </TabPane>
          <TabPane label="短视频" name="name3">
            <shortvideo-page></shortvideo-page>
          </TabPane>
          <TabPane label="热讯" name="name4">
            <hotnews-page></hotnews-page>
          </TabPane>
          <TabPane label="好片安利" name="name5">
            <amway-page></amway-page>
          </TabPane>
      </Tabs>
    </template>
    <div class="footer">
      <div class="footer_popular" @click="goIndexpage">
        <Icon type="home"></Icon>
        <div class="footer_wenzi">推荐</div>
      </div>
      <div @click="findpage">
        <Icon type="android-compass"></Icon>
        <div class="footer_wenzi">发现</div>
      </div>
      <div @click="goDynamicpage">
        <Icon type="eye" class="footer_eye"></Icon>
        <div class="footer_wenzi">动态</div>
      </div>
      <div class="footer_myUser"  @click="goUserpage">
        <Icon type="person"></Icon>
        <div class="footer_wenzi">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import popularPage from '../popularPage'
import articlePage from '../articlePage'
import shortvideoPage from '../shortvideoPage'
import hotnewsPage from '../hotnewsPage'
import amwayPage from '../amwayPage'
export default {
  name: 'Index',
  components: {
      popularPage,
      articlePage,
      shortvideoPage,
      hotnewsPage,
      amwayPage,
  },
  data () {
    return {
      msg: '手机APP'
    }
  },
  methods:{
    search(){
      this.$router.push({path: '../searchPage'})
    },
    goUserpage(){
      this.$router.push({path: '../userPage'})
    },
    goDynamicpage(){
      this.$router.push({path: '../dynamicPage'})
    },
    findpage(){
      this.$router.push({path: '../findPage'})
    },
    goIndexpage(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 40px;
  background-color: #D8BFD8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.header_calendar{
  font-size: 30px;
  margin-left: 3%;
 } 
 .header_name{
  font-size: 18px;
  font-weight: bold;
 }
.header_search{
  font-size: 30px; 
  margin-right: 4%;
 }
 .ivu-tabs{
  padding-top: 40px;
  padding-bottom: 60px;
 }
 .footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #D8BFD8;
  font-size: 26px;
  z-index: 999;
 }
.footer_eye{
  font-size: 32px;
}
.footer_wenzi{
  font-size: 14px;
}
.footer_popular{
  padding-left: 2%;
}
.footer_myUser{
  padding-right: 2%;
}
</style>
