<template>
    <div class="filming">
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
            <p class="film_review" v-if="item.commentone">影评: {{item.commentone}}</p>
            <p class="film_review" v-if="item.commenttwo">影评： {{item.commenttwo}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'filmingComponent',
  props: ["dataInfo"],
  data () {
    return {
       
    }
  },
  created() {
    //   console.log(this.dataInfo)
  },
  methods:{
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
.content{
    padding: 4%;
    border-bottom: 1px solid #eee;
}
.about_movie{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding-bottom: 8%;
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
    font-size: 16px;
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
    font-size: 14px;
}
.film_review{
    height: 25px;
    line-height: 25px;
    width: 100%;
    background-color: #eee;
    margin-bottom: 4%;
    padding-left: 4%;
    font-size: 16px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.comment_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>


