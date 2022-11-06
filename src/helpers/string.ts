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
