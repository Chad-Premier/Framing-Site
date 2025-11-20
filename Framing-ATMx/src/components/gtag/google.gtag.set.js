let flags = 'max-age=7200;secure;samesite=none';
if (document.location.protocol !== 'https:') { flags = 'max-age=7200;samesite=none';}

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('consent', 'default', {
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
});
gtag('js', new Date());
gtag('config', 'G-KXDX6YDMY9', {cookie_flags: flags});