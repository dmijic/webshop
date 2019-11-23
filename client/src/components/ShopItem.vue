<template>
  <div>
    <img
      class="ui fluid image"
      v-bind:src="'http://dmijic.freesite.vip/webshop-assets/' + item.itemImgUrl"
    />
    <h2>{{ item.itemName }}</h2>
    <div class="ui hidden divider"></div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, inventore.</p>
    <h2 class="ui sub header">Price</h2>
    <span>${{ item.itemPrice }}</span>
    <div class="ui action input right floated">
      <div class="ui input">
        <input type="number" placeholder="1" v-model="shopItemQty" />
      </div>
    </div>
    <div class="ui hidden divider"></div>
    <button
      class="ui inverted green button large fluid"
      v-on:click="$emit('add-to-cart', item)"
    >Add to cart</button>
  </div>
</template>
<script>
export default {
  name: "ShopItem",
  props: ["item"],
  data() {
    return {
      shopItemQty: 1
    };
  }
};
</script>
