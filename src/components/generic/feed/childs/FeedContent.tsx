import { isValidUrl } from "helpers/string";
import { Hashtag } from "./Hashtag";

type Props = {
    content: string;
};

export const FeedContent = ({ content }: Props) => {
    const getHyperLinks = (content: string) => {
        const tags: any = content
            .split(" ")
            .filter(String)
            .map((word: string) => {
                const isHashTag = /(^|\s)([#@][a-z\d-]+)/;
                const isLink = isValidUrl(word);
                const uri = word.split(/(?:https?|ftp):\/\/[\n\S]+/g);

                if (isHashTag.test(word))
                    return <Hashtag key={word} tag={word} />;
                else if (uri.length > 1) {
                    return (
                        <a
                            key={word}
                            href={word}
                            target="_blank"
                            rel="noreferrer"
                            className="green-blue-500"
                        >
                            {word}
                        </a>
                    );
                } else return `${word} `;
            });

        return tags;
    };

    return (
        <p className="text-sub-label-gray font-normal text-[0.875rem] leading-[1.25rem] mt-2">
            {getHyperLinks(content)}
        </p>
    );
};
