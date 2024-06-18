import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useCallback } from "react";

type Props = {
  id: string;
}

export function Card({ id }: Props) {

  const navigate = useNavigate();
  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`)
  }, []);

  return (
    <div className="p-4 grid grid-cols-3 gap-3 shadow-lg 
			border border-gray-100 max-w-lg w-full rounded-md">
      <img
        src="https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UF1000,1000_QL80_.jpg"
        alt=""
        className="col-span-1" />

      <div className="col-span-2">
        <p className="font-bold text-2xl text-evergreen">Código Limpo</p>
        <p className="font-light text-lg text-gray-500 mb-2">Autor</p>
        <Tag title="Ação" />
        <p>Sinopse: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea
          dictumst. Curabitur at massa vel nulla pulvinar dignissim. </p>
        <Button title="Ver mais" variant="light" className="px-5 w-1/2" onClick={handleSelectBook} />
      </div>
    </div>
  )
}