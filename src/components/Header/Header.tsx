import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";
import backgroundImage from "../../assets/imgs/backgroundTitle.png";
import { Button } from "../Button/Button";
export function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div className="mt-16">
          <p className="text-5xl font-bold text-evergreen">
            Encontre livros <br /> que seja a sua cara!
          </p>
          <p className="text-gray-500 my-6 text-xl">Lorem Ipsum dolor sit amet</p>
          <Button title="Pesquisar Livros"/>
        </div>
      </Container>
    </header>
  );
}
