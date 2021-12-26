export interface RootState {
  books: Book[];
  isLoading: boolean;
  isError: boolean;
  cart: Book[];
  isDiscount: boolean;
  finalPrice: number;
}

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
