<template>
  <div id="app">
    <Header v-bind:cart="cart" v-on:show-cart="showCart" />
    <Items v-bind:items="items" v-on:add-to-cart="addToCart" />
    <Cart
      v-bind:cart="cart"
      :promotions="promotions"
      v-on:remove-item="removeCartItem"
      v-on:hide-cart="hideCart"
    />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Items from "./components/Items";
import Cart from "./components/Cart";
import ItemService from "./services/ItemService";
export default {
  name: "app",
  components: {
    Header,
    Items,
    Cart
  },
  data() {
    return {
      items: [],
      cart: [],
      promotions: [
        {
          promoCode: "20%OFF",
          off: "percent",
          value: 0.2,
          canCombine: false
        },
        {
          promoCode: "5%OFF",
          off: "percent",
          value: 0.05,
          canCombine: true
        },
        {
          promoCode: "20EUROFF",
          off: "amount",
          value: 20,
          canCombine: true
        }
      ],
      comboPrice: [
        {
          itemId: "2",
          minQty: 3,
          itemPrice: 65.0
        },
        {
          itemId: "4",
          minQty: 2,
          itemPrice: 35.0
        }
      ],
      appliedPromos: [],
      promoCode: "Promo code",
      promoAllowed: true,
      cantApplyMessage: undefined
    };
  },
  async created() {
    try {
      this.items = await ItemService.getItems();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    showCart() {
      document
        .getElementById("sidebarCart")
        .classList.add("overlay", "visible");
    },
    hideCart() {
      document
        .getElementById("sidebarCart")
        .classList.remove("overlay", "visible");
    },
    removeCartItem(id) {
      // eslint-disable-next-line no-console
      this.cart = this.cart.filter(cartItem => cartItem.itemId !== id);
    },
    addToCart(item) {
      let inCart = false;
      let idToAdd;
      let comboMessage;

      this.cart.forEach(element => {
        if (element.itemId === item.itemId) {
          inCart = true;
          idToAdd = element.itemId;

          this.comboPrice.forEach(priceElement => {
            if (element.itemId === priceElement.itemId) {
              comboMessage =
                "combo price: " +
                priceElement.minQty +
                " for " +
                priceElement.itemPrice;
              // eslint-disable-next-line no-console
              console.log(element.itemName + ": " + comboMessage);

              let comboItemDiscount =
                element.itemPrice * priceElement.minQty -
                priceElement.itemPrice;
              // eslint-disable-next-line no-console
              console.log(
                element.itemName + " discount: " + comboItemDiscount.toFixed(2)
              );
              if (element.itemQty >= priceElement.minQty) {
                comboItemDiscount =
                  comboItemDiscount *
                  Math.floor(element.itemQty / priceElement.minQty);
              }
              element.totalDiscount = comboItemDiscount.toFixed(2);
              // eslint-disable-next-line no-console
              console.log(element.totalDiscount);
            }
          });
        }
      });
      if (inCart) {
        this.cart = this.cart.map(item => {
          if (item.itemId === idToAdd) {
            item.itemQty += 1;
            return item;
          } else {
            return item;
          }
        });
      } else {
        item.itemQty = 1;
        this.cart.push(item);
      }
    }
  }
};
</script>

<style>
</style>
