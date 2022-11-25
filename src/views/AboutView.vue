<template>
  <div class="introduce">
    <p class="title">제작에 참여한 팀원을 소개합니다.</p>
  </div>
  <div class="contents">
    <Card imglnk="건희프로필.jpg" name="조건희" snsid="@spooder02" description="프론트/백엔드 개발자입니다. 항상 최선을 다하겠습니다!"/>
    <Card imglnk="도형프로필.jpg" name="김도형" snsid="@travis04" description="여친 급구"/>
  </div>
</template>
  
<style scoped>
  .contents {
    display: flex;
    justify-content: space-around;
  }
  p.title {
    font-weight: 700;
    font-size: 30pt;
    text-align: center;
  }
</style>
  
<script>
  import Card from '@/components/IntroduceCard.vue';
  export default {
    name: 'AboutView',
    components: {
      Card
    }
  }
</script>