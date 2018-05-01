<template>
  <div class="popular">
    <template>
      <Carousel autoplay v-model="value2" loop class="carousel">
          <CarouselItem v-for="(item,index) in bannerImage" :key="index">
              <div class="demo-carousel" @click="goDetailPage">
                <img :src="item.ImageUrl" alt="">
              </div>
          </CarouselItem>
      </Carousel>
    </template>

    <div class="hot-movie">
      <h2>热片专题 <Icon type="ios-arrow-forward"></Icon></h2>
      <div class="right_carousel">
        <ul>
          <li v-for="(item,index) in colBannerImage" :key="index" @click="godetail">
            <img :src="item.imageUrl" alt="">
          </li>
        </ul>
      </div>
      <div class="wall"></div>
    </div>

    <div class="hot-recommend">
      <h2>热门推荐</h2>
      <div class="hot-item" v-for="(item,index) in hotRecommendation" :key="index">
        <div class="hot-top">
          <div class="hot-top-left">
            <p>{{item.content}}</p>
            <div class="movie_name">
              <Icon type="ios-videocam-outline"></Icon>
              {{item.movieName}}
            </div>
          </div>
          <div class="hot-top-right">
            <img :src="item.image" alt="">
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="hot-bom">
          <span class="img">
            <img src="../../../assets/userImage.jpg" alt="">
          </span>
          <span class="text">{{item.nickname}}</span>
          <span class="text">
            <Icon type="chatbox"></Icon>
            <span>{{item.commentCount}}</span>
          </span>
          <span class="text time">{{item.time | timer}}</span>
        </div>
      </div>
    </div>


    <!-- 热门专题 -->
    <!-- <div class="topic">
      <h3><Icon type="android-bulb"></Icon> <span class="Hot_topics">热门专题</span><Icon type="ios-arrow-right"></Icon></h3>
      <div class="topic_image">
        <img src="http://image.dushemovie.com/other/20180328/21/80bbae33ed3d495883e3ce7ed16fc921.png" alt="">
      </div>
    </div> -->
    <!-- 影视早到 -->
    <!-- <div class="reading_early">
      <h3><Icon type="ios-book-outline"></Icon></Icon> <span class="Hot_topics">影视早到</span><Icon type="ios-arrow-right"></Icon></h3>
      <div v-for="(item,index) in hotRecommendation" :key="index">
        <div class="popular_Introduction">
          <div class="popular_Introduction_left">
            <p>{{item.content}}</p>
            <div class="movie_name">
              <Icon type="ios-videocam-outline"></Icon>
              {{item.movieName}}
            </div>
          </div>
          <div class="popular_Introduction_right">
            <img :src="item.image" alt="">
          </div>
        </div>
        <div class="Commentator_info">
          <div class="Commentator_info_left">
            <div class="avatar">
               <img src="../assets/userImage.jpg" alt="">
            </div>
            <div class="nickname">{{item.nickname}}</div>
            <div class="message">
              <Icon type="chatbox"></Icon>
              <span>{{item.commentCount}}</span>
            </div>
            <div class="wall"></div>
          </div>
          <div class="Commentator_time">31分钟前</div>
        </div>
      </div>
    </div> -->

    <!-- <div class="topic">
      <p>在世界上七大恐怖点曲靖，这可能是今年最恐怖的韩国片</p>
      <div class="topic_image">
        <img src="http://image.dushemovie.com/other/20180329/5abbc51add703_5abbc51ab114178.jpg" alt="">
      </div>
       <div class="Commentator_info">
        <div class="Commentator_info_left">
          <div class="avatar">头像</div>
          <div class="nickname">昵称</div>
          <div class="message">
            <Icon type="chatbox"></Icon>
            <span>10</span>
          </div>
          <div class="wall"></div>
        </div>
        <div class="Commentator_time">31分钟前</div>
      </div>
      <div class="popular_Introduction">
        <div class="popular_Introduction_left">
          <p>《边境杀手》续集很燃很炸裂,但这还是原来的神作吗？</p>
          <div class="movie_name">
            <Icon type="ios-videocam-outline"></Icon>
            边境杀手2:边境战士
          </div>
        </div>
        <div class="popular_Introduction_right">
          图片
        </div>
      </div>
      <div class="Commentator_info">
        <div class="Commentator_info_left">
          <div class="avatar">头像</div>
          <div class="nickname">昵称</div>
          <div class="message">
            <Icon type="chatbox"></Icon>
            <span>10</span>
          </div>
          <div class="wall"></div>
        </div>
        <div class="Commentator_time">31分钟前</div>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: 0,
      bannerImage: [],
      colBannerImage: [],
      hotRecommendation: []
    };
  },
  methods:{
    goDetailPage(){
      this.$router.push({name: 'ArticleDetail'})
    },
    godetail(){
      this.$router.push({name: 'ArticleDetail'})
    },
  },
  filters: {
    timer: function (value) {
      if (!value) return ''
      let Y = new Date(value).getFullYear()
      let M = new Date(value).getMonth() + 1
      M = M < 10 ? '0' + M : '' + M
      let D = new Date(value).getDate()
      D = D < 10 ? '0' + D : '' + D
      let h = new Date(value).getHours()
      h = h < 10 ? '0' + h : '' + h
      let m = new Date(value).getMinutes()
      m = m < 10 ? '0' + m : '' + m
      let s = new Date(value).getSeconds()
      s = s < 10 ? '0' + s : '' + s
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
    }
  },
  created() {
    this.$http.get("http://localhost:3000/d").then(
      res => {
        // console.log(res.data.data);
        this.bannerImage = res.data.data;
      },
      err => {}
    );

    this.$http.get("http://localhost:3000/c").then(
      res => {
        // console.log(res.data.data);
        this.colBannerImage = res.data.data;
      },
      err => {}
    );

    this.$http.get("http://localhost:3000/hot").then(
      res => {
        // console.log(res.data.data);
        this.hotRecommendation = res.data.data;
      },
      err => {}
    );
  }
};
</script>

