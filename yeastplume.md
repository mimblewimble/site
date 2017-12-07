---
layout: default
---

## Funding status

0.00BTC of (Open) raised

0 Payouts - 0 BTC Available

Funding for 0 months (est.) remaining (Until Dec 2017) - @ approx €9k p/m

Bitcoin donation address:

3QerBBmyjjiep7o1aebBpsTDzHRMknH36m

(Will link to explorer when funds are available).

# Who am I?

I am Michael Cordner, or 'Yeastplume' in Grin circles. I'm happy to make myself known partly for funding transparency reasons, and partly because I'm happy to take on some of the public-facing tasks that will inevitably come up as Grin evolves (more on that below). Also, my handle has no relation whatsover to Harry Potter, which means journalists will forever leave me out of their Grin/MimbleWimble write-ups unless I start taking bold measures. :D

I've been a developer in some form or another for about 20 years now. In the earlier part of my career I did a few varied things such as a stint as a game developer at [Argonaut Games](https://en.wikipedia.org/wiki/Argonaut_Games) in London, image-processing systems at [NCR](https://en.wikipedia.org/wiki/NCR_Corporation) in Canada, educational software [Riverdeep Interactive Learning](https://en.wikipedia.org/wiki/Houghton_Mifflin_Harcourt_Learning_Technology) in Dublin (which I still reside), and a long stint doing AML/Fraud detection systems at [Norkom (now BAE)](https://en.wikipedia.org/wiki/BAE_Systems_Applied_Intelligence). I also created an educational product series called [Shakespeare In Bits](http://www.mindconnex.com/site/index.php?option=com_content&view=category&layout=blog&id=7&Itemid=40), which remains fairly popular in schools (but is in no way a money-spinner,) and which I continue to maintain to this day on a very low-priority thread. More recently, I've done a lot of work in the smartcard and identity document industry, (the same technologies found in hardware wallets,) reviewing and implementing cryptographic protocols (such as PACE-CAM, SCP03 for those interested in details,) in various product libraries.

Like many technical people, I've been following Bitcoin/Blockchain from afar for many years. I've been wanting to get seriously into the technology for some time, which for me means sitting down and doing the dirty coding work. However, most projects I've evaluated are either not innovative enough (Bitcoin clones with bells on) or too far along for anyone new to make a meaningful difference. After coming across Grin and spending a bit of time reading about it, it was clear that this was the kind of project I was looking for; a project with very credible people behind it implementing new ideas, and with many unsolved challenges remaining. I started contributing where I could while catching up on the work and thought that's been put into MW to date. Thus far, it continues to be one of the best learning experiences I've ever had, and has become a bit of an obsession, much to the continual annoyance of Mrs. Yeastplume.

# What have I done?

I've been working on Grin part-time since about April of 2017. Some of the things I've been doing since then are (all works still in progress):

* Developing the [Cuckoo Miner](https://github.com/mimblewimble/cuckoo-miner) library, which is what drives all of the mining support currently in Grin. It uses a plugin architecture which will hopefully allow any and all mining plugins to be included as part of the main Grin package, as well as support standalone mining clients.
* Adapting and maintaining a set of mining plugins from [John Tromp's cuckoo cycle implementations](https://github.com/mimblewimble/cuckoo) for use in Cuckoo Miner. (Ensuring the latest and greatest updates are always in Grin)
* Updating [our fork of secp256k1](https://github.com/mimblewimble/secp256k1-zkp) to support switch commitments, (which will provide optional quantum-hardness as well as allows for wallet reconstruction from seed).
* Core work to implement switch commitments and provide a wallet restoration function.
* Performance improvements in several areas (in particular around output retrieval for the wallet)
* Ongoing work on Docker deployments for testing purposes, as well as to provide an eventual release vector.
* Plenty of vital but unglamourous work, such as config file infrastructure, logging, test infrastructure, build maintenance.
* [Documenting](https://github.com/mimblewimble/grin/tree/master/doc) certain aspects of Grin... mining, rangeproofs, and installation.
* And generally anything that comes up that I get to before anyone else...

# What will I do?

As to what I intend to work on over the next few months, since Grin is still in infancy the task list is always in flux. However, at the moment my intentions are to tackle: (in no particular order)

* Continuing work on cucko-miner, particularly support for multi-GPU setups (as mining implementations become available,) and extending the API to allow for integration into pooled mining clients
* A whole lot of work that will be required to get aggregated (a.k.a Schorr) signatures integrated and working within Grin; very much a requirement for release. The upstream technology is still a moving target, but there's a lot of work that can be started now, updating our secp256k1 fork to support aggsig, core/wallet changes to implement them, and keeping up with upstream implementation changes.
* As above, integrating Bullet Proofs into grin core, which will allow for much smaller transactions with faster verifications times, leading to a much more compact blockchain. I think there's enough done upstream to get this integrated into grin and testing earlier than expected.
* Possibly some work on cut-through and fast-sync modes
* Better testing infrastructure. Using the Docker work mentioned above, it should be possible to create a framework that simulates our testnet, to allow us to catch potential issues early. This is vital to making Grin as robust and reliable as possible.
* Continual improvements to infrastructure, build, quality of life, documentation.
* As always, PR review, bug-squashing, fixes and improvements as they come up.

In addition to this, I also intend to work on some of the softer tasks around Grin's governance and promotion, which include:

* Visits to conferences or meetups (particlary if Grin/MW needs representing)
* Developer interviews with any interested podcasters/journalists (since Igno won't do it)
* Thinking about the governance model along with the rest of the team, and performing any legwork needed
* "Brand Ambassador" type work, particularly on vital fund-raising efforts
* Blogging, website and promotional work as needed

# Funding

Since this is our first attempt at funding anyone, I've discussed this with the team and we've decided that a fair salary for an experienced developer should aim to be around the 120k USD mark. I work in Dublin, Ireland, and have been contracting for many years, so I interpret this as a daily rate of €450, or €9k per month. I'd consider some travel and expenses (within reason) included in this rate. The money will be paid out monthly from the campaign fund into my own consultancy company, taxed (somewhere betwee 40-50%), and the rest paid to me personally from there. As per [our policy](funding.md#developer-funding-campaigns), money will always be paid out according to fiat rates, and any increase in BTC value will be applied towards prolonging funding (with the converse also applying).

I enjoy taking on a bit of risk and uncertainly for a cause like this, but I need to balance this with the fact that I have four Yeastlings and a requisite mortgage on a place to keep them all, and this rate represents a pay cut from my usual earnings. I'd rather not get into a position where I need to start selling Yeastlings, so I do need to see a window of available funds (preferably 5-6 months worth, with a buffer to accomodate swings in BTC value) before I can take the plunge, and if funding ever looks like it's running out I will need to focus on plugging that gap as a priority. Earliest full-time start would be March 2018, (to cover current professional commitments). If we don't get enough funds for this (and if it's not looking likely it will ever happen), I will pass any donations back to another project member for another cause, and will happily go on contributing part-time, as I have been.

The BTC address shown belongs to a hardware wallet. Both it and its recovery phrases (unmemorised) are securely stored far away from my person.
