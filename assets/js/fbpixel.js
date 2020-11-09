import { deleteCookie } from "./common"


function fbInit() {
  document.addEventListener("consent-marketing", function(e) {
    if (e.detail.status) {
      fbGrant();

    } else {
      fbRevoke();
    }
  }, false);
}

const fbGrant = () => {
  fbq('consent', 'grant');
  fbq('track', 'PageView');
}

const fbRevoke = () => {
  fbq('consent', 'revoke');
  deleteCookie('_fbp', '/', '.' + window.location.hostname.split('.').slice(1).join('.'));
  deleteCookie('fr', '/', '.facebook.com');
}

export default fbInit;