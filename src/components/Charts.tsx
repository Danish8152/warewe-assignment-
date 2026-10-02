import { COLORS, leadSources, salesBars, stageBars } from '../data/mock';

const TONES = [COLORS.gold, COLORS.goldMid, COLORS.goldLight];
const GRID = '#D9D9D9';
const AXIS_TEXT = '#555';

export function Legend() {
  return (
    <div className="legend">
      {['Angel Plaza', 'Angel Garden', 'None'].map((n, i) => (
        <span key={n} className="legend__item">
          <i style={{ background: TONES[i] }} />
          {n}
        </span>
      ))}
    </div>
  );
}

/* ---------- Deals by Lead Source (donut) ---------- */
const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
};

function slicePath(cx: number, cy: number, ro: number, ri: number, a0: number, a1: number) {
  const [x0, y0] = polar(cx, cy, ro, a0);
  const [x1, y1] = polar(cx, cy, ro, a1);
  const [x2, y2] = polar(cx, cy, ri, a1);
  const [x3, y3] = polar(cx, cy, ri, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${x0} ${y0}A${ro} ${ro} 0 ${large} 1 ${x1} ${y1}L${x2} ${y2}A${ri} ${ri} 0 ${large} 0 ${x3} ${y3}Z`;
}

export function LeadSourceChart() {
  const cx = 335;
  const cy = 226;
  const total = leadSources.reduce((s, d) => s + d.pct, 0);
  let angle = -8;
  const slices = leadSources.map((d) => {
    const sweep = (d.pct / total) * 360;
    const s = { ...d, a0: angle, a1: angle + sweep };
    angle += sweep;
    return s;
  });

  return (
    <svg className="chart-svg" width="669" height="416" viewBox="0 0 669 416">
      {slices.map((s) => (
        <path key={s.name} d={slicePath(cx, cy, 144, 58, s.a0, s.a1)} fill={s.color} />
      ))}
      <g fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M233 136Q190 122 156 154M153 158l4-17M153 158l16-6" />
        <path d="M428 133Q458 112 488 123M488 123l-10-8M488 123l-10 9" />
        <path d="M225 293Q205 322 156 331M153 331l14-11M153 331l16 4" />
        <path d="M410 343Q460 354 511 336M511 336l-11-7M511 336l-12 10" />
      </g>
      <g fontSize="12" fill="#555" textAnchor="middle">
        <text x="122" y="178">Website</text>
        <text x="122" y="193">10 (24.83%)</text>
        <text x="535" y="139">Inbound Call</text>
        <text x="535" y="154">9 (37.87%)</text>
        <text x="106" y="312">Facebook</text>
        <text x="106" y="327">1 (6.78%)</text>
        <text x="557" y="314">Reference</text>
        <text x="557" y="329">1 (30.6%)</text>
      </g>
    </svg>
  );
}

/* ---------- Deals by Stages by Development ---------- */
export function StageChart() {
  const x0 = 84;
  const x1 = 574;
  const yBase = 257;
  const unit = 18.5;
  const centers = [131, 208, 285, 363, 440, 518];
  const ticks = [0, 2.5, 5, 7.5, 10];

  return (
    <svg className="chart-svg" width="669" height="416" viewBox="0 0 669 416">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={x0} x2={x1} y1={yBase - t * unit} y2={yBase - t * unit} stroke={GRID} strokeWidth="1" />
          <text x={x0 - 6} y={yBase - t * unit + 4} fontSize="14" fill={AXIS_TEXT} textAnchor="end">{t}</text>
        </g>
      ))}
      {stageBars.map((b, i) => (
        <g key={b.stage}>
          {[2, 1, 0].map((k) => (
            <rect key={k} x={centers[i] - 20} y={yBase - b.tops[k] * unit} width="40" height={b.tops[k] * unit} fill={TONES[k]} />
          ))}
          <text
            transform={`translate(${centers[i] + 4} ${yBase + 14}) rotate(-35)`}
            fontSize="12"
            fill={AXIS_TEXT}
            textAnchor="end"
          >
            {b.stage}
          </text>
        </g>
      ))}
      <text transform="translate(29 162) rotate(-90)" fontSize="16" fill={AXIS_TEXT} textAnchor="middle">Record Count</text>
      <text x="334" y="360" fontSize="16" fill={AXIS_TEXT} textAnchor="middle">Stage</text>
    </svg>
  );
}

/* ---------- Deals by Sales People ---------- */
export function SalesPeopleChart() {
  const x0 = 61;
  const unit = 28.1;
  const ticks = [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20];
  const rows = [[63, 35], [110, 35]];

  return (
    <svg className="chart-svg" width="669" height="245" viewBox="0 0 669 245">
      <line x1={x0} x2={x0} y1="60" y2="150" stroke={GRID} />
      {ticks.map((t) => (
        <g key={t}>
          {t >= 5 && <line x1={x0 + t * unit} x2={x0 + t * unit} y1="58" y2="150" stroke={GRID} />}
          <text x={x0 + t * unit} y="173" fontSize="14" fill={AXIS_TEXT} textAnchor="middle">{t}</text>
        </g>
      ))}
      {salesBars.map((b, i) => (
        <g key={i}>
          {[2, 1, 0].map((k) => (
            <rect
              key={k}
              x={x0}
              y={rows[i][0]}
              width={b.tops[k] * unit}
              height={rows[i][1]}
              fill={TONES[k]}
              rx={k === 2 ? 0 : 0}
            />
          ))}
        </g>
      ))}
      <text transform="translate(34 107) rotate(-90)" fontSize="16" fill={AXIS_TEXT} textAnchor="middle">Deal Owner</text>
      <text x="334" y="196" fontSize="16" fill={AXIS_TEXT} textAnchor="middle">Record Count</text>
    </svg>
  );
}
