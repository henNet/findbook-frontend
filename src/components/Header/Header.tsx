import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";
import backgroundImage from "../../assets/imgs/background-header.png";

export function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat mb-0"
    >
      <Container>
        <HeaderTitle />
        <div className="mt-8">
          <p className="md:text-5xl text-3xl font-bold text-evergreen">
            Encontre livros <br /> que seja a sua cara!
          </p>
          <p className="text-gray-500 my-6 md:text-xl text-xs">Lorem Ipsum dolor sit amet</p>
          {/* <Button title="Pesquisar Livros"/> */}
        </div>
      </Container>
    </header>
  );
}
