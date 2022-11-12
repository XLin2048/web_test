<template>
    <div class="titleInnerOut">
        <div class="titleInner">
            <div class="titleInner_title">{{title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "untitled",
        }
    }
}
</script>
<style scoped>
    .titleInner {
        border-bottom: 1px solid #912627;
        margin-bottom: 2px;
    }

    .titleInner_title {
        width: fit-content;
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
</style>