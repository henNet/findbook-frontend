import { createContext, ReactNode, useState } from "react";

type Book = {
  _id: string;
  title: string;
  isbn?: string | null | undefined;
  pageCount: number | null | undefined;
  publishedDate: Date | null;
  thumbnailUrl?: string;
  shortDescription?: string | null | undefined;
  longDescription?: string | null | undefined;
  status?: string | null | undefined;
  authors: string[];
  categories: string[];
}

type PropsContext = {
  books: Book[] | undefined,
  handleSetBooks: (book: Book[] | undefined) => void,
}

export const BooksContext = createContext({} as PropsContext);

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[] | undefined>([]);
  function handleSetBooks(book: Book[] | undefined) {
    setBooks(book);
  }

  return (
    <BooksContext.Provider value={{ books, handleSetBooks }}>
      {children}
    </BooksContext.Provider>
  )
}