import Cookie from 'js-cookie';

export default function setCookie(cookieTitle, cookieValue) {
    const options = { expires: 7 }; // Set expiry date in days
    Cookie.set(cookieTitle, cookieValue, options);
}
