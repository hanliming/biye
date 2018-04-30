<template>
    <div class="filming">
        <div class="film_box" >
            <div class="block-box" :style="styles"></div>
            <div class="image_box">
                <img :src="sigleLists.picture" alt="">
            </div>
            <div class="alittle first">{{sigleLists.name}}</div>
            <div class="alittle">{{sigleLists.aTitle}}</div>
            <div class="alittle">{{sigleLists.kind}}</div>
            <div class="time">
                <div>{{sigleLists.time}}上映</div>
                <div>片长</div>
            </div>
        </div>
        <div class="comment_box">
            <h4>用户评论</h4>
            <ul>
                <li v-for="(item,index) in commentLists" :key="index">
                    <div class="image">
                        <img :src="item.touxiang" alt="">
                    </div>
                    <div class="content">
                        <div class="content_people_info">
                            <div class="left">
                                <p>{{item.user_name}}</p>
                                <div  class="content_people_info_detail">
                                    <div class="date">{{item.time | timer}}</div>
                                    <div>{{item.source}}星</div>
                                </div>
                            </div>
                            <div class="right">赞 {{item.count}}</div>
                        </div>
                        <div class="pingyu">{{item.comment}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'filmingComponent',

  data () {
    return {
        id: '',//电影id
        filmInfo: '',//电影信息
        commentLists: [],//所有的评论列表
        sigleLists: [],//单部电影的评论列表
        styles:{}
    }
  },
  created() {
      
    //   this.id = this.$route.query.id;
    //   content: item
      this.id = this.$route.params.id;
    //   this.filmInfo = this.$route.query.content;
      console.log(this.id);
    //   console.log(this.filmInfo)
      if(this.$route.params.id){

          this.fetchData();
          this.fetchInfo();
      }  
  },
filters: {
    timer: function (value) {
      if (!value) return ''
    //   let Y = new Date(value).getFullYear()
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
      return M + '-' + D + ' ' + h + ':' + m + ':' + s
    }
  },
  methods:{
      fetchData () {
        this.$http.get("http://localhost:3000/filmInfo?id=" + this.id).then(
                res => {
                    this.sigleLists = res.data.data;
                    this.styles.background = 'url('+ res.data.data.picture +') no-repeat'
                    this.styles.backgroundSize = '100%'
                    // this.backgroundStyle.background = 'url('++')'
                },
                err => {
                    console.log(err)
                });
      },
      fetchInfo () {
        //  根据id查询电影详情
        this.$http.get("http://localhost:3000/commentLists?id=" + this.id).then(
        res => {
            this.commentLists = res.data.data;
            console.log(this.sigleLists)
        },
        err => {
            console.log(err)
        });
      }
  
  }
}
</script>

<style scoped>
.filming .film_box{
    width: 100%;
    height: 490px;
    padding-top: 50px;
    position: relative;
}
.filming .film_box .block-box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .1;
}
.filming .film_box .image_box{
    width: 160px;
    height: 240px;
    margin: 0 auto;
}
.filming .film_box .image_box img{
    width: 100%;
    height: 100%;
}
.filming .alittle{
    width: 100%;
    text-align: center;
    height: 25px;
    line-height: 25px;
    font-size: 16px;
}
.first{
    margin-top: 40px;

}
.filming .time{
    padding: 8px 25%; 
     display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
}
.comment_box{
    margin-top: 15px;
    border-top: 5px solid #eee;
    padding-bottom: 50px;
}
.comment_box h4{
    padding: 15px;
    
}
.comment_box ul li{
    padding: 5px 18px;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
}
.comment_box ul li .image{
    width: 45px;
    height: 45px;
    /* border-radius: 50%; */
    /* border: 1px solid red; */

}

.comment_box ul li .image img{
    width: 100%;
    height: 100%;
        border-radius: 50%;
}
.comment_box ul li .content{
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    width: 80%;
}
 .comment_box ul li .content .content_people_info{
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .content_people_info .left{
    width: 200px;
    padding-left: 15px;
}
.content_people_info .right{
    width: 20%;
    text-align: right;

}
.content_people_info_detail{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}
.content_people_info_detail .date{
    margin-right: 25px;
}

.pingyu{
    width: 100%;
    margin-top: 15px;
    padding-left: 15px;
}

</style>


