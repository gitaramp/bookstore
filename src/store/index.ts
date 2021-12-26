import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/types/books";
import { mutations } from "@/store/mutations";
import { actions } from "@/store/actions";
import { getters } from "@/store/getters";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    books: [],
    isLoading: true,
    isError: false,
    cart: [],
    isDiscount: false,
    finalPrice: 0,
  },
  mutations,
  actions,
  getters,
};

export default new Vuex.Store<RootState>(store);
