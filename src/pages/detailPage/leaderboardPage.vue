<template>
  <div class="settingPage">
    <!-- 设置 返回 -->
    <div class="leader_header">
        <div @click="goback">
            <Icon type="ios-arrow-left" class="cancel"></Icon>
        </div>
        <p>排行榜</p>
        <div></div>
    </div>

    <div class="header_kind">
        <Tabs value="name1">
            <TabPane label="毒舌榜" name="name1">
                <!-- <filming-component></filming-component> -->
                <tonguelist-component></tonguelist-component>
            </TabPane>
            <TabPane label="热剧榜" name="name2">
                <tonguelist-component></tonguelist-component>
            </TabPane>
            <TabPane label="红人榜" name="name3">
                <redlist-component></redlist-component>
            </TabPane>
            <TabPane label="票房榜" name="name4">
               <tonguelist-component></tonguelist-component>
            </TabPane>
            <TabPane label="豆瓣榜" name="name5">
                <tonguelist-component></tonguelist-component>
            </TabPane>
            <TabPane label="IMDb榜" name="name6">
                <tonguelist-component></tonguelist-component>
            </TabPane>
        </Tabs>
    </div>


  </div>
</template>

<script>
import tonguelistComponent from '../components/tonguelistComponent'
import redlistComponent from '../components/redlistComponent'
export default {
  name: 'leaderboardPage',
  components: {
    tonguelistComponent,
    redlistComponent,
  },
  data () {
    return {
       switch1: false,
       user_name:'',
       isShowLogin:false,
       modal10: false,//版本检测
    }
  },
  methods:{
      goback(){
          this.$router.go(-1)
      },
      //登录
      login () {
          this.isShowLogin = true
      },
      setState () {
          this.isShowLogin = false
      },
      //退出登录
      exit () {
          window.localStorage.clear()
          this.$router.push({name:'userPage'})
      },
      //清理缓存
      info (){
          this.$Message.info('清理成功');
      }
  },
  created () {
      if(localStorage.user_name){
          this.user_name = localStorage.user_name
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 头部 返回 */
.leader_header{
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
.header_kind{
    padding-top: 70px;
}

</style>