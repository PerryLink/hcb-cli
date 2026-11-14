> **This repository is retired (2026-11-14).**
>
> HCB is now the **data/gate subproject of [dsh-standards](https://github.com/PerryLink/dsh-standards)**.
>
> - Rules, checker and ENTRY/FLOW/BOOST definitions: [dsh-standards](https://github.com/PerryLink/dsh-standards)
> - Compatibility matrix, tracks data, risk and `hcb-gate/1`: [dsh-hcb](https://github.com/PerryLink/dsh-hcb)
>
> This repo is archived for URL stability. Do not use it for new work.

# hcb-cli

> `hcb check <package>` — query the canonical HCB matrix from your terminal.
> Independent community project. Not affiliated with DeepSeek.

```bash
npx hcb-cli check dsh-auto-review
# or from source
node bin/hcb.mjs check dsh-auto-review
```

Output: declared range, compatibility vs latest host, ENTRY/FLOW/BOOST, risk, gate. Exit 1 only on `declared-incompatible`.

## Status

Experimental. The canonical data is [dsh-compat-baseline](https://github.com/PerryLink/hcb). This CLI is not published to npm yet.
