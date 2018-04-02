<template>
  <div class="article">
    <div class="topic">
      <p>在世界上七大恐怖点曲靖，这可能是今年最恐怖的韩国片</p>
      <div class="topic_image" @click="godetail">
        <img src="http://image.dushemovie.com/other/20180329/5abbc51add703_5abbc51ab114178.jpg" alt="">
      </div>

      <!-- 影片链接 -->
      <div class="movie_link">
        <div class="movie_link_left">
          <div class="movie_image">
            <img src="http://image.dushemovie.com/other/20180329/5abbc51add703_5abbc51ab114178.jpg" alt="">
          </div>
          <div class="movie_info">
            <span>攻壳机动队 <span class="playing">[可播放]</span></span><br>
            <span>动作/科幻/动画</span>
          </div>
        </div>
        <!-- <div class="go_play">观看</div> -->
      </div>

      <!-- 评论信息 -->
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
      <!--列表  -->
      <div class="popular_Introduction" v-for="(item,index) in hotRecommendation" :key="index">
        <div>
          <div class="popular_Introduction_left">
            <p>{{item.content}}</p>
            <span> | {{item.from}}</span>
          </div>
          <div class="Commentator_info">
            <div class="Commentator_info_left">
              <div class="avatar">
                <img :src="item.touxiang" alt="">
              </div>
              <div class="nickname">{{item.nickname}}</div>
              <div class="message">
                <Icon type="chatbox"></Icon>
                <span>{{item.commentCount}}</span>
              </div>
              <div class="wall"></div>
            </div>
            <div class="Commentator_time">{{item.time}}</div>
          </div>
        </div>
        <div class="popular_Introduction_right" @click="godetail">
          <img :src="item.image" alt="">
        </div>
      </div>

      <!-- 推荐作者 -->
      <div class="Recommended_author">
        <div class="Recommended_author_title">推荐作者</div>
        <div class="Recommended_card">
          <ul>
            <li v-for="(item,index) in authors" :key="index">
              <div class="Recommended_avatar">
                <img src="../assets/author.jpg" alt="">
              </div><br>
              <div class="Recommended_name">{{item.nickname}}</div>
              <div>{{item.zhicheng}}</div>
              <div class="attention">+ 关注</div>
            </li>
          </ul>
          <div class="wall"></div>
        </div>
      </div>

      <!--列表  -->
      <div class="popular_Introduction" v-for="(item,index) in hotRecommendation" >
        <div>
          <div class="popular_Introduction_left">
            <p>{{item.content}}</p>
            <span> | {{item.from}}</span>
          </div>
          <div class="Commentator_info">
            <div class="Commentator_info_left">
              <div class="avatar">
                <!-- <img src="../assets/userImage.jpg" alt=""> -->
                <img :src="item.touxiang" alt="">
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
        <div class="popular_Introduction_right">
          <img :src="item.image" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'articlePage',
  data () {
    return {
      hotRecommendation: [],
      authors: [],//推荐作者
    }
  },
  methods:{
    godetail(){
      this.$router.push({path: '/bannerdetailPage'})
    }
  },
  created() {
    // 热门推荐
     this.$http.get("http://localhost:3000/hot").then(
      res => {
        console.log(res.data.data);
        this.hotRecommendation = res.data.data;
      },
      err => {}
    );

    //推荐作者
     this.$http.get("http://localhost:3000/author").then(
      res => {
        console.log(res.data.data);
        this.authors = res.data.data;
      },
      err => {}
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topic p{
  /* border-bottom: 5px solid gainsboro; */
  margin-left: 4%;
}
h3{
  padding-left: 4%;
}
.Hot_topics{
  margin-left: 2%;
  margin-right: 2%;
}
.topic_image{
  width: 92%;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background-color: #E6E6FA;
  margin: 4% 4% 4% 4%;
}
.topic_image img{
  width: 100%;
  height: 100%;
}

/* 影片链接 */
.movie_link{
  width: 92%;
  margin: 1% 4% 4% 4%;
  height: 60px;
  background-color: #E6E6FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.movie_link_left{
  width: 50%;
}
.movie_image{
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-left: 5px;
  border: 1px solid;
  float: left;
  margin-right: 4%;
}
.movie_image img{
  width: 100%;
  height: 100%;
}
.movie_info{
  margin-top: 4%;
}
.playing{
  color: #FF8C00
}
/* .go_play{
  margin-right: 4%;
  border: 1px solid;
  padding: 1% 4% 1% 4%;
  border-radius: 15px;
} */

/* 列表 */
.popular_Introduction{
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popular_Introduction_left p{
  width: 100%;
  font-size: 14px;
  /* text-align: left; */
  padding-left: 2%;
  font-weight: bold;
  margin-bottom: 4%;
}
.popular_Introduction_left span{
  margin-left: 6%;
}
.movie_name{
  text-align: left;
  padding-left: 4%;
  font-size: 13px;
  background-color: #FFFAFA;
  border-radius: 3px;
  margin-bottom: 6%;
  margin-left: 4%;
}
.popular_Introduction_right{
  width: 41%;
  margin-left: 5%;
  margin-right: 4%;
  height: 110px;
  line-height: 110px;
  text-align: center;
  background-color: #FFFAFA;
}
.popular_Introduction_right img{
  width: 100%;
  height: 100%;
}

/* 推荐作者 */
.Recommended_author{
  background-color: #F5F5F5;
  height: 240px;

}
.Recommended_author_title{
  font-size: 14px;
  margin-left: 4%;
  padding-top: 2%;
  margin-bottom: 2%;
}
.Recommended_card{
  margin-left: 4%;
  overflow: hidden;
  overflow-x: auto;
}
ul{
  list-style: none;
  width: 400%;
  overflow: hidden;
}
li{
  float: left;
  width: 12%;
  height: 180px;
  background-color: white;
  margin-right: 2%;
  overflow: hidden;
  text-align: center;
}
.Recommended_avatar{
  width: 60px;
  height: 60px;
  border: 1px solid;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
}
.Recommended_avatar img{
  width: 100%;
  height: 100%;

}
.Recommended_name{
  font-weight: bold;
  font-size: 16px;
  margin-top: -6%;
}
.attention{
  width: 60px;
  height: 20px;
  margin: 0 auto;
  margin-top: 25%;
  border: 1px solid;
  border-radius: 15px;
  background-color: #FFD700;
}






/* 评论信息 */
.Commentator_info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  padding-bottom: 4%;
  /* border-bottom: 5px solid gainsboro; */
  color: #DCDCDC;
}
.Commentator_info_left{
  width: 60%;
}
.avatar{
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  border: 1px solid;
  margin-left: 4%;
  float: left;
}
.avatar img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.nickname,.message{
  margin-left: 4%;
  height: 30px;
  line-height: 30px;
  float: left;
}
.message{
  margin-left: 8%;
}
.Commentator_time{
  margin-right: 4%;
}


</style>