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
    <div class="loginBtn">立即登录</div>


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

        <li>
            <div class="icon_div">
                <Icon type="ios-loop" class="li_icon"></Icon>
                <div class="title">版本检测</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

        
        <li>
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
                <div class="title">关于毒舌电影</div>
            </div>
             <template>
               <Icon type="ios-arrow-right" class="li_icon"></Icon>
            </template>
        </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'userPage',
  data () {
    return {
       switch1: false
    }
  },
  methods:{
      goback(){
          this.$router.go(-1);
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

</style>