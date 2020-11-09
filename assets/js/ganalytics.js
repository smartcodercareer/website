import { deleteCookie } from "./common"
import { gaId } from '@params';


function gaInit() {
  document.addEventListener("consent-analytics", function(e) {
    if (e.detail.status) {
      gaGrant()

    } else {
      gaRevoke()
    }
  }, false)
}

const gaGrant = () => {
  // ga( 'send', 'pageview' )
  // ga( 'create', {{ }}, window.location.hostname);
  // ga( 'set', 'anonymizeIp', true );
  // ga( 'set', 'dimension1', 'no' );
  // ga( 'require', 'ec' );
  gtag('config', gaId);
}

const gaRevoke = () => {
  deleteCookie('_ga');
  deleteCookie('_gat');
  deleteCookie('_gid');
  deleteCookie(`_gat_gtag_${gaId}`);
}

export default gaInit;