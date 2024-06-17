import classNames from "classnames";

type Props = {
  title: string;
  className?: string;
  variant?: "light" | "dark";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (title: any) => void;
};

export function Button({ title, variant = "dark", className, onClick }: Props) {
  return (
    <button
      className={classNames([
        "bg-evergreenlight py-2 rounded-lg shadow font-medium mt-4 text-center",
        variant === "dark" && "bg-evergreenlight border-2 text-white border-evergreenlight",
        variant === "light" &&
        "bg-white border-2 border-evergreenlight text-evergreenlight",
        className
      ])}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
