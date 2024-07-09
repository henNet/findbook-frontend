import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useCallback } from "react";
import Book from "../../interface/book";

export function Card(props: Book) {

  const navigate = useNavigate();
  const handleSelectBook = useCallback(() => {
    navigate(`/${props._id}`)
  }, []);

  return (
    <div className="p-4 grid grid-cols-3 gap-2 shadow-lg 
			border border-gray-100 max-w-lg w-full rounded-md">
      <img
        // src="https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UF1000,1000_QL80_.jpg"
        src={props.thumbnailUrl}
        alt=""
        className="col-span-1" />

      <div className="col-span-2">
        <p className="font-bold text-2xl text-evergreen">{props.title}</p>
        <p className="font-light text-lg text-gray-500 mb-2">{props.authors}</p>
        <Tag title="Ação" />
        {/* <p>Sinopse: {props.shortDescription} </p> */}
        <Button title="Ver mais" variant="light" className="px-5 w-1/2" onClick={handleSelectBook} />
      </div>
    </div>
  )
}