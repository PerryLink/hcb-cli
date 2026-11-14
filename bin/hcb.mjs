#!/usr/bin/env node
const MATRIX = 'https://raw.githubusercontent.com/PerryLink/dsh-compat-baseline/main/data/matrix.json';
const [, , cmd, pkg] = process.argv;
if (cmd !== 'check' || !pkg) { console.error('usage: hcb check <npm-package>'); process.exit(2); }
const res = await fetch(MATRIX);
if (!res.ok) { console.error('failed to fetch matrix:', res.status); process.exit(3); }
const d = await res.json();
const row = d.rows.find(r => r.name === pkg);
if (!row) { console.error(pkg + ' not in HCB; add it to data/plugins.seed.json'); process.exit(2); }
const host = d.latestHost;
const compat = row.hosts[host] || 'unknown';
const t = row.standards || {};
console.log(pkg + '@' + row.version + ' vs DSH ' + host);
console.log('  compat : ' + compat + ' (range: ' + (row.declaredRange || 'none') + ')');
console.log('  tracks : ENTRY=' + (t.entry?.status || 'unknown') + ' FLOW=' + (t.flow?.status || 'unknown') + ' BOOST=' + (t.boost?.status || 'unknown'));
console.log('  risk   : ' + (row.risk?.level || 'unknown'));
console.log('  gate   : ' + (row.gate?.decision || 'unknown'));
process.exit(compat === 'declared-incompatible' ? 1 : 0);
