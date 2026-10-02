import { calendarMarks } from '../data/mock';
import { Chevron } from './Icons';

const YEAR = 2025;
const MONTH = 6; // July
const TODAY = 8;

export function Calendar() {
  const first = new Date(YEAR, MONTH, 1).getDay();
  const days = new Date(YEAR, MONTH + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array<null>(first).fill(null),
    ...Array.from({ length: days }, (_, i) => i + 1),
  ];

  return (
    <div className="calendar">
      <div className="calendar__head">
        <h3>July 2025</h3>
        <div className="calendar__nav">
          <button aria-label="Previous month"><Chevron dir="left" size={26} /></button>
          <button aria-label="Next month"><Chevron dir="right" size={26} /></button>
        </div>
      </div>
      <div className="calendar__grid">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={i} className="calendar__dow">{d}</span>
        ))}
        {cells.map((d, i) => (
          <span key={i} className="calendar__cell">
            {d !== null && (
              <span className={`calendar__day${d === TODAY ? ' is-today' : ''}`}>
                {d}
                {calendarMarks[d] && <i style={{ background: calendarMarks[d] }} />}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
