import { ActionTree } from "vuex";
import { RootState, Book } from "@/types/books";
import { BookMutation } from "@/enums/books";

export const actions: ActionTree<RootState, RootState> = {
  async fetchBooks(): Promise<void> {
    await fetch(`https://api.itbook.store/1.0/new`)
      .then((response) => response.json())
      .then((response) => {
        this.commit(BookMutation.SET_BOOKS, response.books as Book[]);
        this.commit(BookMutation.SET_IS_LOADING, false);
      })
      .catch(() => {
        this.commit(BookMutation.SET_IS_ERROR, true);
        console.error(`Error while trying fetch books`);
      });
  },
};
