<template>

  <div class="contentCenter">

    <div class="titleImg">
      <el-carousel height="200px" arrow="always" style="margin-top: 50px">
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <div class="img">
            <el-image
                :src=item
            ></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>


    <div class="cards">
      <el-col :span="24" v-for="item in 4" :key="item">
        <el-card shadow="hover" :body-style="{ padding: '14px' }">

          <el-col :span="10">
            <el-image
                :src=pic1
                class="show"></el-image>
          </el-col>

          <el-col :span="10">
            <span class="text">软件工程系-软件工程系党总支-简介-动态</span>
          </el-col>

          <el-col :span="4">
            <span class="time">2022-10-30</span>
          </el-col>

        </el-card>
      </el-col>

    </div>

  </div>

</template>

<script>

import p2 from "../assets/img/2.jpg"
import p3 from "../assets/img/3.jpg"
import p4 from "../assets/img/4.jpg"
import p5 from "../assets/img/5.jpg"
import p6 from "../assets/img/6.jpg"
import p7 from "../assets/img/7.jpg"
import pic1 from "../assets/img/test.jpg"

export default {
  name: "FacultyNews",
  data() {
    return {
      pic1,
      pics: [p2, p3, p4, p5, p6, p7]
    }
  }
}
</script>

<style scoped>

.show {
  width: 300px;
  height: 60px;
}

.cards {
  margin: 0 auto;
  margin-top: 70px;
  width: 1200px;
}

.titleImg {
  margin: 0 auto;
  text-align: center;
  width: 1200px;
}

</style>