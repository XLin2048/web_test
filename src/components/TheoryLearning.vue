<template >
  <div class="backgroundMain" style="min-width: 1200px;">
    <div class="minWidth">
      <div class="contentCenter" style="min-height: 1200px;">

        <!-- 最顶部图片 -->
        <div class="tl-image">
          <img class="tl-images" src="../assets/img/theory/Snipaste_2022-11-13_16-55-59.png"/>
        </div>

        <el-container>
          <el-main class="tl-mainarea">
            <div class="tl-subheader">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="grid-content">
                    <img src="../assets/img/theory/Snipaste_2022-11-13_16-54-15.png" class="tl-images"/>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content">
                    <img src="../assets/img/theory/Snipaste_2022-11-13_16-55-07.png" class="tl-images"/>

                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="tl-main">
              <SerifheaderVue :title="book_pic_title" />
              <div class="tl-cardarea" >
                <bookcard 
                        v-for="bookinfo in bookinfos"
                        :bookinfo="bookinfo">
                </bookcard>
              </div>
              <SerifheaderVue :title="book_title" />
              <ul clss="tl-ul">
                <li class="tl-li" v-for="item in list_info" style="cursor: pointer;">
                  · {{item}}
                </li>
              </ul>

            </div>
          </el-main>
          <el-aside class="tl-side">
            <div class="tl-sideheader">
              <div class="tl-decroblock"/>
              <div class="tl-asideheader_text">分类</div>
            </div>
            <div class="tl-card-container">
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button class="tl-item" type="primary" icon="el-icon-edit" circle></el-button>

            </div>
          </el-aside>
        </el-container>
      </div>
    </div>
  </div>
</template>
<script>
import bookcard from "./tinycomponents/bookcard.vue"
import SerifheaderVue from "./tinycomponents/Serifheader.vue";
export default {
  components: {
    SerifheaderVue,
    bookcard
  },
  data() {
    return {
      book_title: '党和国家领导人著作',
      book_pic_title: "习近平新时代中国特色社会主义思想",
      bookinfos: [{
        src: require('../assets/img/theory/1622104038230_275.jpg'),
        text: '《论中国共产党历史》'
      },
      {
        src: require('../assets/img/theory/1619095833656_322.jpg'),
        text: '《习近平新时代中国特色社会主义思想学习问答》'
      },
      {
        src: require('../assets/img/theory/1517192625733_736_3.png'),
        text: '《习近平谈治国理政》第三卷'
      },
      {
        src: require('../assets/img/theory/1517192625733_736_2.png'),
        text: '《习近平谈治国理政》第二卷'
      },
      {
        src: require('../assets/img/theory/1517192625733_736.jpg'),
        text: '《习近平谈治国理政》第一卷'
      },
      {
        src: require('../assets/img/theory/2019072209371414387.jpg'),
        text: '《习近平新时代中国特色社会主义思想学习纲要》'
      },
      {
        src: require('../assets/img/theory/2019050214541335841.jpg'),
        text: '《习近平新时代中国特色社会主义思想三十讲》'
      },
      {
        src: require('../assets/img/theory/1461123275026_802.jpg'),
        text: '《习近平总书记系列重要讲话读本（2016年版）》'
      },
       ],
      list_info: [
        "毛泽东著作",
        "周恩来著作",
        "刘少奇著作",
        "朱德著作",
        "任弼时著作",
        "邓小平著作",
        "陈云著作",
        "江泽民著作",
        "刘少奇著作",
        "胡锦涛著作",
      ]
    }
  }
}
</script>
<style scoped>
.tl-images{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tl-item{
  height: 70px;
  width: 70px;
  margin-bottom: 10px;
}
.tl-card-container{
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  height:250px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.tl-asideheader_text{
  height: 35px;
  font-size: larger;
  padding-left: 10px;
  font-weight: 600;
  line-height: 35px;
}
.tl-sideheader {
  display: flex;
  justify-content: left;
  align-items: center;

}

.tl-decroblock{
  height: 35px;
  width: 10px;
  background-color: #912627;
}
.tl-li {
  list-style-type: disc;
  display: block;
  float: left;
  width: 45%;
  font-size: 18px;
  padding-top: 10px;
  font-weight: 550;
  padding-left: 25px;
}

.tl-cardarea {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.backgroundMain {
  background-image: url(../assets/img/Group\ 1188.png);
  min-height: 1600px;
  background-repeat: no-repeat;
  background-size: cover;
}

.tl-image {
  width: 100%;
  height: 370px;
  background-color: pink;
  margin-bottom: 20px;
}

.tl-subheader {
  /* background-color: aqua; */
  height: 250px;
  padding-bottom: 20px;
}

.tl-main {
  min-height: 160px;
}

.tl-mainarea {
  padding: 20px;
  padding-top: 0px;
  padding-left: 0px;
}

.tl-side {
  /* background-color: orange; */
  /* line-height: 410px; */
  width: 300px;
}

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 210px;
}
</style>