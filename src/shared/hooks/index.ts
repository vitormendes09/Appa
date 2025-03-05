import { useEffect } from "react";

const useFavicon = (iconUrl: string) => {
    useEffect(() => {
        const link: HTMLLinkElement =
            document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = iconUrl;
        document.head.appendChild(link);
    }, [iconUrl]);
};

export default useFavicon;