
type Props = {
    title: string;
}

export function Title({title}: Props){
    return (
        <div className="text-3xl border-b-4 border-b-evergreenlight 
        w-fit font-bold text-evergreen">{title}</div>
    );
}