<template>
    <div class="board">
        <div class="board-header">
        <p class="boardName">{{department}}과 게시판</p>
        <div class="writebtn">
            <button @click="writeArticle()" class="writebtn">
                <strong>글 쓰기</strong>
            </button>
        </div>
        </div>
        <div class="boardDiv"></div>
        <div class="board-content">
            <ArticleList title="게시글 제목" author="글쓴이" date="22-11-25"/>
        </div>
    </div>
</template>

<style scoped>
    .board-header {
        display: inline;
        padding-bottom: 0.7em;
    }
    button.writebtn {
        height: 3em;
        background-color: rgb(93, 117, 252);
        border-radius: 3px;
        border: #ebebeb;
    }
    button.writebtn:hover {
        background-color: rgb(86, 107, 226);
    }
    p.boardName {
        display: inline;
        margin: 0;
        font-weight: 500;
        font-size: 20pt;
    }
    button.writebtn>strong {
        padding: 1em;
        color: white;
    }
    div.writebtn {
        float: right;
        margin-right: 6%;
    }
    .boardDiv {
        margin-top: 1em;
        width: 95%;
        height: 1px;
        background-color: #7e7e7e;
    }
    .board-content {
        margin-top: 0.5em;
        width: 90%;
    }
</style>

<script>
    import ArticleList from '@/components/ArticleList.vue';
    let departmentEng = ["AI", "IoT", "Game"];
    let departmentKor = ["인공지능소프트웨어", "사물인터넷소프트웨어", "게임컨텐츠"];
    export default {
        name: 'BoardList',
        data() {
            return {
                department: this.$route.params.dname,
                rawdepartment: String
            }
        },
        beforeRouteUpdate(to, from, next) { // Vue params 변경 시 재사용을 위함!
            this.department = to.params.dname;
            for (let i = 0; i < 3; i++) {
                if (this.department == departmentEng[i]) {
                    this.department = departmentKor[i];
                }
            }
            next();
        },
        mounted() {
            for (let i = 0; i < 3; i++) {
                if (this.department == departmentEng[i]) {
                    this.rawdepartment = this.department;
                    this.department = departmentKor[i];   
                }
            }
        },
        methods: {
            writeArticle() {
                this.$router.push('/board/department/'+this.rawdepartment+'/writeArticle/');
            }
        },
        components: {
            ArticleList
        }
    }
</script>