import * as PAGE_NAMES from '../constants/page-names';
import * as ROUTES from '../constants/routes';

interface SiteMap<K, V> extends Map<K, V> {
  get: (pageName: K) => V;
}

interface SiteMapPageConfig {
  pageTitle: string;
  path: string;
}

const siteMap: SiteMap<
  UnionOf<typeof PAGE_NAMES>,
  SiteMapPageConfig
> = new Map();

// Order doesn't matter here other than for organization
siteMap
  .set(PAGE_NAMES.CONTACT, {
    pageTitle: '{{@ cms.contact.title @}}',
    path: ROUTES.CONTACT,
  })
  .set(PAGE_NAMES.HOME, {
    pageTitle: '{{@ cms.home.title @}}',
    path: ROUTES.HOME,
  })
  .set(PAGE_NAMES.NOT_FOUND, {
    pageTitle: '{{@ cms.not-found.title @}}',
    path: ROUTES.NOT_FOUND,
  })
  .set(PAGE_NAMES.PORTFOLIO, {
    pageTitle: '{{@ cms.portfolio.title @}}',
    path: ROUTES.PORTFOLIO,
  })
  .set(PAGE_NAMES.RESUME, {
    pageTitle: '{{@ cms.resume.title @}}',
    path: ROUTES.RESUME,
  });

export default siteMap;
