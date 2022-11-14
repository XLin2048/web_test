<template >
  <div class="backgroundMain" style="min-width: 1200px;">
    <div class="minWidth">
      <div class="contentCenter" style="overflow: hidden;">

        <!-- 最顶部图片 -->
        <div class="pn-image">
          <el-image :src="plaque" style="width: 1200px;height: 300px"></el-image>
        </div>

        <el-row :gutter="40">
          <el-col :span="12">
            <SerifheaderVue title="党建动态" />
            <eventlistVue :list_items="event1" />
            <SerifheaderVue title="党员风采" />
            <eventlistVue :list_items="event3" />

            <img class="bottom-image full_image" src="../assets/img/party/Snipaste_2022-11-14_08-25-41.png"/>

          </el-col>
          <el-col :span="12">
            <SerifheaderVue title="通知公告" />
            <eventlistVue :list_items="event2" />

            <SerifheaderVue title="党建研究" />
            <eventlistVue :list_items="event4" />

            <img class="bottom-image full_image" src="../assets/img/party/Snipaste_2022-11-14_08-26-17.png"/>

          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import SerifheaderVue from "./tinycomponents/Serifheader.vue";
import eventlistVue from "./tinycomponents/eventlist.vue";
import plaque from "../assets/img/t4.png"
export default {
  components: {
    SerifheaderVue,
    eventlistVue
  },
  data() {
    return {
      plaque,
      event1: [
        {
          "text": "“党的二十大精神与中国式现代化理论与实践”高端论坛在广州大学举行",
          "date": "2022-11-08"
        },
        {
          "text": "广州大学传达贯彻党的二十大精神会议召开",
          "date": "2022-11-04"
        },
        {
          "text": "校党委常委会传达学习党的二十大精神和习近平总书记在二十届中共中央政治局第一次集体学习时的重要讲话精神",
          "date": "2022-10-27"
        },
        {
          "text": "校党委理论学习中心组专题学习习近平总书记在中国共产党第二十次全国代表大会上的报告",
          "date": "2022-10-26"
        },
        {
          "text": "校党委常委会传达学习习近平总书记为《复兴文库》所作序言《在复兴之路上坚定前行》精神",
          "date": "2022-10-13"
        },
      ],
      event2: [
        {
          "text": "我校与广州松田职业学院签订新一轮党建“组团式”帮扶协议",
          "date": "2022-6-30"
        },
        {
          "text": "我校举行“光荣在党50年”纪念章颁发仪式",
          "date": "2022-6-30"
        },

      ],
      event3: [
        {
          "text": "坚定不移跟党走，争做新时代好青年——我校学子深入学习党的二十大报告",
          "date": "2022-10-22"
        },
        {
          "text": "广州地区各大高校师生、各界青年认真学习党的二十大报告 奋斗是青春最靓丽的底色我校师生热议党的二十大报告",
          "date": "2022-10-18"
        },
        {
          "text": "我校师生热议党的二十大报告",
          "date": "2022-10-14"
        },
        {
          "text": "迎接党的二十大，培根铸魂育新人——我校举行2022年教师节庆祝大会",
          "date": "2022-9-9"
        },

      ],
      event4: [
        {
          "text": "广州大学与广州市协作办公室共建乡村振兴研究院",
          "date": "2022-6-10"
        },

      ],

    }
  }
}
</script>
<style scoped>
.full_image {
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.bottom-image {
  width: 600px;
  height: 150px;
  background-color: aqua;
}

.backgroundMain {
  background-image: url(../assets/img/Group\ 1188.png);
  min-height: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
}

.pn-image {
  width: 100%;
  height: 300px;
  background-color: pink;
  margin-bottom: 20px;
}
</style>