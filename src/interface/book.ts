interface Book {
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

export default Book;
