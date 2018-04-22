<template>
  <div class="dynamicPage">
       <!-- 头部 -->
    <div class="header">
      <Icon type="ios-personadd-outline" class="header_icon"></Icon>
      <p>关注动态</p>
      <template>
        <Dropdown style="margin-left: 20px">
            <Button type="primary">
                全部
                <Icon type="arrow-down-b"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>全部</DropdownItem>
                <DropdownItem>认证用户</DropdownItem>
                <DropdownItem>普通用户</DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </template>
    </div>

    <!-- 热门圈子 -->
    <div class="hot_circles">
      <div class="hot_circles_title">
        <div>热门圈子</div>
        <div>更多 <Icon type="ios-arrow-right"></Icon></div>
      </div>
      <div class="hot_circles_link">
        <div>影视圈</div>
        <div>闲聊圈</div>
      </div>
      <div class="wall"></div>
    </div>

    <!-- 话题文章 -->
    <div class="content" v-for="(item,index) in hotRecommendation" v-if="index <= 1">
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
          <div class="follow go_play"><span>+</span>关注</div>
      </div>
      <div class="wall"></div>
      <template class="score">
        <Row>
            <Col span="12">
                <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}分</span>
                </Rate>
            </Col>
        </Row>
      </template>
      <div class="description_content">
        <div class="content_wenzi">{{item.description}}</div>
      </div>
      <div class="hotnews_photoes">
        <div class="photo">
          <img :src="item.img" alt="">
        </div>
        <!-- 影片链接 -->
        <div class="movie_link">
          <div class="movie_link_left">
            <div class="movie_image">
              <img :src="item.small_image" alt="">
            </div>
            <div class="movie_info">
              <span>{{item.kinds}}</span>
            </div>
          </div>
          <div class="go_play">观看</div>
        </div>


        <!-- 点赞和评论 -->
        <div class="attention">
          <div class="like"><Icon type="thumbsup"></Icon> <span>1</span></div>
          <div>/</div>
          <div class="comments"><Icon type="chatbox-working"></Icon> <span>2</span></div>
        </div>
        
      </div>
    </div>


    <!-- 推荐热评 -->
    <div class="recommended_hot_review">
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
    <div class="wall"></div>

    <div class="content" v-for="(item,index) in hotRecommendation">
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
          <div class="follow go_play"><span>+</span>关注</div>
      </div>
      <div class="wall"></div>
      <template class="score">
        <Row>
            <Col span="12">
                <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}分</span>
                </Rate>
            </Col>
        </Row>
      </template>
      <div class="description_content">
        <div class="content_wenzi">{{item.description}}</div>
      </div>
      <div class="hotnews_photoes">
        <div class="photo">
          <img :src="item.img" alt="">
        </div>
        <!-- 影片链接 -->
        <div class="movie_link">
          <div class="movie_link_left">
            <div class="movie_image">
              <img :src="item.small_image" alt="">
            </div>
            <div class="movie_info">
              <span>{{item.kinds}}</span>
            </div>
          </div>
          <div class="go_play">观看</div>
        </div>


        <!-- 点赞和评论 -->
        <div class="attention">
          <div class="like"><Icon type="thumbsup"></Icon> <span>1</span></div>
          <div>/</div>
          <div class="comments"><Icon type="chatbox-working"></Icon> <span>2</span></div>
        </div>
        
      </div>
    </div>


    <footer-component></footer-component>

  </div>
</template>

<script>
import footerComponent from './footerComponent'

export default {
  name: 'dynamicPage',
  components: {
      footerComponent,
  },
  data () {
    return {
      valueText: 3,
      valueCustomText: 3.8,
      hotRecommendation: []
    }
  },
  created(){
    this.$http.get("http://localhost:3000/hotnews").then(
      res => {
        console.log(res.data.data);
        this.hotRecommendation = res.data.data;
      },
      err => {}
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 头部 */
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-family: '黑体';
  font-weight: bold;
  padding: 4% 4% 0 4%;
  height: 55px;
  background-color: #E6E6FA;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.header_icon{
  font-size: 28px;
}
.ivu-btn-primary{
  background-color: #DCDCDC;
  color: black;
}
.ivu-btn-primary:hover{
  border-color: #DCDCDC;
}
li[data-v-3de72fc0]{
  width: 25%;
  text-align: center;
}

/* 热门圈子 */
.hot_circles{
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
}

/* 话题文章 */
.content{
   border-bottom: 5px solid gainsboro;
}
.avatar_and_nickname{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar_box{
  width: 75%;
  margin-left: 4%;
  margin-top: 4%;
}
.avatar{
  width: 36px;
  height: 36px;
  line-height: 36px;
  border: 1px solid;
  border-radius: 50%;
  text-align: center;
  float: left;
  margin-right: 5%;
}
.avatar img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.nickname_box{
  float: left;
  margin-right: 5%;
}
.classification{
  float: left;
  border: 1px solid;
  color: #DCDCDC;
  margin-right: 2%;
  
}
.ivu-col-span-12{
  margin-left: 4%;
}
.follow span{
  color: #FF8C00;
  display: inline-block;
  padding-right: 4%;
}
.description_content{
  margin-left: 4%;
  margin-top: 4%;
}
.content_wenzi{
  line-height: 30px;
  font-size: 14px;
  text-align: left;
}

.photo{
  margin-left: 4%;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background-color: #E6E6FA;
  margin-bottom: 4%;
}
.photo img{
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
.go_play{
  width: 20%;
  margin-right: 4%;
  border: 1px solid;
  padding: 1% 0 1% 0;
  text-align: center;
  border-radius: 15px;
}

/* 点赞和评论 */
.attention{
  margin: 0 4% 4% 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.like{
  margin-left: 15%;
}
.comments{
  margin-right: 15%;

}


/* 推荐热评 */
 .recommended_hot_review{
   margin-top: 4%;
   margin-left: 4%;
 }
.hot_review_title{
  font-size: 18px;
  padding-bottom: 4%;
  color: #DCDCDC;
}
.hot_review_box{
  overflow: hidden;
  overflow-x: auto;
}
 ul{
   list-style: none;
   width: 400%;
   overflow: hidden;
 }
 li{
   width: 18%;
   background-color: #E6E6FA;
   padding: 2%;
   font-size: 16px;
   margin-right: 2%;
   margin-bottom: 2%;
   float: left;
 }
 .last_li{
   margin-top: 5%;
 }
 .hot_content{
   border-bottom: 1px solid #DCDCDC;
   padding-bottom: 4%;
 }
 li p{
   padding-top: 2%;
   font-size: 14px;
 }
 .hot_review_like{
   display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .avatar_nickname{
   text-align: right;
 }
 .avatar_nickname .nickname{
  width: 20%;
  float: left;
  line-height: 36px;
  margin-right: 4%;
   overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  /* text-align: right; */
 }

/* 剩余精彩热评 */
 .li_right{
   width: 45px;
   height: 45px;
   margin: 0 auto;
   border-radius: 50%;
   text-align: center;
   line-height: 45px;
   background-color: #DCDCDC;
 }
 .li_Remaining{
   text-align: center
 }


</style>