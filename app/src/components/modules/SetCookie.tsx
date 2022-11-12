export default function SetCookie() {
  /* Set Cookie
   Ref: 
     https://www.w3schools.com/js/js_cookies.asp#:~:text=a%20cookie%20value-,A%20Function%20to%20Set%20a%20Cookie,-First%2C%20we%20create
   
   params:
     cname(str) : Cookie Name 
     cvalue(str): Cookie Value
     exdays(str): Cookie Expire / Max-Age
    
  */
  function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  }
  return setCookie
}
