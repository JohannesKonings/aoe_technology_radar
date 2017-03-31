export const quadrants = [
  'languages-and-frameworks',
  'methods-and-patterns',
  'platforms-and-aoe-services',
  'tools',
];

export const getPageNames = (radar) => {
  return [
    'index',
    'overview',
    'help',
    ...quadrants,
    ...getItemPageNames(radar.items),
  ]
}

export const getItemPageNames = (items) => items.map(item => `${item.quadrant}/${item.name}`);

export const rings = [
  'adopt',
  'trial',
  'assess',
  'hold'
];

const messages = {
  'languages-and-frameworks': 'Languages & Frameworks',
  'methods-and-patterns': 'Methods & Patterns',
  'platforms-and-aoe-services': 'Platforms and AOE Services',
  'tools': 'Tools',
};

export const translate = (key) => (messages[key] || '-');

const formatRelease = (release) => moment(release, 'YYYY-MM-DD').format('MMM YYYY');