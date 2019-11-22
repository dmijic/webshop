import axios from "axios";

const url = "api/cart/";

class CartService {
  static getCart() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(cart => ({
            ...cart,
            itemAmount: cart.itemAmount
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static insertCart(text) {
    return axios.post(url, {
      text
    });
  }

  static deleteCart(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default CartService;
