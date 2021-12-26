import { MutationTree } from "vuex";
import { BookMutation } from "@/enums/books";
import { RootState, Book } from "@/types/books";

export const mutations: MutationTree<RootState> = {
  [BookMutation.SET_BOOKS](state, payload: Book[]) {
    state.books = payload;
  },
  [BookMutation.SET_IS_LOADING](state, payload: boolean) {
    state.isLoading = payload;
  },
  [BookMutation.SET_IS_ERROR](state, payload: boolean) {
    state.isError = payload;
  },
  [BookMutation.ADD_BOOK_TO_CART](state, payload: Book) {
    state.cart.push(payload);
  },
  [BookMutation.REMOVE_BOOK_FROM_CART](state, payload: number) {
    state.cart = state.cart.filter((book, index) => index !== payload);
  },
  [BookMutation.SET_DISCOUNT](state, payload: boolean) {
    state.isDiscount = payload;
  },
  [BookMutation.RESET_CART](state, payload: number) {
    state.finalPrice = payload;
    state.cart = [];
  },
};
