<template>
  <div class="shortvideo">
    <div class="today">/今日/</div>

    <div class="content" v-for="(item,index) in videos" :key="index">
      <div class="avatar_and_nickname"> 
          <div class="avatar">
            <img :src="item.touxiang" alt="">
          </div>
          <div class="nickname">{{item.nicheng}}</div>
      </div>
      <div class="wall"></div>
      <p @click="godetail">{{item.discription}}</p>
      <div class="video_box">
        <img :src="item.video" alt="">
      </div>
      <div class="time_and_comment">
        <span class="time">{{item.time}}</span>
        <span class="comment">{{item.counts}}<Icon type="ios-chatbubble-outline"></Icon></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'shortvideoPage',
  data () {
    return {
      videos: [],
    }
  },
  methods:{
    godetail(){
      this.$router.push({path: '/bannerdetailPage'})
    }
  },
  created(){
    this.$http.get("http://localhost:3000/video").then(
      res => {
        console.log(res.data.data);
        this.videos = res.data.data;
      },
      err => {}
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.today{
  width: 100%;
  height: 30px;
  background-color: #F5F5F5;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.avatar_and_nickname{
  margin-top: 4%;
  margin-left: 4%;
  padding-bottom: 10%;
  
}
.avatar_and_nickname div{
  float: left;
}
.avatar{
  width: 26px;
  height: 26px;
  line-height: 26px;
  border-radius: 50%;
}
.avatar img{
  width: 100%;
  height: 100%;
}
.nickname{
  margin-left: 2%;
  line-height: 26px;
}
p{
  text-align: left;
  margin-left: 4%;
  font-size: 15px;
}
.video_box{
  margin: 2% 4% 4% 4%;
  width: 92%;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background-color: #E6E6FA;
}
.video_box img{
  width: 100%;
  height: 100%;
}
.time_and_comment{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.time{
  margin-left: 4%;
}
.comment{
  margin-right: 4%;
}


</style>