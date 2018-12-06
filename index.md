---
layout: default
---

<section class="hero is-fullheight is-default is-bold">
  <div class="hero-head">
    {% include navigation.html %}
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <img src="assets/images/grin_mw_logo.svg" class="hero-logo" alt="Description">
        </div>
        <div class="column is-6 is-offset-1">
          <br><h1 class="title is-2" style="margin-bottom: 2rem;">
            Meet Grin
          </h1>
          <h2 class="subtitle is-3">
            the private & friendly<br> mimblewimble blockchain 
          </h2>
          <br>
          <p class="has-text-centered" style="margin-top: -1rem;">
          <a href="https://github.com/mimblewimble/grin/blob/master/doc/intro.md" class="button is-medium is-warning is-outlined">
            What's Mimblewimble?
          </a>
          <a href="https://github.com/mimblewimble/grin" class="button is-medium is-warning is-outlined">
            <i class="fab fa-github"></i>
          </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-foot">
    <!-- CTA BOX -->
    <div class="box cta">
      <p class="has-text-centered">
      <span class="tag is-warning">
        Currently Live: Testnet 4
      </span> 
      <span href="#" style="margin-left: 10px;">
        Grin is under development. Launch planned for Jan. 15th 2019.
      </span>
      </p>
    </div>
    <!-- // CTA BOX -->
  </div>
</section>
<!-- //HERO -->

