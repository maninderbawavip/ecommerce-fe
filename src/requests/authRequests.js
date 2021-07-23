import { BACKEND_URL } from "../utils/constants"

export const signUpRequest = (data) => {
    return fetch(BACKEND_URL + "users/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())

}

export const signInRequest = (data) => {
    return fetch(BACKEND_URL + "users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())

}