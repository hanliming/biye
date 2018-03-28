<template>
  <div class="findPage">
   <div class="header">
     <div class="seach_input" @click="goSearchPage">
        <Icon type="ios-search" class="input_icon"></Icon>
        <span>查找影片、影评、影单、影人</span>
     </div>
     <div class="header_kind">分类</div>
     <div class="wall"></div>
   </div>

   <div class="cinema_lineup"> 
     <div class="cinema_lineup_box">
       <Icon type="android-print" class="cinema_lineup_icon"></Icon>
       <div>院线热映</div>
       <span>热映院线电影抢先看</span>
     </div>
     <div>|</div>
     <div class="Viewing_activities_box">
       <Icon type="film-marker" class="cinema_lineup_icon"></Icon>
       <div>观影活动</div>
       <span>海量观影活动任你选</span>
     </div>
     <div class=""></div>
   </div>

  <!-- 毒舌榜 -->
  <div class="leaderboard">
    <div class="leaderboard_box">

      <div class="leaderboard_rows_lists">
        <h4>毒舌榜</h4>
        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">1</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
          <div class="wall"></div>
        </div>

        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">2</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
        <div class="wall"></div>
        </div>


        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">3</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
          <div class="wall"></div>
        </div>
        <div class="leftover_twenty">查看完整的20部</div>
        </div>

      <div class="leaderboard_rows_lists">
        <h4>热剧榜</h4>
        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">1</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
          <div class="wall"></div>
        </div>

        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">2</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
         <div class="wall"></div>
       </div>


        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">3</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
          <div class="wall"></div>
        </div>
       <div class="leftover_twenty">查看完整的20部</div>
      </div>
      <div class="leaderboard_rows_lists">
        <h4>热剧榜</h4>
        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">1</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
          <div class="wall"></div>
        </div>

        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">2</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
         <div class="wall"></div>
       </div>


        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">3</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div>
              <span>评分 <span class="score">5.7</span></span>
              <span class="comments_count">302人评论</span>
            </div>
          </div>
          <div class="wall"></div>
        </div>
       <div class="leftover_twenty">查看完整的20部</div>
      </div>
      <div class="leaderboard_rows_lists leaderboard_rows_lists_last">
        <div>
        <Icon type="chevron-right"></Icon>          
        </div>
        <p>查看更多排行</p>
      </div>


    </div>
  </div>

   <div class="day_and_month">
     <div>每日电影推荐</div>
     <div>本月观影指南</div>
   </div>

   <div class="big_image">图片</div>


   <div class="score_lists">
     <ul>
       <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>

        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
        <li>
         <div>图片</div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
     </ul>
   </div>

  <footer-component></footer-component>

  </div>
</template>

<script>
import footerComponent from './footerComponent'

export default {
  name: 'findPage',
  components: {
      footerComponent,
  },
  data () {
    return {
      
    }
  },
  methods: {
    goSearchPage(){
      this.$router.push({path: '/searchPage'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: white;;
}
.seach_input{
  width: 85%;
  height: 40px;
  line-height: 40px;
  background-color: #f0f0f4;
  border-radius: 20px;
  padding-left: 5%;
}
.input_icon{
  font-size: 26px;
  margin-top: 3%;
}
.seach_input span{
  font-size: 14px;
}
.header_kind{
  font-size: 16px;
}


/* 院线热映 和 观影活动 */
.cinema_lineup{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 5px solid gainsboro;
  padding: 100px 4% 8% 4%;
}
.cinema_lineup_box{
  width: 45%;
}
.cinema_lineup_box div,.Viewing_activities_box div{
  font-size: 16px;
}
.Viewing_activities_box{
  width: 45%;
}
.Viewing_activities_box:nth-child(3){
  padding-left: 4%;
}
.cinema_lineup_icon{
  float: left;
  font-size: 32px;
  margin-right: 5%;
}


/* 毒舌榜 */
.leaderboard{
  padding: 4%;
  border-bottom: 5px solid gainsboro;
  overflow: hidden;
  overflow-x: auto;
}
.leaderboard_box{
  width: 420%;
  overflow: hidden;
}
.leaderboard_rows_lists{
  float: left;
  width: 18%;
  margin-right: 2%;
}
h4{
  font-size: 18px;
}
.leaderboard_list_div{
  float: left;
  padding: 4%;
}
.leaderboard_list:nth-child(4){
  border-bottom: 1px solid #c2ccd0;
  border-bottom-width: 1%;
}
.leaderboard_list_right p{
  font-size: 16px;
  font-weight: bold;
}
.leaderboard_list_right div{
  font-size: 14px;
}
.score{
  color: #ffa400;
}
.comments_count{
  margin-left: 17%;
}
.leftover_twenty{
  font-size: 16px;
  color: #c2ccd0;
  margin-top: 2%;
  text-align: center;
}

.leaderboard_rows_lists_last div{
  font-size: 42px;
  margin-top: 25%;
  margin-left: 15%;
  width: 95px;
  height: 95px;
  line-height: 95px;
  border-radius: 50%;
  text-align: center;
  background-color: #e9e7ef;
}
.leaderboard_rows_lists_last p{
  font-size: 18px;
  margin-left: 15%;
  margin-top: 4%;
}


/* 每月与每日推荐 */
.day_and_month{
  width: 92%;
  height: 60px;
  margin-right: 4%;
  margin-left: 4%;
  margin-top: 4%;
}
.day_and_month div{
  float: left;
  width: 48%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #161823;
  color: white;
}
.day_and_month div:first-child{
  margin-right: 4%;
}

.big_image{
  width: 100%;
  height: 120px;
  background-color: #f0f0f4;
  margin-top: 5%;
  text-align: center;
  line-height: 120px;
}

/* 横向排行 */
.score_lists{
  padding-left: 4%;
  padding-top: 4%;
  overflow: hidden;
  overflow-x: auto;
  
}
.score_lists ul{
  list-style: none;
  width: 400%;
  overflow: hidden;
}
.score_lists ul li{
  float: left;
  width: 100px;;
  height: 190px;
  margin-right: 15px;
}
.score_lists ul li div{
  width: 100%;
  height: 120px;
  background-color: #f0f0f4;
}
.score_lists ul li p{
  font-size: 14px;
  font-weight: bold;
}
</style>