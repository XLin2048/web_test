<template>
    <el-container>
      <!-- 头部导航 -->
      <el-header class="minWidth">
       <div class="top">
         <!-- 顶部 -->
         <el-row type="flex" justify="space-around" class="contentCenter topNav">
          <el-col :span="8" class="navLeftAvater">
            <!-- 头像 -->
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <div class="navUserId">123</div>
          </el-col>
          <el-col :span="8" class="navMain">
            <img src="../assets/img/27832754_130713116000_2.png" alt="">
          </el-col>
          <el-col :span="8" class="navRight">
            <el-input placeholder="请输入"></el-input>
          </el-col>
        </el-row>
       </div>
       <div class="top_bottom contentCenter">
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
       </div>


      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    
  
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .top{
    background-color: #831717;

  }
  .topNav {
    align-items: center;
    background-color: #831717;
  }
  .el-header{
    min-height: 140px !important;
    text-align: center;
    background-color: #979797;

    
  }
  .navLeftAvater {
    display: flex;
    align-items: center;
    vertical-align: center;
  }
  .navMain {
    height: 80px;
    background-color: #a40000;box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.3);
    
    background-size: contain;
    background-repeat: no-repeat;

    border-radius: 0 0 5px 5px;
    
  }
  .navMain img {
    height: 90%;
    padding-left: 10px;
  }
  .navRight {
    padding-left: 140px;
  }
  .el-input {
    width: 200px;
  }
  .top_bottom {
    height: 60px;
  }
  .top_bottom ul{
      height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .top_bottom ul li {
    list-style: none;
    background-color: red;
    height: 30px;
    line-height: 30px;
    width: 80px;
    border-radius: 5px;
  }
  .navSelectActive {

  }
</style>