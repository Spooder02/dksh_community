<template>
    <div class="error">
        <img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132__340.png">
        <p class="error-message">정의되지 않은 페이지입니다.</p>
        <p>올바른 경로로 다시 접근하세요.</p>
    </div>
</template>

<style scoped>
    .error {
        text-align: center;
    }
    p.error-message {
        font-weight: 700;
        font-size: 20pt;
    }
    p {
        margin: 1%;
    }
</style>

<script>
    export default {
        name: 'ErrorPage'
    }
</script>