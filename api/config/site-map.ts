import * as PAGE_NAMES from '../constants/page-names';

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

siteMap.set(PAGE_NAMES.HOME, {
  pageTitle: '{{@ cms.home.title @}}',
  path: '/',
});
