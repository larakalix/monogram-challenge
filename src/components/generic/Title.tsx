type Props = {
    text: string;
};

export const Title = ({ text }: Props) => {
    return (
        <h1 className="text-heading-gray font-extrabold text-[1.5rem] leading-[1.813rem] capitalize mb-8">
            {text}
        </h1>
    );
};
