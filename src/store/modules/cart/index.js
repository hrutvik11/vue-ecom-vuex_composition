export const cart = {
  state() {
    return {
      cart: {},
    };
  },
  mutations: {
    SET_USER_CART(state, { user_cart, uid }) {
      state.cart = { ...state.cart, [uid]: user_cart };
    },
    DELETE_USER_CART(state, { uid, pid }) {
      const data = { ...state.cart };
      delete data[uid][pid];
      state.cart = data;
    },
  },
  getters: {
    getUserCart: (state) => (uid) => {
      return state.cart[uid];
    },
    getCartProductCount: (state) => (uid, pid) => {
      if (state.cart[uid] && state.cart[uid][pid]) {
        return state.cart[uid][pid];
      } else {
        return 0;
      }
    },
  },
  actions: {
    addToUserCart({ commit, getters }, { pid, uid }) {
      const usercart = getters.getUserCart(uid);
      const initiateUserCart = () => {
        let user_cart = { ...usercart, [pid]: 1 };
        commit("SET_USER_CART", { user_cart, uid });
        removeFromStock(1);
      };

      const removeFromStock = (num) => {
        const subcategories = getters.getSubCategories;
        const data = [...subcategories].map((sub) => {
          const prods = sub.products.map((prod) => {
            if (prod.id === pid && prod.stock !== 0) {
              return { ...prod, stock: prod.stock - num };
            } else {
              return prod;
            }
          });

          return { ...sub, products: prods };
        });

        commit("SET_SUB_CATEGORIES", data);
      };

      if (usercart) {
        if (usercart[pid]) {
          usercart[pid]++;
          commit("SET_USER_CART", { user_cart: usercart, uid });
          removeFromStock(1);
        } else {
          initiateUserCart();
        }
      } else {
        initiateUserCart();
      }
    },

    increaseCartCount({ commit, getters }, { uid, pid }) {
      const usercart = getters.getUserCart(uid);
      usercart[pid]++;
      commit("SET_USER_CART", { user_cart: usercart, uid });

      const subcategories = getters.getSubCategories;
      const data = [...subcategories].map((sub) => {
        const prods = sub.products.map((prod) => {
          if (prod.id === pid && prod.stock !== 0) {
            return { ...prod, stock: prod.stock - 1 };
          } else {
            return prod;
          }
        });

        return { ...sub, products: prods };
      });

      commit("SET_SUB_CATEGORIES", data);
    },

    decreaseCartCount({ commit, getters }, { uid, pid }) {
      const usercart = getters.getUserCart(uid);
      const count = usercart[pid]--;
      if (count - 1 > 0) {
        commit("SET_USER_CART", { user_cart: usercart, uid });
      } else {
        commit("DELETE_USER_CART", { uid, pid });
      }
      const subcategories = getters.getSubCategories;
      const data = [...subcategories].map((sub) => {
        const prods = sub.products.map((prod) => {
          if (prod.id === pid) {
            return { ...prod, stock: prod.stock + 1 };
          } else {
            return prod;
          }
        });

        return { ...sub, products: prods };
      });

      commit("SET_SUB_CATEGORIES", data);
    },
  },
};
