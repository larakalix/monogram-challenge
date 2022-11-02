import clsx from "clsx";
import { GenericHeadingProps, HeadingType } from "types/generic/generic";

export const Title = ({ text, type }: GenericHeadingProps) => {
    const styles = clsx({
        ["text-heading-gray font-extrabold text-[1.5rem] leading-[1.813rem] capitalize mb-8"]:
            type === HeadingType.Title,
        ["text-heading-gray font-extrabold text-[1.125rem] leading-[1.813rem] capitalize mb-8"]:
            type === HeadingType.Subtitle,
    });

    return <h1 className={styles}>{text}</h1>;
};
