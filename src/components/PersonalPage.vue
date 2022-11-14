<template>
  <div class="contentCenter ">
    <!-- 上面三个 -->
    <div style="overflow: hidden;min-height: 1000px;">
      <el-row :gutter="20" type="flex">
        <el-col :span="24" style="display: flex;flex-wrap: wrap;">
          <!-- 顶部的图标 -->
          <div class="top" style="display: flex;margin-bottom: 20px;">
            <el-card style="width: 290px;margin-right: 12px;cursor: pointer;" shadow="hover">
              <div style="display: flex;align-items: center;justify-content: space-between;">
                <img src="../assets/img/icon/Group 1662.png" style="width: 50px;">
                <div style="font-size: 20px; color: #a40001;">26.7</div>
                <div>总学习时长/h</div>
              </div>
            </el-card>
            <el-card style="width: 270px;margin-right: 12px;cursor: pointer;" shadow="hover">
              <div style="display: flex;align-items: center;justify-content: space-between;">
                <img src="../assets/img/icon/Group 1670.png" style="width: 50px;">
                <div style="font-size: 20px; color: #a40001;">12</div>
                <div>收藏文章/篇</div>
              </div>
            </el-card>
            <el-card style="width: 290px;margin-right: 12px;cursor: pointer;" shadow="hover">
              <div style="display: flex;align-items: center;justify-content: space-between;">
                <img src="../assets/img/icon/Group 1671.png" style="width: 50px;">
                <div style="font-size: 20px; color: #a40001;">23</div>
                <div>收藏视频/条</div>
              </div>
            </el-card>
          </div>
          <!-- 中间的内容 -->
          <div class="main" style="width: 100%;">
            <el-card shadow="hover">
              <!-- 顶部进度条 -->
              <div style="display: flex;width: 100%;justify-content: center; align-items: center;
              margin-bottom: 20px;">
                <div style="color: #a40001; font-size: 18px;margin-right: 20px;">今日任务完成:</div>
                <el-progress :text-inside="true" :stroke-width="22" :percentage="35.62" status="warning"
                  style="width: 400px;"></el-progress>
              </div>

              <!-- 内容卡片 -->
              <div class="main" style="display: flex; flex-wrap: wrap;">
                <el-card shadow="hover" style="width: 280px;height: 150px;">
                  <el-row type="flex">
                    <el-col :span="8">
                      <div
                        style="width: 65px;height: 65px;background-color: #a40001;border-radius: 5px;line-height: 70px;text-align: center;">
                        <i class="el-icon-caret-bottom" style="font-size: 24px;color: #fff;"></i>
                        <div style="font-weight: bold;">每日登陆</div>
                      </div>
                    </el-col>
                    <el-col :span="16"
                      style="display: flex;flex-direction: column;align-items: center;justify-content: space-between;height: 110px;">

                      <div>每日首次登陆</div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"
                          style="width: 150px;"></el-progress>
                      </div>
                      <div
                        style="background-color: #979797;width: 100%;text-align: center;border-radius: 5px;color: #ebeef5;">

                        已完成

                      </div>


                    </el-col>
                  </el-row>


                </el-card>
                <el-card shadow="hover" style="width: 280px;height: 150px;">
                  <el-row type="flex">
                    <el-col :span="8">
                      <div
                        style="width: 65px;height: 65px;background-color: #a40001;border-radius: 5px;line-height: 70px;text-align: center;">
                        <i class="el-icon-caret-bottom" style="font-size: 24px;color: #fff;"></i>
                        <div style="font-weight: bold;">阅读时长</div>
                      </div>
                    </el-col>
                    <el-col :span="16"
                      style="display: flex;flex-direction: column;align-items: center;justify-content: space-between;height: 110px;">

                      <div>每日阅读理论、党史达1h</div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"
                          style="width: 150px;"></el-progress>
                      </div>
                      <div
                        style="background-color: #979797;width: 100%;text-align: center;border-radius: 5px;color: #ebeef5;">

                        已完成

                      </div>


                    </el-col>
                  </el-row>


                </el-card>
                <el-card shadow="hover" style="width: 280px;height: 150px;">
                  <el-row type="flex">
                    <el-col :span="8">
                      <div
                        style="width: 65px;height: 65px;background-color: #a40001;border-radius: 5px;line-height: 70px;text-align: center;">
                        <i class="el-icon-caret-bottom" style="font-size: 24px;color: #fff;"></i>
                        <div style="font-weight: bold;">精品收藏</div>
                      </div>
                    </el-col>
                    <el-col :span="16"
                      style="display: flex;flex-direction: column;align-items: center;justify-content: space-between;height: 110px;">

                      <div>每日收藏优质内容数量达到3</div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"
                          style="width: 150px;"></el-progress>
                      </div>
                      <div
                        style="background-color: #979797;width: 100%;text-align: center;border-radius: 5px;color: #ebeef5;">

                        已完成

                      </div>


                    </el-col>
                  </el-row>


                </el-card>
                <el-card shadow="hover" style="width: 280px;height: 150px;">
                  <el-row type="flex">
                    <el-col :span="8">
                      <div
                        style="width: 65px;height: 65px;background-color: #a40001;border-radius: 5px;line-height: 70px;text-align: center;">
                        <i class="el-icon-caret-bottom" style="font-size: 24px;color: #fff;"></i>
                        <div style="font-weight: bold;">参与互动</div>
                      </div>
                    </el-col>
                    <el-col :span="16"
                      style="display: flex;flex-direction: column;align-items: center;justify-content: space-between;height: 110px;">

                      <div>每日通过阅读评论参与互动达到2</div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"
                          style="width: 150px;"></el-progress>
                      </div>
                      <div
                        style="background-color: #979797;width: 100%;text-align: center;border-radius: 5px;color: #ebeef5;">

                        已完成

                      </div>


                    </el-col>
                  </el-row>


                </el-card>
                <el-card shadow="hover" style="width: 280px;height: 150px;">
                  <el-row type="flex">
                    <el-col :span="8">
                      <div
                        style="width: 65px;height: 65px;background-color: #a40001;border-radius: 5px;line-height: 70px;text-align: center;">
                        <i class="el-icon-caret-bottom" style="font-size: 24px;color: #fff;"></i>
                        <div style="font-weight: bold;">做好笔记</div>
                      </div>
                    </el-col>
                    <el-col :span="16"
                      style="display: flex;flex-direction: column;align-items: center;justify-content: space-between;height: 110px;">

                      <div>每日通过学习做好笔记达2条</div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"
                          style="width: 150px;"></el-progress>
                      </div>
                      <div
                        style="background-color: #979797;width: 100%;text-align: center;border-radius: 5px;color: #ebeef5;">

                        已完成

                      </div>


                    </el-col>
                  </el-row>


                </el-card>
                <el-card shadow="hover" style="width: 280px;height: 150px;">
                  <el-row type="flex">
                    <el-col :span="8">
                      <div
                        style="width: 65px;height: 65px;background-color: #a40001;border-radius: 5px;line-height: 70px;text-align: center;">
                        <i class="el-icon-caret-bottom" style="font-size: 24px;color: #fff;"></i>
                        <div style="font-weight: bold;">每日互动</div>
                      </div>
                    </el-col>
                    <el-col :span="16"
                      style="display: flex;flex-direction: column;align-items: center;justify-content: space-between;height: 110px;">

                      <div>每日答题分数达到60</div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="22" :percentage="100" status="warning"
                          style="width: 150px;"></el-progress>
                      </div>
                      <div
                        style="background-color: #979797;width: 100%;text-align: center;border-radius: 5px;color: #ebeef5;">

                        已完成

                      </div>


                    </el-col>
                  </el-row>


                </el-card>
              </div>
            </el-card>
          </div>

          <!-- 下方内容 -->
          <div class="bottom">
            <el-card style="width: 890px;" shadow="hover">
              <!-- 顶部标题 -->
              <div slot="header" style="display: flex; align-items: center;">
                <div style="width: 6px;height: 25px;background-color: #a40001;margin-right: 10px;border-radius: 5px;">
                </div>
                <div>我的活动记录</div>
              </div>

              <!-- 内容 -->
              <div class="content"
                style="display: flex;cursor: pointer; border-bottom: 1px solid #ebeef5;padding-bottom: 20px;">
                <img src="../assets/img/img2.png" alt="" style="width: 180px;height: 112.5px;margin-right: 20px">

                <div>
                  <h3 class="card_content_hidden_single" style="margin-bottom: 10px;">党日活动 | 网络技术系学生党支部开展“我为师生办好事，…</h3>
                  <div style="margin-bottom: 10px;color: #979797;">为了把学习党史同总结经验、观照现实、推动工作结合起来，网络技术系学生党支部结合我校“我为师生办好事，贯彻党的二十大”活动…</div>
                  <div style="display: flex; justify-content: space-between;color: #979797;"">
                    <div >2022-11-1</div>
                    <div>
                      <i class=" el-icon-edit" style="margin-right: 6px;">235</i>
                    <i class="el-icon-search" style="margin-right: 6px;">123</i>
                    <i class="el-icon-check">321</i>
                  </div>
                </div>
              </div>


          </div>
          <div class="content"
            style="display: flex;cursor: pointer; border-bottom: 1px solid #ebeef5;padding-bottom: 20px;padding-top: 20px;">
            <img src="../assets/img/img.png" alt="" style="width: 180px;height: 112.5px;margin-right: 20px">

            <div>
              <h3 class="card_content_hidden_single" style="margin-bottom: 10px;">支部动态 | 网络技术系学术党支部开展四月组织生活会</h3>
              <div style="margin-bottom: 10px;color: #979797;">为深入学习党的历史，深刻认识党的两个历史问题决议总结的经验教训，弘扬党的优秀传统和作风…</div>
              <div style="display: flex; justify-content: space-between;color: #979797;"">
                    <div >2022-11-1</div>
                    <div>
                      <i class=" el-icon-edit" style="margin-right: 6px;">235</i>
                <i class="el-icon-search" style="margin-right: 6px;">123</i>
                <i class="el-icon-check">321</i>
              </div>
            </div>
          </div>


    </div>
    </el-card>

  </div>

  </el-col>
  <el-col :span="8">
    <div style="width: 100%;height: 420px;background-color: #a40001;border-radius: 6px; padding-top: 20px;margin-bottom: 20px;">
      <!-- 顶部个人信息 -->
      <div style="flex-direction: column;align-items: center;text-align: center;margin-bottom: 20px;">
        <!-- 头像 -->
        <img src="../assets/img/head.png" alt="" style="width: 80px;height: 80px; border-radius: 50%;">
        <div style="color: #e6a23c; font-size: 20px; font-weight: bold;">XLin</div>
        <div style="color: #fff; font-size: 14px;">网络技术系学生党支部</div>
      </div>
      <!-- 下方信息 -->
      <div style="background-color: #fff;height: 267px;border-radius: 0 0 6px 6px;text-align: center;">
        <!-- 签到排名 -->
        <div style="display: flex; justify-content: space-between;line-height: 30px;border-bottom: 1px solid #ebeef5;">
          <div style="text-align: center; width: 150px; border-right: 1px solid #ebeef5;">
            <div style="font-size: 20px;color: #a40001;">6</div>
            <div style="font-size: 14px;">本月签到/天</div>
          </div>
          <div style="text-align: center;width: 150px;">
            <div style="font-size: 20px;color: #a40001;">62</div>
            <div style="font-size: 14px;">党支部学习排名</div>
          </div>
        </div>
        <!-- 中国预备党员 -->
        <div style="color:#a40001 ; padding: 10px 0; border-bottom: 1px solid #ebeef5;font-size: 14px;">中共预备党员</div>

        <!-- 专业 -->
        <div style="color:#979797 ; padding: 10px 0; border-bottom: 1px solid #ebeef5;font-size: 14px;">网络工程专业</div>
        <div style="color:#979797 ; padding: 10px 0; border-bottom: 1px solid #ebeef5;font-size: 14px;">2021级</div>
        <div style="color:#979797 ; padding: 10px 0; border-bottom: 1px solid #ebeef5;font-size: 14px;">网络201</div>
        <div style="cursor: pointer;">
          <i class="el-icon-close" style="color:#a40001 ; padding: 10px 0; font-size: 16px;">退出登陆</i>
        </div>
      </div>
    </div>


    <el-card shadow="hover">
      <!-- 标题 -->
      <div slot="header"
          style="background-color: #f7f6f6;height: 30px;line-height: 30px;padding: 10px;">
          <h3 style="border-left: 2px solid #9f1d24;padding-left: 10px;">学习统计</h3>
      </div>
      <!-- 内容 -->
      <el-row style="margin-bottom: 10px;">
          <div style="display: flex ;align-items: center; justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                  <img src="../assets/img/icon/person/组织.png" alt=""
                      style="width: 40px; margin-right: 10px;">
                  <span>我的支部</span>
              </div>
              <span style="color: #912627; cursor: pointer;">进入 ><i
                      style="font-size: 12px;color: black;"></i></span>

          </div>
         
      </el-row>
      <el-row style="margin-bottom: 10px;">
          <div style="display: flex ;align-items: center; justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                  <img src="../assets/img/icon/person/考勤.png" alt=""
                      style="width: 40px; margin-right: 10px;">
                  <span>三会一课</span>
              </div>
              <span style="color: #912627; cursor: pointer;">进入 ><i
                      style="font-size: 12px;color: black;"></i></span>

          </div>
         
      </el-row>
      <el-row style="margin-bottom: 10px;">
          <div style="display: flex ;align-items: center; justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                  <img src="../assets/img/icon/person/日记.png" alt=""
                      style="width: 40px; margin-right: 10px;">
                  <span>我的笔记</span>
              </div>
              <span style="color: #912627; cursor: pointer;">进入 ><i
                      style="font-size: 12px;color: black;"></i></span>

          </div>
          
      </el-row>
      <el-row style="margin-bottom: 10px;">
          <div style="display: flex ;align-items: center; justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                  <img src="../assets/img/icon/person/收藏夹.png" alt=""
                      style="width: 40px; margin-right: 10px;">
                  <span>我的收藏</span>
              </div>
              <span style="color: #912627; cursor: pointer;">进入 ><i
                      style="font-size: 12px;color: black;"></i></span>

          </div>
       
      </el-row>
      <el-row style="margin-bottom: 10px;">
        <div style="display: flex ;align-items: center; justify-content: space-between;">
          <div style="display: flex;align-items: center;">
            <img src="../assets/img/icon/person/评论.png" alt=""
                 style="width: 40px; margin-right: 10px;">
            <span>我的评论</span>
          </div>
          <span style="color: #912627; cursor: pointer;">进入 ><i
                      style="font-size: 12px;color: black;"></i></span>

        </div>

      </el-row>
      <el-row style="margin-bottom: 10px;">
          <div style="display: flex ;align-items: center; justify-content: space-between;">
              <div style="display: flex;align-items: center;">
                  <img src="../assets/img/icon/person/员工认证.png" alt=""
                      style="width: 40px; margin-right: 10px;">
                  <span>资料修改</span>
              </div>
              <span style="color: #912627; cursor: pointer;">进入 ><i
                      style="font-size: 12px;color: black;"></i></span>

          </div>
          <div></div>
          <div></div>
          <div></div>
      </el-row>

  </el-card>

  </el-col>
  </el-row>
  </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .card_img {
    background-image: url(../assets/img/5.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 260px;
    height: 120px;
  }

  .card_content_hidden_single {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 多行隐藏 */
  .card_content_hidden_many {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

  }

  .card_content_bottom {
    display: flex;
    justify-content: space-between;
  }
</style>