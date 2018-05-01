<template>
    <div class="filming">
        <div class="header">
            <div @click="goback">
                <Icon type="ios-arrow-left" class="cancel"></Icon>
            </div>
            <div>{{title}}</div>
            <div></div>
        </div>
        <div class="content" v-for="(item,index) in dataInfo" :key="index">
            <div class="about_movie" @click="godetail(item.labelID,item)">
                <div class="imageBox">
                    <img :src="item.picture" alt="">
                </div>
                <div class="right_box">
                    <div class="name_box">
                        <div>
                            <h3>{{item.name}}</h3>
                            <p v-if="item.pingfen != null">评分  <span>{{item.pingfen}}</span></p>
                        </div>
                        <div>
                            关注+
                        </div>
                    </div> 
                    <div class="introduce">
                        <p>{{item.aTitle}}</p>
                        <p>{{item.movieStart}}</p>
                        <p>{{item.time}}上映</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OneKind',
//   props: ["dataInfo"],
  data () {
    return {
        kid: '',//
        dataInfo:[],//
        title: '',//分类名
    }
  },
  created() {
      if (this.$route.params.kid) {
          this.kid = this.$route.params.kid
          if(this.kid == 'jq'){
              this.title = '剧情'
          }
                if(this.kid == 'xj'){
              this.title = '喜剧'
          }
                if(this.kid == 'dz'){
              this.title = '动作'
          }
                if(this.kid == 'kh'){
              this.title = '科幻'
          }
                if(this.kid == 'fz'){
              this.title = '犯罪'
          }
                if(this.kid == 'dh'){
              this.title = '动画'
          }
          this.getmovietype()
      }
  },
  methods:{
      //  根据分类查询电影
    getmovietype(){
        this.$http.get("http://localhost:3000/movie_type",{params: {type: this.kid}}).then(
        res => {
            this.dataInfo = res.data.data;
        },
        err => {
            // console.log(err)
        });
    },
    goback () {
        this.$router.go(-1)
    },
     
      godetail(id,item) {
        //   console.log(id)
        //   console.log(item);
        //   this.$router.push({name: 'FilmDetail',params:{id:id}})
          this.$router.push({name: 'FilmDetail',params: {id:id}})
      }
  }
}
</script>

<style scoped>
.header{
    padding: 8% 4% 4% 4%;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
      display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    
}
.cancel{
    font-size: 24px;
}
.content{
    padding:  4%;
    border-bottom: 1px solid #eee;
}
.content:nth-child(2){
    padding-top: 20%;
}
.content:last-child{
    padding-bottom: 60px;
}
.about_movie{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}

.imageBox{
    width: 40%;
    height: 186px;
    background-color: #eee;
    margin-right: 4%;
}
.right_box{
    width: 60%;
}
.imageBox img{
    width: 100%;
    height: 100%;
}
.name_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
}
.name_box h3{
    font-size: 18px;
}

.name_box span{
    color: orange;
}
.name_box p{
    height: 30px;
    line-height: 30px;
}
.introduce p{
    color: gray;
    font-size: 16px;
}
.introduce:first-child{
    color: black;
}
.film_review{
    height: 25px;
    line-height: 25px;
    width: 100%;
    background-color: #eee;
    margin-bottom: 4%;
    padding-left: 4%;
}
.comment_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>


