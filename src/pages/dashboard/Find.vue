<template>
  <div class="find-page" v-if="$route.name == 'Find'">
    <div class="head-search">
      <Input v-model="searchValue" icon="ios-search" @on-focus="inputClick" @on-click="inputClick" placeholder="查找影片、影评、影单、影人"></Input>
    </div>
    <div class="tabs">
      <div class="tabs-left" @click="goCinema">
        <span>热映</span>
      </div>
      <div class="tabs-right" @click="goKindPage">
        <span>分类</span>
      </div>
    </div>
    <div class="ranking-list">
      <div class="ranking-du">
        <div class="title"> / 侃侃榜 / </div>
        <div class="list" v-for="(item,index) in searchData" :key="index" v-if="index < 5" @click="goMoviedetail(item.labelID)">
          <div class="num" :class="{first : index == 0,second : index == 1,third : index == 2}"><Icon type="ios-star"></Icon></div>
          <div class="img"><img :src="item.picture" alt=""></div>
          <div class="con">
            <div class="con-title">{{item.name}}</div>
            <div class="con-about">
              <span class="count">评分 <span>{{item.pingfen}}</span></span>
              <span class="comment">{{item.count}}人评论</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wall"></div>
      <div class="ranking-du">
        <div class="title"> / 热剧榜 / </div>
        <div class="list" v-for="(item,indexhot) in searchData" :key="indexhot" v-if="indexhot > 5" @click="goMoviedetail(item.labelID)">
          <div class="num" :class="{first : indexhot == 4,second : indexhot == 5,third : indexhot == 6}"><Icon type="ios-star"></Icon></div>
          <div class="img"><img :src="item.picture" alt=""></div>
          <div class="con">
            <div class="con-title">{{item.name}}</div>
            <div class="con-about">
              <span class="count">评分 <span>{{item.pingfen}}</span></span>
              <span class="comment">{{item.count}}人评论</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   <!-- <div class="header">
     <div class="seach_input" @click="goSearchPage">
        <Icon type="ios-search" class="input_icon"></Icon>
        <span>查找影片、影评、影单、影人</span>
     </div>
     <div class="header_kind" @click="goKindPage">分类</div>
     <div class="wall"></div>
   </div>

   <div class="cinema_lineup"> 
     <div class="cinema_lineup_box">
       <Icon type="android-print" class="cinema_lineup_icon"></Icon>
       <div @click="goCinema">院线热映</div>
       <span>热映院线电影抢先看</span>
     </div>
     <div>|</div>
     <div class="Viewing_activities_box">
       <Icon type="film-marker" class="cinema_lineup_icon"></Icon>
       <div>观影活动</div>
       <span>海量观影活动任你选</span>
     </div>
   </div> -->

  <!-- 侃侃榜 -->
  <!-- <div class="leaderboard">
    <div class="leaderboard_box">

      <div class="leaderboard_rows_lists">
        <h4>侃侃榜</h4>
        <div class="leaderboard_list">
          <div class="leaderboard_list_left leaderboard_list_div">1</div>
          <div class="leaderboard_list_middle leaderboard_list_div">图片</div>
          <div class="leaderboard_list_right leaderboard_list_div">
            <p>环太平洋2: 雷霆再起</p>
            <div class="about_sorce">
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
        <div class="leftover_twenty" @click="lookAll">查看完整的20部</div>
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
       <div class="leftover_twenty" @click="lookAll">查看完整的20部</div>
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
       <div class="leftover_twenty" @click="lookAll">查看完整的20部</div>
      </div>
      <div class="leaderboard_rows_lists leaderboard_rows_lists_last" @click="lookAll">
        <div>
        <Icon type="chevron-right"></Icon>          
        </div>
        <p>查看更多排行</p>
      </div>


    </div>
  </div>

   <div class="day_and_month">
     <div @click="daySource">每日电影推荐</div>
     <div @click="monthSource">本月观影指南</div>
   </div>

   <div class="big_image">
     <img src="http://image.dushemovie.com/other/20180324/02/c3fd6e287f194c5e827e14923c7f9602.jpg" alt="">
   </div>


   <div class="score_lists">
     <ul>
       <li v-for="(item,index) in hotRecommendation" :key="index">
         <div>
           <img :src="item.img" alt="">
         </div>
         <p>伟大的诱惑者</p>
         <span>有点继承者的味道</span>
       </li>
     </ul>
   </div> -->
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
const photo_url = 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=ae023e680b0828387c00d446d9f0c264/279759ee3d6d55fb3b86e35161224f4a20a4dd01.jpg'
export default {
  data () {
    return {
      searchValue:'',//搜索框 搜索的值
      searchData: [],//排行榜数组
      list:[
        {url:photo_url,title:'头号玩家',count:'8.6',comment:'1725'},
        {url:photo_url,title:'头号玩家',count:'8.6',comment:'1725'},
        {url:photo_url,title:'头号玩家',count:'8.6',comment:'1725'}
      ]
    }
  },
  methods: {
    inputClick () {
      this.$router.push({name:'Search'})
    },
    // goSearchPage(){
    //   this.$router.push({path: '/searchPage'})
    // },
    goCinema(){
      this.$router.push({name: 'CinemaLineupPage'})
    },
    goKindPage(){
      this.$router.push({name: 'AllKindsPage'})
    },
    goMoviedetail (id) {

      this.$router.push({name: 'FilmDetail',params: {id:id}})
      //   this.$http.get("http://localhost:3000/commentLists?id=" + id).then(
      //   res => {
      //     this.commentLists = res.data.data;
      //   //   console.log(this.sigleLists);
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );
    }
    // lookAll() {
    //   this.$router.push({path: '/leaderboardPage'})
    // },
    // daySource(){
    //   this.$router.push({path: '/dailyRecommendation'})
    // },
    // monthSource(){
    //   this.$router.push({path: '/monthRecommendation'})
    // }
  },
  created(){
    // this.$http.get("http://localhost:3000/hotnews").then(
    //   res => {
    //     this.hotRecommendation = res.data.data;
    //   },
    //   err => {}
    // );

     this.$http.get("http://localhost:3000/yuanxianInfo").then(
        res => {
            // console.log(res.data.data);
            this.searchData = res.data.data;
            console.log(this.searchData)
           
        },
        err => {
            console.log(err)
        });
  }
}
</script>
<style scoped>
.wall{
  clear: both;
}
.find-page{
  padding: 10px 10px 50px 10px;
}
.head-search{
  width: 100%;
  height: 50px;
}
.tabs{
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 22px;
  border-bottom: 5px solid #ccc;
}
.tabs-left{
  float: left;
  width: 49%;
  height: 90px;
}
.tabs-right{
  float: right;
  width: 49%;
  height: 90px;
}

