import { ViewContentWrapper } from "@components/generic/ViewContentWrapper";
import { FeedInput, Feeds, Suggestions } from "@components/home";
import { ViewWrappperColSplitType } from "types/generic/generic";

export const HomePage = () => {
    return (
        <ViewContentWrapper
            title="Your feed"
            splitType={ViewWrappperColSplitType.NotEquals}
        >
            {/* Feeds */}
            <div className="flex flex-col pr-0 lg:pr-20">
                <FeedInput />

                <Feeds />
            </div>

            {/* Suggestions */}
            <div className="flex flex-col">
                <Suggestions />
            </div>
        </ViewContentWrapper>
    );
};
