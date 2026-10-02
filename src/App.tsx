import { Avatar, AvatarStack } from './components/Avatar';
import { Calendar } from './components/Calendar';
import { LeadSourceChart, Legend, SalesPeopleChart, StageChart } from './components/Charts';
import {
  ArrowDownRight, ArrowUpRight, CaretDown, CoinsIcon, HandshakeIcon,
  HomeIcon, Logo, PhoneIcon, SearchIcon, UserIcon,
} from './components/Icons';
import { contacts, listings, navItems, pipeline, reminders, schedule, stats } from './data/mock';

const statIcons = {
  home: <HomeIcon />,
  user: <UserIcon />,
  handshake: <HandshakeIcon />,
  coins: <CoinsIcon />,
};

const thumbColors = [
  ['#7B4A32', '#C9A27E'],
  ['#4FA3C7', '#CFE6D8'],
  ['#5A5A5A', '#D8D8D8'],
  ['#2D5C9E', '#9EC1E8'],
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__logo" href="#">
        <Logo />
        <span>REALTOR360</span>
      </a>
      <nav className="navbar__links">
        {navItems.map((item) => (
          <a key={item} href="#" className={item === 'Home' ? 'is-active' : undefined}>{item}</a>
        ))}
        <a href="#" className="navbar__more" aria-label="More">···</a>
      </nav>
      <div className="navbar__search">
        <input placeholder="Search..." aria-label="Search" />
        <SearchIcon />
      </div>
      <div className="navbar__user">
        <Avatar size={44} tone={0} />
        <CaretDown />
      </div>
    </header>
  );
}

function StatCards() {
  return (
    <>
      {stats.map((s) => (
        <section key={s.label} className="card stat">
          <div className="stat__top">
            <span className="stat__icon">{statIcons[s.icon]}</span>
            <h3>{s.label}</h3>
          </div>
          <div className="stat__bottom">
            <strong>{s.value}</strong>
            <span className={`pill pill--${s.trend}`}>
              {s.delta}
              {s.trend === 'up' ? <ArrowUpRight color="#1FBF8F" /> : <ArrowDownRight color="#E5304A" />}
            </span>
          </div>
        </section>
      ))}
    </>
  );
}

function Reminder() {
  return (
    <section className="card reminder">
      <h2>Reminder</h2>
      <div className="reminder__follow">
        <h4>Follow-Ups</h4>
        <p>15 leads need to be followed up.</p>
        <AvatarStack count="+11" size={24} />
      </div>
      {reminders.map((r) => (
        <div key={r.title} className="reminder__item">
          <h4>{r.title}</h4>
          <p>{r.body}</p>
        </div>
      ))}
    </section>
  );
}

function CalendarSchedule() {
  return (
    <section className="card cal-card">
      <Calendar />
      <div className="schedule">
        <h3>My Schedule</h3>
        {schedule.map((s) => (
          <div key={s.title} className="schedule__item" style={{ borderColor: s.color }}>
            <h4>{s.title}</h4>
            <p>{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ActiveListing() {
  return (
    <section className="card listing">
      <h2>Active Listing</h2>
      <div className="listing__scroll"><table>
        <thead>
          <tr>
            <th>Property</th><th>Type</th><th>Units</th><th>Price</th>
            <th>Active Leads</th><th>Views</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((l, i) => (
            <tr key={l.name}>
              <td>
                <div className="prop">
                  <span className="prop__thumb" style={{ background: `linear-gradient(160deg, ${thumbColors[i][1]}, ${thumbColors[i][0]})` }} />
                  <span>{l.name}</span>
                </div>
              </td>
              <td>{l.type}</td>
              <td>{l.units}</td>
              <td>{l.price}</td>
              <td><AvatarStack count={l.leads} size={32} /></td>
              <td>{l.views}</td>
              <td><span className={`status status--${l.kind}`}>{l.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </section>
  );
}

function LeadsContacts() {
  return (
    <section className="card contacts">
      <div className="contacts__head">
        <h2>Leads Contacts</h2>
        <button aria-label="Open"><ArrowUpRight size={9} /></button>
      </div>
      {contacts.map((c) => (
        <div key={c.name} className="contact">
          <Avatar size={44} tone={c.tone} />
          <div>
            <h4>{c.name}</h4>
            <p>{c.place}</p>
          </div>
          <button className="contact__call" aria-label={`Call ${c.name}`}><PhoneIcon /></button>
        </div>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="dashboard">
        <div className="dashboard__main">
          <StatCards />

          <section className="card chart-card chart-card--lead">
            <h2>Deals by Lead Source</h2>
            <LeadSourceChart />
          </section>

          <section className="card chart-card chart-card--stage">
            <h2>Deals by Stages by Development</h2>
            <StageChart />
            <div className="chart-card__legend"><Legend /></div>
          </section>

          <section className="card sales">
            <h2>Deals by Sales People by Development</h2>
            <SalesPeopleChart />
            <div className="sales__legend"><Legend /></div>
          </section>

          <section className="card pipeline">
            <h2>Deals in Pipeline by Development</h2>
            <div className="pipeline__table">
              <div className="pipeline__row pipeline__row--head"><span>Development Name</span><span>Record Count</span></div>
              {pipeline.map((p) => (
                <div key={p.name} className="pipeline__row"><span>{p.name}</span><span>{p.count}</span></div>
              ))}
            </div>
          </section>

          <section className="card closed">
            <h2>Total Deals Closed</h2>
            <div className="closed__bar"><i /></div>
            <div className="closed__meta">
              <span><b>42</b> Closed Deals</span>
              <span><b>132</b> On Progress</span>
            </div>
          </section>

          <ActiveListing />
          <LeadsContacts />
        </div>

        <aside className="dashboard__side">
          <Reminder />
          <CalendarSchedule />
        </aside>
      </main>
    </div>
  );
}
