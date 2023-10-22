import axios from "axios";

const $API_GATEWAY_AUTHENTICATE = `${process.env.NEXT_PUBLIC_VELTE_API_DEV}/authenticate`;

export const $simpleAuthHeader = {
    Accept: "application/json",
};


export const AxiosAUTHENTICATE = axios.create({
    baseURL: $API_GATEWAY_AUTHENTICATE,
    headers: $simpleAuthHeader
});
