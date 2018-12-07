---
layout: post
title: "Contributing to these web pages"
---

# How to contribute to the grin webpage

1. Fork it
  - On https://github.com/mimblewimble/site (the _original_ or _upstream_) click Fork
  - Once forking action completes, click Settings and enable Github pages
  - Verify that it works: visit https://YOUR_GITHUB_USERNAME.github.io/site/
    i.e. if your github name is "grinner" then replace YOUR_GITHUB_USERNAME with grinner
2. Edit it
  - The lazy/easy option: just open files in your fork and click Edit, then reload the page from your github.io page as above.
3. Upstream it.
   Easiest is maybe to create a branch and from there click to make a new pull request against the master repo.

If you're a more advanced user you could consider having more than one branch and "PR" (pull request - which means a change suggestion) open at the same time.

You could also use git on the command line or via some graphical Git client, or use a git integration in your text editor.

# Organizing files
Adding a new file? Follow the guidelines here [File structure for current page theme](https://github.com/mmistakes/so-simple-theme#structure)

# Design changes
Please come discuss design here in the [design chat](https://gitter.im/grin_community/design).
[It seems the logo is now finalized, at least for a while.](https://github.com/mimblewimble/site/issues/7)
If your suggestion needs to be shown in context, make create a separate page (like example-redesignX-YOUR_USERNAME.md and push to your github.io page, then share the link on the design chat etc.

# Git Command line example:
git clone (your repo url after you forked the master repo)
git remote add upstream https://github.com/mimblewimble/site
git fetch --all
git checkout -b my-task-branch upstream/master
(add some files, maybe with git add learn.md images/illustrative.png)
git commit -m "added illustration to learn.md"
git push --set-upstream origin my-task-branch
(then find the link that is displayed, and browse there to easily create a PR)

# Previous examples, see here for content ideas:
- [https://grin-tech.org/](https://grin-tech.org/)
- [https://grin.mw/up/](https://grin.mw/up/)
- [https://sesam.github.io/grin-pages/](https://sesam.github.io/grin-pages/)
