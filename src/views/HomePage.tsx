import { Title } from "@components/generic/Title";
import { FeedInput, Feeds, Suggestions } from "@components/home";

export const HomePage = () => {
    return (
        <div className="max-w-full lg:max-w-5xl m-auto">
            <Title text="Your feed" type={0} />

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_15rem] gap-6 w-full max-w-[100vw] items-start">
                {/* Feeds */}
                <div className="flex flex-col pr-0 lg:pr-20">
                    <FeedInput />

                    <Feeds />
                </div>

                {/* Suggestions */}
                <div className="flex flex-col">
                    <Suggestions />
                </div>
            </div>
        </div>
    );
};
