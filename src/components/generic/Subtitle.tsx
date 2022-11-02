import { GenericHeadingProps } from "types/generic/generic";

export const Subtitle = ({ text }: GenericHeadingProps) => {
    return (
        <h2 className="text-heading-gray font-extrabold text-[1.125rem] leading-[1.813rem] capitalize mb-8">
            {text}
        </h2>
    );
};
