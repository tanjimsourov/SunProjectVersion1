import Cookies from "js-cookie";

export default function getCookies(cookieTitle){
    return Cookies.get(cookieTitle)
}