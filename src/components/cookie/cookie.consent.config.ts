import { eraseCookies } from 'vanilla-cookieconsent';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';
import "@orestbida/iframemanager";

// @ts-ignore
const im = iframemanager();

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom right',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    /*
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics</a>',
          onAccept: () => {
            //console.log('ga4 accepted');
          },
          onReject: () => {
            //console.log('ga4 rejected');
            eraseCookies(/^(_ga|gid|__utm)/);
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
    */
    external_content: {
      services: {
        youtube: {
          label: '<a rel="noreferrer noopener" href="https://www.youtube.com" target="_blank">YouTube</a> content is hosted by a third party. By enabling this content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> and <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/" target="_blank">privacy policy</a> of youtube.com.',
          onAccept: () => im.acceptService('youtube'),
          onReject: () => im.rejectService('youtube')
        },
        googlemaps: {
          label: '<a rel="noreferrer noopener" href="https://www.google.com/maps" target="_blank">Google Maps</a> content is hosted by a third party. By enabling this content you accept the <a rel="noreferrer noopener" href="https://www.google.com/intl/en_uk/help/terms_maps/" target="_blank">terms and conditions</a> and <a href="https://policies.google.com/privacy?hl=en&gl=uk" target="_blank">privacy policy</a> of google.com.',
          onAccept: () => im.acceptService('googlemaps'),
          onReject: () => im.rejectService('googlemaps')
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Cookie Consent",
          description:
            'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. By confirming the "Accept all" button, you consent to the use of all Cookies.<br><br>You can use the "Open settings" button to select which Cookies you wish to permit. You can also refuse the use of Cookies by using "Reject all" button.<br><br>Further information is available in our Privacy Policy.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="/en/terms-and-conditions">Terms and conditions</a>\n<a href="/en/privacy-policy">Privacy Policy</a>\n<a href="/en/cookies">Cookies</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'This website collects cookies to deliver better user experience. We use cookies to analyze our website traffic and performance, and never collect any personal data.<br><br>Please check the individual terms and conditions for content hosted by Third Parties before enabling them.',
            },
            {
              title:
                'Necessary Cookies',
              description:
                'Required to store cookie preferences to permit/prevent other categories of cookie used by this site.',
              linkedCategory: 'necessary',
              cookieTable: {
                headers: {
                  name: "Name",
                  domain: "Service",
                  description: "Description",
                  expiration: "Expiration"
                },
                body: [
                  {
                    name: "cc_cookie",
                    domain: "Cookie Preferences",
                    description: 'Cookie set by <a href="/en/cookies">Premier Image</a>',
                    expiration: "Expires after 182 days"
                  },
                  {
                    name: "im_googlemaps",
                    domain: "Google Maps Preferences",
                    description: "Cookie set by <a href=\"/en/cookies\">Premier Image</a>",
                    expiration: "Expires after 182 days"
                  },
                  {
                    name: "im_youtube",
                    domain: "YouTube Preferences",
                    description: "Cookie set by <a href=\"/en/cookies\">Premier Image</a>",
                    expiration: "Expires after 182 days"
                  },
                ]
              },
            },
            /*
            {
              title: 'Analytics Cookies',
              description:
                'Used to monitor how you use the site.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                    name: "Name",
                    domain: "Service",
                    description: "Description",
                    expiration: "Expiration"
                },
                body: [
                  {
                    name: " _ga",
                    domain: "User identifier",
                    description: "Cookie set by <a href=\"/en/cookies\">Google Analytics</a>",
                    expiration: "Expires after 2 years"
                  },
                  {
                    name: "_ga_<container-id>",
                    domain: "Persist session state",
                    description: "Cookie set by <a href=\"/en/cookies\">Google Analytics</a>",
                    expiration: "Expires after 2 years"
                  },
                ]
              },
            },
            */
            {
              title: 'External Content Cookies',
              description:
                'Used by <i>external content providers (third-party)</i> entities to provide deliver content to this site.',
              linkedCategory: 'external_content',
            },
            /*
            {
              title: 'More information',
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="/en/cookie.policy">contact us</a>.',
            },
            */
          ],
        },
      },
    },
  },
};
