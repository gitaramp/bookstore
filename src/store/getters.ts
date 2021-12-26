import { RootState, Book } from "@/types/books";
import { GetterTree } from "vuex";

export const getters: GetterTree<RootState, RootState> = {
  getFinalPrice: (state: RootState): string => {
    const totalAmount = state.cart.reduce(
      (acc: number, curr: Book) => acc + removeCurrency(curr.price),
      0
    );
    return (
      state.isDiscount ? totalAmount - totalAmount * 0.1 : totalAmount
    ).toFixed(2);
  },
};

const removeCurrency = (price: string): number => {
  return parseFloat(price.replace(/[$,]/g, ""));
};
