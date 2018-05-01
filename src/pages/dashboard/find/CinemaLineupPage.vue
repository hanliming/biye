<template>
  <div class="settingPage" v-if="$route.name == 'CinemaLineupPage'">
    <div class="header">
        <div @click="goback">
            <Icon type="ios-arrow-left" class="cancel"></Icon>
        </div>
        <p>院线</p>
        <div></div>
    </div>

    <div class="header_kind" style="padding-top: 70px;">
        <Tabs value="name1">
            <TabPane label="正在热映" name="name1">
                <filming-component v-bind:dataInfo="searchData"></filming-component>
            </TabPane>
            <TabPane label="即将上映" name="name3">
                <comingsoon-component></comingsoon-component>
            </TabPane>
        </Tabs>
    </div>
  </div>
  <div v-else>
      <router-view></router-view>
  </div>
</template>

<script>
import filmingComponent from './cinemalineuppage/filmingComponent'
import comingsoonComponent from './cinemalineuppage/comingsoonComponent'
export default {
  name: 'cinemaLineupPage', 
  components: {
    filmingComponent,
    comingsoonComponent,
  },
  data () {
    return {
       switch1: false,
       user_name:'',
       isShowLogin:false,
       modal10: false,//版本检测
       searchData: [],//影视列表
    }
  },
created () {

      this.fetchData();
  },
  methods:{
    goback(){
          this.$router.go(-1)
      },
    fetchData () {
        //  查询搜索数据
        this.$http.get("http://localhost:3000/yuanxianInfo").then(
        res => {
            // console.log(res.data.data);
            this.searchData = res.data.data;
            // console.log(this.searchData)
           
        },
        err => {
            console.log(err)
        });
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 头部 返回 */
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: '黑体';
  font-weight: bold;
  padding: 4% 0 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
}
.ivu-tabs-nav .ivu-tabs-tab{
    display: inline-block;
    height: 100%;
    padding: 8px 56px;
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: color .3s ease-in-out;
}
</style>