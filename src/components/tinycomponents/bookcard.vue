<template>
    <el-card style="width:400px;height: 200px;margin-bottom: 20px;" shadow="hover">
        <div style="display: flex;align-items: center;">
            <img :src="bookinfo.src" alt="" class="bc-img">

            <div @mouseover="mouseOver" @mouseleave="mouseLeave" :style="active" style="cursor:pointer;font-weight: bold;">
                {{bookinfo.text}}
            </div>

        </div>

    </el-card>
    
</template>
<script>
export default{
    props:{
        bookinfo:{
            type:Object,
            required:true,
        }
    },
    data(){
        return {
            active:''
        }
    },
    methods: {
        mouseOver(){
            this.active = 'color:#a40001'
        },
        mouseLeave(){
            this.active=''
        }
    },
}
</script>
<style>
.bc-cardmain{
    width: 45%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    margin:  15px;
    margin-top: 0px;
    background-color: transparent;
    border: 0px;
    /* align-items: center; */

}
.bc-img{
    width: 200px;
    height: 160px;
    margin-right: 15px;
    background-color: #ede5e5;

}
.bc-content{
    /* color: black; */
    font-size:small;
    font-weight: bold;
    word-wrap: break-word;
}

</style>