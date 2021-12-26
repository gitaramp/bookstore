import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { BookState } from "@/types/books";
import { mutations } from "@/store/mutations";
import { actions } from "@/store/actions";

Vue.use(Vuex);

const store: StoreOptions<BookState> = {
  state: {
    books: [],
    isLoading: true,
    isError: false,
  },
  mutations,
  actions,
};

export default new Vuex.Store<BookState>(store);
