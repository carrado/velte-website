import { AxiosAUTHENTICATE } from "./apiFactory";

export const AuthenticationAPI = {
    $_createUserAccount(payload) {
        const url = `/createAccount`;
        return AxiosAUTHENTICATE.post(url, payload);
    },
};
