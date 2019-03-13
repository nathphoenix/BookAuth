import api from "../api";
import { userLoggedIn } from "./auth";

export const signup = data =>dispatch =>
 api.user.signup(data).then(user=>dispatch(userLoggedIn(user))) //upon successful registration we want user to be automatically logged in