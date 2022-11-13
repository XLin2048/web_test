<template>
    <div class="backgroundMain" style="padding-top: 0px;">
        <div class="minWidth">
            <!-- 中心横幅 -->
            <div class="contentCenter">

                <el-carousel :interval="5000" arrow="always" height="400px" style="margin-bottom: 20px;">
                    <el-carousel-item style="    display: table-cell;
                                                vertical-align: middle;
                                                text-align: center;">
                        <img src="../assets/img/index/2021072716323621890.jpg" alt="" style="height:auto;width:auto;max-width:100%;max-height: 100%;object-fit: cover;">
                    </el-carousel-item>
                    <el-carousel-item style="    display: table-cell;
                                                vertical-align: middle;
                                                text-align: center;">
                        <img src="../assets/img/index/dc93ec19ab0649c2a5941ac3c693cbd7.jpg" alt="" style="height:auto;width:auto;max-width:100%;max-height: 100%;object-fit: cover;">
                    </el-carousel-item>
                    <el-carousel-item style="    display: table-cell;
                                                vertical-align: middle;
                                                text-align: center;">
                        <img src="../assets/img/index/52908830a3b749658104cf49a6aedf3b.jpg" alt="" style="height:auto;width:auto;max-width:100%;max-height: 100%;object-fit: cover;">
                    </el-carousel-item>
                    <el-carousel-item style="    display: table-cell;
                                                vertical-align: middle;
                                                text-align: center;">
                        <img src="../assets/img/index/4ef7a57c547c492c9e1eedee4f9b14e1.jpg" alt="" style="height:auto;width:auto;max-width:100%;max-height: 100%;object-fit: cover;">
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
                                    <div class="card_img" id="content1">

                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <h3 style="margin-bottom: 10px;cursor: pointer;" class="card_content_hidden_single">
                                        【众志成城】周到服务温暖人心 多彩生活注入信心——疫情“大考”下校园生活秩序井然</h3>
                                    <div style="font-size: 14px;color: #979797; margin-bottom: 22px;"
                                        class="card_content_hidden_many">
                                        11月9日接属地疾控部门防控通知，我校大学城校区启动静态管理，实行足不出户、足不出楼等管理措施。疫情“大考”当下，同学们积极应对，配合做好疫情防控工作，以乐观心态充实时光，做到防疫、学习两不误，校园生活秩序井然。
                                    </div>
                                    <div class="card_content_bottom" style="font-size: 14px;color: #979797;">
                                        <div class="card_content_bottom_left">2022-11-11</div>
                                        <div class="card_content_bottom_right">
                                            <span>
                                                <i class="el-icon-chat-line-square"></i>210
                                            </span>
                                            <span>
                                                <i class="el-icon-view"></i>450
                                            </span>
                                            <span>
                                                <i class="el-icon-star-off"></i>342
                                            </span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                        <el-card style="padding: 2px; margin-bottom: 10px;" shadow="hover">
                            <el-row>
                                <el-col :span="8">
                                    <div class="card_img" id="content2">

                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <h3 style="margin-bottom: 10px;cursor: pointer;" class="card_content_hidden_single">
                                        党校专题讲座:守护国家安全,学习建党历史,创建文明城市,学习</h3>
                                    <div style="font-size: 14px;color: #979797; margin-bottom: 22px;"
                                        class="card_content_hidden_many">
                                        11月5日，由我校主办、马克思主义学院承办的“党的二十大精神与中国式现代化理论与实践”全国高端论坛在我校召开。论坛以线上线下相结合的形式举行，来自中共中央党校、北京师范大学、吉林大学、中山大学、上海交通大学、山东大学、西安交通大学、南京师范大学、华南师范大学、湘潭大学等国内马克思主义研究领域的专家学者100余人参会。校党委书记、校长魏明海出席论坛并致辞，副校长张其学主持开幕式。                                    </div>
                                    <div class="card_content_bottom" style="font-size: 14px;color: #979797;">
                                        <div class="card_content_bottom_left">2022-11-05</div>
                                        <div class="card_content_bottom_right">
                                            <span>
                                                <i class="el-icon-chat-line-square"></i>149
                                            </span>
                                            <span>
                                                <i class="el-icon-view"></i>435
                                            </span>
                                            <span>
                                                <i class="el-icon-star-off"></i>321
                                            </span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                        <el-card style="padding: 2px; margin-bottom: 10px;" shadow="hover">
                            <el-row>
                                <el-col :span="8">
                                    <div class="card_img" id="content3">

                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <h3 style="margin-bottom: 10px;cursor: pointer;" class="card_content_hidden_single">
                                        广州大学传达贯彻党的二十大精神会议召开</h3>
                                    <div style="font-size: 14px;color: #979797; margin-bottom: 22px;"
                                        class="card_content_hidden_many">
                                        11月4日，我校召开传达贯彻党的二十大精神会议，传达党的二十大精神，落实全省传达贯彻党的二十大精神大会、广州市传达贯彻党的二十大精神大会、全省教育系统学习贯彻党的二十大精神动员部署会工作要求，对我校做好学习宣传贯彻工作进行动员部署。校党委书记、校长魏明海主持会议并讲话，校党委副书记聂贵新传达了党的二十大精神以及全省、全市、全省教育系统传达贯彻会议精神。                                    </div>
                                    <div class="card_content_bottom" style="font-size: 14px;color: #979797;">
                                        <div class="card_content_bottom_left">2022-11-04</div>
                                        <div class="card_content_bottom_right">
                                            <span>
                                                <i class="el-icon-chat-line-square"></i>469
                                            </span>
                                            <span>
                                                <i class="el-icon-view"></i>645
                                            </span>
                                            <span>
                                                <i class="el-icon-star-off"></i>527
                                            </span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                        <el-card style="padding: 2px; margin-bottom: 10px;" shadow="hover">
                            <el-row>
                                <el-col :span="8">
                                    <div class="card_img" id="content4">

                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <h3 style="margin-bottom: 10px;cursor: pointer;" class="card_content_hidden_single">
                                        校党委理论学习中心组专题学习习近平总书记在中国共产党第二十次全国代表大会上的报告</h3>
                                    <div style="font-size: 14px;color: #979797; margin-bottom: 22px;"
                                        class="card_content_hidden_many">
                                        10月26日，校党委理论学习中心组召开学习会，深入学习习近平总书记在中国共产党第二十次全国代表大会上的报告。全体校领导参加学习，相关职能部门负责人列席会议。校党委书记、校长魏明海主持学习会。
                                    </div>
                                        <div class="card_content_bottom" style="font-size: 14px;color: #979797;">
                                        <div class="card_content_bottom_left">2022-10-26</div>
                                        <div class="card_content_bottom_right">
                                            <span>
                                                <i class="el-icon-chat-line-square"></i>180
                                            </span>
                                            <span>
                                                <i class="el-icon-view"></i>350
                                            </span>
                                            <span>
                                                <i class="el-icon-star-off"></i>326
                                            </span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>

                        <button style="width: 100%;height: 40px;background-color: #fff;border: 1px solid #E0E0E0;color: #979797;cursor: pointer;">
                            查看更多
                        </button>

                    </el-col>


                    <el-col :span="6" style="margin-bottom: 20px;">
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
                                        <img src="../assets/img/icon/数据.png" alt=""
                                            style="width: 40px; margin-right: 10px; filter: drop-shadow(#e86951);">
                                        <span>总学习时长</span>
                                    </div>
                                    <span style="color: #912627;">26.7<i
                                            style="font-size: 12px;color: black;">/h</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/打卡签到.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>本日学习时长</span>
                                    </div>
                                    <span style="color: #912627;">2.2<i
                                            style="font-size: 12px;color: black;">/h</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/播放.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>视频学习时长</span>
                                    </div>
                                    <span style="color: #912627;">1.5<i
                                            style="font-size: 12px;color: black;">/h</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/测评.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>文章学习时长</span>
                                    </div>
                                    <span style="color: #912627;">0.7<i
                                            style="font-size: 12px;color: black;">/h</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>

                        </el-card>
                    </el-col>
                    <el-col :span="6" style="margin-bottom: 20px;">
                        <el-card shadow="hover">
                            <!-- 标题 -->
                            <div slot="header"
                                style="background-color: #f7f6f6;height: 30px;line-height: 30px;padding: 10px;">
                                <h3 style="border-left: 2px solid #9f1d24;padding-left: 10px;">三会一课</h3>
                            </div>
                            <!-- 内容 -->
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/产品.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>本学期共参加：</span>
                                    </div>
                                    <span style="color: #912627;">10<i
                                            style="font-size: 12px;color: black;">次</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/组织.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>支部党员大会</span>
                                    </div>
                                    <span style="color: #912627;">1<i
                                            style="font-size: 12px;color: black;">次</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/团队.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>党小组会</span>
                                    </div>
                                    <span style="color: #912627;">2<i
                                            style="font-size: 12px;color: black;">次</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/群体.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>支委会</span>
                                    </div>
                                    <span style="color: #912627;">2<i
                                            style="font-size: 12px;color: black;">次</i></span>

                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </el-row>
                            <el-row style="margin-bottom: 10px;">
                                <div style="display: flex ;align-items: center; justify-content: space-between;">
                                    <div style="display: flex;align-items: center;">
                                        <img src="../assets/img/icon/学位.png" alt=""
                                            style="width: 40px; margin-right: 10px;">
                                        <span>党课</span>
                                    </div>
                                    <span style="color: #912627;">5<i
                                            style="font-size: 12px;color: black;">次</i></span>

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
    #content1{
        background-image: url(../assets/img/index/55BF0303CB46CADD424FB93D41A_326D9E20_1D489.jpg);
    }
    #content2{
        background-image: url(../assets/img/index/94DD3155045CE835E5185F0B48C_54F56C5E_4809C.jpg);
    }
    #content3{
        background-image: url(../assets/img/index/12F5BB43661403040C23C1B667C_FF83DCF4_25FB4.jpg);
    }
    #content4{
        background-image: url(../assets/img/index/D534C4A5803C2971DD3FE06F467_E12A45D2_39A3F.jpg);
    }
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