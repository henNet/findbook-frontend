import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import useBookData from "../../hooks/useAllBooks";

const gendersBooks = [
  "Ação",
  "Aventura",
  "Biografia",
  "Comédia",
  "Drama",
  "Ficção",
];

export function Home() {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const { data } = useBookData();

  console.log(data);


  const handleTitle = useCallback(
    (title: string) => {
      console.log(selectedGender);
      if (selectedGender.includes(title)) {
        const removedGenders = selectedGender.filter(
          (gender) => gender != title
        );
        setSelectedGender(removedGenders);
      } else {
        setSelectedGender([...selectedGender, title]);
      }
    },
    [selectedGender]
  );

  return (
    <div className="mb-6">
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="grid md:grid-cols-8 grid-cols-4 gap-5 mb-2 mt-2">
          {gendersBooks.map((gender, index) => (
            <Button
              key={index}
              title={gender}
              variant={selectedGender.includes(gender) ? "dark" : "light"}
              onClick={() => handleTitle(gender)}
            />
          ))}
        </div>

        <div className="pt-7">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>
          {/* <input
            type="text"
            placeholder="eu gostaria de ler ..."
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3"
          /> */}
          <Input placeHolder="eu gostaria de ler ..." />
        </div>
        <Button title="Pesquisar Livros" className="px-5" />
        <Title title="Livros recomendados" className="my-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data?.map((data) => (
            <Card key={data._id}
              _id={data._id}
              title={data.title}
              authors={data.authors}
              categories={data.categories}
              pageCount={data.pageCount}
              publishedDate={data.publishedDate}
              thumbnailUrl={data.thumbnailUrl}
              shortDescription={data.shortDescription} />
          ))}
        </div>
        {/* <Card id="123" /> */}
      </Container>
    </div>
  )
}