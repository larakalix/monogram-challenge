import { useRef } from "react";

interface Props {
    tag: string;
}

export const Hashtag = ({ tag }: Props) => {
    const tooltip = useRef("Click here");

    if (tag.startsWith("#")) tooltip.current = "Go to hashtag";
    if (tag.startsWith("@")) tooltip.current = "Go to mention";

    return <span className="text-blue-500 cursor-pointer">{tag}&nbsp;</span>;
};
