import {jwtDecode} from "jwt-decode";

export function extractUsernameFromToken(token) {

    const decodedToken = jwtDecode(token);
    return decodedToken.sub;
}