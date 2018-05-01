<template>
  <div class="box">
    <router-view></router-view>
    <div class="footer">
      <div v-for="(item,index) in footList" :key="index" class="footer_myUser" @click="cut(item,index)" >
        <Icon :type="item.icon" :color="item.active ? 'gold' : ''"/>
        <div class="footer_wenzi">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      footList: [
        {label:'推荐',icon:'home',active: false,name:'Recommend'},
        {label:'发现',icon:'android-compass',active: false,name:'Find'},
        // {label:'动态',icon:'eye',active: false,name:'Dynamic'},
        {label:'评论',icon:'eye',active: false,name:'Dynamic'},
        {label:'我的',icon:'person',active: false,name:'Mine'},
      ]
    }
  },
  methods: {
    cut (data,index) {
      this.footList.map(item => {
        item.active = false
      })
      this.footList[index].active = true
      this.$router.push({name:data.name})
    },
  },
  created () {
    this.footList[0].active = true
  }
}
</script>
<style scoped>
.footer{
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  height: 58px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  font-size: 22px;
  z-index: 999;
  border-top: 1px solid #ccc
 }
.footer_wenzi{
  font-size: 14px;
}
.footer_myUser{
  width: 25%;
  text-align: center;
}
</style>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>
