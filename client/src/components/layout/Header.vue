<template>
  <header>
    <div class="ui top fixed menu">
      <div class="item">
        <img src="../../assets/logo.png" />
      </div>
      <a class="item">Home</a>
      <a class="item">Categories</a>
      <a class="item" style="background-color:red;color:white">Special offers</a>
      <div class="right menu">
        <a class="item" v-on:click="$emit('show-cart')">
          <i class="shop icon"></i>
          {{ cart.length }}
        </a>
        <a class="item">Sign In</a>
        <a class="item">Register</a>
      </div>
    </div>
    <div
      class="ui inverted vertical masthead center aligned segment"
      style="background: url('https://blooming-chamber-87933.herokuapp.com/img/header-img.jpg');"
    >
      <div class="ui text container" style="margin: 20vh auto;">
        <h1 class="ui header" style="font-size: 8rem; font-weight: normal;">
          Welcome to
          <br />
          <span
            style="color: #fff;background-color: rgba(0, 255, 150, .7);line-height: 10rem; font-weight:bold;"
          >&nbsp; Shopster&nbsp;</span>
        </h1>
        <h2>If you need something we may have it. If we don't, sorry.</h2>
        <br />
        <a href="#products">
          <div class="ui huge primary button">
            Start shopping
            <i class="right arrow icon"></i>
          </div>
        </a>
      </div>
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
    </div>
    <div class="ui hidden divider" id="products"></div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: ["cart"]
};
</script>