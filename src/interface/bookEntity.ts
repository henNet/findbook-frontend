import Book from "./book";

interface BookEntity {
  status: number;
  message: string;
  data: Book[] | undefined;
}

export default BookEntity;
