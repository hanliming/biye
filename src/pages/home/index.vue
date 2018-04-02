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
    <template class="tbar">
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
    <footer-component></footer-component>
  </div>
</template>

<script>
import footerComponent from '../footerComponent'
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
      footerComponent,
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
  },
  created () {
    // this.$http.get('http://localhost:3000/d')
    // .then(res=>{
    //     console.log(res)
    // },err=>{})
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

 /* .ivu-tabs-nav{
   margin-left: 7%;
 }
 .ivu-tabs-ink-bar{
   margin-left: 7%;
 } */
 
</style>
