<template>
  <div class="settingPage" v-if="$route.name == 'AllKindsPage'">
    <!-- 设置 返回 -->
    <div class="header">
        <div @click="goback">
            <Icon type="ios-arrow-left" class="cancel"></Icon>
        </div>
        <p>全部分类</p>
        <div></div>
    </div>
    <div class="all_kinds">
        <div>
            <p>影视分类</p>
            <div class="kind_box bottom_line" v-for="(item,index) in kindData" :key="index">
                <div class="line_box" v-for="(itemList,indexList) in item.lists" :key="indexList">
                    <div @click="kindMovieLists(itemList.Initials)">{{itemList.kind}}</div>
                </div>
                <div class="wall"></div>
            </div>
        </div>
        <div class="eara">
            <p>地区</p>
            <div class="kind_box">
                <div class="line_box">
                    <div>华语</div>
                    <div>日韩</div>
                </div>
                <div class="wall"></div>
                <div class="line_box">
                    <div>欧美</div>
                    <div>其他</div>
                </div>
                <div class="wall"></div>
            </div>
        </div>
    </div>
  </div>
  <div v-else>
        <router-view></router-view>
    </div>
</template>

<script>
// import filmingComponent from '../components/filmingComponent'
// import comingsoonComponent from '../components/comingsoonComponent'
export default {
  name: 'cinemaLineupPage',
//   components: {
//     filmingComponent,
//     comingsoonComponent,
//   },
  data () {
    return {
       switch1: false,
       user_name:'',
       isShowLogin:false,
       modal10: false,//版本检测
       kindData: [
           {lists: [
               {kind: '剧情',Initials: 'jq'},
               {kind: '喜剧',Initials: 'xj'},
               {kind: '动作',Initials: 'dz'},
               {kind: '科幻',Initials: 'kh'},
               {kind: '犯罪',Initials: 'fz'},
               {kind: '动画',Initials: 'dh'},
           ]},

              {lists: [
               {kind: '惊悚',Initials: 'js'},
               {kind: '动画',Initials: 'dh'},
               {kind: '冒险',Initials: 'mx'},
               {kind: '悬疑',Initials: 'xy'},
               {kind: '战争',Initials: 'zz'},
               {kind: '音乐',Initials: 'yy'},
           ]},

              {lists: [
               {kind: '传记',Initials: 'zj'},
               {kind: '爱情',Initials: 'aq'},
               {kind: '家庭',Initials: 'jt'},
               {kind: '恐怖',Initials: 'kb'},
               {kind: '历史',Initials: 'ls'},
               {kind: '古装',Initials: 'gz'},
           ]},
       ]
    }
  },
  methods:{
      goback(){
          this.$router.go(-1)
      },
      kindMovieLists(kind) {
        
        this.$router.push({name:'OneKind',params: {kid: kind}})
      }
  },
  created () {
    //   if(localStorage.user_name){
    //       this.user_name = localStorage.user_name
    //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 头部 返回 */
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: '黑体';
  font-weight: bold;
  padding: 4% 0 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
}
.all_kinds{
    padding: 60px 4% 0 4%;
}
p{
    font-size: 18px;
}
.kind_box{
    border-bottom: 1px solid #eee;
}
.line_box div{
    width: 45%;
    height: 55px;
    float: left;
    background-color: rgba(146, 146, 82, 0.616);
    margin-bottom: 4%;
    margin-right: 4%;
    font-size: 18px;
    color: white;
    padding-left: 4%;
    padding-top: 2%;
}
.wall{
    clear: both;
}
.bottom_line{
    border-bottom: 1px solid #eee;
    margin-bottom: 4%; 
}
.eara{
    padding-bottom: 50px;
}
</style>