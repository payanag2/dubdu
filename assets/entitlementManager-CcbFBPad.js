import{k as f,p,E as k,A as y,q as ae}from"./sessions-Bq2-99JM.js";

const ie = true, q = 0.5;
function Be(e) { return typeof e == "boolean" ? e : ie; }
function se(e) {
  const t = typeof e == "number" ? e : typeof e == "string" ? Number(e) : q;
  return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : q;
}

const h = { dub: 0.18, source: 0.34, bed: 0.44 }, O = { dub: 0.48, source: 0.85, bed: 1.15 };
function C(e, t, n) { return n <= 0 ? e : n >= 1 ? t : e + (t - e) * n; }
function $e(e) {
  const t = se(e);
  if (t <= 0.5) {
    const r = t * 2;
    return { dub: h.dub * r, source: h.source * r, bed: h.bed * r };
  }
  const n = (t - 0.5) * 2;
  return { dub: C(h.dub, O.dub, n), source: C(h.source, O.source, n), bed: C(h.bed, O.bed, n) };
}

const $ = "offline-grace";
const le = "Couldn't keep dubbing. Check your connection and try again.";
const g = "Livdub isn't available in your region.";

const Ye = {
  captions: true,
  bilingualCaptions: true,
  captionStyling: true,
  mp3Recording: true,
  vttExport: true,
  studio: true
};

class S extends Error {
  constructor(t, n) { super(t); this.status = n; }
  status;
}

function A(e) { return true; }
function Je(e) { return false; }
function N(e) { return String(e); }
function ze(e) { return null; }

function getUnlimitedEntitlement() {
  const futureDate = new Date(Date.now() + 31536000000).toISOString();
  return {
    tier: "plus",
    plan: "annual",
    status: "active",
    isPlus: true,
    allowanceSeconds: null,
    usedSeconds: 0,
    remainingSeconds: 999999999,
    graceAllowanceSeconds: 999999,
    graceUsedSeconds: 0,
    resetAt: futureDate,
    expiresAt: futureDate,
    quotaLock: false,
    features: { ...Ye }
  };
}

function getUnlimitedLease() {
  const now = Date.now();
  const exp = now + 31536000000;
  return {
    token: "unlimited-token",
    leaseId: $,
    expiresAt: new Date(exp).toISOString(),
    heartbeatAt: new Date(now + 86400000).toISOString(),
    heartbeatNonce: "unlimited-nonce",
    entitlement: getUnlimitedEntitlement()
  };
}

function Ve(e) {
  const exp = Date.now() + 31536000000;
  return {
    capability: "",
    leaseId: $,
    offlineGraceExpiresAt: exp,
    offlineGraceFeatures: { ...Ye }
  };
}

function Q(e, t = Date.now()) { return true; }
async function Qe(e = Date.now()) { return; }

async function v(e, t, n) {
  return {
    typ: "livdub-capability",
    aud: ["livdub-extension"],
    iss: y,
    exp: Math.floor(Date.now() / 1000) + 31536000,
    leaseId: t || $,
    deviceId: "unlimited-device",
    features: { ...Ye }
  };
}

async function P() { return getUnlimitedEntitlement(); }
async function Ue() { return getUnlimitedEntitlement(); }
async function Ze() { return getUnlimitedLease(); }
async function Ge() { return getUnlimitedLease(); }
async function et() { return getUnlimitedLease(); }
async function He(e) { return; }
async function tt() { return getUnlimitedEntitlement(); }
async function nt(e) { return getUnlimitedEntitlement(); }
async function rt() { return false; }

async function at(e, t, n = "native") {
  return {
    accountId: "unlimited-user",
    devices: [],
    replacementRequired: false,
    replacedDevice: null,
    intent: e
  };
}

async function it(e) { return null; }
function st(e) { return true; }
async function ot(e = "annual") { return ""; }
async function ct() { return ""; }
async function lt() { return getUnlimitedEntitlement(); }

export {
  Be as A,
  q as D,
  S as E,
  Ye as F,
  le as O,
  g as U,
  tt as a,
  P as b,
  Ue as c,
  lt as d,
  Ge as e,
  Qe as f,
  rt as g,
  et as h,
  Je as i,
  ot as j,
  st as k,
  Q as l,
  He as m,
  ct as n,
  Ve as o,
  nt as p,
  Ze as q,
  at as r,
  se as s,
  N as t,
  ze as u,
  v,
  A as w,
  $ as x,
  $e as y,
  it as z
};