<template>
    <div class="backgroundMain" style="padding-top: 0px;">
        <div class="minWidth">
            <!-- 中心横幅 -->
            <div class="contentCenter">

                <el-carousel :interval="5000" arrow="always" height="400px" style="margin-bottom: 20px;">
                    <el-carousel-item>
                        <img src="../assets/img/Rectangle 1040.png" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../assets/img/Rectangle 1040.png" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../assets/img/Rectangle 1040.png" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../assets/img/Rectangle 1040.png" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>

            <!-- 下部分资讯 -->
            <div class="contentCenter" style="overflow: hidden;">
                <el-row :gutter="20">
                    <!--  左边卡片资讯 -->
                    <el-col :span="18">
                        <!-- 标题 -->
                        <div class="titleInnerOut">
                            <div class="titleInner">
                                <div class="titleInner_title">广大资讯</div>
                            </div>
                        </div>

                        <!-- 内容 -->
                        <el-card style="padding: 2px; margin-bottom: 10px;" shadow="hover">
                            <el-row>
                                <el-col :span="8">
                                    <div class="card_img">

                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <h3 style="margin-bottom: 10px;cursor: pointer;" class="card_content_hidden_single">
                                        党校专题讲座:守护国家安全,学习建党历史,创建文明城市,学习</h3>
                                    <div style="font-size: 14px;color: #979797; margin-bottom: 22px;" class="card_content_hidden_many" >
                                        为加强党员发展对象对国家安全和党的发展历程的了解为加强党员发展对象对国家安全和党的发展历程的了解对象对国家安全和党的发展历程的了解对象对国家安全和党的发展历程的了解</div>
                                    <div class="card_content_bottom" style="font-size: 14px;color: #979797;">
                                        <div class="card_content_bottom_left">2021-05-13</div>
                                        <div class="card_content_bottom_right">
                                            <span>
                                                <i class="el-icon-edit"></i>123
                                            </span>
                                            <span>
                                                <i class="el-icon-edit"></i>123
                                            </span>
                                            <span>
                                                <i class="el-icon-edit"></i>123
                                            </span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                        <el-card style="padding: 2px; margin-bottom: 10px;" shadow="hover">
                            <el-row>
                                <el-col :span="8">
                                    <div class="card_img">

                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <h3 style="margin-bottom: 10px;cursor: pointer;" class="card_content_hidden_single">
                                        党校专题讲座:守护国家安全,学习建党历史,创建文明城市,学习</h3>
                                    <div style="font-size: 14px;color: #979797; margin-bottom: 22px;" class="card_content_hidden_many" >
                                        为加强党员发展对象对国家安全和党的发展历程的了解为加强党员发展对象对国家安全和党的发展历程的了解对象对国家安全和党的发展历程的了解对象对国家安全和党的发展历程的了解</div>
                                    <div class="card_content_bottom" style="font-size: 14px;color: #979797;">
                                        <div class="card_content_bottom_left">2021-05-13</div>
                                        <div class="card_content_bottom_right">
                                            <span>
                                                <i class="el-icon-edit"></i>123
                                            </span>
                                            <span>
                                                <i class="el-icon-edit"></i>123
                                            </span>
                                            <span>
                                                <i class="el-icon-edit"></i>123
                                            </span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                      
                       
                    </el-col>


                    <el-col :span="6">
                        <el-card shadow="hover">
                            <!-- 标题 -->
                            <div slot="header" style="background-color: #f7f6f6;height: 30px;line-height: 30px;padding: 10px;">
                                <h3 style="border-left: 2px solid #9f1d24;padding-left: 10px;">学习统计</h3>
                            </div>
                            <!-- 内容 -->
                            <el-row  style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/Group 1662.png" alt="" style="width: 40px; margin-right: 10px;">
                                        <span>总学习时长</span>
                                    </div>
                                    <span style="color: #912627;">431<i style="font-size: 12px;color: black;">/h</i></span>
                                    
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row  style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/Group 1662.png" alt="" style="width: 40px; margin-right: 10px;">
                                        <span>总学习时长</span>
                                    </div>
                                    <span style="color: #912627;">431<i style="font-size: 12px;color: black;">/h</i></span>
                                    
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row  style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/Group 1662.png" alt="" style="width: 40px; margin-right: 10px;">
                                        <span>总学习时长</span>
                                    </div>
                                    <span style="color: #912627;">431<i style="font-size: 12px;color: black;">/h</i></span>
                                    
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row  style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/Group 1662.png" alt="" style="width: 40px; margin-right: 10px;">
                                        <span>总学习时长</span>
                                    </div>
                                    <span style="color: #912627;">431<i style="font-size: 12px;color: black;">/h</i></span>
                                    
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row  style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/Group 1662.png" alt="" style="width: 40px; margin-right: 10px;">
                                        <span>总学习时长</span>
                                    </div>
                                    <span style="color: #912627;">431<i style="font-size: 12px;color: black;">/h</i></span>
                                    
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
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .backgroundMain {
        background-image: url(../assets/img/Group\ 1188.png);
        min-height: 1600px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .titleInner {
        border-bottom: 1px solid #912627;
        margin-bottom: 2px;
    }

    .titleInner_title {
        width: 80px;
        padding: 5px 40px 5px 40px;
        font-size: 20px;
        background-color: #912627;
        color: #fff;

        border-radius: 3px 3px 0 0;
    }

    .titleInnerOut {
        border-bottom: 3px solid #912627;
        margin-bottom: 10px;
    }

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
    .learnSum {
        height: 30px;
        background-color: #f7f6f6;
    }
    .el-card /deep/ .el-card__header {
  padding: 0;
  box-sizing: border-box;
}
</style>