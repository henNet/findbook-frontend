import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
      </Container>
    </>
  );
}

export default App;
