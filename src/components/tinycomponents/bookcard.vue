<template>
    <el-card class="bc-cardmain" body-style="{padding:0px}" shadow="never">
        <img class="bc-img" :src="bookinfo.src"/>
        <el-button color="black" type="text" class="bc-content">{{bookinfo.text}}</el-button>
    </el-card>
</template>
<script>
export default{
    props:{
        bookinfo:{
            type:Object,
            required:true,
        }
    }
}
</script>
<style>
.bc-cardmain{
    width: 45%;
    height: 200px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    margin:  15px;
    margin-top: 0px;
    background-color: transparent;
    border: 0px;
    /* align-items: center; */

}
.bc-img{
    width: 200px;
    height: 100%;
    margin-right: 15px;
    background-color: #ede5e5;

}
.bc-content{
    /* color: black; */
    font-size: x-large;
    font-weight: bold;
}

</style>