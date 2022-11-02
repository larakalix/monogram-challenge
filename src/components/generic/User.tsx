import { UserProps } from "types/data/user";
import Image from "next/image";

interface Props extends UserProps {
    onlyThumbnail?: boolean;
}

export const User = ({
    name,
    userName,
    thumnbnail,
    onlyThumbnail = false,
}: Props) => {
    return (
        <div className="flex items-center justify-center">
            <div>
                <Image src={thumnbnail} alt={name} width={36} height={36} />
            </div>
            {!onlyThumbnail && (
                <div className="flex flex-col ml-3">
                    <span className="text-label-gray font-medium text-[0.875rem] leading-[1.25rem]">
                        {name}
                    </span>
                    <span className="text-sub-label-gray font-medium text-[0.75rem] leading-4">
                        @{userName}
                    </span>
                </div>
            )}
        </div>
    );
};
