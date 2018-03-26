<template>
  <div class="userPage">
    <div class="header">
      <div></div>
      <p>我的</p>
      <div class="setting" @click="goSettingPsge"><Icon type="ios-gear-outline"></Icon></div>
    </div>
    <!-- 登录按钮 -->
    <div class="btn_box">
       <Button type="primary" shape="circle" class="btn">登录</Button>
    </div>

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

    <!-- 空白 -->
    <div class="empty">
      <div class="bgImage">背景图</div>
      <h2>未登录,已与小毒失联！</h2>
      <p>发现更多精彩,速度登录吧~</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'userPage',
  data () {
    return {
      
    }
  },
  methods:{
    goSettingPsge(){
      this.$router.push({path: '/settingPage'})
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


</style>