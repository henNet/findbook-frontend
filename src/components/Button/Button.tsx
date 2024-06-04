type Props = {
    title: string
}

export function Button({title}: Props){
    return (<button
        className="bg-evergreenlight 
        px-5 py-2 rounded-lg shadow text-white font-medium mt-4"
      >
        {title}
      </button>)
}