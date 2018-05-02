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
           <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="mobileNum">
                    <Input class="inp" type="text" v-model.number="formInline.mobileNum" placeholder="手机号">
                        <!-- <Icon type="ios-person-outline" slot="prepend"></Icon> -->
                    </Input>
                </FormItem>
                <FormItem prop="pass">
                    <Input class="inp" type="password" v-model="formInline.pass" placeholder="密码">
                        <!-- <Icon type="ios-locked-outline" slot="prepend"></Icon> -->
                    </Input>
                </FormItem>
                  <FormItem>
                    <Input class="inp" type="text" v-model="formInline.username" placeholder="用户名"  minlength="2">
                        <!-- <Icon type="ios-locked-outline" slot="prepend"></Icon> -->
                    </Input>
                </FormItem>
            </Form>
            <div class="btns">
                <Button type="primary" size="large" @click="nextStep">注册</Button>
                <div class="agreement">注册侃侃账号表示你同意《 <span>用户协议</span> 》</div>
            </div>
       </div>
       <!-- <button class="next_step" @click="nextStep">下一步</button>
       <div class="agreement">注册侃侃账号表示你同意《用户协议》</div> -->
    </div>
</template>

<script>
export default {
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
      formInline: {
        mobileNum: "",
        pass: "",
        username: ""
      },
      ruleInline: {
        mobileNum: [{ validator: checkuser, trigger: "blur" }],
        pass: [{ validator: checkpassword, trigger: "blur" }],

      }
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    nextStep() {
      console.log(this.formInline);
      if (this.formInline.mobileNum && this.formInline.pass 
          && /^1[3|4|5|8][0-9]\d{8}$/.test(this.formInline.mobileNum) 
          && this.formInline.pass.length >= 6
          && this.formInline.username.length <= 5
          && this.formInline.username.length >= 2) {
        this.$http
          .post("http://localhost:3000/sign_up", {
            mobile: this.formInline.mobileNum,
            password: this.formInline.pass,
            user_name: this.formInline.username
          })
          .then(
            res => {
              if (res.data.success == true) {
                this.$Message.success("注册成功");
                this.$router.push({ name: "LoginPage" });
              } else {
                this.$Message.warning(res.data.message);
              }
            },
            err => {
              console.log(err);
            }
          );
      } else {
        this.$Message.warning("请正确输入手机号和密码、用户名");
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
  padding: 30px 10px 0 10px;
}
.btns {
  text-align: center;
}
.btns .agreement {
  margin-top: 15px;
}
.btns .agreement span {
  color: dodgerblue;
}
</style>
<style>
.signUp .ivu-input-group .ivu-input {
  height: 50px;
}
.signUp .ivu-input-group-prepend {
  width: 50px;
  font-size: 16px;
}
</style>


