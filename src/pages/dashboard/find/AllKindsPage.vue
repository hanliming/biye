<template>
  <div class="settingPage">
    <!-- 设置 返回 -->
    <div class="header">
        <div @click="goback">
            <Icon type="ios-arrow-left" class="cancel"></Icon>
        </div>
        <p>全部分类</p>
        <div></div>
    </div>
    <div class="all_kinds">
        <p>地区</p>
        <div class="kind_box">
            <div class="line_box">
                <div>华语</div>
                <div>日韩</div>
            </div>
             <div class="line_box">
                <div>欧美</div>
                <div>其他</div>
            </div>
        </div>

        <div>
            <p>影视分类</p>
            <div class="kind_box bottom_line">
                <div class="line_box">
                    <div>剧情</div>
                    <div>喜剧</div>
                </div>
                <div class="line_box">
                    <div>动作</div>
                    <div>科幻</div>
                </div>
                <div class="line_box">
                    <div>犯罪</div>
                    <div>科幻</div>
                </div>
            </div>

            <div class="kind_box bottom_line">
                <div class="line_box">
                    <div>惊悚</div>
                    <div>动画</div>
                </div>
                <div class="line_box">
                    <div>冒险</div>
                    <div>悬疑</div>
                </div>
                <div class="line_box">
                    <div>战争</div>
                    <div>音乐</div>
                </div>
            </div>

            <div class="kind_box bottom_line">
                <div class="line_box">
                    <div>惊悚</div>
                    <div>动画</div>
                </div>
                <div class="line_box">
                    <div>冒险</div>
                    <div>悬疑</div>
                </div>
                <div class="line_box">
                    <div>战争</div>
                    <div>音乐</div>
                </div>
            </div>

        </div>



    </div>



  </div>
</template>

<script>
// import filmingComponent from '../components/filmingComponent'
// import comingsoonComponent from '../components/comingsoonComponent'
export default {
  name: 'cinemaLineupPage',
//   components: {
//     filmingComponent,
//     comingsoonComponent,
//   },
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
/* 头部 返回 */
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: '黑体';
  font-weight: bold;
  padding: 4% 0 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
}
.all_kinds{
    padding: 60px 4% 0 4%;
}
p{
    font-size: 18px;
}
.kind_box{
    border-bottom: 1px solid #eee;
}
.line_box{
    display: flex;
    align-items: center;
}
.line_box div{
    width: 50%;
    height: 55px;
    background-color: rgba(146, 146, 82, 0.616);
    margin-bottom: 4%;
    margin-right: 4%;
    font-size: 18px;
    color: white;
    padding-left: 4%;
    padding-top: 2%;
}
.bottom_line{
    border-bottom: 1px solid #eee;
    margin-bottom: 4%; 
}
</style>