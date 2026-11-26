// Number formatting for NusaStat, written by hand so the site never depends on
// a locale pack being installed: thousands grouped with ".", decimals with ",".
// The helpers below are the only formatting the views use: a plain number, a
// whole number, a percent, and fmtValue for explorer rows. escHtml is the one
// HTML escaper every module shares, so a string is escaped the same way in a
// chart label, a table cell and a page heading.

/** Insert "." separators into the integer part of a decimal string. */
function groupThousands(intPart) {
  return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** A number rendered with fixed decimals, split into integer and fraction. */
function splitFixed(value, decimals) {
  return Number(value).toFixed(decimals).split('.');
}

export function fmtNum(value, decimals = 2) {
  const [whole, frac] = splitFixed(value, decimals);
  const grouped = groupThousands(whole);
  return decimals > 0 ? `${grouped},${frac}` : grouped;
}

export function fmtInt(value) {
  return fmtNum(value, 0);
}

export function fmtPct(value, decimals = 2) {
  return `${fmtNum(value, decimals)}%`;
}

// A value the explorer table shows, e.g. 23821.1 with 1 decimal and the unit
// "Rp triliun" renders as "23.821,1 Rp triliun".
export function fmtValue(value, decimals, unit) {
  const shown = decimals === 0 ? fmtInt(value) : fmtNum(value, decimals);
  return unit ? `${shown} ${unit}` : shown;
}

/** Escape text for HTML interpolation. */
export function escHtml(text) {
  return String(text).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
