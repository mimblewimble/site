---
layout: post
title:  "Grin & Grin Wallet 4.0.0 Released"
author: "@yeastplume"
categories: blog
---

_This post was originally published [in the forums](https://forum.grin.mw/t/grin-grin-wallet-4-0-0-released/7504)._

Grin and Grin wallet 4.0.0 have been released and is ready for general use in advance of Grin's 3rd Hardfork scheduled to occur on block 786240.

A particularly large feature of the 4.0.0 is the implementation of the new [Slatepack standard](https://github.com/mimblewimble/grin-rfcs/blob/master/text/0015-slatepack.md) for sending transactions between parties. This standard builds on top of previous work that enabled TOR transactions, and should serve as a foundation for addressing Grin's long-term usability challenges. Though there may be some pain transitioning to the new work flow I think the long-term results will be worth it.

On the node side, there are many fixes and under-the-hood improvements, as well as initial work to support  ["No Recent Duplicate" Kernels](https://github.com/mimblewimble/grin-rfcs/blob/master/text/0013-nrd-kernels.md), a unique approach to relative timelocks (vital for future payment channel support). This is a very new construction so 4.0.0 will allow NRD kernels on floonet to enable testing and further development.

Once again, thanks to everyone on the development team and the community for all of their hard work and continuing energy.  This release and enhancements therein are the culmination of thousands of collective hours of thought, discussion, arguing, development, testing, promoting and graft by (I think we can safely say) hundreds of people across many disciplines. The road ahead for Grin remains challenging and uncertain, but I don't think we could be in a better position to travel it.

Full release notes for both the Node and wallet are linked below:

**Binaries**

[Grin 4.0.0 Binaries](https://github.com/mimblewimble/grin/releases/tag/v4.0.0)
[Grin Wallet 4.0.0 Binaries](https://github.com/mimblewimble/grin-wallet/releases/tag/v4.0.0)

**Release Planning**

[Planning notes for the 4.0.0 release](https://github.com/mimblewimble/grin-pm/issues/248)

**Major changes and enhancements**

**Node**:

* New Cuckarooz PoW and header version 4 for latest hardfork.
* TUI optimizations and overall code improvements
* Server and backend DB code optimizations and improvements
* BlockHeader via API now includes all relevant fields (including MMR size)
* Feature flagged NRD kernel support (enabled in floonet, remains disabled in mainnet)

**Further Details**

[mimblewimble/grin#3341](https://github.com/mimblewimble/grin/issues/3341)

**Wallet**

* Slate version V4, a much more compact version of the slate.
* Full implementation of the [Slatepack standard](https://github.com/j01tz/grin-rfcs/blob/slatepack/text/0000-slatepack.md) 

**Futher Details**

[mimblewimble/grin-wallet#456](https://github.com/mimblewimble/grin-wallet/issues/456)