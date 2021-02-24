import redirectIfUnsupported from './browser-support';

// Get User Agent (http://detectmobilebrowsers.com/)
const userAgent =
  window.navigator.userAgent || navigator.vendor || window.opera;

/* Check if we should redirect to unsupported browser page */
redirectIfUnsupported(userAgent);
