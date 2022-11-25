<template>
    <router-link to="/articles" tag="div">
      <li class="article">
          <div class="articleTitle">{{ title }}</div>
          <div class="articleInfo">
              <p class="articleAuthor">{{ author }}</p>
              {{ date }}
          </div>
      </li>
    </router-link>
  </template>
  
  <style scoped>
    div.articleTitle {
      font-weight: 900;
    }
    li.article {
      display: list-item;
      list-style: none;
      padding: 0.4rem 0.4rem;
    }
    li.article>div {
      display: inline-block;
    }
    div.articleInfo {
      float: right;
    }
    div.articleInfo>p{
      display: inline;
    }
  </style>
  
  <script>
      export default {
          name: 'ArticleList',
          props: {
              title: String,
              author: String,
              date: String
          }
      }
  </script>