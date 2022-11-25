<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="@/assets/dkshlogo.png" >
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            메인
          </router-link>
          <router-link to="/about" class="navbar-item">
            소개/안내
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              학년별 게시판
            </a>
            <div class="navbar-dropdown">
              <router-link to="/board/grade/1" class="navbar-item">
                1학년
              </router-link>
              <router-link to="/board/grade/2" class="navbar-item">
                2학년
              </router-link>
              <router-link to="/board/grade/3" class="navbar-item">
                3학년
              </router-link>
            </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              학과별 게시판
            </a>
            <div class="navbar-dropdown">
              <router-link to="/board/department/AI" class="navbar-item">
                인공지능소프트웨어과
              </router-link>
              <router-link to="/board/department/IoT" class="navbar-item">
                사물인터넷소프트웨어과
              </router-link>
              <router-link to="/board/department/Game" class="navbar-item">
                게임컨텐츠과
              </router-link>
            </div>
            </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>회원가입</strong>
              </a>
              <a class="button is-light">
                로그인
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <hr>
    </template>
    
    <style src="@/css/bulma.css" scoped>
    </style>
    
    <script>
        document.addEventListener('DOMContentLoaded', () => {
    
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        const $navbarDropdown = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
    
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
        });
        });
    
        });
    
        export default {
            name: 'NavBar'
        }
    </script>
    
    