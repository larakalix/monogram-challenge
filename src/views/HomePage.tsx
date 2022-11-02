import { Title } from "@components/generic/Title";
import { FeedInput, Feeds } from "@components/home";

export const HomePage = () => {
    return (
        <div>
            <Title text="Your feed" />

            <div className="grid grid-cols-2">
                {/* Feeds */}
                <div className="flex flex-col">
                    <FeedInput />

                    <Feeds />
                </div>

                {/* Following */}
                <div></div>
            </div>
        </div>
    );
};
