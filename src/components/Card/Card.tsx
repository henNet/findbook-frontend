import { Button } from "../Button/Button";

export function Card(){
    return (
        <div className="flex flex-row shadow-lg border border-gray-100 max-w-lg w-full">
            <img src="" alt="" />
            <div>
                <p>Código Limpo</p>
                <p>Autor</p>
                <p>Tag</p>
                <p>Sinopse</p>
                <Button title="Ver mais" variant="light" />
            </div>
        </div>
    )
}