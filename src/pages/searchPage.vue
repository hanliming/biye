<template>
  <div class="hotnews">
    <template class="search_header">
        <Input  placeholder="查找影片、影评、影单、影人" clearable class="search_input" v-model="seachKey" onblur="seach()"></Input>
        <router-link to="/" class="search_cancel">取消</router-link>
    </template>

    <div class="search_history"> 
      <div class="history_title">
        <span class="wenzi_title">搜索历史</span>
        <span class="wenzi_clear" @click="clear">清除</span>
      </div>
      <ul class="ul_history">
        <li>侯立立</li>
        <li>侯立立</li>
        <li>侯立立</li>
        <li>侯立立</li>
        <li>侯立立</li>
        <li>侯立立</li>
      </ul>
      <div class="wall"></div>
    </div>

     <div class="search_history"> 
      <div class="history_title">
        <span class="wenzi_title">大家都在搜</span>
      </div>
      <ul class="ul_history">
        <li>唐人街探案</li>
        <li>红海行动</li>
        <li>黑豹</li>
        <li>老男孩</li>
        <li>乑没</li>
        <li>妖猫转</li>
      </ul>
      <div class="wall"></div>
    </div>

    <div class="search_history"> 
      <div class="history_title">
        <span class="wenzi_title">类别</span>
      </div>
      <ul class="ul_history">
        <li>美剧</li>
        <li>韩剧</li>
        <li>港剧</li>
        <li>日剧</li>
        <li>英剧</li>
        <li>剧情</li>
        <li>爱情</li>
        <li>喜剧</li>
        <li>科幻</li>
        <li>全部</li>
      </ul>
      <div class="wall"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchPage',
  data () {
    return {
      seachKey: '',//搜索关键字
    }
  },
  methods:{
    seach(){
      console.log('search=====================')
      // this.$http.post('http://localhost:3000/search',{key: this.seachKey})
      // .then(res=>{
      //     console.log(res.data)
      //     if(res.data.success == true){
      //         alert('添加成功')
      //     }else{
      //         alert(res.data.message)
      //     }
      // },err=>{
      //     console.log(err)
      // })
    },
    clear(){
      this.$http.post('http://localhost:3000/delete')
      .then(res=>{
         if(res.data.success == true){
              alert('删除成功')
          }else{
              alert(res.data.message)
          }
      },err=>{
        console.log(err)
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_header{
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.search_input{
  width: 80%;
  margin-top: 2%;
  margin-left: 4%;
}
.search_cancel{
  font-size: 18px;
  color: #A9A9A9;
  font-family: '微软雅黑','楷体';
  margin-left: 2%;
  margin-top: 4%;
}
.search_history{
  margin-top: 4%;
  border-bottom: 1px solid #C0C0C0;
}
.history_title{
  margin: 0 4% 4% 4%;
  display: flex;
  justify-content: space-between;
}
.wenzi_title{
  font-size: 16px;
  color: #C0C0C0;
}
.wenzi_clear{
  font-size: 14px;
  color: #708090;
}
ul{
  list-style: none;
}
li{
  float: left;
  margin-left: 4%;
  margin-bottom: 4%;
  background-color: #F5F5F5;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  padding-left: 4%;
  padding-right: 4%;
}
</style>