<!-- BODY -->
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <div class="content">

          <!-- HEADER -->
          <section>
            <h1 class="title">
              What's Grin?
            </h1>
            <h2>
              Electronic transactions for all. Without censorship or restrictions.
            </h2>
            <p>
            Grin empowers anyone to transact or save modern money without the fear of external control or oppression. Grin is designed for the decades to come, not just tomorrow. Grin wants be usable by everyone, regardless of borders, culture, skills or access.
            </p>
          </section>
          <!-- //HEADER  -->

          <br><br>

          <!-- DESCRIPTION DOTS -->
          <section class="columns dots">

            <!-- DOT -->
            <div class="column">
              <h2 class="subtitle">
                <img src="assets/images/privacy.svg">
                Private
              </h2>
              <span>
								Grin has no amounts and no addresses. Transactions can be
								trivially aggregated. To hide where a newly created
                transaction comes from, it gets relayed privately (a
                "random walk") among peers before it is publicly announced.
              </span>
            </div>
            <!-- //DOT -->

            <!-- DOT -->
            <div class="column">
              <h2 class="subtitle">
                <img src="assets/images/scale.svg">
                Scalable
              </h2>
              <span>
                MimbleWimble leverages cryptography to allow most of the
								past transaction data to be removed. This guarantees Grin
								won't crumble under its own weight in the long term.
              </span>
            </div>
            <!-- //DOT -->

            <!-- DOT -->
            <div class="column">
              <h2 class="subtitle">
                <img src="assets/images/nodes.svg">
                Open
              </h2>
              <span>
                Grin is developed openly, by developers distributed all over
								the world. It's not controlled by any company,
								foundation or individual. The coin distribution is designed
								to be as fair (but not gratis) as is known to be possible.
              </span>
            </div>
            <!-- //DOT -->
          </section>
          <!-- //DESCRIPTION DOTS -->

          <section>
              <div class="columns">
                <div class="column">
                  <div class="content">
                    <h1 class="title is-1">
                      Community Initiatives
                    </h1>

                      <div class="tile is-ancestor">
                        <div class="tile is-vertical is-parent">
                          <div class="tile is-child box">
                            <p class="subtitle">TestNet 4</p> <hr>
                            <p>Grin’s fourth testnet has been <a href="https://www.grin-forum.org/t/grin-testnet-4-launch-announcement/993">released</a>! We need your help testing: if you’re able to compile from the source, <a href="https://github.com/mimblewimble/grin/blob/master/doc/build.md">see our building guide</a>.</p>
                          </div>
                          <div class="tile is-child box">
                            <p class="subtitle">MainNet, Onwards!</p> <hr>
                            <p>
                            We’re currently hard at work in building the features required for mainnet.
                            <br><br>
                            Check out our <a href="https://github.com/mimblewimble/grin/milestone/4">feature list</a> and jump in.
                            </p>
                          </div>
                          <div class="tile is-child box">
                            <p class="subtitle">
                            <a href="sec_audit">Crowdfunding the Security Audit</a>
                            </p> <hr>
                            <p>
                            TL;DR Grin is nearing its final phases of development before the release of its cryptocurrency network (mainnet).
                            </p>
                            <br><br>
                            <p>
                            To do so safely, the Grin codebase needs to undergo a security audit. We’re soliciting donations:
                            <br><br>
                            <ul>
                              <li>bitcoin legacy <a class="address-link" href="https://live.blockcypher.com/btc/address/3ChVP627KU5w4zu2rieFPF3wGXWQgmhvrs/">3ChVP627KU5w4zu2rieFPF3wGXWQgmhvrs</a></li>
                              <li>bitcoin segwit <a class="address-link" href="https://blockchair.com/bitcoin/address/bc1qdgs8vkpzr256qjlzlfht72z3mhcrdrt6wj2rfjw39j8us24gz8uq78qj65">bc1qdgs8vkpzr256qjlzlfht72z3mhcrdrt6wj2rfjw39j8us24gz8uq78qj65</a></li>
                            </ul>
                            </p>
                            <br><br>
                            <p>
                            <a href="sec_audit">Read how we're conducting our security audit and status of funding.</a>
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </section>

          <!-- FUNDING -->
          <section>
            <h1 class="title is-1">
              Community Funding
            </h1>
            <p>
            Grin is launched fairly, free of ICO, pre-mine or founder’s reward. We rely on donations to keep working on the project. Support the movement by purchasing some swag or making a donation.
            </p><br>
            <a href="funding" class="button is-warning is-large donate-button">Donate Now</a>
            <a href="https://tmgox.com" class="button is-info is-outlined is-large buy-swag-button">
              <img src="assets/images/hat.png" style="height: 8rem;">Buy Swag
            </a>
          </section><br><br>
          <!-- //FUNDING -->


          <!-- PATRONS -->
          <section class="patron">
            <h2 class="title">
              Patrons
            </h2>
            <p>
            If you’re an individual, company or institution excited about the potential of Grin or MimbleWimble, we humbly ask if you’d consider making a financial contribution to the project’s development. We’re experimenting with a <a href="funding.html">100% community-driven funding model</a>.
            </p>

            <br><br>

            <!-- COMPANY PATRONS -->
            <div class=" companies">
              <h3 class="subtitle">
                Companies
              </h3>

              <!-- SPONSOR ROW 1 -->
              <div class="level is-vcentered">
                <div class="level-item">
                  <a href="https://bitonic.nl">
                    <img src="assets/images/patron/bitonic.svg">
                  </a>
                </div>
                <div class="level-item inverted">
                  <a href="https://www.blockcypher.com/">
                    <img src="assets/images/patron/blockcypher.svg">
                  </a>
                </div>
                <div class="level-item inverted">
                  <a href="https://cypher.capital/">
                    <img src="assets/images/patron/cypher_capital.png">
                  </a>
                </div>
                <div class="level-item inverted">
                  <a href="https://hashrabbit.co/">
                    <img src="assets/images/patron/hashrabbit.png">
                  </a>
                </div>
              </div>
              <!-- //SPONSOR ROW 1 -->


              <!-- SPONSOR ROW 2 -->
              <div class="level is-vcentered">
                <div class="level-item inverted">
                  <a href="https://www.kryptonite1.co/">
                    <img src="assets/images/patron/kr1_med.png">
                  </a>
                </div>
                <div class="level-item inverted">
                  <a href="https://www.kyokan.io/">
                    <img src="assets/images/patron/kyokan.png">
                  </a>
                </div>
                <div class="level-item">
                  <a href="https://tmgox.com/">
                    <img src="assets/images/patron/tmgox.jpg">
                  </a>
                </div>
              </div>
              <!-- //SPONSOR ROW 2 -->
            </div>
            <!-- //COMPANY PATRONS -->



            <!-- PRIVATE PATRONS -->
            <div>
              <h3 class="subtitle has-top-space">
                Private Funding Contributors
              </h3>

              <!-- SPONSOR ROW 3 -->
              <div class="level is-vcentered names">
                <div class="level-item">
                  <p>
                  Aurel
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Chris McCann
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Jack Misteli
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Jean-Guillaume
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Jameson Lopp
                  </p>
                </div>
              </div>
              <!-- //SPONSOR ROW 3 -->

              <!-- SPONSOR ROW 3 -->
              <div class="level is-vcentered names">
                <div class="level-item">
                  <p>
                  Max Tannahill
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Michalis Kargakis
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Redouan Ahaloui
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Roy Blankman
                  </p>
                </div>
                <div class="level-item">
                  <p>
                  Niels de Ruiter
                  </p>
                </div>
              </div>
              <!-- //SPONSOR ROW 3 -->
            </div>
            <!-- //PRIVATE PATRONS -->

            <!-- ANON PATRONS -->
            <div>
              <h2 class="subtitle has-top-space">
                Anonymous Funding Contributors
              </h2>
              <p>
              And all our great anonymous supporters! We’re not forgetting your contribution, and are working to protect that choice!
              </p>
            </div>
            <!-- //ANON PATRONS -->
          </section>
          <!-- //PATRONS -->

        </div>
      </div>
    </div>

  </div>
</section>
<!-- //BODY -->
