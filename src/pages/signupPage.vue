<template>
    <div class="signUp">
       <div class="head">
           <div  @click="goback">
                <Icon type="ios-arrow-left"></Icon>
           </div>
           <div class="wenzi_signUp">注册</div>
           <div></div>
       </div>

       <div class="inpts_sign">
           <div>
               账号: <input type="text" placeholder="请输入手机号" v-model="mobileNum">
           </div>
           <div>
               密码: <input type="text" placeholder="请输入至少6位数的密码" v-model="pass">
           </div>
       </div>
       <button class="next_step" @click="nextStep">下一步</button>
       <div class="agreement">注册毒舌账号表示你同意《用户协议》</div>
    </div>
</template>

<script>
export default {
  name: 'signupPage',
  data () {
    return {
        mobileNum: '',
        pass: '',

    }
  },
  methods:{
      goback(){
          this.$router.go(-1);
      },
      nextStep(){
          if(this.mobileNum != '' && this.pass != ''){
            this.$http.post('http://localhost:3000/signUP',{mobile: this.mobileNum,password: this.pass})
            .then(res=>{
                console.log(res.data)
                if(res.data.success == true){
                    alert('注册成功')
                    this.$router.push({path: '/loginPage'})
                }else{
                    alert(res.data.message)
                }
            },err=>{
                console.log(err)
            })
          }else{
              alert('请将信息填写完整');
          }
    },
  }
}
</script>

<style scoped>

.head{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-left: 4%;
    padding-top: 4%;
    font-size: 16px;
}
.wenzi_signUp{
    font-weight: bold;
}

.inpts_sign{
    padding-top: 10%;
    padding: 8%;
}
.inpts_sign div{
    border-bottom: 1px solid #808080;
    margin-bottom: 4%;
    font-size: 16px;
}
.inpts_sign div input{
    border: none;
    font-size: 14px;
    height: 34px;
}
.inpts_sign div:nth-child(2) input{
    width: 50%;
}
.inpts_sign div input:focus{
    outline: none;
}
button{
    font-size: 14px;
    border: none;
    padding: 4%;
}
.next_step{
    margin-left: 8%;
    width: 80%;
}
.agreement{
    padding-top: 4%;
    text-align: center;
}
</style>


