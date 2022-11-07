export const kFormatter = (num: number) => {
    const numStr = String(num);
    return num > 999 ? `${numStr.slice(0, -3)}k` : numStr;
};

export const isValidUrl = (url: string) => {
    try {
        return Boolean(new URL(url));
    } catch (e) {
        return false;
    }
};

export const createUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};
