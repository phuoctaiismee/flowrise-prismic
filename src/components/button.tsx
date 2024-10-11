import {PrismicNextLink, PrismicNextLinkProps} from "@prismicio/next";
import clsx from "clsx";

const Button = ({className, prefetch, ...restProps}: PrismicNextLinkProps) => {
    return (
        <PrismicNextLink
            className={clsx(
                "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider",
                className
            )}
            prefetch={prefetch ?? undefined}
            {...restProps}
        />
    );
};

export default Button;
