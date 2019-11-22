<template>
  <div class="ui vertical menu right sidebar" id="sidebarCart" style="width: 300px;">
    <div class="item">
      <span v-on:click="$emit('hide-cart')" style="cursor: pointer; padding: .5rem; width: 1.5rem;">
        <i class="angle right icon"></i>
      </span>
    </div>
    <div v-bind:key="cartItem.itemId" v-for="cartItem in cart" class="item">
      <div>
        <div class="header">
          <span>{{ cartItem.itemName }}</span>
          <span
            style="float:right;cursor:pointer;"
            v-on:click="$emit('remove-item', cartItem.itemId)"
          >X</span>
        </div>
        <div class="menu">
          <span class="item">Price: ${{ cartItem.itemPrice }}</span>
          <span class="item">Qty: {{ cartItem.itemQty }}</span>
          <span class="item" v-if="cartItem.totalDiscount">Discount: {{cartItem.totalDiscount}}</span>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="ui action input">
        <input type="text" placeholder="Promo code" v-model="promoCode" />
        <button class="ui button" v-on:click="applyCode(promoCode)">Apply</button>
      </div>
      <span v-if="cantApplyMessage" style="color: red">{{ cantApplyMessage }}</span>
      <div class="item" v-for="item in appliedPromos" v-bind:key="item.promoCode">
        {{item.promoCode}}
        <span
          style="float:right;cursor:pointer;"
          v-on:click="removeCode(item.promoCode)"
        >X</span>
      </div>
    </div>
    <div class="item">
      <h3>Total: ${{ totalPrice }}</h3>
    </div>
    <div class="item">
      <button class="ui inverted green button large fluid">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cart", "promotions"],
  data() {
    return {
      appliedPromos: [],
      promoCode: "Promo code",
      promoAllowed: true,
      cantApplyMessage: undefined
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.cart.forEach(item => {
        total += item.itemPrice * item.itemQty;
      });
      this.appliedPromos.forEach(item => {
        if (item.off === "amount") {
          total = total - item.value;
        } else if (item.off === "percent") {
          total = total - total * item.value;
        }
      });
      return total.toFixed(2);
    }
  },
  methods: {
    applyCode(code) {
      this.promoAllowed = true;
      this.promotions.forEach(element => {
        if (element.promoCode === code) {
          this.appliedPromos.forEach(element2 => {
            if (element2.promoCode === element.promoCode) {
              this.promoAllowed = false;
              this.cantApplyMessage = "You can't apply same code twice.";
            } else if (!element.canCombine || !element2.canCombine) {
              this.promoAllowed = false;
              this.cantApplyMessage = "You can't combine this promo codes.";
            }
          });
          if (this.promoAllowed) {
            this.appliedPromos.push(element);
          }
        }
      });

      this.promoCode = "Promo code";
    },
    removeCode(name) {
      this.appliedPromos = this.appliedPromos.filter(
        promoItem => promoItem.promoCode !== name
      );
    }
  }
};
</script>