<template>
  <div class="settingPage">
    <!-- 设置 返回 -->
   <div class="title_box">
        <div class="leader_header">
            <div @click="goback">
                <Icon type="ios-arrow-left" class="cancel"></Icon>
            </div>
            <div></div>
            <div></div>
        </div>

        <div class="title">
            <h3>每日电影推荐</h3>
            <div>根据你的兴趣,每天推荐8步精彩影片</div>
        </div>
   </div>
   <div class="content">
       <div class="image">
           图片
       </div>
       <p>选择兴趣,小侃帮你找感兴趣的电影</p>
       <div class="select" @click="select">选择兴趣</div>
   </div>


  </div>
</template>

<script>
// import tonguelistComponent from '../components/tonguelistComponent'
// import redlistComponent from '../components/redlistComponent'
export default {
  name: 'leaderboardPage',
  components: {
    // tonguelistComponent,
    // redlistComponent,
  },
  data () {
    return {
       switch1: false,
       user_name:'',
       isShowLogin:false,
       modal10: false,//版本检测
    }
  },
  methods:{
      goback(){
          this.$router.go(-1)
      },
      select(){
          this.$router.push({path: '/customMadePage'})
      }
  },
  created () {
      if(localStorage.user_name){
          this.user_name = localStorage.user_name
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title_box{
    background-color: rgb(84, 82, 87,.4);
    height: 120px;
}
/* 头部 返回 */
.leader_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: '黑体';
  font-weight: bold;
  padding: 0% 0 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: #fff; */
  z-index: 9999;
}
.title{
    padding-top: 50px;
    padding-left: 10%;
    color: white;
    line-height: 30px;
}
.content{
    text-align: center;
}
.content .image{
    width: 180px;
    height: 180px;
    border: 1px solid #eee;
    margin: 0 auto;
    margin-top: 18%;
    line-height: 180px;
}
.content p{
    line-height: 30px;
    padding: 10%;
    font-size: 16px;
    color: gray;
}
.content .select{
    width: 150px;
    height: 40px;
    line-height: 40px;
    background-color: yellow;
    border-radius: 20px;
    margin: 0 auto;
    font-size: 16px;
}

</style>