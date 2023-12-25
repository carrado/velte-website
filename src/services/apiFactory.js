import axios from "axios";

const $API_GATEWAY_AUTHENTICATE = `${process.env.NEXT_PUBLIC_VELTE_API_DEV}`;

export const $simpleAuthHeader = {
    Accept: "application/json",
};


export const AxiosAUTHENTICATE = axios.create({
    baseURL: $API_GATEWAY_AUTHENTICATE,
    headers: $simpleAuthHeader
});


export const getChristmasGreeting = (payload) => {
    let url = `/christmas`;
    return AxiosAUTHENTICATE.post(url, payload)
}

