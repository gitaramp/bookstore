import { MutationTree } from "vuex";
import { BookMutation } from "@/enums/books";
import { BookState, Book } from "@/types/books";

export const mutations: MutationTree<BookState> = {
  [BookMutation.SET_BOOKS](state, payload: Book[]) {
    state.books = payload;
  },
  [BookMutation.SET_IS_LOADING](state, payload: boolean) {
    state.isLoading = payload;
  },
  [BookMutation.SET_IS_ERROR](state, payload: boolean) {
    state.isError = payload;
  },
};
