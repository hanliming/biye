<template>
    <div class="signUp">
       <div class="head">
           <div  @click="goback">
                <Icon type="ios-arrow-left"></Icon>
           </div>
           <div class="wenzi_signUp">忘记密码</div>
           <div></div>
       </div>

       <div class="inpts_sign">
           <!-- <div>
               账号: <input type="text" placeholder="请输入手机号" v-model="mobileNum">
           </div>
           <div>
               密码: <input type="text" placeholder="请输入至少6位数的密码" v-model="pass">
           </div>
           <div>
               确认密码: <input type="text" placeholder="请再输入一次" v-model="passAgain">
           </div> -->
           <Form ref="formInline" :model="form" :rules="ruleInline">
                <FormItem label="手机号" prop="mobileNum">
                    <Input class="inp" type="text" v-model.number="form.mobileNum" placeholder="手机号">
                    </Input>
                </FormItem>
                <FormItem label="密码" prop="pass">
                    <Input class="inp" type="password" v-model="form.pass" placeholder="密码">
                    </Input>
                </FormItem>
                <FormItem label="确认密码" prop="passAgain">
                    <Input class="inp" type="password" v-model="form.passAgain" placeholder="密码">
                    </Input>
                </FormItem>
            </Form>
       </div>
       <button class="next_step" @click="nextStep">下一步</button>
    </div>
</template>

<script>
export default {
  name: "forgetPage",
  data() {
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
    };
    return {
        form:{
            mobileNum: "",
            pass: "",
            passAgain: ""
        },
        ruleInline: {
            mobileNum: [{ validator: checkuser, trigger: 'blur' }],
            pass: [{ validator: checkpassword, trigger: 'blur' }],
            passAgain:[{ validator: checkpassword, trigger: 'blur' }]
        }
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    nextStep() {
      if (this.mobileNum == "" || this.pass == "" || this.passAgain == "") {
        this.Message.warning("每一项都不能为空,请填写完整");
      } else if (this.pass != this.passAgain) {
        this.Message.warning("两次密码不一样,请确认");
      } else {
        this.$http.post("http://localhost:3000/forget", {mobile: this.mobileNum,password: this.pass})
        .then(res => {
                // console.log(res.data);
                // if (res.data.success == true) {
                // // alert("修改成功");
                // this.$message.success('修改成功')
                // this.$router.push({ path: "/loginPage" });
                // }

                 if (res.data.success == true) {
                    this.Message.success("修改成功");
                    this.$router.push({ name: "LoginPage" });
                } else {
                    this.Message.warning(res.data.message);
                }



            },
        err => {
            console.log(err);
        });
      }
    }
  }
};
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4%;
  padding-top: 4%;
  font-size: 16px;
}
.wenzi_signUp {
  font-weight: bold;
}

 .inpts_sign {
  padding-top: 10%;
  padding: 8%;
}/*
.inpts_sign div {
  border-bottom: 1px solid #808080;
  margin-bottom: 4%;
  font-size: 16px;
}
.inpts_sign div input {
  border: none;
  font-size: 14px;
  height: 34px;
}
.inpts_sign div:nth-child(2) input {
  width: 50%;
}
.inpts_sign div input:focus {
  outline: none;
} */
button {
  font-size: 14px;
  border: none;
  padding: 4%;
}
.next_step {
  margin-left: 8%;
  width: 80%;
}
.agreement {
  padding-top: 4%;
  text-align: center;
}
</style>


