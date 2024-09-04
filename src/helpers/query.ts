export function buildSearchQuery(opts: {
  sites: string[],
  levels: string[],
  local: string[],
  keywords: string[],
}) {
  const sitesQuery = opts.sites
    .map((s) => 'site:'+s)
    .join(' OR ');

  const levelsQuery = buildSearchORQuery(opts.levels);
  const localQuery = buildSearchORQuery(opts.local);
  const keywordsQuery = buildSearchORQuery(opts.keywords);

  return [
    `(${sitesQuery})`,
    `(${levelsQuery})`,
    `${keywordsQuery}`,
  ].join(' AND ');
}

function buildSearchORQuery(keywords: string[]) {
  return keywords
    .map((k) => `"${k}"`)
    .join(' OR ');
}
