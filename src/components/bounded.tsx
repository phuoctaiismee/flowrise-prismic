import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const Bounded = ({
    as: Component = "section",
    className,
    children,
    ...restProps
}: BoundedProps) => {
    return (
        <Component
            {...restProps}
            className={clsx("px-4 py-10 md:py-14 md:px-6 lg:py-16", className)}
        >
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </Component>
    );
};

export default Bounded;
