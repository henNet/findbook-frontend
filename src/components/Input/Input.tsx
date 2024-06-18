import { forwardRef } from "react";

type Props = {
	placeHolder: string;
}

export const Input =
	forwardRef<HTMLInputElement, Props>(
		({ placeHolder, ...rest }: Props, ref) => {
			return (
				<input
					ref={ref}
					type="text"
					placeholder={placeHolder}
					className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3"
					{...rest}
				/>
			)
		}
	);