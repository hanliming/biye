<template>
    <div class="filming">
        <p class="title">3天收到点赞最多的用户,每天更新</p>

        <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>1</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie 主笔</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>2</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie 主笔</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>


                     <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>3</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie 主笔</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>


                     <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>4</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie 主笔</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>


        <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>5</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie 资源达人</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>6</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie家族最快get到新闻资源的咨询达人</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div class="content">
            <div class="number">
                <div class="line">/</div>
                <div>7</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>推荐值得看的二次元作品,知名影视自媒体</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>

           <div class="content">
            <div class="number">
              <div class="line">/</div>
                <div>8</div>
                <div class="line">/</div>
            </div>
            <div class="about_movie">
                <div class="imageBox">
                    <img src="" alt="">
                </div>
                <div>
                    <div class="name_box">
                        <div>
                            <h3>肉叔</h3>
                            <div>侃侃movie 主笔</div>
                        </div>
                        <div class="guanzhu">
                            关注+
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'redlistComponent',
  data () {
    return {
       
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.title{
    text-align: center;
    padding: 6% 6% 0% 6%;
    font-size: 16px;
}
.content{
    padding: 4%;
    border-bottom: 5px solid #eee;
}
.number{
      display: flex;
    justify-content: space-between;
    align-items: center;
    /* text-align: center; */
    padding-left: 40%;
    padding-right: 40%;
    height: 30px;
    line-height: 30px;
    padding-bottom: 2%;
}
.line{
    color: #eee;
}
.about_movie{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;

}
.imageBox{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #eee;
    margin-right: 4%;
}
.name_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 260px;
}
.guanzhu{
    width: 28%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: yellow;
    border-radius: 15px;
}



</style>


