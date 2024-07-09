import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card.tsx";
import { Container } from "../../components/Container/Container.tsx";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title.tsx";
import { useQuery } from "@tanstack/react-query";

export function BookDetails() {

  const { id } = useParams();
  console.log(id);

  return (
    <Container>
      <HeaderTitle />
      <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
        <div >
          <h2 className="text-5xl font-bold text-evergreen">Nome do Livro</h2>
          <p className="font-light text-gray-500 text-xl py-4">Autor</p>
          <p className="text-gray-500 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec magna
            mollis, volutpat metus ut, convallis nisi. Sed vel neque scelerisque,
            pretium magna vel, tempus massa. Phasellus vel erat a orci egestas
            ultricies non in erat. Curabitur sodales et enim in rutrum. Nunc tortor
            nunc, posuere eget convallis non, posuere vel libero. Quisque tempus
            feugiat auctor. Pellentesque in libero leo. Cras dui libero, posuere
            eu maximus et, sollicitudin eu quam. Fusce dapibus arcu nec justo accumsan
            lobortis. Cras velit mauris, varius ac tellus eget, tincidunt sagittis
            orci. Integer ullamcorper consectetur eros ac gravida. Cras blandit
            eros venenatis massa sodales, id pretium leo suscipit. Vivamus id
            lectus id lorem ornare aliquet eget nec eros. Maecenas et fermentum
            risus, ac interdum arcu. In odio erat, blandit vitae metus nec, fermentum
            porta lectus.
          </p>
        </div>
        <div className="w-full">
          <img
            src="https://images-americanas.b2w.io/produtos/6983188/imagens/livro-codigo-limpo-habilidades-praticas-do-agile-software/6983188_1_large.jpg"
            alt="" className="rounded-lg" />
        </div>
      </div>
      <div className="mt-8">
        <Title title="Recomendações com base nesse livro" />
        {/* <div className="gap-4 grid md:grid-cols-3 grid-cols-1 mt-8 mb-6">
          <Card id="123" />
          <Card id="123" />
          <Card id="123" />
        </div> */}
      </div>
    </Container>
  );
}