<template>

  <div>

    <el-container>
      <el-main>
        <el-container>


          <el-container>

            <el-header>

              <el-col :span="6" class="firstLocation">
                <el-card class="titleCard" shadow="always">
                  <i class="el-icon-s-data"></i>
                  500 总学习时长/h
                </el-card>
              </el-col>

              <el-col :span="6">
                <el-card class="titleCard" shadow="always">
                  <i class="el-icon-document"></i>
                  100 收藏文章/篇
                </el-card>
              </el-col>

              <el-col :span="6">
                <el-card class="titleCard" shadow="always">
                  <i class="el-icon-video-play"></i>
                  80 收藏视频/条
                </el-card>
              </el-col>
            </el-header>

            <el-main>
              <el-card class="mainCard" shadow="always">

                <el-col :span="6">
                  <span class="insideText">今日任务完成:</span>

                </el-col>
                <el-col :span="18">
                  <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"
                               class="process"></el-progress>
                </el-col>

                <el-col :span="8">
                  <el-card class="insideMainCard" shadow="always">

                    <el-container>

                      <el-main>
                        <div class="markIcon">
                          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="markText">每日登录</div>
                      </el-main>

                      <el-aside width="60%">
                        <div class="aim">
                          每日首次登录
                        </div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"
                                     class="insideProcess"></el-progress>
                        <el-button class="insideButton">去完成</el-button>
                      </el-aside>

                    </el-container>

                  </el-card>
                </el-col>

                <el-col :span="8">
                  <el-card class="insideMainCard" shadow="always">
                    <el-container>
                      <el-main>
                        <div class="markIcon">
                          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="markText">阅读时长</div>
                      </el-main>

                      <el-aside width="60%">
                        <div class="aim">
                          每日阅读理论、党史达1h
                        </div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"
                                     class="insideProcess"></el-progress>
                        <el-button class="insideButton">去完成</el-button>
                      </el-aside>
                    </el-container>
                  </el-card>
                </el-col>

                <el-col :span="8">
                  <el-card class="insideMainCard" shadow="always">
                    <el-container>
                      <el-main>
                        <div class="markIcon">
                          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="markText">精品收藏</div>
                      </el-main>

                      <el-aside width="60%">
                        <div class="aim">
                          每日收藏优质内容数量达到3
                        </div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"
                                     class="insideProcess"></el-progress>
                        <el-button class="insideButton">去完成</el-button>
                      </el-aside>
                    </el-container>
                  </el-card>
                </el-col>

                <el-col :span="8">
                  <el-card class="insideMainCard2" shadow="always">
                    <el-container>
                      <el-main>
                        <div class="markIcon">
                          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="markText">参与互动</div>
                      </el-main>

                      <el-aside width="60%">
                        <div class="aim">
                          每日通过阅读评论参与互动达到2
                        </div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"
                                     class="insideProcess"></el-progress>
                        <el-button class="insideButton">去完成</el-button>
                      </el-aside>
                    </el-container>
                  </el-card>
                </el-col>

                <el-col :span="8">
                  <el-card class="insideMainCard2" shadow="always">
                    <el-container>
                      <el-main>
                        <div class="markIcon">
                          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="markText">做好笔记</div>
                      </el-main>

                      <el-aside width="60%">
                        <div class="aim">
                          每日通过学习做好笔记达2条
                        </div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"
                                     class="insideProcess"></el-progress>
                        <el-button class="insideButton">去完成</el-button>
                      </el-aside>
                    </el-container>
                  </el-card>
                </el-col>

                <el-col :span="8">
                  <el-card class="insideMainCard2" shadow="always">
                    <el-container>
                      <el-main>
                        <div class="markIcon">
                          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                        <div class="markText">每日答题</div>
                      </el-main>

                      <el-aside width="60%">
                        <div class="aim">
                          每日答题分数达到60
                        </div>
                        <el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="warning"
                                     class="insideProcess"></el-progress>
                        <el-button class="insideButton">去完成</el-button>
                      </el-aside>
                    </el-container>
                  </el-card>
                </el-col>

              </el-card>
            </el-main>

          </el-container>

          <el-aside width="600px">
            <el-card class="sideCard" shadow="always">
              <div class="personalHeader">
                <div class="profile">
                  <el-col :span="24" class="pro1">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </el-col>
                  <el-col :span="24" class="pro2">
                    张三
                  </el-col>
                  <el-col :span="24" class="pro3">
                    网络技术系学生党支部
                  </el-col>
                </div>
              </div>
              <div class="basicRank">
                <el-col :span="11" class="signedDay">
                  <div class="basicInfo">6</div>
                  本周签到/天
                </el-col>
                <el-col :span="2">
                  <el-divider direction="vertical"></el-divider>
                </el-col>
                <el-col :span="11" class="signedDay">
                  <div class="basicInfo">12</div>
                  支部学习排名
                </el-col>
              </div>

              <div class="basicText">
                <el-divider class="mainDivider"></el-divider>
                <span class="textInfo">中共预备党员</span>
                <el-divider class="mainDivider"></el-divider>
                <span class="textInfo">电子与通信工程学院</span>
                <el-divider class="mainDivider"></el-divider>
                <span class="textInfo"> 2021级</span>
                <el-divider class="mainDivider"></el-divider>
                <span class="textInfo"> 物联网工程214班</span>
                <el-divider class="mainDivider"></el-divider>
                <span class="textInfo"><i class="el-icon-switch-button"></i>退出登录</span>
              </div>

            </el-card>
          </el-aside>
        </el-container>
      </el-main>
      <el-footer>
        <el-container>
          <el-main>
            <el-card class="bottomMainCard">

              <div class="bottomCardTitle">
                我的活动记录
              </div>
              <el-divider></el-divider>

              <el-col :span="24" v-for="item in 4" :key="item">
                <el-card shadow="hover"  :body-style="{ padding: '15px' }">
                  <el-image
                      :src=pic1
                      class="show"></el-image>
                  <span class="text">软件工程系-软件工程系党总支-简介-动态</span>
                  <span class="time">2022-10-30</span>
                </el-card>
              </el-col>

            </el-card>
          </el-main>
          <el-aside width="35.31%">
            <el-card class="bottomSideCard">

              <div class="bottomCardTitle">
                学习统计
              </div>
              <el-divider></el-divider>

              <div class="bottomSideCardContext">
                <el-col :span="8">
                  <el-col :span="24">
                    <i class="el-icon-user-solid"></i>
                  </el-col>
                  我的支部
                </el-col>
                <el-col :span="8">
                  <el-col :span="24">
                    <i class="el-icon-user-solid"></i>
                  </el-col>
                  三会一课
                </el-col>
                <el-col :span="8">
                  <el-col :span="24">
                    <i class="el-icon-user-solid"></i>
                  </el-col>
                  我的笔记
                </el-col>

                <el-col :span="8">
                  <el-col :span="24">
                    <i class="el-icon-user-solid"></i>
                  </el-col>
                  我的收藏
                </el-col>
                <el-col :span="8">
                  <el-col :span="24">
                    <i class="el-icon-user-solid"></i>
                  </el-col>
                  我的评论
                </el-col>
                <el-col :span="8">
                  <el-col :span="24">
                    <i class="el-icon-user-solid"></i>
                  </el-col>
                  资料修改
                </el-col>

              </div>
            </el-card>
          </el-aside>
        </el-container>
      </el-footer>
    </el-container>

  </div>

