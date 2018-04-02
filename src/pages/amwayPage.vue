<template>
  <div class="amway">

  <div v-for="(item,index) in hotRecommendation" :key="index">
    <div class="popular_Introduction" @click="godetail">
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

  </div>
</template>

<script>
export default {
  name: 'amwayPage',
  data () {
    return {
      hotRecommendation: [],
    }
  },

  methods:{
    godetail(){
      this.$router.push({path: '/bannerdetailPage'})
    }
  },
  created(){
      this.$http.get("http://localhost:3000/hot").then(
      res => {
        this.hotRecommendation = res.data.data;
      },
      err => {}
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popular_Introduction{
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popular_Introduction_left p{
  width: 100%;
  font-size: 14px;
  text-align: left;
  padding-left: 2%;
  font-weight: bold;
  margin-bottom: 4%;
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
  width: 31%;
  margin-left: 5%;
  margin-right: 4%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #FFFAFA;
}
.popular_Introduction_right img{
  width: 100%;
  height: 100%;
}
.Commentator_info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  padding-bottom: 4%;
  border-bottom: 5px solid gainsboro;
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