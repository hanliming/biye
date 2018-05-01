<template>
  <div class="hotnews">
    <div class="search_header">
        <!-- <input  placeholder="查找影片、影评、影单、影人" clearable class="search_input" v-model="seachKey" @blur="seach">
         -->
        <Input v-model="seachKey" :autofocus="true" icon="ios-search" placeholder="查找影片、影评、影单、影人" @on-click="search" @on-blur="search"></Input>
        <router-link to="/" class="search_cancel">取消</router-link>
    </div>

    <div class="search_history"> 
      <div class="history_title" v-if="isShowHistory">
        <span class="wenzi_title">搜索历史</span>
        <span class="wenzi_clear" @click="clear">清除</span>
      </div>
      <ul class="ul_history">
        <li v-for="(item,index) in seachData" :key="index">{{item.search_key}}</li>
      </ul>
      <div class="wall"></div>
    </div>

     <div class="search_history"> 
      <div class="history_title">
        <span class="wenzi_title">大家都在搜</span>
      </div>
      <ul class="ul_history">
        <li v-for="(itemlist,indexlist) in movielists" :key="indexlist" @click="seachmovie(itemlist.name)">{{itemlist.name}}</li>
      </ul>
      <div class="wall"></div>
    </div>

    <div class="search_history"> 
      <div class="history_title">
        <span class="wenzi_title">类别</span>
      </div>
      <ul class="ul_history">
        <li v-for="(item,index) in kindsData" :key="index" @click="kindMovieLists(item.Initials)">{{item.kind}}</li>
      </ul>
      <div class="wall"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchPage",
  data() {
    return {
      seachKey: "", //搜索关键字
      seachData: [], //查询关键字
      isShowHistory: true,
      kindsData: [
        { kind: "动画", Initials: "dh" },
        { kind: "剧情", Initials: "jq" },
        { kind: "喜剧", Initials: "xj" },
        { kind: "动作", Initials: "dz" },
        { kind: "科幻", Initials: "kh" },
        { kind: "犯罪", Initials: "fz" },
        { kind: "动画", Initials: "dh" }
      ],
      movielists: [
        { name: "后来的我们" },
        { name: "幕后玩家" },
        { name: "低压槽：欲望之城" },
        { name: "战神纪" },
        { name: "狂暴巨兽" },
        { name: "黄金花" },
        { name: "玛丽与魔女之花" }
      ]
    };
  },
  methods: {
    //添加 搜索数据
    search() {
      if (this.seachKey != "") {
        this.$http
          .post("http://localhost:3000/search", { key: this.seachKey })
          .then(
            res => {
              // console.log(res.data);
              if (res.data.success == true) {
                this.$Message.success("添加成功");
                this.$http
                  .get("http://localhost:3000/moviename", {
                    params: { name: this.seachKey }
                  })
                  .then(res => {
                    // console.log(res.data);
                    this.$router.push({
                      name: "FilmDetail",
                      params: { id: res.data.data }
                    });
                  });
              } else {
                alert(res.data.message);
              }
            },
            err => {
              console.log(err);
            }
          );
      }
    },
    //清除搜索数据
    clear() {
      this.$http.post("http://localhost:3000/delete").then(
        res => {
          if (res.data.success == true) {
            alert("删除成功");
            this.$router.go(0);
          } else {
            alert(res.data.message);
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    kindMovieLists(kind) {
      this.$router.push({ name: "OneKind", params: { kid: kind } });
    },
    //大家都在搜
    seachmovie(name) {
      this.$http
        .get("http://localhost:3000/moviename", {
          params: { name: name }
        })
        .then(res => {
          // console.log(res.data);
          this.$router.push({
            name: "FilmDetail",
            params: { id: res.data.data }
          });
        });
    }
  },
  created() {
    //  查询搜索数据
    this.$http.get("http://localhost:3000/history").then(
      res => {
        // console.log(res.data.data);
        this.seachData = res.data.data;
        if (this.seachData == "") {
          this.isShowHistory = false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_header {
  padding: 8px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  /* align-items: center;
}
.search_input{
  width: 80%;
  outline: none;
  margin-top: 2%;
  padding: 2%;
  border-radius: 5px;
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
  /* border-bottom: 1px solid #C0C0C0; */
}
.ivu-input-wrapper {
  width: 90%;
}
a {
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
    display: block;
    width: 10%;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    color: black;
}
.search_history {
  margin-top: 4%;
}

.history_title {
  margin: 0 4% 4% 4%;
  display: flex;
  justify-content: space-between;
}
.wenzi_title {
  font-size: 16px;
  color: #c0c0c0;
}
.wenzi_clear {
  font-size: 14px;
  color: #708090;
}
ul {
  list-style: none;
}
li {
  float: left;
  margin-left: 4%;
  margin-bottom: 4%;
  background-color: #f5f5f5;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  padding-left: 4%;
  padding-right: 4%;
  font-size: 16px;
  font-family: '宋体';
}
</style>