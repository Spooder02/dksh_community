<template>
    <div class="head-container">
        <input type="text" placeholder="제목을 입력하세요.">
    </div>
    <div class="divLine"></div>
    <textarea></textarea>
    <button class="submit">
        <strong>
            작성하기
        </strong>
    </button>
</template>

<style scoped>
input[type="text"] {
    width: 95%;
    font-size: 18pt;
    border-top: none;
    border-right: none;
    border-left: none;
}
textarea {
    width: 95%;
    height: 50em;
}
.divLine {
    margin-top: 1em;
    width: 95%;
    height: 1px;
    opacity: 30%;
    background-color: #7e7e7e;
}
.submit {
    padding: 10px;
    color: white;
    background-color: rgb(110, 110, 255);
    border-radius: 5px;
    border: white;
    float:right;
    margin-right: 5%;
}
</style>

<script>

</script>