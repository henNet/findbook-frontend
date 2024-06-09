import { useCallback, useState } from "react";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { Card } from "./components/Card/Card";

const gendersBooks = [
  "Ação",
  "Aventura",
  "Biografia",
  "Comédia",
  "Drama",
  "Ficção",
];

function App() {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

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
    <>
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="grid grid-cols-8 gap-5 mb-2 mt-2">
          {gendersBooks.map((gender) => (
            <Button
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
          <input
            type="text"
            placeholder="eu gostaria de ler ..."
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3"
          />
        </div>

        <Title title="Livros recomendados" />
        <Card />
      </Container>
    </>
  );
}

export default App;
