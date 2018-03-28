<template>
    <div class="login">
        <div class="title">登录</div>
        <div class="inputs">
            <div>账号:<input type="text" placeholder="请输入手机号" v-model="mobile"><br></div>
            <div>密码:<input type="text" placeholder="请输入至少6位数的密码" v-model="password"></div>
        </div>
        <button class="loginBtn" @click="goLogin">登录</button>
        <div class="forget_new">
           <div @click="forget">忘记密码</div>
           <div @click="signUp">新用户注册</div>
        </div>

        <div class="the_third">
            <div class="left_line"></div>
            <div class="wenzi">快捷登录</div>
            <div class="right_line"></div>
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
        <div class="free_people" @click="goFreeStyle">游客模式进入</div>
    </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
        mobile: '',
        password: '',
    }
  },
  methods:{
      //游客模式
      goFreeStyle(){
          this.$router.push({path: '/'})
      },
    //   登录
     goLogin(){
         if(this.mobile != '' || this.password != ''){
            this.$http.get('http://localhost:3000/login',{params: {mobile: this.mobile,password: this.password}})
            .then(res=>{
                console.log(res.data)
                if(res.data.success == true){
                    alert('登录成功')
                    this.$router.push({path: '/userPage'})
                }else{
                    alert(res.data.message);
                }
            },err=>{
                console.log(err)
            })
         }else{
             alert('请将信息填写完整');
         }
     },
     //注册
     signUp(){
         this.$router.push({path: '/signupPage'})
     },
    //忘记密码
    forget(){
        this.$router.push({path: '/forgetPage'})
    }

  }
}
</script>

<style scoped>
.login{
    margin: 0 8% 0 8%;
}
.title{
    text-align: center;
    padding-top: 4%;
    padding-bottom: 4%;
    font-size: 16px;
    font-weight: bold;
}
.inputs div{
    border-bottom: 1px solid #808080;
    padding-bottom: 2%;
    padding-top: 4%;
    font-size: 14px;
}
.inputs input{
    border: none;
    font-size: 12px; 
    height: 34px;
}
.inputs input:focus{
    outline: none;
}
.loginBtn{
    border: none;
    margin-top: 10%;
    width: 100%;
    height: 45px;
    margin-top: 8%;
}
.forget_new{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-top: 4%;
}
.the_third{
    padding-top: 28%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
}
.left_line{
    border-top: 1px solid #808080;
    width: 32%;
}
.wenzi{
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;
}
.right_line{
    width: 32%;
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
.free_people{
    text-align: center;
    padding-top: 10%;
}
</style>


