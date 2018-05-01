<template>
  <div>
    <Upload action="http://localhost:3000/dynamic/user_img">
        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <Input v-model="msg" placeholder="" style="width: 300px"></Input>
    <Button type="primary" @click="commit">提交</Button>
    <Button type="primary" @click="posts">post</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      meg:''
    }
  },
  methods: {
    commit () {
      this.$http.get('http://localhost:3000/dynamic/add?data='+this.msg)
      .then(res => {
        // console.log(res)
      },err => {

      })
    },
    posts () {
      this.$http.post('http://localhost:3000/dynamic/upload',
      {
        params:{
          msg:this.msg,
          data: this.msg,
          key: this.msg,
          keys: this.msg,
        }
      })
      .then(
        res => {

        },
        err => {

        }
      )
    },
    getTest () {
      this.$http.get('http://localhost:3000/dynamic/d')
      .then(
        res => {
          
        },
        err => {

        }
      )
    }
  },
  created () {
    this.getTest()
  }
}
</script>
<style scoped>

</style>
