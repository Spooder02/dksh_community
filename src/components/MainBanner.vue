<template>
      <div class="home">
    <div class="slideshow-container">
    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202104/fcb5b7b3-a72e-4cdd-8d07-0f9675912284.jpg" style="width:100%">
      <div class="text">Page 1</div>
    </div>
    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202104/fcb5b7b3-a72e-4cdd-8d07-0f9675912284.jpg" style="width:100%">
      <div class="text">Page 2</div>
    </div>
    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="https://thumb.zumst.com/530x0/https://static.news.zumst.com/images/12/2022/05/10/2aaf45754ea64db989012e6d4a5dfef0.jpg" style="width:100%">
      <div class="text">Page 3</div>
    </div>
    <a class="prev" v-on:click="plusSlides(-1)">❮</a>
    <a class="next" v-on:click="plusSlides(1)">❯</a>
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot" v-on:click="currentSlide(1)"></span> 
      <span class="dot" v-on:click="currentSlide(2)"></span> 
      <span class="dot" v-on:click="currentSlide(3)"></span> 
    </div>
</div>
</template>

<style scoped>
    .home {
  display: block;
}
.mySlides {display: none}
img {vertical-align: middle;}
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active, .dot:hover {
  background-color: #717171;
}
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>

<script>
    export default {
        name: 'MainBanner',
        mounted() {
            this.currentSlide(1);
        },
        methods: {
            plusSlides: function (n) {
            this.showSlides(this.slideIndex += n);
            },
            currentSlide: function (n) {
            this.showSlides(this.slideIndex = n);
            },
            showSlides: function (n) {
            let i;
            let slides = document.getElementsByClassName("mySlides")
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}    
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";  
            dots[this.slideIndex-1].className += " active";
            }
        }
    }
</script>