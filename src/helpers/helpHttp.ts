interface options{
    body?: BodyInit;
    headers?: HeadersInit;
    method?: string;
    signal?: AbortSignal;
}

export const helpHttp = () => {
    const customFetch = async (endpoint: string, options: options) => {
        const defaultHeaders: HeadersInit = {
            accept: "application/json"
        }

        const controller: AbortController = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers ? {...defaultHeaders, ...options.headers} : defaultHeaders;

        //options.body = options.body || null;
        if(options.body === null) delete options.body;

        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options)
        .then(res => res.ok ? res.json() : Promise.reject({err: true, status: res.status || "000", statusText: res.statusText || "Error desconocido"}))
        .catch(err => err);

    }

    const get = (url: string, options: options = {}) => customFetch(url, options);

    const post = (url: string, options: options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    }

    const put = (url: string, options: options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    }

    const del = (url: string, options: options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    }

    return {
        get,
        post,
        put,
        del,
    };
}