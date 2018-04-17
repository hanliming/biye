<template>
    <div class="feedback">
        <div class="header">
            <div>
                <Icon type="ios-arrow-left"></Icon> 
            </div>
            <h4>用户反馈</h4>
            <div class="commit" :class="{active : isActive}" @click="commit">提交</div>
        </div>
        <div class="content">
            <p>问题描述</p>
            <input type="textarea" placeholder="请详细的描述您所遇到的问题或建议" class="feedbackInput" v-model="question" @blur="onblur">

            <p>联系方式</p>
            <input type="textarea" placeholder="请留下您的联系方式(QQ/微信/电话/等)" class="connection" v-model="connect" @blur="onblur">
        </div>
    </div>
</template>

<script>
export default {
  name: 'feedbackPage',
  data () {
    return {
        isActive: false,//是否有文字输入
        question: '',
        connect: '',
       
    }
  },
  methods:{
      onblur(){
          if(this.question != '' || this.connect != ''){
              this.isActive = true;
          }
      },
      commit(){
          if( this.isActive == true){
              alert('可以提交');
              this.question = '';
              this.connect = '';
              this.isActive = false;
          }else{
              alert('请先填写信息再提交');
          }
      }
    
   
  }
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8% 4%;
    font-size: 20px;
}
.commit{
    color: gray;
}
.active{
    color: black;
}
.content{
    padding-left: 4%;
    padding-right:4%; 
}
.content p{
    font-size: 18px;
    color: gray;
    margin-bottom: 4%;
}
.content input{
    width: 100%;
}
.feedbackInput{
    height: 120px;
    margin-bottom: 8%;
    border: none;
    background-color: #ccc;
}
.connection{
    height: 45px;
    border: none;
    background-color: #ccc;
}

</style>


