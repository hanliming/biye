<template>
  <div v-if="$route.name == 'Recommend'">
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
      <Tabs :value="activename" @on-click="tabClick">
          <TabPane label="热门" name="1">
            <popular-page v-if="activename == '1'"></popular-page>
          </TabPane>
          <TabPane label="文章" name="2">
            <article-page v-if="activename == '2'"></article-page>
          </TabPane>
          <TabPane label="好片安利" name="3">
            <amway-page v-if="activename == '3'"></amway-page>
          </TabPane>
      </Tabs>
    </template>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>
<script>
import popularPage from './recommend/popularPage'
import articlePage from './recommend/articlePage'
import amwayPage from './recommend/amwayPage'
export default {
  name: 'Index',
  components: {
      popularPage,
      articlePage,
      amwayPage
  },
  data () {
    return {
      activename: '1',
    }
  },
  methods:{
    tabClick (name) {
      this.activename = name
    },
    //搜索
    search(){
      this.$router.push({name: 'Search'})
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
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 60px;
  background-color: #fff;
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
  padding-top: 60px;
  padding-bottom: 60px;
 }
 /* .ivu-tabs-nav{
   margin-left: 7%;
 }
 .ivu-tabs-ink-bar{
   margin-left: 7%;
 } */
 
</style>
