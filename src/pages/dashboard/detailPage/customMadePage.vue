<template>
  <div class="customMadePage">
    <!-- 设置 返回 -->
    <div class="header">
        <div ></div>
        <div></div>
        <div @click="goback">X</div>
    </div>
    <div class="instructions">
        <p class="title">定制你感兴趣的内容</p>
        <p class="title_instructions">根据你的推荐,每天为你推荐8部精选影片</p>
    </div>
    <div class="content">
        <div class="content_title">
            <div class="content_title_left"></div>
            <div>选择你感兴趣、熟悉的词</div>
            <div class="content_title_left"></div>
        </div>
        <div class="kinds_box">
            <div>犯罪</div>
            <div>喜剧</div>
            <div>悬疑</div>
            <div>科幻</div>
            <div>爱情</div>
        </div>
        <div class="kinds_box">
            <div>惊悚</div>
            <div>美剧</div>
            <div>纪录片</div>
            <div>动画</div>
            <div>奇幻</div>
        </div>
        <div class="kinds_box">
            <div>综艺</div>
            <div>动作</div>
            <div>音乐</div>
            <div>古装</div>
            <div>美食</div>
        </div>
        <div class="kinds_box">
            <div>美国电影</div>
            <div>日本电影</div>
            <div>韩国电影</div>
            <div>英剧</div>
        </div>
        <div class="kinds_box">
            <div>香港电影</div>
            <div>台湾电影</div>
            <div>国产剧</div>
        </div>
        <div class="kinds_box">
            <div>法国电影</div>
            <div>印度片</div>
            <div>人性</div>
            <div>黑色幽默</div>
        </div>
        <div class="kinds_box">
            <div>漫画改编</div>
            <div>热片解读</div>
            <div>冷门佳片推荐</div>
        </div>
        <div class="kinds_box">
            <div>影人介绍</div>
            <div>烂片吐槽</div>
            <div>热点延伸</div>
        </div>

    </div>

    <div class="footer">
        <div class="select_count">已选5个</div>
        <div @click="goTuijian">查看推荐电影 ></div>
    </div>




  </div>
</template>

<script>
export default {
  name: 'customMadePage',
  data () {
    return {
      
    }
  },
  methods:{
      goback(){
          this.$router.push({path: '/findPage'})
      },
      goTuijian(){
          this.$router.push({path: '/dailEightMovies'})
      }
  },
  created () {
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.customMadePage{
    background-color: rgba(0,0,0,.8);
    width: 100%;
    height: 665px;
}
/* 头部 返回 */
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: '黑体';
  font-weight: bold;
  padding: 4% 4% 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: #fff; */
  z-index: 9999;
  color: white;
}
.instructions{
    color: white;
    padding-top: 60px;
    text-align: center;
    line-height: 30px;
}
.title{
    font-size: 18px;
}
.title_instructions{
    font-size: 14px;
}
.content_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 14px;
    padding-top: 4%;
}
.content_title_left{
    width: 20%;
    height: 1px;
    border: 1px solid red;
}
.kinds_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 4%;
}
.kinds_box div{
    /* width: 18%; */
    min-width: 18%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    border-radius: 15px;
    border: 1px solid #eee;
}
.footer{
    height: 50px;
    width: 100%;
    background-color: yellow;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 4%;
    padding-right: 4%;
    font-size: 16px;
}
.select_count{
    color: gray;
    font-size: 14px;
}
</style>