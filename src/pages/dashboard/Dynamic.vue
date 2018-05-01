<template>
  <div class="dynamicPage" v-if="$route.name == 'Dynamic'">
    <div class="header">
      <span>动态 / 评论</span>
    </div>
    <!-- <div class="edit" @click="createDynamic"><Icon type="edit"></Icon></div> -->

    <!-- <div class="dynamic">

    </div>
    <div class="comment">

    </div> -->


    <!-- 话题文章 -->
    <div class="content" v-for="(item,index) in hotRecommendation_commnet" v-if="index < 21"  :key="index">
        <div class="avatar_and_nickname"> 
            <div class="avatar_box">
              <div class="avatar">
                <img :src="item.touxiang" alt="">
              </div>
              <div class="nickname_box">
                <div class="nickname">{{item.nickname}}</div>
                <div class="time">{{item.time}}</div>
              </div>
              <div class="classification">{{item.comment}}</div>
            </div>
        </div>
        <div class="wall"></div>
        <div class="description_content">
          <div class="content_wenzi">{{item.description}}</div>
        </div>
        <div class="hotnews_photoes">
          <!-- <div class="photo">
            <img :src="item.lists.picture" alt="">
          </div> -->
          <!-- 影片链接 -->
          <div class="movie_link">
            <div class="movie_link_left">
              <div class="movie_image">
                <img :src="item.lists.picture" alt="">
              </div>
              <div class="movie_info">
                <div>{{item.lists.name}}</div>
                <div>{{item.lists.kind}}</div>
                <div>{{item.lists.aTitle}}</div>


              </div>
            </div>
          </div>
          <!-- 点赞和评论 -->
          <div class="attention">
            <div class="like" @click="zan(item.count,index)" :class="{active: item.likeclass}">
                  <Icon type="thumbsup"></Icon> <span>{{item.count}}</span>
              </div>
            <div>/</div>
            <div class="comments" @click="goCommentList(item)">
              <Icon type="chatbox-working"></Icon> <span>2</span>
            </div>
          </div>
          
        </div>
    </div>


    <!-- 推荐热评 -->
    <!-- <div class="recommended_hot_review">
      <p class="hot_review_title">推荐热评</p>
      <div class="hot_review_box">
        <ul>
          <li>
            <div class="hot_content">已悲凉做底色,披上荒诞的外衣,开着不合时宜的玩笑,戳破众生的面貌,那尊大佛,你看到什么就是什么吧!</div>
            <p>评论<span>《大佛普拉斯》</span></p>
            <div class="hot_review_like">
              <div><Icon type="thumbsup"></Icon><span>5</span></div>
              <div class="avatar_nickname">
                <div class="nickname">昵称nenenenenenen</div>
                <div class="avatar">头像</div>
              </div>
            </div>
          </li>

          <li>
            <div class="hot_content">已悲凉做底色,披上荒诞的外衣,开着不合时宜的玩笑,戳破众生的面貌,那尊大佛,你看到什么就是什么吧!</div>
            <p>评论<span>《大佛普拉斯》</span></p>
            <div class="hot_review_like">
              <div><Icon type="thumbsup"></Icon><span>5</span></div>
              <div class="avatar_nickname">
                <div class="nickname">昵称nenenenenenen</div>
                <div class="avatar">头像</div>
              </div>
            </div>
          </li>

          <li class="last_li">
            <div class="li_right"><Icon type="chevron-right"></Icon></div>
            <div class="li_Remaining">全部7条精彩热评</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wall"></div>  -->

  </div>
  <div v-else>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueText: 3,
      valueCustomText: 3.8,
      hotRecommendation: [],
      hotRecommendation_commnet: []
    };
  },
  methods: {
    createDynamic() {
      // this.$router.push({ name: "CreateDynamic" });

    },
    goCommentList (item) {
      // this.$router.push({name: 'FilmDetail',params: {id:id}})
      console.log(item);
      this.$router.push({name: 'CommentsLists',params: {content: item}})

    },
    zan(count,index) {
      if(this.hotRecommendation_commnet[index].likeclass == true){
          this.hotRecommendation_commnet[index].likeclass = false;
          this.hotRecommendation_commnet[index].count--
      }else{
          this.hotRecommendation_commnet[index].likeclass = true;
          this.hotRecommendation_commnet[index].count++
      }
    }
  },
  created() {
    this.$http.get("http://localhost:3000/hotnews").then(
      res => {
        console.log(res.data.data);
        this.hotRecommendation = res.data.data;
        this.$http.get("http://localhost:3000/hotnews_comment").then(res => {
          console.log(res.data.data, "pinglun");
          this.hotRecommendation_commnet = res.data.data;
          this.hotRecommendation_commnet.forEach((item, index) => {
            this.hotRecommendation.forEach((itemmovie, indexmovie) => {
              if (item.movie_id == itemmovie.labelID) {
                item.lists = itemmovie;
                item.likeclass = false;
              }
            });
          });

          console.log(this.hotRecommendation_commnet, "====================");
        });
      },
      err => {}
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 头部 */
.header {
  font-size: 16px;
  font-family: "黑体";
  font-weight: bold;
  height: 55px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  text-align: center;
  line-height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  padding-bottom: 50px;
  margin-bottom: 50px;
}
/* .edit {
  position: fixed;
  bottom: 100px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  line-height: 50px;
  text-align: center;
  font-size: 32px;
  background-color: gold;
  border-radius: 50% 45%;
  box-shadow: 1px 1px 0px 0px #ccc;
  cursor: pointer;
} */

.ivu-btn-primary {
  background-color: #dcdcdc;
  color: black;
}
.ivu-btn-primary:hover {
  border-color: #dcdcdc;
}
li[data-v-3de72fc0] {
  width: 25%;
  text-align: center;
}

/* 热门圈子 */
/* .hot_circles{
  padding-top: 55px;
}
.hot_circles_title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4%;
  padding: 4% 4% 0 4%;
}
.hot_circles_title div{
  font-size: 16px;
}
.hot_circles{
  border-bottom: 5px solid gainsboro;
}
.hot_circles_link div{
  width: 105px;
  height: 105px;
  text-align: center;
  line-height: 105px;
  background-color: #E6E6FA;
  float: left;
  margin: 4%;
} */

/* 话题文章 */
.content {
  border-bottom: 5px solid gainsboro;
}
.dynamicPage:nth-child(1){
  padding-top: 50px;
}
.avatar_and_nickname {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar_box {
  margin: 4%;
}
.avatar {
  width: 36px;
  height: 36px;
  line-height: 36px;
  border: 1px solid;
  border-radius: 50%;
  text-align: center;
  float: left;
  margin-right: 5%;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.nickname_box {
  float: left;
  margin-right: 5%;
}
.classification {
  color: black;
  margin-top: 12%;
  width: 100%;
  font-size: 16px;
}
.ivu-col-span-12 {
  margin-left: 4%;
}
.follow span {
  color: #ff8c00;
  display: inline-block;
  padding-right: 4%;
}
.description_content {
  margin-left: 4%;
  margin-top: 4%;
}
.content_wenzi {
  line-height: 30px;
  font-size: 14px;
  text-align: left;
}

.photo {
  margin-left: 4%;
  width: 140px;
  height: 208px;
  line-height: 120px;
  text-align: center;
  background-color: #e6e6fa;
  margin-bottom: 4%;
}
.photo img {
  width: 100%;
  height: 100%;
}

/* 影片链接 */
.movie_link {
  width: 92%;
  margin: 1% 4% 4% 4%;
  height: 180px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.movie_link_left {
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.movie_image {
  width: 100px;
  height: 150px;
  text-align: center;
  line-height: 50px;
  margin-left: 5px;
  border: 1px solid;
  float: left;
  margin-right: 4%;
}
.movie_image img {
  width: 100%;
  height: 100%;
}
.movie_info {
  margin-top: 4%;
  font-size: 18px;
}
.movie_info div:nth-child(2){
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.playing {
  color: #ff8c00;
}
.go_play {
  width: 20%;
  margin-right: 4%;
  border: 1px solid;
  padding: 1% 0 1% 0;
  text-align: center;
  border-radius: 15px;
}

/* 点赞和评论 */
.attention {
  margin: 0 4% 4% 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.like {
  margin-left: 15%;
}
.active{
  color: red;
  /* background-color: red; */
}
.comments {
  margin-right: 15%;
}

/* 推荐热评 */
.recommended_hot_review {
  margin-top: 4%;
  margin-left: 4%;
}
.hot_review_title {
  font-size: 18px;
  padding-bottom: 4%;
  color: #dcdcdc;
}
.hot_review_box {
  overflow: hidden;
  overflow-x: auto;
}
ul {
  list-style: none;
  width: 400%;
  overflow: hidden;
}
li {
  width: 18%;
  background-color: #e6e6fa;
  padding: 2%;
  font-size: 16px;
  margin-right: 2%;
  margin-bottom: 2%;
  float: left;
}
.last_li {
  margin-top: 5%;
}
.hot_content {
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 4%;
}
li p {
  padding-top: 2%;
  font-size: 14px;
}
.hot_review_like {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar_nickname {
  text-align: right;
}
.avatar_nickname .nickname {
  width: 20%;
  float: left;
  line-height: 36px;
  margin-right: 4%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 剩余精彩热评 */
.li_right {
  width: 45px;
  height: 45px;
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
  line-height: 45px;
  background-color: #dcdcdc;
}
.li_Remaining {
  text-align: center;
}

</style>