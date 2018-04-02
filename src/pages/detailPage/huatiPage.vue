<template>
  <div class="huati"> 
      <div class="header">
          <div @click="goback">
              <Icon type="ios-arrow-left"></Icon>
          </div>
          <div>我的话题</div>
          <div></div>
      </div>
      <div class="content">
          没有参与话题
      </div>
  </div>
</template>

<script>
export default {
    name: 'huatiPage',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }

    
}
</script>

<style scoped>
.header{
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4%;
  font-size: 24px;
  padding-left: 4%;
}
.content{
    font-size: 24px;
    padding-top: 30%;
    text-align: center;
    color: gray;
}
</style>


