<template>
  <div>
    <form class="ui form">
      <h4 class="ui dividing header">Shipping Information</h4>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="shipping[first-name]" placeholder="First Name" />
          </div>
          <div class="field">
            <input type="text" name="shipping[last-name]" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div class="field">
        <label>Street</label>
        <div class="fields">
          <div class="twelve wide field">
            <input type="text" name="shipping[address]" placeholder="Street Name" />
          </div>
          <div class="four wide field">
            <input type="text" name="shipping[address-2]" placeholder="House number" />
          </div>
        </div>
      </div>
      <div class="two fields">
        <div class="two fields">
          <div class="field">
            <label>City</label>
            <input type="text" name="shipping[city]" placeholder="Zagreb" />
          </div>
          <div class="field">
            <label>Postal code</label>
            <input type="text" name="shipping[postal]" placeholder="10 000" />
          </div>
        </div>
        <div class="field">
          <label>Country</label>
          <input type="text" name="shipping[country]" placeholder="Croatia" />
        </div>
      </div>
      <h4 class="ui dividing header">Billing Information</h4>
      <div class="field">
        <label>Card Type</label>
        <div class="ui selection dropdown">
          <input type="hidden" name="card[type]" />
          <div class="default text">Type</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item" data-value="visa">
              <i class="visa icon"></i>
              Visa
            </div>
            <div class="item" data-value="amex">
              <i class="amex icon"></i>
              American Express
            </div>
            <div class="item" data-value="discover">
              <i class="discover icon"></i>
              Discover
            </div>
          </div>
        </div>
      </div>
      <div class="fields">
        <div class="seven wide field">
          <label>Card Number</label>
          <input type="text" name="card[number]" maxlength="16" placeholder="Card #" />
        </div>
        <div class="three wide field">
          <label>CVC</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" />
        </div>
        <div class="six wide field">
          <label>Expiration</label>
          <div class="two fields">
            <div class="field">
              <select class="ui fluid search dropdown" name="card[expire-month]">
                <option value>Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="field">
              <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" />
            </div>
          </div>
        </div>
      </div>

      <div class="ui button" tabindex="0">Submit Order</div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Checkout",
  props: ["cart"],
  data() {
    return {
      order: [
        {
          cartItems: this.cart,
          customerInfo: {
            customerFirstName: "Dario",
            customerLastName: "Mijic",
            customerEmail: "dario.mijic@gmx.com",
            customerPhone: "0987654321",
            customerAdressCountry: "Croatia",
            customerAdressCity: "Zagreb",
            customerAdressPostalCode: "10000",
            customerAdressStreetName: "Zeleni trg",
            customerAdressStreetNumber: "5"
          },
          totalPrice: "149,97"
        }
      ]
    };
  }
};
</script>