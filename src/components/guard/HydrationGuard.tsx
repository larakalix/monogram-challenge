import { ReactNode, useEffect, useState } from "react";

export const HydrationGuard = ({ children }: { children: ReactNode }) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (typeof window === "undefined" || !isHydrated) return null;

    return <>{children}</>;
};
