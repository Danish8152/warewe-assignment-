export const COLORS = {
  gold: '#D4AF37',
  goldMid: '#EBDDA6',
  goldLight: '#F6EDD2',
};

export interface StatCard {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down';
  icon: 'home' | 'user' | 'handshake' | 'coins';
}

export const stats: StatCard[] = [
  { label: 'Active Listing', value: '23', delta: '-12%', trend: 'down', icon: 'home' },
  { label: 'Active Leads', value: '120', delta: '+12%', trend: 'up', icon: 'user' },
  { label: 'Total Closed', value: '42', delta: '+12%', trend: 'up', icon: 'handshake' },
  { label: 'Total Revenue', value: 'Rs.22Cr.', delta: '+12%', trend: 'up', icon: 'coins' },
];

export const leadSources = [
  { name: 'Inbound Call', count: 9, pct: 37.87, color: COLORS.goldLight },
  { name: 'Reference', count: 1, pct: 30.6, color: COLORS.gold },
  { name: 'Facebook', count: 1, pct: 6.78, color: '#EBD07A' },
  { name: 'Website', count: 10, pct: 24.83, color: COLORS.goldMid },
];

/** cumulative tops: [Angel Plaza, +Angel Garden, +None] */
export const stageBars = [
  { stage: 'Interested', tops: [3.0, 5.6, 7.9] },
  { stage: 'Site Visit Done', tops: [3.8, 7.1, 10] },
  { stage: 'Unit Shortlisted', tops: [3.5, 6.6, 9.3] },
  { stage: 'Contracts Signed', tops: [3.8, 7.1, 10] },
  { stage: 'Offer Initiated', tops: [3.2, 5.9, 8.4] },
  { stage: 'Offer Accepted', tops: [3.8, 7.1, 10] },
];

export const salesBars = [{ tops: [4.9, 11.1, 17.8] }, { tops: [2.4, 7.9, 12.0] }];

export const pipeline = [
  { name: 'None', count: 14 },
  { name: 'Angel Plaza', count: 3 },
  { name: 'Angel Garden', count: 1 },
];

export const reminders = [
  { title: 'Submit Final Offer- Villa Deal', body: 'Finalize and send offer documents.' },
  { title: 'Review Contract with Legal', body: 'Ensure attorney reviews apartment deal contract today.' },
  { title: 'Call Jessica Chen – Follow-up', body: 'Discuss her feedback after site visit to Angel Plaza.' },
];

export type Status = 'occupied' | 'available' | 'sold';

export const listings = [
  { name: 'Maplewood House', type: 'House', units: '12', price: 'Rs.85L', leads: '+35', views: '125', status: '8/12 Occupied', kind: 'occupied' as Status },
  { name: 'Serenity Villa', type: 'Villa', units: '9300', price: 'Rs.2.8Cr', leads: '+40', views: '930', status: 'Available', kind: 'available' as Status },
  { name: 'Rosehill Cottage', type: 'House', units: '25', price: 'Rs.1.1Cr', leads: '+15', views: '355', status: 'Available', kind: 'available' as Status },
  { name: 'Skyline Edge', type: 'Apartment', units: '17', price: 'Rs.75L', leads: '+11', views: '425', status: 'Sold Out', kind: 'sold' as Status },
];

export const contacts = [
  { name: 'John Doe', place: 'New York', tone: 0 },
  { name: 'Jessica Chen', place: 'California, LA', tone: 1 },
  { name: 'Evan Chris', place: 'New York', tone: 2 },
  { name: 'Jack B.', place: 'Ohio, Columbus', tone: 3 },
  { name: 'Emily Paris', place: 'California, LA', tone: 4 },
];

export const schedule = [
  { title: 'Visit Client- Angel Plaza', sub: 'Sector 45, Gurugram, Haryana', color: '#2DD4BF' },
  { title: 'Visit Client – Site Walkthrough', sub: 'Whitefield Road, Bengaluru, Karnataka', color: '#2DD4BF' },
  { title: 'Follow Up – Jessica Chen', sub: 'jessica.chen@email.com', color: '#F9A8D4' },
  { title: 'Follow Up – Roger Bouchard', sub: 'roger.bouchard@clientmail.com', color: '#F9A8D4' },
  { title: 'Submit Final Offer – Villa Deal', sub: 'Finalize and send offer documents.', color: '#FACC15' },
  { title: 'Submit Internal Review – Apartment PricingFinal Offer – Villa Deal', sub: 'Update CRM with latest market rates.', color: '#FACC15' },
];

export const navItems = [
  'Home', 'Developments', 'Buildings', 'Units', 'Leads', 'Companies',
  'Contacts', 'Deals', 'Activities', 'Attorney Firms', 'Reports',
];

/** calendar day -> underline colour */
export const calendarMarks: Record<number, string> = {
  10: '#2DD4BF',
  11: '#FACC15',
  14: '#F43F5E',
};
