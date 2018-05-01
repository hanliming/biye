<template>
  <div class="settingPage">
    <!-- 设置 返回 -->
    <div class="header">
        <div @click="goback">
            <Icon type="ios-arrow-left" class="cancel"></Icon>
        </div>
        <p>设置</p>
        <div></div>
    </div>

    <!-- 立即登录 -->
    <div class="loginBtn" v-if="!user_name" @click="login">立即登录</div>
    <!-- <div v-else>账号信息设置</div> -->

    <!-- 列表项 -->
    <ul>
        <li>
            <div class="icon_div">
                <Icon type="thumbsup" class="li_icon"></Icon>
                <div class="title">推荐给好友</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

        <li>
            <div class="icon_div">
                <Icon type="ios-paper-outline" class="li_icon"></Icon>
                <div class="title">意见反馈</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

        <li>
            <div class="icon_div">
                <Icon type="ios-eye-outline" class="li_icon"></Icon>
                <div class="title">给我们评分</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

        <li @click="modal10 = true">
            <div class="icon_div">
                <Icon type="ios-loop" class="li_icon"></Icon>
                <div class="title">版本检测</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>
        <template>
            <Modal
                v-model="modal10"
                class-name="vertical-center-modal">
                <h3>版本检测</h3>
                <p>当前已是最新版本</p>
            </Modal>
        </template>

        
        <li @click="info">
            <div class="icon_div">
                <Icon type="ios-trash-outline" class="li_icon"></Icon>
                <div class="title">清理缓存</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

        <li>
            <div class="icon_div">
                <Icon type="ios-home-outline" class="li_icon"></Icon>
                <div class="title">社区规范</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

        <li>
            <div class="icon_div">
                <Icon type="ios-eye-outline" class="li_icon"></Icon>
                <div class="title">关于侃侃电影</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

    </ul>
    <div class="wall"></div>
    <div v-if="user_name" class="exit">
       <Button type="primary" @click="exit">退出登录</Button>
    </div>
    <popups-component v-if="isShowLogin" @setState="setState"></popups-component>
  </div>
</template>

<script>
import popupsComponent from './popupsComponent'
export default {
  name: 'userPage',
  components: {
    popupsComponent,
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
          this.$router.go(-1);
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
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: '黑体';
  font-weight: bold;
  padding: 4% 0 6% 4%;
  border-bottom: 5px solid gainsboro;
}
.cancel{
    font-size: 24px;
}

/* 立即登录 */
.loginBtn{
    text-align: center;
    padding: 6% 0 6% 0;
    font-size: 18px;
    border-bottom: 5px solid gainsboro;
}

/* 列表项 */
ul{
    list-style: none;
    margin-left: 4%;
    margin-right: 4%;
}
li{
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4%;
    border-bottom: 1px solid #F5F5F5;
}
.ivu-modal-body{
    text-align: center;
}
.icon_div{
    width: 65%;
}
.li_icon{
    font-size: 26px;
    margin-top: 2%;
    margin-right: 4%;
    float: left;
}
.title{
    font-size: 16px;
    line-height: 35px;
}

.exit{
   width: 100%;
   height: 100px;
}
.exit button{
    width: 90%;
    height: 60px;
    margin: 5%;
    background-color: #FFFF00;
    border-color: none;
}
.ivu-btn-primary{
    border-style: none;
}
</style>