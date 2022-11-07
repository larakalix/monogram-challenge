import { Title } from "./Title";
import { HeadingType, ViewWrappperColSplitType } from "types/generic/generic";
import clsx from "clsx";
import { useUserStore } from "@store/userStore";
import { Loader } from "./Loader";

type Props = {
    title: string;
    subtitle?: string;
    children: JSX.Element | JSX.Element[];
    splitType?: ViewWrappperColSplitType;
};
export const ViewContentWrapper = ({
    title,
    children,
    splitType = ViewWrappperColSplitType.Equals,
    subtitle,
}: Props) => {
    const isAuthenticated = useUserStore((state) => state.isAuthenticated);

    const styles = clsx({
        ["lg:grid-cols-1"]: splitType === ViewWrappperColSplitType.One,
        ["lg:grid-cols-2"]: splitType === ViewWrappperColSplitType.Equals,
        ["lg:grid-cols-[minmax(0,1fr)_200px] xl:grid-cols-[minmax(0,1fr)_340px]"]:
            splitType === ViewWrappperColSplitType.NotEquals,
    });

    // if (!isAuthenticated) return <Loader />;

    return (
        <div className="max-w-full lg:max-w-5xl m-auto">
            {subtitle && <p className="text-sub-label-gray">{subtitle}</p>}
            <Title text={title} type={HeadingType.Title} />

            <div
                className={`grid grid-cols-1 ${styles} gap-6 w-full max-w-[100vw] items-start`}
            >
                {children}
            </div>
        </div>
    );
};
