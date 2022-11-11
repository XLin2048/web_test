<template >
  <div class="backgroundMain" style="min-width: 1200px;">
    <div class="minWidth">
      <div class="contentCenter" style="min-height: 1200px;">

        <!-- 最顶部图片 -->
        <div class="pn-image">
          image
        </div>

        <el-row :gutter="40">
          <el-col :span="12">
            <SerifheaderVue :title="title1"/>
            <eventlistVue/>
            <SerifheaderVue :title="title2"/>
            <eventlistVue/>

            <img class="bottom-image"/>

          </el-col>
          <el-col :span="12">
            <SerifheaderVue :title="title3"/>
            <eventlistVue/>

            <SerifheaderVue :title="title4"/>
            <eventlistVue/>

            <img class="bottom-image"/>

          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import SerifheaderVue from "./tinycomponents/Serifheader.vue";
import eventlistVue from "./tinycomponents/eventlist.vue";
export default {
  components: {
    SerifheaderVue,
    eventlistVue
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.bottom-image{
  width: 600px;
  height: 150px;
  background-color: aqua;
}
.backgroundMain {
  background-image: url(../assets/img/Group\ 1188.png);
  min-height: 1600px;
  background-repeat: no-repeat;
  background-size: cover;
}

.pn-image {
  width: 100%;
  height: 300px;
  background-color: pink;
  margin-bottom: 20px;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>