/* 排行榜 */
.ranking-list{
  margin-top: 20px;
}
.ranking-du, .ranking-hot{
  height: 300px;
  margin-bottom: 20px;
}
.ranking-du .title, .ranking-hot .title{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  height: 48px;
  line-height: 48px;
}
.ranking-du .list{
  height: 80px;
  padding-top: 10px;
}
.ranking-du .list .num{
  float: left;
  width: 50px;
  line-height: 80px;
  text-align: center;
  font-size: 32px;
}
.first{
  color: #ffff00;
}
.second{
  color: #e1e1e1;
}
.third{
  color: #B8860B;
}
.ranking-du .list .img{
  float: left;
  margin-right: 20px;
}
.ranking-du .list .img img{
  height: 70px;
}
.ranking-du .list .con{
  float: left;
}
.ranking-du .list .con .con-title{
  line-height: 40px;
  font-size: 14px;
  font-weight: bolder;
}
.ranking-du .list .con .con-about{
  line-height: 30px;
}
.ranking-du .list .con .con-about .count{
  margin-right: 30px;
}
.ranking-du .list .con .con-about .count span{
  color: goldenrod;
}
/* .header{
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
} */


/* 院线热映 和 观影活动 */
/* .cinema_lineup{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
} */


/* 侃侃榜 */
/* .leaderboard{
  padding: 4%;
  border-bottom: 5px solid gainsboro;
  overflow: hidden;
  overflow-x: auto;
}
.leaderboard_box{
  width: 300%;
  overflow: hidden;
}
.leaderboard_rows_lists{
  float: left;
  width: 23%;
  margin-right: 2%;
}
h4{
  font-size: 14px;
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
  font-size: 14px;
}
.leaderboard_list_right div{
  font-size: 12px;
  color: gray;
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
  font-size: 32px;
  margin-top: 25%;
  margin-left: 15%;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
  text-align: center;
  background-color: #e9e7ef;
}
.leaderboard_rows_lists_last p{
  font-size: 16px;
  margin-left: 15%;
  margin-top: 4%;
} */


/* 每月与每日推荐 */
/* .day_and_month{
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
.big_image img{
  width: 100%;
  height: 100%;
} */

/* 横向排行 */
/* .score_lists{
  padding-left: 4%;
  padding-top: 4%;
  padding-bottom: 60px;
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
.score_lists ul li div img{
  width: 100%;
  height: 100%;
}
.score_lists ul li p{
  font-size: 14px;
  font-weight: bold;
} */
</style>