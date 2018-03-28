<template>
    <div class="popups">
        <!-- <Button type="primary" @click="go">Primary</Button> -->
        <!-- <div>
            <dialo v-if="isThis" :val="isThis" @setState="setState"></dialo>
        </div> -->

    <Modal
        v-model="modal10"
        class-name="vertical-center-modal">
        <div class="title">
            <div class="left_line"></div>
            <div class="wenzi">登录毒舌电影APP</div>
            <div class="right_line"></div>
            <div class="wall"></div>
        </div>
        <ul>
            <li>
                <i class="iconfont icon-weixin"></i>
                <div>微信</div>
            </li>
            <li>
                <i class="iconfont icon-weixin"></i>
                <div>QQ</div>
            </li>
            <li>
                <i class="iconfont icon-weixin"></i>
                <div>微博</div>
            </li>
        </ul>
        <div class="wall"></div>
        <button @click="goLoginPage">立即登录</button>
        <div class="mobile" @click="goSignupPage">手机号注册</div>
    </Modal>


    </div>
</template>

<script>
// import dialo from './dialog-d'
export default {
  name: 'popupsComponent',
//   components:{dialo},
  data () {
    return {
    //    isThis:false,
        modal10: true,
    }
  },
  methods:{
    //   go () {
    //       this.isThis = true
    //       console.log('aa')
    //   },
    //   setState () {
    //       this.isThis = false;
    //   },
      goLoginPage(){
         this.$router.push({path: '/loginPage'}) 
      },
      goSignupPage(){
          this.$router.push({path: '/signupPage'})
      }
  }
}
</script>

<style scoped>
.popups{
    width: 92%;
    padding-left: 4%;
    padding-right: 4%;
    margin: 0 auto;
    background-color: #bbcdc5;
    position: fixed;
    top: 20%;
    left: 5%;
    /* z-index: 99999; */
}
.title{
    margin-top: 8%;
    font-size: 16px;
    padding-top: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left_line{
    border-top: 1px solid #808080;
    width: 26%;
}
.wenzi{
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;
}
.right_line{
    width: 26%;
    border-top: 1px solid #808080;
}
ul{
    list-style: none;
    margin: 4% auto;
}
li{
    float: left;
    width: 25%;
    margin: 4%;
    text-align: center;
}
button{
    border: none;
    margin: 0 auto;
    width: 92%;
    margin: 4%;
    height: 45px;
    background-color: #161823;
    color: #ffa400;
}
.mobile{
    text-align: center;
    padding-bottom: 4%;
}
/* 弹窗 去掉底部 “取消，确认” */
.ivu-modal-footer{
   border-top: 1px solid #e9eaec;
    padding: 12px 18px 12px 18px;
    text-align: right;
    display: none; 
}
</style>


