class Navigate {

    static Path = (): string => {
        const currentPath = window.location.pathname
        return currentPath
    }

    static Param = (): URLSearchParams => {
        const param = new URLSearchParams(window.location.search);
        return param
    }

    static To = (url: string) => {
        window.location.href = url;
    };

    static Replace = (url: string) => {
        window.location.replace(url);
    };

    static NewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    static NewPage = (url: string) => {
        window.location.assign(url);
    };

    static Back = (
        numberOfPage?: number
    ) => {
        if (numberOfPage) {
            window.history.go(-(numberOfPage));
        } else {
            window.history.back();
        }
    }

    static Refresh = () => {
        window.location.reload()
    }
}

export default Navigate