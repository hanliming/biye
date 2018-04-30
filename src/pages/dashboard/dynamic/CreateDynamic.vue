<template>
  <div>
    <Upload action="http://192.168.0.105:3000/dynamic/user_img">
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
      msg:'',
    }
  },
  methods: {
    commit () {
      this.$http.get('http://localhost:3000/dynamic/add?id='+this.msg)
      .then(res => {
        console.log(res)
      },err => {

      })
    },
    posts () {
      this.$http.post('http://localhost:3000/dynamic/add_comment',
      {
        content:this.msg
      }
      )
      .then(
        res => {

        },
        err => {

        }
      )
    },
    getTest () {
      this.$http.get('http://localhost:3000/dynamic/comment')
      .then(
        res => {
          
        },
        err => {
          
        }
      )
    },
    test () {
      this.$http.get('http://localhost:3000/dynamic/movie_type',{params:{type:'jq'}})
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
    this.test()
  }
}
</script>
<style scoped>

</style>
