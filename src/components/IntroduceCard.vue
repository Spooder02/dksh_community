<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="require('@/assets/' + imglnk)" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="require('@/assets/' + imglnk)" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ name }}</p>
        <p class="subtitle is-6">{{ snsid }}</p>
      </div>
    </div>

    <div class="content">
      <p>{{ description }}</p>
      <time datetime="2016-1-1">- RD Corp</time>
    </div>
  </div>
</div>
</template>

<style scoped src="@/css/bulma.css">
</style>

<script>
    export default {
        name: 'IntroduceCard',
        props: {
            name: String,
            snsid: String,
            description: String,
            imglnk: String
        }
    }
</script>