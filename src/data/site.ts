export const site = {
  name: 'Diakite Roofing & Restoration',
  legalName: 'Diakite LLC',
  tagline: 'Honest roofing and storm restoration in Howard County.',
  phone: '(667) 200-6656',
  phoneHref: 'tel:+16672006656',
  email: 'office@diakiteroofingrestoration.com',
  city: 'Columbia, MD',
  hours: 'Mon-Sat 8:00 AM - 5:00 PM',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/diakiteroofingrestoration' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1CzP9fGtWP/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@diakite.roofing' },
  ],
};

export const services = [
  {
    label: 'Roof Replacement',
    href: '/roof-replacement/',
    blurb: 'Full tear-off and a new Owens Corning roof, usually in one day.',
  },
  {
    label: 'Storm & Hail Damage Restoration',
    href: '/storm-hail-damage-restoration/',
    blurb: 'Damage documented slope by slope and scoped for your insurance claim.',
  },
  {
    label: 'Siding Replacement',
    href: '/siding-replacement/',
    blurb: 'Old siding off, walls checked and flashed, new panels and trim on.',
  },
  {
    label: 'Asphalt Shingle Roofing',
    href: '/asphalt-shingle-roofing/',
    blurb: 'Architectural shingles installed with the details that make a roof last.',
  },
  {
    label: 'Commercial Flat Roofing',
    href: '/commercial-flat-roofing/',
    blurb: 'Flat and low-slope systems for offices, retail and multifamily buildings.',
  },
  {
    label: 'Emergency Roof Tarping',
    href: '/emergency-roof-tarping/',
    blurb: 'Storm-opened roofs covered fast and documented for your claim.',
  },
  {
    label: 'Free Roof Inspection',
    href: '/free-roof-inspection/',
    blurb: 'We walk the roof, photograph it and tell you what it needs.',
  },
];

// Columbia is the home town, so its page is the homepage.
export const areas = [
  { label: 'Columbia', href: '/' },
  { label: 'Ellicott City', href: '/roofing-ellicott-city-md/' },
  { label: 'Clarksville', href: '/roofing-clarksville-md/' },
  { label: 'Elkridge', href: '/roofing-elkridge-md/' },
  { label: 'Laurel', href: '/roofing-laurel-md/' },
  { label: 'Silver Spring', href: '/roofing-silver-spring-md/' },
  { label: 'Rockville', href: '/roofing-rockville-md/' },
  { label: 'Bowie', href: '/roofing-bowie-md/' },
  { label: 'Glen Burnie', href: '/roofing-glen-burnie-md/' },
  { label: 'Annapolis', href: '/roofing-annapolis-md/' },
  { label: 'Eldersburg', href: '/roofing-eldersburg-md/' },
  { label: 'Catonsville', href: '/roofing-catonsville-md/' },
  { label: 'Baltimore', href: '/roofing-baltimore-md/' },
  { label: 'Baltimore County', href: '/roofing-baltimore-county-md/' },
];

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/', children: services },
  { label: 'Service Areas', href: '/service-areas/', children: areas },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Financing', href: '/financing/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
