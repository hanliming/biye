<template>
    <div class="popups">
        <!-- <Button type="primary" @click="go">Primary</Button> -->
        <!-- <div>
            <dialo v-if="isThis" :val="isThis" @setState="setState"></dialo>
        </div> -->

    <Modal
        v-model="modal10"
        class-name="vertical-center-modal"
        @on-visible-change="handleChange">
        <div class="title">
            <div class="left_line"></div>
            <div class="wenzi">登录侃侃电影APP</div>
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
        <div slot="footer" class="hello">
            <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
        </div>
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
    handleChange (val) {
        this.$emit('setState')
    },
    goLoginPage(){
        this.$router.push({name: 'LoginPage'}) 
    },
    goSignupPage(){
        this.$router.push({name: 'SignupPage'})
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
</style>
