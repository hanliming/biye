<template>
    <div class="commentsLists">
        <div class="header">
            <div @click="goBack">
                <Icon type="ios-arrow-left"></Icon> 
            </div>
            <h4>评论列表</h4>
            <div></div>
        </div>
        <div class="content">
            <div class="topicInfo">
                <div class="imageBox">
                    <img :src="info.lists.picture" alt="">
                </div>
                <div class="title">
                    <div>{{info.lists.name}}</div>
                    <div>{{info.lists.kind}}</div>
                    <div>{{info.lists.aTitle}}</div>
                </div>
            </div>
        </div>
        <div class="dividing_line"></div>
        <div class="commentBox">
            <ul>
                <li v-for="(item,index) in commentLists" :key="index">
                    <div class="touxiang">
                        <img :src="item.touxiang" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">{{item.user_name}}</div>
                                <div class="time">{{item.time}}</div>
                            </div>
                            <div class="zanBox">
                                <span>{{item.count}}</span>
                                <Icon type="thumbsup"></Icon>
                            </div>
                        </div>
                        <div class="comment">{{item.comment}}</div>
                    </div>
                </li>
            </ul>
                    <!-- <div class="footer">
            <div class="my_touxiang">
                头像
            </div>
            <input type="text" placeholder="我来说两句" @click="inputClick">
        </div> -->
        </div>
        <div class="edit" @click="createDynamic"><Icon type="edit"></Icon></div>
        <template>
            <Modal
                v-model="modal10"
                class-name="vertical-center-modal"
                @on-ok="sure">
                <textarea name="" id="" cols="30" rows="10"  placeholder="我来说两句(500字以内)"
                     class="input_fabu" v-model="content"
                     ></textarea>
            </Modal>
        </template>
         <popups-component v-if="isShowLogin" ></popups-component>
    </div>
</template>

<script>

import popupsComponent from '../mine/popupsComponent'
export default {

  name: 'CommentsLists',
  data () {
    return {
        modal10: false,//我来说两句
        info: {},
        commentLists: [],
        content: '',
        time: new Date(),
        user_name: '',
        isShowLogin:false,//true显示
        // filyerTime: Function
    }
  },
   components: {
    popupsComponent,
  },
  methods:{
    goBack () {
        this.$router.go(-1);
    },
    inputClick () {
        this.modal10 = true;
    },
    createDynamic() {
        if(!this.user_name){
            this.isShowLogin = true
        }else{
            this.modal10 = true;
        }


        // if(){

        // }
        // this.modal10 = true;
    },
    // filyerTime (date) {
    //     var y = date.getFullYear();  
    //             var m = date.getMonth() + 1;  
    //             m = m < 10 ? ('0' + m) : m;  
    //             var d = date.getDate();  
    //             d = d < 10 ? ('0' + d) : d;  
    //             var h = date.getHours();  
    //             h=h < 10 ? ('0' + h) : h;  
    //             var minute = date.getMinutes();  
    //             minute = minute < 10 ? ('0' + minute) : minute;  
    //             var second=date.getSeconds();  
    //             second=second < 10 ? ('0' + second) : second;  
    //             return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
    // },
    sure () {
        this.$http.post('http://localhost:3000/write',{movie_id: this.info.lists.labelID,comment: this.content,touxiang: 'http://www.gx8899.com/uploads/allimg/150311/22361K253-5.jpg',time: this.time,count: 0})
        .then(res=>{
            console.log(res.data)
            if(res.data.success == true){
                this.$Message.success('评论成功');
                this.content = '';
                this.$router.push({name: 'Dynamic'})
            }else{
                alert(res.data.message)
            }
        },err=>{
            console.log(err)
        })
    }

  },
  created () {
    //   console.log(this.$route.params.content)
     if(localStorage.user_name){
          this.user_name = localStorage.user_name
      }
     
      if(this.$route.params.content){
        this.info = this.$route.params.content;
        //  根据id查询电影详情
        this.$http.get("http://localhost:3000/commentLists?id=" + this.info.lists.labelID).then(
            res => {
            this.commentLists = res.data.data;
              console.log(this.commentLists);
            },
            err => {
            console.log(err);
            }
        );
      }
  }
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8% 4%;
    font-size: 20px;
}

.content{
    padding-left: 4%;
    padding-right:4%; 
}
.topicInfo{
    width: 100%;
    height: 175px;
    background-color: #eee;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}
.imageBox{
    width: 130px;
    height: 175px;
    background-color:#ccc;
    /* padding: 8px; */
}
.imageBox img{
    width: 100%;
    height: 100%;
}
.title{
    padding-top: 8px;
    line-height: 30px;
    font-size: 18px;
    margin-left: 10px;
}
.dividing_line{
    width: 100%;
    height: 5px;
    background-color: #eee;
    margin-top: 10px;
}
.commentBox{
    padding-left: 4%;
    padding-right:4%; 
    padding-bottom: 60px;
}
ul{
    list-style: none;
}
li,.nicknameBox{
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}
li{
    margin-top: 4%;
}
.touxiang{
    width: 60px;
    height: 50px;
    /* background-color: #eee; */
    padding-right: 10px;
    border-radius: 50%;
}
.touxiang img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.right_comment{
    border-bottom: 1px solid #eee;
    padding-bottom: 4%;
    width: 85%;
}
.nicheng{
    font-size: 18px;
}
.time{
    font-size: 14px;
}
.zanBox{
    font-size: 16px;
}
.comment{
    font-size: 16px;
}
.footer{
    width: 100%;
    height: 60px;
    background-color: white;
    /* position: fixed; */
    /* bottom: 0; */
    /* left: 0; */
    display: flex;
    align-items: center;
}
.ivu-modal-body{
  height: 320px;
}
.input_fabu[data-v-5a15b3e4]{
  height: 300px;
}
.my_touxiang{
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
}
input{
    width: 75%;
    margin-left: 4%;
    height: 35px;
    background-color: #eee;
    border-radius: 20px;
    border: none;
    padding-left: 2%;
}
input:focus{
    outline: none;
}
.input_fabu{
    width: 100%;
    height: 100px;
    margin-top: 20px;
    border: none;
    /* background-color: #eee; */
    font-size: 16px;
}
.input_fabu:focus{
    outline: none;
}
.edit {
  position: fixed;
  bottom: 100px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  line-height: 50px;
  text-align: center;
  font-size: 32px;
  background-color: gold;
  border-radius: 50% 45%;
  box-shadow: 1px 1px 0px 0px #ccc;
  cursor: pointer;
}
</style>


