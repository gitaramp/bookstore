export interface BookState {
  books: Book[];
  isLoading: boolean;
  isError: boolean;
}

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
