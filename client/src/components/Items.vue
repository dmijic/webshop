<template>
  <div class="ui middle aligned stackable grid container cards">
    <div
      v-bind:key="item.itemId"
      v-for="item in items"
      class="four wide column card"
    >
      <ShopItem
        v-bind:item="item"
        v-on:add-to-cart="$emit('add-to-cart', item)"
      />
    </div>
  </div>
</template>

<script>
import ShopItem from "./ShopItem";
export default {
  name: "Items",
  components: {
    ShopItem
  },
  props: ["items"]
};
</script>
