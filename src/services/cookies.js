import Cookies from "js-cookie";


export function setCookie(recipy) {

  Cookies.set("recipy", recipy,{ path: '/'});
  console.log('recipy')
}

export function getCookie() {
  return Cookies.get("recipy");
}

export function removeCookie() {
  Cookies.set("recipy", "");
}

