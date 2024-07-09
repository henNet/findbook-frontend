import Book from "./book";

interface BookEntity {
  status: number;
  message: string;
  data: Book[];
}

export default BookEntity;
