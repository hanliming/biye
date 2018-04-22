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
                    <img src="" alt="">
                </div>
                <div class="title">《CMBYN》还真打算拍裸体镜头！甜茶“躲”过一劫</div>
            </div>
        </div>
        <div class="dividing_line"></div>
        <div class="commentBox">
            <ul>
                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div class="zanBox">
                                <span>10</span>
                                <Icon type="thumbsup"></Icon>
                            </div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>

                                <li>
                    <div class="touxiang">
                        <img src="" alt="">
                    </div>
                    <div class="right_comment">
                        <div class="nicknameBox">
                            <div>
                                <div class="nicheng">昵称</div>
                                <div class="time">时间</div>
                            </div>
                            <div>点赞</div>
                        </div>
                        <div class="comment">评论内容评论内容评论内容评论内容评论内容评论内容</div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="footer">
            <div class="my_touxiang">
                头像
            </div>
            <input type="text" placeholder="我来说两句" @click="inputClick">
        </div>

        <template>
            <Modal
                v-model="modal10"
                class-name="vertical-center-modal">
                <textarea name="" id="" cols="30" rows="10"  placeholder="我来说两句(500字以内)" class="input_fabu"></textarea>
            </Modal>
        </template>
    </div>
</template>

<script>
export default {
  name: 'commentListsPage',
  data () {
    return {
        modal10: false,//我来说两句  
    }
  },
  methods:{
    goBack () {
        this.$router.go(-1);
    },
    inputClick () {
        this.modal10 = true;
    },
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
    height: 120px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}
.imageBox{
    width: 130px;
    height: 120px;
    background-color:#ccc;
    padding: 8px;
}
.title{
    padding-top: 8px;
    line-height: 30px;
    font-size: 18px;
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
    align-items: center;
}
li{
    margin-top: 4%;
}
.touxiang{
    width: 80px;
    height: 80px;
    background-color: #eee;
    margin-right: 4%;
}
.right_comment{
    border-bottom: 1px solid #eee;
    padding-bottom: 4%;
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
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
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
    background-color: #eee;
    font-size: 16px;
}
.input_fabu:focus{
    outline: none;
}
</style>


