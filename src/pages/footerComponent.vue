<template>
    <div class="footer">
      <div class="footer_popular" @click="goIndexpage">
        <Icon type="home"></Icon>
        <div class="footer_wenzi">推荐</div>
      </div>
      <div @click="findpage">
        <Icon type="android-compass"></Icon>
        <div class="footer_wenzi">发现</div>
      </div>
      <div @click="goDynamicpage">
        <Icon type="eye" class="footer_eye"></Icon>
        <div class="footer_wenzi">动态</div>
      </div>
      <div class="footer_myUser"  @click="goUserpage">
        <Icon type="person"></Icon>
        <div class="footer_wenzi">我的</div>
      </div>
    </div>
</template>

<script>

export default {
  name:'footerComponent',
  data(){
    return {

    }
  },

  methods: {
    goUserpage(){
      this.$router.push({path: '../userPage'})
    },
    goDynamicpage(){
      this.$router.push({path: '../dynamicPage'})
    },
    findpage(){
      this.$router.push({path: '../findPage'})
    },
    goIndexpage(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #D8BFD8;
  font-size: 26px;
  z-index: 999;
  /* padding-top: 60px; */
 }
.footer_eye{
  font-size: 32px;
}
.footer_wenzi{
  font-size: 14px;
}
.footer_popular{
  padding-left: 2%;
}
.footer_myUser{
  padding-right: 2%;
}
</style>


