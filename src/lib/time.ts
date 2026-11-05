export type DrawTarget =
  | { kind: "daily"; hour: number }
  | { kind: "weekly"; weekday: number; hour: number }; // weekday: 0 = Sunday

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Current wall-clock time in Adelaide (handles ACST/ACDT automatically). */
function adelaideNow(now: Date) {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Adelaide",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  return {
    weekday: Math.max(0, WEEKDAYS.indexOf(get("weekday"))),
    seconds: Number(get("hour")) * 3600 + Number(get("minute")) * 60 + Number(get("second")),
  };
}

/** Seconds from now until the next occurrence of the target, in Adelaide time. */
export function secondsUntil(target: DrawTarget, now = new Date()): number {
  const { weekday, seconds } = adelaideNow(now);
  const targetSec = target.hour * 3600;
  if (target.kind === "daily") {
    let diff = targetSec - seconds;
    if (diff <= 0) diff += 86400;
    return diff;
  }
  let days = (target.weekday - weekday + 7) % 7;
  let diff = days * 86400 + targetSec - seconds;
  if (diff <= 0) {
    days = 7;
    diff = days * 86400 + targetSec - seconds;
  }
  return diff;
}

export function splitDuration(total: number) {
  const t = Math.max(0, Math.floor(total));
  return {
    d: Math.floor(t / 86400),
    h: Math.floor((t % 86400) / 3600),
    m: Math.floor((t % 3600) / 60),
    s: t % 60,
  };
}

export const pad = (n: number) => String(n).padStart(2, "0");
