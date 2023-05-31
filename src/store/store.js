import { createStore, createLogger } from "vuex";
import { user } from "./modules/user";
import { products } from "./modules/products";
import { cart } from "./modules/cart";

const store = createStore({
  modules: {
    user,
    products,
    cart,
  },

  state() {
    return {};
  },

  getters: {},
  mutations: {},
  actions: {},
  // plugins: [createLogger()],
});

export default store;
