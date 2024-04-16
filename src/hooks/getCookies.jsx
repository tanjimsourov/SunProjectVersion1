import Cookie from 'js-cookie'

export default function getCookies(){
    const cookies = Cookie.get()
    const convertedArray = Object.entries(cookies).map(([title, speed]) => ({
        title,
        speed,
      }));
      
    return convertedArray;
}