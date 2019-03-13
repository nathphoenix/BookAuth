import axios from "axios";
// import { signup } from "./Actions/users";

export default {
    user : {
        login : credentials =>
        axios.post("/api/auth", {credentials}).then(res => res.data.user),
        signup : user =>
        axios.post("/api/users", {user}).then(res=>res.data.user)
    }
}