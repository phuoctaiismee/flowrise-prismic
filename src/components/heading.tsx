import clsx from "clsx";

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
};

const Heading = ({
    as: Component = "h1",
    className,
    children,
    size = "lg",
    ...restProps
}: HeadingProps) => {
    return (
        <Component
            {...restProps}
            className={clsx(
                "font-bold leading-tight tracking-tight font-display text-slate-700",
                size === "xl" && "text-5xl md:text-7xl",
                size === "lg" && "text-4xl md:text-5xl",
                size === "md" && "text-3xl md:text-4xl",
                size === "sm" && "text-2xl md:text-3xl",
                className
            )}
        >
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </Component>
    );
};

export default Heading;
