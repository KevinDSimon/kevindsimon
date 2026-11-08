import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ExternalArrow from './external-arrow';

// Public, read-only contribution counts for a GitHub username (no key needed).
const USERNAME = 'KevinDSimon';
const PROFILE = `https://github.com/${USERNAME}`;
const SOURCE = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const PHONE_WEEKS = 26; // weeks still shown on phones

// useLayoutEffect warns during the static build, where there is no layout to measure.
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const toDate = (iso) => new Date(`${iso}T00:00:00Z`);
const toISO = (d) => d.toISOString().slice(0, 10);

// Keep only well-formed days, so odd data can never draw anything but squares.
function clean(data) {
  if (!data || !Array.isArray(data.contributions)) return null;
  const days = data.contributions.filter(
    (d) =>
      d && /^\d{4}-\d{2}-\d{2}$/.test(d.date) &&
      Number.isInteger(d.count) && d.count >= 0 &&
      Number.isInteger(d.level) && d.level >= 0 && d.level <= 4
  );
  return days.length ? days : null;
}

// An empty year ending today, shown while the real counts load.
function emptyYear() {
  const today = new Date();
  const end = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  return Array.from({ length: 365 }, (_, i) => ({
    date: toISO(new Date(end - (364 - i) * 86400000)),
    count: 0,
    level: 0,
  }));
}

// Group days into Sunday-first weeks, like GitHub.
function toWeeks(days) {
  const weeks = [];
  let week = Array(toDate(days[0].date).getUTCDay()).fill(null);
  days.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week.concat(Array(7 - week.length).fill(null)));
  return weeks;
}

// Label a week when a new month starts in it, skipping labels too cramped to fit.
function monthLabels(weeks) {
  const labels = weeks.map((week, i) => {
    const first = i === 0 ? week.find(Boolean) : week.find((d) => d && toDate(d.date).getUTCDate() === 1);
    return first ? MONTHS[toDate(first.date).getUTCMonth()] : '';
  });
  const next = labels.findIndex((l, i) => i > 0 && l);
  if (next > 0 && next < 3) labels[0] = '';
  // A month starting in the last two weeks has no room for its label.
  labels.slice(-2).forEach((_, i) => { labels[labels.length - 2 + i] = ''; });
  return labels;
}

function ordinal(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
  return `${n}${{ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th'}`;
}

// Worded like GitHub: "46 contributions on July 22nd."
function describe(day) {
  const date = toDate(day.date);
  const when = `${date.toLocaleDateString('en-US', { month: 'long', timeZone: 'UTC' })} ${ordinal(date.getUTCDate())}`;
  if (!day.count) return `No contributions on ${when}.`;
  return `${day.count} contribution${day.count === 1 ? '' : 's'} on ${when}.`;
}

export default function Contributions() {
  const [state, setState] = useState({ status: 'loading', days: null, total: null });
  const [tip, setTip] = useState(null);
  const chart = useRef(null);
  const tipBox = useRef(null);

  // Point the tooltip at the hovered square. Mouse only: a tap opens GitHub instead.
  const showTip = (e) => {
    if (e.pointerType === 'touch') return;
    const cell = e.target.closest('[data-tip]');
    if (!cell || !chart.current) return setTip(null);
    const area = chart.current.getBoundingClientRect();
    const square = cell.getBoundingClientRect();
    setTip({ text: cell.dataset.tip, x: square.left + square.width / 2 - area.left, y: square.top - area.top });
  };

  // Keep the tooltip inside the column near the left and right edges.
  useBrowserLayoutEffect(() => {
    if (!tip || !tipBox.current || !chart.current) return;
    const width = tipBox.current.offsetWidth;
    const max = chart.current.offsetWidth - width;
    tipBox.current.style.left = `${Math.min(Math.max(tip.x - width / 2, 0), max)}px`;
  }, [tip]);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    fetch(SOURCE, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const days = clean(data);
        const total = data && data.total && data.total.lastYear;
        setState(days ? { status: 'ready', days, total: Number.isInteger(total) ? total : null } : { status: 'failed' });
      })
      .catch(() => setState({ status: 'failed' }))
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  // If the data source is unavailable, leave the intro as it was.
  if (state.status === 'failed') return null;

  const ready = state.status === 'ready';
  const weeks = toWeeks(ready ? state.days : emptyYear());
  const labels = monthLabels(weeks);
  const total = ready ? (state.total ?? state.days.reduce((sum, d) => sum + d.count, 0)) : null;
  const summary = ready ? `${total.toLocaleString('en-US')} contribution${total === 1 ? '' : 's'} in the last year` : '';

  return (
    <a className="Contrib" href={PROFILE} ref={chart} aria-label={summary ? `${summary} on GitHub` : 'GitHub activity'}>
      <div className="ContribGrid" onPointerOver={showTip} onPointerLeave={() => setTip(null)} aria-hidden="true">
        <div className="ContribDays" aria-hidden="true">
          <span className="ContribMonth" />
          {DAYS.map((d, i) => <span className="ContribDay" key={i}>{d}</span>)}
        </div>
        {weeks.map((week, w) => (
          <div className={`ContribWeek${w < weeks.length - PHONE_WEEKS ? ' ContribWeek--older' : ''}`} key={w} aria-hidden="true">
            <span className="ContribMonth"><span>{labels[w]}</span></span>
            {week.map((day, d) =>
              day ? (
                <span className="ContribCell" data-level={day.level} data-tip={ready ? describe(day) : undefined} key={d} />
              ) : (
                <span className="ContribCell ContribCell--blank" key={d} />
              )
            )}
          </div>
        ))}
      </div>
      {tip && (
        <div className="ContribTip" ref={tipBox} style={{ top: tip.y }} aria-hidden="true">{tip.text}</div>
      )}
      <div className="ContribFooter">
        <span className="ContribSummary">
          {summary && <span className="LinkLabel">{summary}<ExternalArrow /></span>}
        </span>
        <div className="ContribLegend" aria-hidden="true">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => <span className="ContribCell" data-level={l} key={l} />)}
          <span>More</span>
        </div>
      </div>
    </a>
  );
}
