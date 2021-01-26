---
layout: post
title:  "Grin node v5.0.1 released"
author: "@jaspervdm"
categories: blog
---

Grin node v5.0.1 has been released. Binaries are as usual available from the [download section]({{'download' | relative_url}}).

The version 5.x family of releases include many improvements and fixes, and is required in order to interact with the network after the scheduled hard fork. All users are encouraged to upgrade.

The most important changes included in v5.x are:
- Switch the difficulty calculation from dsma to wtema. This new calculation is simpler to perform, requiring only the last 2 blocks and reduces the oscillary behaviour that the old algorithm suffered from.
- Change the minimum transaction fees to be proportional to the transaction weight and restrict fees to 40 bits. Some of the freed up bits bits will specify a minimum fee overpayment factor, preventing aggregation with lesser overpaying transactions, and earlier inclusion into full blocks.
- Create PIBD segments and serve them to other nodes upon request. This change will enable us to release a new faster parallel sync method in the future, without having to introduce additional changes to the p2p network.

The 5.0.1 patch fixes an issue involving the configuration value for `accept_fee_base`, due to the changes in the minimum transaction fee.
