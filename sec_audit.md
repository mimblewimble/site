---
layout: page
---

{% assign current_amount = 10.1 %}
{% assign target_amount = 16.0 %}

# Security Audit Funding

{:.has-text-right}
{{current_amount| divided_by: target_amount | times: 100.0 | round}}% Funded

<progress class="progress is-large is-success" value="{{current_amount| divided_by: target_amount}}" max="1"></progress>

TL;DR Grin is nearing its final phases of development before the release of
its cryptocurrency network (mainnet). To do so safely, the Grin codebase needs
to undergo a security audit. We're soliciting donations:

- bitcoin legacy [3ChVP627KU5w4zu2rieFPF3wGXWQgmhvrs](https://live.blockcypher.com/btc/address/3ChVP627KU5w4zu2rieFPF3wGXWQgmhvrs/){:.address-link}
- bitcoin segwit [bc1qdgs8vkpzr256qjlzlfht72z3mhcrdrt6wj2rfjw39j8us24gz8uq78qj65](https://blockchair.com/bitcoin/address/bc1qdgs8vkpzr256qjlzlfht72z3mhcrdrt6wj2rfjw39j8us24gz8uq78qj65){:.address-link}
- zcash t-address [t1QGYYXan3HHEuiPEfccKnUuWEP4CsVvPA5](https://explorer.zcha.in/accounts/t1QGYYXan3HHEuiPEfccKnUuWEP4CsVvPA5){:.address-link}

Status: Open

Goal: {{target_amount | round}} BTC

Raised: {{current_amount}} BTC

## Who?

- You, the investor who plans to acquire grins, and believes in its value
  proposition of privacy and scalability.
- You, the miner or mining industry participant, who plans on participating in
  the mining of the Grin chain.
- You, the cypherpunk or otherwise bitcoin, ethereum, monero or zcash adopter,
  who believes Grin makes an important contribution in furthering some of those
  early cryptocurrency ideals.
- You, the technology enthusiast, who sees something in Grin that has never
  been tried before and is new and exciting.
- You, who's not in any of the above categories, but believes that the current
  financial system status quo could use a good kick in the pants.

On our end, the Grin Council (which handles all governance oversight) nominated
5 secretaries. Those 5 individuals generated a 3-of-5 bitcoin segwit multisig
address under supervision of the council, to guarantee funds' safety. Note that
everyone in both the council and the secretary group are fully independent
individuals, working in entirely different capacity in different parts of the
world.

## Why?

When Grin launches, it will likely be used to secure the equivalent of
millions of dollars (or euros, yuans, yens, pesos, etc) on its chain within
a few days or weeks. While the Grin development team has done everything it
can to identify and fix possible major security failures, Grin is still a very
young and unproven codebase.

To reduce risks and follow standard industry practices (at least in the
security industry), the Grin team is requesting a general code audit by a
professional firm. The cost of the audit is estimated to be around $100,000.

## How?

Multiple firms have already been contacted and we will be undergoing a process
of selection in the next few weeks. Once a firm is retained, we will strive to
pay it directly from the fund (most firms accept bitcoin). Any excess will be
used for the general maintenance of the Grin project.

We expect the audit to last one to two months, during which every new Grin
development will undergo extreme scrutiny. Once the audit is finished and all
discovered issues are either fixed or found to be minor, we will be ready to
launch Grin's main network.

More generally, the guidelines in the Grin [security policy](https://github.com/mimblewimble/grin/blob/master/SECURITY.md)
apply.
