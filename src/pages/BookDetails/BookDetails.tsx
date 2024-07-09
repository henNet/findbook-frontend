import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container.tsx";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
// import { Title } from "../../components/Title/Title.tsx";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../contexts/booksContexts.tsx";
import Book from "../../interface/book.ts";

export function BookDetails() {

  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const [book, setBook] = useState<Book | null>();

  useEffect(() => {
    const findBook = books?.find((book) => book._id == id);
    setBook(findBook);
  }, [books, id]);

  // console.log(id);

  return (
    <Container>
      <HeaderTitle />
      <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
        <div className="w-full h-full">
          <div className="flex gap-2">
            <img
              src={book?.thumbnailUrl}
              alt="" className="rounded-lg" />
            <h2 className="text-5xl font-bold text-evergreen">{book?.title}</h2>

          </div>
          <p className="font-light text-gray-500 text-xl py-4">{book?.authors.join(", ")}</p>
        </div>
        <div >
          <p className="text-gray-500 mt-6">
            {book?.longDescription}
          </p>
        </div>

      </div>
      {/* <div className="mt-8">
        <Title title="Recomendações com base nesse livro" />
        <div className="gap-4 grid md:grid-cols-3 grid-cols-1 mt-8 mb-6">
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
        </div>
      </div> */}
    </Container>
  );
}