</template>

<script>
import pic1 from "../assets/img/test.jpg"
export default {
  name: "PersonalPage",
  data() {
    return {
      pic1,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    }
  }
}
</script>

<style scoped>
.show{
  width: 180px;
  height: 100px;
}
.bottomCardTitle {
  color: red;
}

.bottomSideCard {
  text-align: center;
  margin-top: 21px;
  width: 400px;
  margin-left: 15px;
  height: 200px;
}

.bottomMainCard {
  margin-left: 250px;
  width: 790px;
  height: 700px;
}

.mainDivider {
  margin: 13px;
}

.textInfo:last-child {
  color: red;
}

.textInfo:first-child {
  color: orange;
}

.textInfo {
  font-size: small;
}

.basicText {
  text-align: center;
}

.basicInfo {
  color: orange;
  font-size: larger;
}

.basicRank {
  margin-top: 10px;
  height: 37px;
  text-align: center;
}

.aim {
  font-size: small;
}

.pro1 {
  margin-top: 15px;
}

.pro2 {
  margin-top: 25px;
  color: orange;
}

.pro3 {
  margin-top: 15px;
  color: white;
}

.profile {
  text-align: center;
}

.personalHeader {
  height: 180px;
  background: #a40000;
}

.insideButton {
  margin-top: 25px;
  height: 10px;
  width: 105px;
}

.insideProcess {
  margin-top: 20px;
  width: 105px;
}

.markIcon {
  margin-top: 10px;
  margin-left: 6px;
}

.markText {
  margin-top: 20px;
  margin-left: 0;
}

.process {
  width: 500px;
}

.insideText {
  margin-left: 60px;
}

.firstLocation {
  margin-left: 250px;
}

.insideMainCard {
  margin-top: 23px;
  margin-left: 12px;
  height: 150px;
  width: 220px;
}

.insideMainCard2 {
  margin-left: 12px;
  margin-top: 15px;
  height: 150px;
  width: 220px;
}

.sideCard {
  margin-top: 50px;
  margin-left: 20px;
  width: 400px;
  height: 500px;
}

.titleCard {
  margin-top: 50px;
  width: 250px;
  height: 60px;
}

.mainCard {
  margin-top: 65px;
  margin-left: 250px;
  width: 790px;
  height: 400px;
}
</style>