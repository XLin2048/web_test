<template>
  <el-container>
    <!-- 头部导航 -->
    <el-header class="minWidth">
      <div class="top">
        <!-- 顶部 -->
        <el-row type="flex" justify="space-around" class="contentCenter topNav">
          <el-col :span="8" class="navLeftAvater" >
            <!-- 头像 -->
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="margin-right: 10px; cursor: pointer;"></el-avatar>
            <div class="navUserId" style="color: #fff;">欢迎您,XLin!</div>
          </el-col>
          <el-col :span="8" class="navMain">
            <img src="../assets/img/gzhu.png" alt="">
          </el-col>
          <el-col :span="8" class="navRight">
            <el-input placeholder="请输入"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="top_bottom contentCenter">
        <ul>
          <li @click="enterHome(1)" :class="{navSelectActive:activeNum === 1}">首页</li>
          <li @click="enterLearning(2)" :class="{navSelectActive:activeNum === 2}">党史学习</li>
          <li @click="entertheorylearning(3)" :class="{navSelectActive:activeNum === 3}">理论学习</li>
          <li @click="enterpartynews(4)" :class="{navSelectActive:activeNum === 4}">党建资讯</li>
          <li @click="enterFacultyNews(5)" :class="{navSelectActive:activeNum === 5}">支部动态</li>
          <li @click="enterPersonalPage(6)" :class="{navSelectActive:activeNum === 6}">个人主页</li>
        </ul>
      </div>
    </el-header>

    
       <el-main class="minWidth" >
        
         <router-view style="padding-top: 20px;">
          
         </router-view>
         
       </el-main>
       <el-footer class="minWidth">
          <div class="contentCenter" style="line-height: 60px;">
            <div style="text-align: center;">版权所属:XLin、Su、Ning</div>

          </div>
       </el-footer>

  </el-container>
</template>

<script>

export default {
  data(){
    return {
      activeNum:1
    }
  },
  methods: {
    enterHome(num){
      this.$router.push('/index')
      this.activeNum = num
      
    }
    ,enterPersonalPage(num) {
      this.$router.push('/personal')
      this.activeNum = num

    },
    enterFacultyNews(num) {
      this.$router.push('/faculty')
      this.activeNum = num
    },
    enterLearning(num){
      this.$router.push('/historyLearning')
      this.activeNum = num

    },

    enterpartynews(num){
      this.$router.push('/Party')
      this.activeNum = num

    },
     
    entertheorylearning(num){
      this.$router.push('/Theory')
      this.activeNum = num

    } 
  }
}
</script>
<style scoped>

.top {
  background-color: #831717;

}

.topNav {
  align-items: center;
  background-color: #831717;
}

.el-header {
  min-height: 140px !important;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);


}

.navLeftAvater {
  display: flex;
  align-items: center;
  vertical-align: center;
}

.navMain {
  height: 80px;
  background-color: #a40000;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.3);

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

.top_bottom ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.top_bottom ul li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  width: 80px;
  border-radius: 5px;
}

.navSelectActive {
  background-image: url(../assets/img/Group\ 1188.png);;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}
li {
  cursor: pointer;

}

.el-footer {
  min-height: 60px;
  box-shadow: 0px -5px -8px 0px rgba(0, 0, 0, 0.1);

}
</style>