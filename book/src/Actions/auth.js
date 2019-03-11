//THIS AUTH IS OUR USER REDUCER

import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
    type : USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type : USER_LOGGED_OUT
})

export const login = credentials => dispatch =>
api.user.login(credentials).then(user => {
    localStorage.bookwormJWT = user.token;   // this way we save token into local storage for saving credentials
                                              //on page refresh and remain on the page with the credentials
    dispatch(userLoggedIn(user))});

    export const logout = () => dispatch =>
     {
        localStorage.removeItem('bookwormJWT');
        dispatch(userLoggedOut());      //LOGOUT THUNK ACTION
    };