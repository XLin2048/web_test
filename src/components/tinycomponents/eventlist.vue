<template>
    <div class="list_container">
        <ul clss="el-ul">
            <li class="el-li" v-for="item in list_items">
                <el-row>
                    <el-col :span="18">
                        <div class="el-text">{{ item.text }}</div>
                    </el-col>
                    <el-col :span="6">
                        <div class="el-date">{{ item.date }}</div>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        list_items: {
            type: Array,
            default: [{
                text: "No text found nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
                date: "2022年11月11日"
            }],
        }
    }
}
</script>
<style scoped>
.list_container {
    height: 30px;
    widows: 600px;
}

.el-ul{
    list-style-type: disc;

}
.el-li {
    list-style-type: disc;
    display: flex;
    font-weight: 500;
}

.el-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400px;
    line-height: 30px;
    height: 30px;

}

.el-date {
    padding-left: 30px;
    width: 150px;
    height: 30px;
    line-height: 30px;
}
</style>