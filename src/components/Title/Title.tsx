import classNames from "classnames";

type Props = {
    title: string;
    className?: string;
}

export function Title({ title, className }: Props) {
    return (
        <div className={classNames([
            "md:text-3xl text-2xl border-b-4 border-b-evergreenlight w-fit font-bold text-evergreen",
            className
        ])}>{title}</div>
    );
}