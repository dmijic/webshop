import axios from "axios";

const url = "api/items/";

class ItemService {
  static getItems() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static insertItem(text) {
    return axios.post(url, {
      text
    });
  }

  static deleteItem(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default ItemService;
