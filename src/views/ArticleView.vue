<template>
    <div class="article-header">
        <p class="title">{{ title }}</p>
        <p class="meta">{{ author }} | {{ date }} 작성</p>
    </div>
    <div class="line"></div>
    <div class="article-content">
        {{ content }}
    </div>
    <div class="article-comment">
        <textarea placeholder="댓글을 입력하세요"></textarea>
        <button class="submit"><strong>작성</strong></button>
    </div>
</template>

<style scoped>
    .article-header {
        padding-left: 1em;
    }
    p {
        margin: 0;
        padding: 0;
    }
    p.title {
        font-weight: 700;
        font-size: 24pt;
    }
    .line {
        margin-top: 1em;
        width: 95%;
        height: 1px;
        background-color: #7e7e7e;
        opacity: 30%;
    }
    .article-content {
        padding: 1em 0 1em 1.25em;
    }
    .article-comment {
        display: flex;
        align-items: center;
        padding-left: 1em;

    }
    textarea {
        width: 50%;
        height: 2em;
    }
    button.submit {
        margin-left: 0.5em;
        background-color: rgb(118, 118, 255);
        color: white;
        border: white;
        border-radius: 0.25em;
        height: 2.5em;
    }
    button.submit:hover {
        background-color: rgb(103, 103, 216);
    }
</style>

<script>
    export default {
        name: 'ArticleView',
        data() {
            return {
                title: "글 제목",
                author: "글쓴이",
                date: "22/11/25",
                content: "글 내용"
            }
        }
    }
</script>