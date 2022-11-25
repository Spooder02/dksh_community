<template>
  <div class="container">
    <div class="left-sidebar">
      <p class="mainText">급식 메뉴</p>
      <img src="@/assets/급식사진.jpg">
      <p class="lunchmenu">
        로제스파게티
        피클..
      </p>
    </div>
    <MainBanner/>
    <div class="right-sidebar">
      <p class="mainText">회원 정보</p>
      <img style="width: 40%" src="@/assets/profile.png">
      <p class="profile">이름: {{ name }}</p>
      <p class="profile">학년/반/학과 : {{grade}}학년 {{ban}}반 {{type}}</p>
      <p class="profile">레벨: {{ level }}</p>
    </div>
  </div>
  <div class="container">
    <div class="left-sidebar">
      <p class="mainText">오늘의 학사일정</p>
      {{ eventname }}
    </div>
    <div class="articles">
      <p class="mainText">게시글 목록</p>
      <hr>
      <ArticleList title="게시글 제목" author="글쓴이" date="22-11-25"/>
      <ArticleList title="게시글 제목" author="글쓴이" date="22-11-25"/>
    </div>
  </div>
</template>

<style scoped>
  .mainText {
    text-align: center;
    font-size: 15pt;
    font-weight: 700;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    column-gap: 2rem;
  }
  .left-sidebar, .right-sidebar {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 1rem;
    transition: 0.3s;
    border-radius: 0.4rem;
  }
  .left-sidebar img, .right-sidebar img {
    display: block;
    margin: auto;
    width: 95%;
    height: auto;
  }
  p .lunchmenu {
    text-align: center;
  }
  p .profile {
    font-size: 10pt;
  }
</style>

<script>
import MainBanner from '@/components/MainBanner.vue';
import ArticleList from '@/components/ArticleList.vue';

export default {
  name: 'HomeView',
  components: {
    MainBanner,
    ArticleList
  },
}
</script>
