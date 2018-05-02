<template>
    <div class="login">
        <div class="title">登录</div>
        <div class="inputs">
            <!-- <div>账号:<input type="text" placeholder="请输入手机号" v-model="mobile"><br></div>
            <div>密码:<input type="text" placeholder="请输入至少6位数的密码" v-model="password"></div> -->
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="mobile">
                    <Input class="inp" type="text" v-model.number="formInline.mobile" placeholder="手机号">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input class="inp" type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
            </Form>
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
      const checkpassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码必填"));
      } else if ((value + "").length < 6) {
        callback(new Error("不少于6位"));
      } else {
        callback();
      }
    };
    const checkuser = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("手机号必须是数字"));
      } else if (value.toString().length != 11) {
        callback(new Error("手机号必须是11位"));
      } else if (!/^1[3|4|5|8][0-9]\d{8}$/.test(value)) {
        callback(new Error("不是正确的手机号"));
      } else {
        callback();
      }
    }
    return {
        formInline:{
            mobile: '',
            password: '',
        },
        ruleInline: {
            mobile: [{ validator: checkuser, trigger: 'blur' }],
            password: [{ validator: checkpassword, trigger: 'blur' }]
        },
    }
  },
  methods:{
      //游客模式
      goFreeStyle(){
          this.$router.push({name: 'Recommend'})
      },
    //   登录
     goLogin(){
        //  debugger
         if(this.formInline.mobile != '' && this.formInline.password != '' 
            && /^1[3|4|5|8][0-9]\d{8}$/.test(this.formInline.mobile) 
            && this.formInline.password.length >= 6){
            this.$http.get('http://localhost:3000/login',{params: {mobile: this.formInline.mobile,password: this.formInline.password}})
            .then(res=>{
                if(res.data.success == true){
                    this.$Message.success('登录成功')
                    // console.log(res.data.message)
                    window.localStorage.setItem('user_name',res.data.message.mobile)//手机号
                    window.localStorage.setItem('username',res.data.message.user_name)//密码
                    window.localStorage.setItem('user_id',res.data.message.id)//id
                    this.$router.push({name: 'Mine'})
                }else{
                    this.$Message.warning(res.data.message)
                }
            },err=>{
                console.log(err)
            })
         }else{
             if(this.formInline.mobile == '' || this.formInline.password == ''){
                this.$Message.warning('请将信息填写完整')
             }else{
                this.$Message.warning('请填写正确的手机号和密码')
             }
            
         }
     },
     //注册
     signUp(){
         this.$router.push({name: 'SignupPage'})
     },
    //忘记密码
    forget(){
        this.$router.push({name: 'ForgetPage'})
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
/* .inputs div{
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
} */
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
    /* border-top: 1px solid #808080; */
    width: 32%;
}
.wenzi{
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;
}
.right_line{
    width: 32%;
    /* border-top: 1px solid #808080; */
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


