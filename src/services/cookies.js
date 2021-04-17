import Cookies from "js-cookie";


export function setCookie(reciepy) {
    console.log()
  Cookies.set("reciepy", reciepy);
}

export function getCookie() {
  return Cookies.get("reciepy");
}

export function removeCookie() {
  Cookies.set("reciepy", "");
}