<style scoped>
.popular{
  background-color: gainsboro;
}

.demo-carousel {
  width: 100%;
  height: 180px;
  background-color: #e6e6fa;
}
.demo-carousel img {
  width: 100%;
  height: 100%;
}

.hot-movie h2 {
  padding-left: 10px;
  padding-top: 20px;
  background-color: #fff;
}
.right_carousel{
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: #fff;
}
.right_carousel ul{
  width: 670px;
  height: 190px;
  padding: 20px 0px 0 10px;
  list-style: none;
}
.right_carousel ul li{
  float: left;
  margin-right: 10px;
}
.right_carousel ul li img{
  width: 100px;
  height: 150px;
}

.hot-recommend{
  margin-top: 10px;
  padding: 10px 10px 0 10px;
  background-color: #fff;
}
.hot-recommend h2{
  height: 50px;
}
.hot-recommend .hot-item{
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 15px;
}
.hot-recommend .hot-item:nth-last-child(1){
  border-bottom: none;
}
.hot-recommend .hot-item .hot-top{
  height: 90px;
}
.hot-recommend .hot-item .hot-top .hot-top-left{
  width: 60%;
  float: left;
}
.hot-recommend .hot-item .hot-top .hot-top-left p{
  height: 50px;
  font-size: 14px;
  color: #333;
}
.hot-recommend .hot-item .hot-top .hot-top-left .movie_name{
  display: inline-block;
  font-size: 13px;
  background-color: #f5f5f5;
  border-radius: 3px;
  margin-bottom: 6%;
  padding: 0 10px 0 10px;
}
.hot-recommend .hot-item .hot-top .hot-top-right{
  float: left;
  width: 40%;
  height: 90px;
}
.hot-recommend .hot-item .hot-top .hot-top-right img{
  width: 100%;
  height: 100%;
}
.hot-recommend .hot-item .hot-bom{
  font-size: 12px;
  position: relative;
  line-height: 40px;
}
.hot-recommend .hot-item .hot-bom .img{
  position: absolute;
  top: 7px;
}
.hot-recommend .hot-item .hot-bom img{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.hot-recommend .hot-item .hot-bom .text{
  display: inline-block;
  height: 40px;
  padding-left: 30px;
}
.hot-recommend .hot-item .hot-bom .time{
  margin-left: 70px;
}

/* .avatar {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  border: 1px solid;
}
.avatar img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
} */
/* .popular{
  background-color: gainsboro;
}
.demo-carousel {
  width: 100%;
  height: 180px;
  background-color: #e6e6fa;
}
h2 {
  padding-left: 10px;
  padding-top: 6%;
  background-color: #fff;
}
.demo-carousel img {
  width: 100%;
  height: 100%;
}
.right_carousel{
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: #fff;
}
.right_carousel ul{
  width: 670px;
  height: 190px;
  padding: 20px 0px 0 10px;
  list-style: none;
}
.right_carousel ul li{
  float: left;
  margin-right: 10px;
}
.right_carousel ul li img{
  width: 100px;
  height: 150px;
}
.Hot_recommendation {
  margin-top: 10px;
  width: 100%;
  padding: 10px 10px 0 10px;
  background-color: #fff;
}
h1 {
  font-size: 18px;
  margin-bottom: 10px;
}
.popular_Introduction {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popular_Introduction_left p {
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: #000;
  margin-bottom: 4%;
}
.movie_name {
  display: inline-block;
  font-size: 13px;
  background-color: #f5f5f5;
  border-radius: 3px;
  margin-bottom: 6%;
  padding: 0 10px 0 10px;
}
.popular_Introduction_right {
  width: 31%;
  margin-left: 5%;
  margin-right: 4%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #fffafa;
}
.popular_Introduction_right img {
  width: 100%;
  height: 100%;
}
.Commentator_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  padding-bottom: 4%;
  border-bottom: 2px solid gainsboro;
  color: #999;
}
.hot-recommend:nth-last-child(){
  border-bottom: none;
}
.Commentator_info_left {
  width: 60%;
  display: flex;
  align-items: center;
}
.avatar {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  border: 1px solid;
}
.avatar img{
  width: 100%;
  height: 100%;
}
.message {
  margin-left: 4%;
  height: 30px;
  line-height: 30px;
}
.nickname{
  margin-left: 4%;
}
.message {
  margin-left: 8%;
}
.Commentator_time {
  margin-right: 4%;
}

h3 {
  padding-left: 4%;
}
.Hot_topics {
  margin-left: 2%;
  margin-right: 2%;
}
.topic_image {
  width: 92%;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background-color: #e6e6fa;
  margin: 4% 4% 4% 4%;
}
.topic_image img{
  width: 100%;
  height: 100%;
}

.reading_early {
  padding-top: 4%;
}
.reading_early h3 {
  margin-bottom: 4%;
} */
</style>
