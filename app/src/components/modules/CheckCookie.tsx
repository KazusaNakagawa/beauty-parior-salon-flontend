import { useNavigate } from 'react-router-dom'

export default function CheckCookie() {
  /*
    Checks and retrieves the value of the specified cookie name
  */
  const navigate = useNavigate()

  function getCookie(cname: string) {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }
  function checkCookie(cname: string, alert_val: string, navigate_: string) {
    /* Check if there is a specified cookie name. If no value, transition to specified path
    
     params:
       cname(str)     : Cookie Name 
       alert_val(str) : Alert Message 
       navigate_(str) : Path to the page transition destination
    */
    let cvalue = getCookie(cname)
    if (cvalue !== '') {
      return cvalue
    } else {
      alert(alert_val)
      navigate(navigate_)
    }
  }
  return checkCookie
}
