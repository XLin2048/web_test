<template>
  <div class="body contentCenter" style="margin-bottom: 50px;">
    <!-- 顶部的滚动 -->
    <el-carousel :interval="5000" arrow="always" style="margin-bottom: 20px;">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/img/Rectangle 1040.png" alt="">
      </el-carousel-item>
    </el-carousel>

    <!-- 下面的学院总支 -->
    <!-- 标题 -->
    <div style="border-bottom: 3px solid #a40001;margin-bottom: 10px;">
      <div style="border-bottom: 2px solid #a40001;margin-bottom: 3px;">
        <div
          style="background-color: #a40001;width: 300px;text-align: center;height: 40px;line-height: 40px;color: #fff;font-size: 20px;border-radius: 5px 5px 0 0;margin-bottom: 2px;">
          学院总支
        </div>
      </div>
    </div>

    <!-- 下方内容 -->

    <div>
      <el-card shadow="hover" style="cursor: pointer;">
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <!-- 左边图片文字 -->
          <div style="display: flex;align-items: center;">
          <img src="../assets/img/4.jpg" alt="" style="width: 300px;height: 90px;margin-right: 20px;">
          
          软件工程系-软件工程系党委简介</div>
          <!-- 日期 -->
          <div>2021-04-23</div>
        </div>
      </el-card>

      <el-card shadow="hover" style="cursor: pointer;">
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <!-- 左边图片文字 -->
          <div style="display: flex;align-items: center;">
          <img src="../assets/img/4.jpg" alt="" style="width: 300px;height: 90px;margin-right: 20px;">
          
          软件工程系-软件工程系党委简介</div>
          <!-- 日期 -->
          <div>2021-04-23</div>
        </div>
      </el-card>

      <el-card shadow="hover" style="cursor: pointer;">
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <!-- 左边图片文字 -->
          <div style="display: flex;align-items: center;">
          <img src="../assets/img/4.jpg" alt="" style="width: 300px;height: 90px;margin-right: 20px;">
          
          软件工程系-软件工程系党委简介</div>
          <!-- 日期 -->
          <div>2021-04-23</div>
        </div>
      </el-card>

      <el-card shadow="hover" style="cursor: pointer;">
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <!-- 左边图片文字 -->
          <div style="display: flex;align-items: center;">
          <img src="../assets/img/4.jpg" alt="" style="width: 300px;height: 90px;margin-right: 20px;">
          
          软件工程系-软件工程系党委简介</div>
          <!-- 日期 -->
          <div>2021-04-23</div>
        </div>
      </el-card>

      <el-card shadow="hover" style="cursor: pointer;">
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <!-- 左边图片文字 -->
          <div style="display: flex;align-items: center;">
          <img src="../assets/img/4.jpg" alt="" style="width: 300px;height: 90px;margin-right: 20px;">
          
          软件工程系-软件工程系党委简介</div>
          <!-- 日期 -->
          <div>2021-04-23</div>
        </div>
      </el-card>

      
    </div>



  </div>


</template>
<script>
  export default {

  }
</script>
<style scoped>
  .body {
    min-height: 900px;
  }
</style>