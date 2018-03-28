<template>
  <div class="userPage">
    <div class="header">
      <div></div>
      <p>我的</p>
      <div class="setting" @click="goSettingPsge"><Icon type="ios-gear-outline"></Icon></div>
    </div>
    <!-- 登录按钮 -->
    <div class="btn_box">
       <Button type="primary" shape="circle" class="btn" @click="loginBtn" v-if="isLogin">登录</Button>
    </div>

    <!-- <div class="userInfo_box">
      <div class="touxiang">
        <img src="../assets/touxiang.jpg" alt="">
      </div>
      <div class="hello">手机号,您好！</div>
    </div> -->

    <!-- 话题，消息，文章，活动 -->
    <div class="Information_bar">
      <div>
        <Icon type="pound" class="icon"></Icon><br>
        <span class="wenzi_name">话题</span>
      </div>
      <div>
        <Icon type="ios-email-outline"  class="icon"></Icon><br>
        <span class="wenzi_name">话题</span>
      </div>
      <div>
        <Icon type="ios-paper-outline"  class="icon"></Icon><br>
        <span class="wenzi_name">文章</span>
      </div>

      <div>
          <Icon type="ios-pricetags-outline"  class="icon"></Icon><br>
          <span class="wenzi_name">活动</span>
      </div>
    </div>

    <popups-component v-if="isShowLogin"></popups-component>

    <!-- 空白 -->
    <div class="empty">
      <div class="bgImage">背景图</div>
      <h2>未登录,已与小毒失联！</h2>
      <p>发现更多精彩,速度登录吧~</p>
    </div>
    <!-- 登陆后的变化 -->
   <!-- <div class="my_yingpian my_yingdan ">
      <p>我的影单</p>
      <div><span>+</span><span class="wenzi">添加收藏影单</span></div>
    </div>

    <div class="my_yingpian">
      <p>我的影片</p>
      <div>+</div>
      <span>添加收藏片单</span>
    </div> -->
    
    <footer-component></footer-component>

  </div>
</template>

<script>
import footerComponent from './footerComponent'
import popupsComponent from './popupsComponent'

export default {
  name: 'userPage',
  components: {
    footerComponent,
    popupsComponent,
  },
  data () {
    return {
      isLogin: true,//登录按钮显示
      isShowLogin: false,//点击登录按钮,弹窗弹出

    }
  },
  methods:{
    goSettingPsge(){
      this.$router.push({path: '/settingPage'})
    },
    loginBtn(){
      this.isShowLogin = !this.isShowLogin;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4%;
  font-size: 16px;
  font-family: '黑体';
  font-weight: bold;
  overflow: auto;
}
.setting{
  font-size: 24px;
  margin-right: 4%;
}
/* 登录按钮 */
.btn_box{
  width: 100%;
  height: 125px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid gainsboro;
}
.btn{
  background-color: #FFFF00;
  width: 30%;
  height: 35px;
  border: none;
  font-size: 16px;
}

/* 用户信息 */
.userInfo_box{
  display: flex;
  align-items: center;
  padding-left: 8%;
  border-bottom: 5px solid gainsboro;
}
.touxiang{
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  border: 1px solid;
  text-align: center;
  margin: 4%;
}
.touxiang img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.hello{
  font-size: 18px;
}


/* 信息栏 */
.Information_bar{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
}
.Information_bar div{
  padding: 0 8% 0 8%;
}
.icon{
  font-size: 32px;
  margin-left: 4%;
  margin-bottom: 12%;
}
.wenzi_name{
  font-size: 14px;
}

/* 未登录,空白部分 */
.empty{
  width: 96%;
  margin-left: 4%;
  text-align: center;
}
.bgImage{
  padding-top: 35%;
}
.empty h2{
  padding-top: 8%;
}
.empty p{
  padding-top: 2%;
  color: #CCCCCC;
}

/* 登录后展示 */
.my_yingpian{
  padding-left: 8%;
  padding-bottom: 4%;
  border-bottom: 5px solid gainsboro;
}
.my_yingpian p{
  font-weight: bold;
  margin-top: 4%;
  font-size: 18px;
}
.my_yingpian div{
  width: 120px;
  height: 150px;
  background-color: #E6E6FA;
  margin-top: 4%;
  text-align: center;
  line-height: 150px;
  font-size: 16px;
}
.my_yingpian span{
  font-size: 16px;
  margin-left: 2%;
}
.my_yingdan div{
  width: 92%;
  height: 86px;
  line-height: 86px;
}
.my_yingdan div span{
  font-size: 36px;
}
.my_yingdan div .wenzi{
  font-size: 20px;
}

</style>