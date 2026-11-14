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

Experimental. The canonical data is [dsh-compat-baseline](https://github.com/PerryLink/dsh-compat-baseline). This CLI is not published to npm yet.
