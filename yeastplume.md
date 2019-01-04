---
layout: page
---

# Developer Funding - Yeastplume

Funding to allow Yeastplume to give full-time attention to Grin from March-Aug 2019

## Funding status (March - Aug 2019)

Status: Open - €0 of €55,000 Target
Goal: Crypto equivalent of €55,000

Raised:

- 0.0 BTC (~€0 as of Jan 3rd, 2019)
- 0.0 ETH (€0 as of Jan 3rd, 2019)
- ~€0 Total

## Bitcoin donation address:
[3B3qq3EAPtpkSoGHSDfY6rxpK5Bqh7zmij](https://blockchain.info/address/3B3qq3EAPtpkSoGHSDfY6rxpK5Bqh7zmij)

## Ethereum donation address:
[0xeFC76886E5C50D1FD15addAbb59D2D3582A03A61](https://etherscan.io/address/0xeFC76886E5C50D1FD15addAbb59D2D3582A03A61)

## Source for this page (via https):

[https://github.com/mimblewimble/site/blob/master/yeastplume.md](https://github.com/mimblewimble/site/blob/master/yeastplume.md)

#### Please verify the donation addresses as shown above in your browser matches the source for this page on [mimblewimble/site](https://github.com/mimblewimble/site).

I've been an active contributor to Grin since about May of 2017, and thanks to the generosity of the community Grin has been my full-time job since February of 2018. I hope my performance so far has been satisfactory to the community as well as beneficial to Grin and MimbleWimble development. I've left detailed information on my activities so far (as well as a few other random musings) in my Forum Progress update threads:

- [Feb 2018 - April 2018](https://www.grin-forum.org/t/yeastplume-progress-update-thread-feb-april-2018/93)
- [May 2018 - Sept 2018](https://www.grin-forum.org/t/yeastplume-progress-update-thread-may-sept-2018/361)
- [Oct 2018 - Feb 2019](https://www.grin-forum.org/t/yeastplume-progress-update-thread-oct-18-feb-19/933)

I invite you to have a look through there for precise information about what the previous funds have been used for, as well as information on my future development plans.

Based on experiences and feedback from previous campaigns, this campaign is organised thusly:

- Once the funding goal is reached, I will cash out crypto amounts into Euro more-or-less immediately. As much as I'd like to keep the account transparent, we were burned very hard in the first campaign by the volatility of Bitcoin and I found myself far too interested in the daily price swings of bitcoin to the point of distraction. We've decided this to be the best course of action for now to ensure all donations remain the intended amount and are used for their intended purpose.

- I'm aiming to cover a full 6 months, until the end of August 2019.

- This time I'm just providing BTC and Ethereum addresses - There hasn't been enough take-up of the Monero address in the previous couple of rounds to justify maintaining the address.

As always, those who wish to be listed on the [Friends of Grin](friends) page will be, and I'm available as long as I'm awake on our gitter channel.

# Who am I?

- [Myself on the What Bitcoid Did Podcast](https://www.whatbitcoindid.com/podcast/grins-michael-cordner-aka-yeastplume-on-implementing-mimblewimble)
- [Interview on the Captain Crypto Show](https://www.youtube.com/watch?v=nwi9pMqUBQI)
- [Myself, Andreas Antonopoulos and Adam B. Levine on Let's Talk Bitcoin](https://letstalkbitcoin.com/blog/post/lets-talk-bitcoin-356-privacy-on-the-blockchain-with-mimblewimble)
- [Notes from the first Grin meetup in London](https://medium.com/grin-mimblewimble/grin-mimblewimble-meetup-in-london-with-yeastplume-f11476b3a590)

My name is Michael Cordner, otherwise known as 'Yeastplume' in Grin circles. I'm happy to make myself known partly for funding transparency reasons, and partly because I'm happy to take on some of the public-facing tasks that will inevitably come up as Grin evolves (more on that below). Also, my handle has no relation whatsoever to Harry Potter, which means journalists will forever leave me out of their Grin/MimbleWimble write-ups unless I start taking bold measures. :D

I've been a developer in some form or another for about 20 years now. In the earlier part of my career I did a few varied things such as a stint as a game developer at [Argonaut Games](https://en.wikipedia.org/wiki/Argonaut_Games) in London, image-processing systems at [NCR](https://en.wikipedia.org/wiki/NCR_Corporation) in Canada, educational software [Riverdeep Interactive Learning](https://en.wikipedia.org/wiki/Houghton_Mifflin_Harcourt_Learning_Technology) in Dublin, and a long stint doing AML/Fraud detection systems at [Norkom (now BAE)](https://en.wikipedia.org/wiki/BAE_Systems_Applied_Intelligence). I also created an educational product series called [Shakespeare In Bits](http://www.mindconnex.com/site/index.php?option=com_content&view=category&layout=blog&id=7&Itemid=40), which remains fairly popular in schools (but is in no way a personal money-spinner,) and which I continue to maintain to this day on a very low-priority thread. More recently, I've done a lot of work in the smartcard and identity document industry, (the same technologies found in hardware wallets,) reviewing and implementing cryptographic protocols (such as PACE-CAM, SCP03 for those interested in details,) in various product libraries.

Like many technical people, I've been following Bitcoin/Blockchain from afar for many years. I've been wanting to get seriously into the technology for some time, which for me means sitting down and doing the dirty coding work. However, most projects I've evaluated are either not innovative enough (Bitcoin clones with bells on) or too far along for anyone new to make a meaningful difference. After coming across Grin and spending a bit of time reading about it, it was clear that this was the kind of project I was looking for; a project with very credible people behind it implementing new ideas, and with many unsolved challenges remaining. I started contributing where I could while catching up on the work and thought that's been put into MW to date. Thus far, it continues to be one of the best learning experiences I've ever had, and has become a bit of an obsession, much to the continual annoyance of Mrs. Yeastplume.

# What have I done so far?

I've been working on Grin part-time since about May of 2017. Some of the things I've been doing since then are (all can be considered still in progress):

- Much work on refactoring the wallet code to support further wallet usability and security features.
- Begun work on an [embedded wallet web-interface](https://github.com/mimblewimble/grin-web-wallet), which will hopefully greatly increase grin's usability.
- Developing the [Grin-Miner](https://github.com/mimblewimble/grin-miner) application and the [Cuckoo Miner](https://github.com/mimblewimble/cuckoo-miner) library, which is what drives all of the mining support currently in Grin. It uses a plugin architecture which will hopefully allow any and all mining plugins to be included as part of the main Grin package, as well as support standalone mining clients.
- Adapting and maintaining a set of mining plugins from [John Tromp's cuckoo cycle implementations](https://github.com/mimblewimble/cuckoo) for use in Cuckoo Miner. (Ensuring the latest and greatest updates are always in Grin)
- Updating [our fork of secp256k1](https://github.com/mimblewimble/secp256k1-zkp) to support switch commitments, (which will provide optional quantum-hardness as well as allows for wallet reconstruction from seed).
- Core work to implement switch commitments and provide a wallet restoration function.
- Implementing Aggregated (Schnorr) Signatures within our secp256k1 fork and within the Grin wallet.
- Integrating Bullet Proofs into Grin, and adding message rewinding functionality to support wallet restore
- Core work on our PMMR implementation and storage formats.
- Grin's TUI (text user interface, providing a real-time view of what's going on in the server)
- Performance improvements in several areas (in particular around output retrieval for the wallet)
- Ongoing work on Docker deployments for testing purposes, as well as to provide an eventual release vector.
- Plenty of vital but unglamourous work, such as config file infrastructure, logging, test infrastructure, build maintenance.
- [Documenting](https://github.com/mimblewimble/grin/tree/master/doc) certain aspects of Grin... mining, rangeproofs, and installation.
- And generally anything that comes up that I get to before anyone else...

# What will I do?

As to what I intend to work on over the next few months, the task list is always in flux, especially with launch just around the corner (Jan 15th, 2019!) However, to give a sampling:

- Fixes and improvements as become clear during and after launch
- Continuing work on wallet improvements and the web wallet interface (including a full JSON-RPC interface)
- Properly addressing wallet security now that the infrastructure is in place
- More Much needed testing, bug fixing and refinements on core code
- Continual improvements to infrastructure, build, quality of life, documentation.
- As always, PR review, bug-squashing, fixes and improvements as they come up.

Suffice it to say, I'll always be doing somethin useful. In addition to this, I also intend to continue work on some of the softer tasks around Grin's governance and promotion, which include:

- Visits to conferences or meetups (particularly if Grin/MW needs representing)
- Developer interviews with any interested podcasters/journalists (since Igno won't do it)
- Thinking about the governance model along with the rest of the team, and performing any legwork needed
- "Brand Ambassador" type work, particularly on vital fund-raising efforts
- Blogging, website and promotional work as needed

# Funding

The team has decided that a fair salary for an experienced developer should aim to be around the 120k USD mark. I work in Ireland and have been contracting for many years, so I interpret this as a daily rate of €450, or around €9k per month. I'd consider some travel and expenses (within reason) included in this rate, but this time around I might add a bit (1k) to cover these, as worthy reasons for travel are becoming more numerous. The money will be paid out monthly from the campaign fund into my own consultancy company, taxed (somewhere between 40-50%), and the rest paid to me personally from there. As per [our policy](funding.md#developer-funding-campaigns), money will always be paid out according to fiat rates.

The BTC address shown belongs to a hardware wallet. Both it and its recovery phrases (unmemorised) are securely stored far away from my person.

# Previous Campaigns

- Feb 2018 - April 2018 Developer Funding - Status: Goal Met - 3.12775707 of 2.5 BTC Target
- May 2018 - Sept 2018 Developer Funding - Status: Goal Met - ~€47,000 of €36,000 Target
- Oct 2018 - Feb 2019 Developer Funding - Status: Goal Met - ~€48,300 of €45,000 Target
