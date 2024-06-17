import { Container } from "../../components/Container/Container.tsx";
import { HeaderTitle } from "../../components/Header/HeaderTitle";

export function BookDetails() {
  return (
    <Container>
      <HeaderTitle />
      <div>
        <p>Nome do Livro</p>
        <p>Autor</p>
        <p>Texto</p>
      </div>
    </Container>
  );
}