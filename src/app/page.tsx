import Script from "next/script";

// ============================================================
//  FULL SINGLE-PAGE COMPOSITION (server-rendered HTML string)
//  All sections always render even if JS fails.
// ============================================================
const PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Cinematic Dream — Hindi Heartland's Own Film Industry</title>
<meta name="description" content="Cinematic Dream Pvt Ltd — a talent-to-screen ecosystem for India's Hindi heartland (UP · Bihar · Delhi-NCR). Discover, train, pay and make famous — close to home." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500;600&family=Tiro+Devanagari+Hindi:ital@0;1&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" />
<link rel="stylesheet" href="/static/style.css" />
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
</head>
<body>
<!-- single fixed film-grain layer (replaces per-section grain repaints) -->
<div id="grain-overlay" aria-hidden="true"></div>

<!-- ============ HEADER ============ -->
<header class="header" id="header">
  <nav class="navbar" aria-label="Main navigation">
    <a href="#top" class="brand">
      <span class="name"><span class="star">&#10022;</span> Cinematic Dream</span>
      <span class="sub hindi">&#2360;&#2367;&#2344;&#2375;&#2350;&#2366; &middot; &#2360;&#2346;&#2344;&#2366;</span>
    </a>
    <div class="nav-links">
      <a href="#ecosystem">Ecosystem</a>
      <a href="#pillars">Pillars</a>
      <a href="#journey">Journey</a>
      <a href="#academy">Academy</a>
      <a href="#awards">Awards</a>
      <a href="#impact">Impact</a>
    </div>
    <div class="nav-right">
      <span class="clock mono" id="clock">&mdash;</span>
      <a href="#apply" class="btn btn-primary nav-apply"><span class="nav-apply-long">Apply Now</span><span class="nav-apply-short">Apply</span> <i class="fas fa-arrow-up-right-from-square"></i></a>
      <button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu"><i class="fas fa-bars"></i></button>
    </div>
  </nav>
</header>

<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <button class="mobile-close" id="mobileClose" type="button" aria-label="Close menu"><i class="fas fa-xmark"></i></button>
  <a href="#ecosystem">Ecosystem</a>
  <a href="#pillars">Pillars</a>
  <a href="#journey">Journey</a>
  <a href="#academy">Academy</a>
  <a href="#awards">Awards</a>
  <a href="#impact">Impact</a>
  <a href="#apply" class="btn btn-gold" style="margin-top:1rem">Apply Now</a>
</div>

<span id="top"></span>

<!-- ============ 1 · HERO ============ -->
<section class="hero grain vignette">
  <div class="blob blob-mag float1" style="width:520px;height:520px;top:-120px;left:-120px"></div>
  <div class="blob blob-pur float2" style="width:460px;height:460px;bottom:-140px;right:-100px"></div>
  <div class="blob blob-gold float1" style="width:300px;height:300px;top:40%;left:45%"></div>
  <!-- film reel motif -->
  <svg class="reel" style="position:absolute;top:8%;right:6%;width:180px;height:180px;z-index:1" viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="46" fill="none" stroke="#F5B544" stroke-width="1"/>
    <circle cx="50" cy="50" r="14" fill="none" stroke="#F5B544" stroke-width="1"/>
    ${reelHoles()}
  </svg>

  <div class="wrap hero-grid">
    <div class="hero-copy">
      <div class="hero-bar reveal">
        <span class="kicker">Mission &middot; 2026 &middot; Hindi Heartland</span>
        <span class="hindi">&#2309;&#2346;&#2344;&#2366; &#2360;&#2346;&#2344;&#2366; &middot; &#2309;&#2346;&#2344;&#2375; &#2328;&#2352; &#2325;&#2375; &#2346;&#2366;&#2360;</span>
      </div>
      <h1 class="serif reveal" data-delay="80">Building the<br /><span class="mg">Hindi heartland's</span><br />own film industry. <span class="gold-text" style="font-size:.7em">&#10022;</span></h1>
      <p class="lead reveal" data-delay="160">Discover, train, pay and make famous &mdash; <strong style="color:var(--ivory);font-weight:500">close to home.</strong> A branded-house talent-to-screen ecosystem for Uttar Pradesh, Bihar &amp; Delhi&ndash;NCR. No Mumbai gamble. No gatekeepers. Real, credited, paid screen work.</p>
      <div class="hero-ctas reveal" data-delay="240">
        <a href="#apply" class="btn btn-primary">Apply Now <i class="fas fa-arrow-right"></i></a>
        <a href="#ecosystem" class="btn btn-ghost">Explore the Ecosystem</a>
      </div>
      <div class="stat-row reveal" data-delay="320">
        <div class="stat"><div class="num"><span data-count="37.6" data-decimals="1" data-suffix=" Cr+">37.6 Cr+</span></div><div class="lbl">audience reach</div></div>
        <div class="stat"><div class="num"><span data-count="4">4</span></div><div class="lbl">integrated pillars</div></div>
        <div class="stat"><div class="num"><span data-count="20" data-suffix="+">20+</span></div><div class="lbl">revenue streams</div></div>
        <div class="stat"><div class="num">UP+NCR</div><div class="lbl">home base</div></div>
      </div>
    </div>

    <div class="collage reveal" data-delay="200">
      <div class="img-frame c1" data-parallax="0.06">
        <span class="stamp">Reel &middot; 01</span>
        <img src="/static/img/hero-set.jpg" alt="Cinematic film set with lights and camera" loading="eager" decoding="async" />
        <div class="cap">On set &mdash; Lucknow unit</div>
      </div>
      <div class="img-frame c2" data-parallax="0.12">
        <span class="stamp">Reel &middot; 02</span>
        <img src="/static/img/actor.jpg" alt="Actor auditioning under a spotlight" loading="lazy" decoding="async" />
      </div>
      <div class="img-frame c3" data-parallax="0.16">
        <span class="stamp">Reel &middot; 03</span>
        <img src="/static/img/clapper.jpg" alt="Film clapperboard" loading="lazy" decoding="async" />
      </div>
      <div class="chip glass chip-1"><i class="fas fa-language"></i> Dialect-first</div>
      <div class="chip glass chip-2"><i class="fas fa-indian-rupee-sign"></i> Real paid credits</div>
      <div class="chip glass chip-3"><i class="fas fa-shield-halved"></i> No Mumbai gamble</div>
    </div>
  </div>
</section>

<!-- ============ 2 · THE STORY ============ -->
<section class="section grain" id="ecosystem">
  <div class="blob blob-pur float2" style="width:380px;height:380px;top:10%;right:-120px;opacity:.3"></div>
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker mag">Chapter 01 &middot; Why this exists</span>
      <h2 class="t-mega serif">A region <em>overflowing</em> with talent &mdash; and <span class="mg">one closed door.</span></h2>
    </div>

    <div class="story-block">
      <div class="story-media img-frame reveal" data-parallax="0.05">
        <span class="stamp">Scene &middot; 01</span>
        <img src="/static/img/street.jpg" alt="Hindi heartland street" loading="lazy" decoding="async" />
        <div class="cap">Every street &mdash; a stage waiting</div>
      </div>
      <div class="reveal" data-delay="120">
        <div class="num-big serif">01</div>
        <h3 class="t-huge serif" style="margin-block:1rem 1rem">The talent is <em>everywhere.</em></h3>
        <p class="lead">In every mohalla of Uttar Pradesh and Bihar there is a singer at a wedding, an actor in a Ramleela, a dancer at a jagran, a storyteller at a chai stall. Raw, fearless, dialect-native talent &mdash; multiplied across <strong style="color:var(--ivory)">37.6 crore people.</strong></p>
      </div>
    </div>

    <div class="story-block">
      <div class="story-media img-frame reveal" data-parallax="0.05">
        <span class="stamp">Scene &middot; 02</span>
        <img src="/static/img/actor.jpg" alt="Hopeful performer" loading="lazy" decoding="async" />
        <div class="cap">The only door points 1,400 km away</div>
      </div>
      <div class="reveal" data-delay="120">
        <div class="num-big serif">02</div>
        <h3 class="t-huge serif" style="margin-block:1rem 1rem">But the <span class="mg">only door is shut.</span></h3>
        <p class="lead">To "make it," everyone is told the same thing: go to Mumbai. There, the industry is insiders-only, expensive, and often exploitative. Years of struggle, savings, and dignity are spent &mdash; and most return home with <strong style="color:var(--ivory)">zero output</strong> to show for it. Others never come back, lost to a hostile metro or distress migration.</p>
      </div>
    </div>

    <div class="reveal" data-delay="80">
      <div class="glass-dark" style="padding:clamp(2rem,5vw,3.5rem);text-align:center;border-radius:24px">
        <span class="kicker" style="justify-content:center">The reframe</span>
        <p class="t-edit serif" style="margin-top:1.2rem;max-width:24ch;margin-inline:auto">The talent and the audience are the <em>same</em> <span class="mg">37.6 crore people.</span></p>
      </div>
    </div>
  </div>
</section>

<!-- ============ 3 · THE CORE PROBLEM ============ -->
<section class="section grain vignette">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker mag">Chapter 02 &middot; The core problem</span>
      <h2 class="t-mega serif">Six walls between <em>talent</em> and <span class="mg">the screen.</span></h2>
    </div>
    <div class="grid-3">
      ${problemCards()}
    </div>
  </div>
</section>

<!-- ============ 4 · THE OPPORTUNITY ============ -->
<section class="section grain" style="background:radial-gradient(ellipse 80% 60% at 80% 20%,var(--plum),var(--ink))">
  <div class="blob blob-mag float1" style="width:360px;height:360px;bottom:0;left:-100px;opacity:.3"></div>
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="kicker">Chapter 03 &middot; Flip the problem</span>
      <h2 class="t-mega serif">The largest <em>untapped</em> entertainment market <span class="gold-text">on earth.</span></h2>
      <p class="lead center" style="margin-inline:auto;margin-top:1rem">The same wall that blocks talent hides the opportunity: a young, hungry, dialect-loving audience that the metros ignore.</p>
    </div>
    <div class="opp-stats reveal" data-delay="80">
      <div class="opp-stat glass"><div class="num"><span data-count="23.6" data-decimals="1" data-suffix=" Cr">23.6 Cr</span></div><div class="lbl">Uttar Pradesh population</div></div>
      <div class="opp-stat glass"><div class="num"><span data-count="13.1" data-decimals="1" data-suffix=" Cr">13.1 Cr</span></div><div class="lbl">Bihar population</div></div>
      <div class="opp-stat glass"><div class="num"><span data-count="40" data-suffix="%+">40%+</span></div><div class="lbl">of Bihar is under 25</div></div>
      <div class="opp-stat glass"><div class="num"><span data-count="50" data-suffix="%+">50%+</span></div><div class="lbl">of paid OTT, beaten by dialect content</div></div>
    </div>
    <p class="center muted reveal" style="margin-top:1.5rem;font-size:.85rem">Dialect content already tops YouTube and exceeds half of paid OTT subscriptions in the region.</p>
  </div>
</section>

<!-- dialect marquee -->
<div class="marquee grain reveal" aria-hidden="true">
  <div class="marquee-track">
    ${dialectMarquee()}${dialectMarquee()}
  </div>
</div>

<!-- ============ 5 · THE 4 PILLARS ============ -->
<section class="section grain" id="pillars">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Chapter 04 &middot; The ecosystem</span>
      <h2 class="t-mega serif">Four pillars that <em>interlock</em> into <span class="mg">one flywheel.</span></h2>
      <p class="lead" style="margin-top:1rem">Not a school. Not a studio. Not a channel. A branded-house ecosystem where each pillar feeds the next &mdash; discover, distribute, train, recognise.</p>
    </div>

    <div class="pillars reveal" data-delay="80">
      ${pillarCards()}
    </div>
  </div>
</section>

<!-- ============ 6 · THE FLYWHEEL ============ -->
<section class="section grain vignette" style="background:radial-gradient(ellipse 70% 60% at 20% 50%,var(--aubergine),var(--ink))">
  <div class="wrap flywheel">
    <div class="reveal">
      <span class="kicker mag">Chapter 05 &middot; The flywheel</span>
      <h2 class="t-huge serif" style="margin-block:1rem 1.5rem">It spins <em>stronger</em> with every turn.</h2>
      <div class="fw-steps">
        ${flywheelSteps()}
      </div>
    </div>
    <div class="reveal" data-delay="120">
      <div class="fw-stage">
        <div class="fw-ring"></div>
        <div class="fw-ring inner"></div>
        <div class="fw-center serif">The<br/>Ecosystem<br/>Flywheel</div>
        ${flywheelNodes()}
      </div>
    </div>
  </div>
</section>

<!-- ============ 7 · THE TALENT JOURNEY ============ -->
<section class="section grain" id="journey">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Chapter 06 &middot; The talent journey</span>
      <h2 class="t-mega serif">From an upload on your phone <br/>to a <em>local hero.</em></h2>
      <p class="lead" style="margin-top:1rem">Seven modules. One continuous ladder. Every rung is something real you keep &mdash; a skill, a credit, a release, a name.</p>
    </div>
    ${journeyPanels()}
  </div>
</section>

<!-- ============ 8 · WHO CAN APPLY ============ -->
<section class="section grain" style="background:radial-gradient(ellipse 80% 50% at 50% 0%,var(--plum),var(--ink))">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="kicker mag">Chapter 07 &middot; Who can apply</span>
      <h2 class="t-mega serif">If you create, perform, or build &mdash; <span class="gold-text">this is for you.</span></h2>
    </div>
    <div class="cat-grid reveal" data-delay="60">
      ${categoryCards()}
    </div>
  </div>
</section>

<!-- ============ 9 · ACADEMY & FEE STRUCTURE ============ -->
<section class="section grain vignette" id="academy">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Chapter 08 &middot; The academy &amp; fees</span>
      <h2 class="t-mega serif">A transparent ladder. <br/><em>Merit, not money,</em> wins.</h2>
    </div>

    <div class="fee-banner reveal">
      <i class="fas fa-circle-check"></i>
      <p>Payment is <strong>OPTIONAL</strong> and does <strong>NOT</strong> affect selection &mdash; you can reach and win the finals <strong>without paying a single rupee.</strong> Fees only buy optional extras like certificates, masterclasses and portfolio kits.</p>
    </div>

    <div class="tickets reveal" data-delay="80">
      <article class="ticket lift">
        <span class="perf l"></span><span class="perf r"></span>
        <span class="tier">Step 01 &middot; Entry</span>
        <div class="price">&#8377;399</div>
        <div class="muted" style="font-size:.85rem">Registration &mdash; optional</div>
        <ul>
          <li><i class="fas fa-check"></i>App entry &amp; profile</li>
          <li><i class="fas fa-check"></i>Participation certificate</li>
          <li><i class="fas fa-check"></i>Your filmed audition clip</li>
          <li><i class="fas fa-circle-info" style="color:var(--crimson)"></i>Not required to be selected</li>
        </ul>
      </article>

      <article class="ticket featured lift">
        <span class="badge">Most chosen</span>
        <span class="perf l"></span><span class="perf r"></span>
        <span class="tier">Step 02 &middot; Portfolio Kit</span>
        <div class="price"><small>&#8377;1,199 &ndash;</small> &#8377;8,999</div>
        <div class="muted" style="font-size:.85rem">Basic / Standard / Premium &mdash; optional</div>
        <ul>
          <li><i class="fas fa-check"></i>Basic &#8377;1,199 &mdash; headshots + reel cut</li>
          <li><i class="fas fa-check"></i>Standard &#8377;3,999 &mdash; full portfolio + bio</li>
          <li><i class="fas fa-check"></i>Premium &#8377;8,999 &mdash; pro shoot + showreel</li>
          <li><i class="fas fa-plus"></i>Optional bootcamp &amp; masterclasses</li>
        </ul>
      </article>

      <article class="ticket lift">
        <span class="perf l"></span><span class="perf r"></span>
        <span class="tier">Step 03 &middot; The Finals</span>
        <div class="price" style="background:linear-gradient(135deg,var(--gold),var(--crimson));-webkit-background-clip:text;background-clip:text;color:transparent">FREE</div>
        <div class="muted" style="font-size:.85rem">On merit &mdash; always</div>
        <ul>
          <li><i class="fas fa-trophy"></i>Reached purely on talent</li>
          <li><i class="fas fa-film"></i>Leads to a real role / credit</li>
          <li><i class="fas fa-indian-rupee-sign"></i>Paid screen work</li>
          <li><i class="fas fa-star"></i>Zero rupees required</li>
        </ul>
      </article>
    </div>

    <div class="reveal" data-delay="120">
      <p class="muted" style="margin-top:2.5rem;font-size:.8rem;letter-spacing:.1em" class="mono">ACADEMY TRACKS &mdash; choose your craft &amp; mode</p>
      <div class="track-pills">
        <span class="track-pill"><i class="fas fa-masks-theater"></i>Acting</span>
        <span class="track-pill"><i class="fas fa-microphone-lines"></i>Singing</span>
        <span class="track-pill"><i class="fas fa-person-running"></i>Dance</span>
        <span class="track-pill"><i class="fas fa-clapperboard"></i>Direction</span>
        <span class="track-pill"><i class="fas fa-location-dot"></i>On-site &mdash; Lucknow</span>
        <span class="track-pill"><i class="fas fa-wifi"></i>Online</span>
      </div>
    </div>
  </div>
</section>

<!-- ============ 10 · WHY UP & GOVERNMENT BACKING ============ -->
<section class="section grain">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker mag">Chapter 09 &middot; Why UP &amp; government backing</span>
      <h2 class="t-mega serif">We deliver the state's own goals &mdash; <span class="gold-text">through the creative economy.</span></h2>
    </div>
    <div class="mosaic reveal" data-delay="60">
      <div class="mtile m-wide m-tall lift">
        <span class="bp">UP Film Policy</span>
        <h4>Dialect-film subsidy &amp; institute grants</h4>
        <p>State support for regional-language films and a grant for film-training institutes aligns precisely with our academy + production model.</p>
        <i class="fas fa-landmark big"></i>
      </div>
      <div class="mtile m-mid lift"><span class="bp">Noida</span><h4>1,000-acre Film City</h4><p>A generational infrastructure bet on UP as a production hub.</p><i class="fas fa-city big"></i></div>
      <div class="mtile m-mid lift"><span class="bp">Skilling</span><h4>State skilling missions</h4><p>Our courses plug into existing skilling &amp; employment targets.</p><i class="fas fa-graduation-cap big"></i></div>
      <div class="mtile m-mid lift"><span class="bp">ODOP</span><h4>One District, One Product</h4><p>Culture &amp; craft per district &mdash; perfect dialect-content fuel.</p><i class="fas fa-map big"></i></div>
      <div class="mtile m-mid lift"><span class="bp">Anti-migration</span><h4>Jobs that stay home</h4><p>Every local creative livelihood is one fewer distress migrant.</p><i class="fas fa-house-user big"></i></div>
      <div class="mtile m-full lift" style="text-align:center">
        <h4 class="serif" style="font-size:1.5rem">"We don't ask the state for a favour &mdash; we deliver its blueprint."</h4>
        <p style="max-width:60ch;margin-inline:auto">Film policy, film city, skilling, ODOP and anti-migration are all goals the government already owns. Cinematic Dream is the private engine that executes them in the creative economy.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ 11 · APPLICATION WIZARD ============ -->
<section class="section grain vignette" id="apply" style="background:radial-gradient(ellipse 80% 60% at 50% 0%,var(--plum),var(--ink))">
  <div class="blob blob-mag float1" style="width:340px;height:340px;top:5%;left:-100px;opacity:.3"></div>
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="kicker">Chapter 10 &middot; Onboarding</span>
      <h2 class="t-mega serif">Start your <em>safar.</em> <span class="hindi gold-text">&#2360;&#2347;&#2364;&#2352;</span></h2>
      <p class="lead center" style="margin-inline:auto;margin-top:1rem">Seven quick steps. No fees to apply. Our team reaches out after you submit.</p>
    </div>

    <div class="wizard glass-dark reveal" id="wizard" data-delay="80">
      <aside class="wiz-media" style="background-image:url('/static/img/dancer.jpg')">
        <div class="wm-inner">
          <div>
            <span class="kicker">Cinematic Dream</span>
            <h3 class="serif" style="margin-top:1rem">Apna sapna,<br/>apne ghar ke paas.</h3>
            <p class="wm-hindi">&#2309;&#2346;&#2344;&#2366; &#2360;&#2346;&#2344;&#2366; &middot; &#2309;&#2346;&#2344;&#2375; &#2328;&#2352; &#2325;&#2375; &#2346;&#2366;&#2360;</p>
          </div>
          <div class="mono" id="wizStepLabel" style="font-size:.72rem;color:var(--gold-2);letter-spacing:.15em">Step 1 / 7</div>
        </div>
      </aside>

      <div class="wiz-body">
        <div class="dots">
          ${Array.from({ length: 7 }).map((_, i) => `<span class="dot${i === 0 ? ' active' : ''}"></span>`).join('')}
        </div>

        ${wizardSteps()}
      </div>
    </div>
  </div>
</section>

<!-- ============ 12 · IMPACT & DATA ============ -->
<section class="section grain" id="impact">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Chapter 11 &middot; Impact &amp; data</span>
      <h2 class="t-mega serif">Measured in <em>livelihoods,</em> <br/>not just views.</h2>
    </div>
    <div class="impact-grid reveal" data-delay="60">
      <div class="impact-stat glass" style="padding:1.8rem"><div class="num"><span data-count="10000" data-suffix="+">10,000+</span></div><div class="lbl">livelihoods enabled / year</div></div>
      <div class="impact-stat glass" style="padding:1.8rem"><div class="num"><span data-count="25000" data-suffix="+">25,000+</span></div><div class="lbl">talents trained (cumulative)</div></div>
      <div class="impact-stat glass" style="padding:1.8rem"><div class="num"><span data-count="500" data-suffix="+">500+</span></div><div class="lbl">local heroes created</div></div>
      <div class="impact-stat glass" style="padding:1.8rem"><div class="num"><span data-count="20" data-suffix="+">20+</span></div><div class="lbl">revenue streams across pillars</div></div>
    </div>
    <div class="chart-wrap glass-dark reveal" data-delay="120">
      <p class="mono" style="font-size:.72rem;color:var(--gold);letter-spacing:.16em;margin-bottom:1rem">PROJECTED CUMULATIVE TALENT TRAINED &middot; UP + BIHAR</p>
      ${growthChart()}
      <p class="center serif t-edit" style="margin-top:2rem;max-width:34ch;margin-inline:auto">"Every youth earning at home is one fewer <span class="mg">lost to distress migration.</span>"</p>
    </div>
  </div>
</section>

<!-- ============ 13 · MARKET & WHY DIFFERENT ============ -->
<section class="section grain vignette">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="kicker mag">Chapter 12 &middot; Why we're different</span>
      <h2 class="t-mega serif">Struggling in Mumbai <span class="muted" style="font-style:italic">vs.</span> <span class="gold-text">working at home.</span></h2>
    </div>
    <div class="compare reveal" data-delay="60">
      <div class="compare-col bad glass">
        <h3 class="serif"><i class="fas fa-circle-xmark"></i> The Mumbai gamble</h3>
        <ul>
          <li><i class="fas fa-xmark"></i>High cost of living, savings drained</li>
          <li><i class="fas fa-xmark"></i>Unsafe, no support network</li>
          <li><i class="fas fa-xmark"></i>Rarely any real, credited output</li>
          <li><i class="fas fa-xmark"></i>Gatekept, insider networking only</li>
          <li><i class="fas fa-xmark"></i>Generic content, dialect ignored</li>
          <li><i class="fas fa-xmark"></i>Years lost, growth uncertain</li>
        </ul>
      </div>
      <div class="compare-col good glass">
        <h3 class="serif"><i class="fas fa-circle-check"></i> Training &amp; working locally</h3>
        <ul>
          <li><i class="fas fa-check"></i>Live at home, low cost, low risk</li>
          <li><i class="fas fa-check"></i>Safe, family-supported, accountable</li>
          <li><i class="fas fa-check"></i>Real paid credits from day one</li>
          <li><i class="fas fa-check"></i>Built-in pipeline to buyers &amp; brands</li>
          <li><i class="fas fa-check"></i>Dialect-native content people love</li>
          <li><i class="fas fa-check"></i>Clear, fast, merit-based growth</li>
        </ul>
      </div>
    </div>
    <div class="proof reveal" data-delay="120">
      <p>India M&amp;E industry <strong>&#8377;2.78T (2025)</strong> &mdash; dialect-OTT is proven: a regional player grew <strong>6.2&times; in a single year.</strong> The heartland audience is real, paying, and underserved.</p>
    </div>
  </div>
</section>

<!-- ============ 14 · TESTIMONIAL DOCUMENTARIES ============ -->
<section class="section grain" id="awards">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="kicker">Chapter 13 &middot; Talent documentaries</span>
      <h2 class="t-mega serif">Faces of the <em>flywheel.</em></h2>
      <p class="lead" style="margin-top:1rem">Illustrative stories of the local heroes this ecosystem is built to create.</p>
    </div>
    <div class="testi-track reveal" data-delay="60">
      ${testimonialCards()}
    </div>
  </div>
</section>

<!-- ============ 15 · FAQ ============ -->
<section class="section grain vignette">
  <div class="wrap" style="max-width:920px">
    <div class="sec-head center reveal">
      <span class="kicker mag">Chapter 14 &middot; Questions</span>
      <h2 class="t-mega serif">Everything, <span class="gold-text">answered.</span></h2>
    </div>
    <div class="reveal" data-delay="60">
      ${faqItems()}
    </div>
  </div>
</section>

<!-- ============ 16 · FOOTER ============ -->
<footer class="footer grain">
  <div class="wrap">
    <div class="foot-cta reveal">
      <span class="kicker" style="justify-content:center">Hindi heartland ki apni film industry</span>
      <h2 class="serif">Banayenge, <em>ghar pe.</em></h2>
      <a href="#apply" class="btn btn-gold" style="font-size:1rem;padding:1rem 2rem">Apply Now <i class="fas fa-arrow-right"></i></a>
    </div>

    <div class="foot-grid">
      <div class="foot-col foot-brand">
        <div class="name"><span class="star">&#10022;</span> Cinematic Dream</div>
        <p>A branded-house talent-to-screen ecosystem for UP, Bihar &amp; Delhi&ndash;NCR. Discover &middot; Train &middot; Pay &middot; Make famous.</p>
        <div class="foot-socials">
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
        </div>
      </div>
      <div class="foot-col"><h5>Ecosystem</h5><a href="#pillars">Cinematic Dream</a><a href="#pillars">Kalakar.tv</a><a href="#academy">RKF School of Drama</a><a href="#awards">Creator Awards</a></div>
      <div class="foot-col"><h5>Talent Support</h5><a href="#journey">Talent Journey</a><a href="#apply">Apply / Onboard</a><a href="#academy">Auditions</a><a href="#impact">Impact</a></div>
      <div class="foot-col"><h5>Platform</h5><a href="#ecosystem">The Story</a><a href="#impact">Market &amp; Data</a><a href="#academy">Fees &amp; Tracks</a><a href="#top">Back to top</a></div>
    </div>

    <div class="map-block reveal">
      <p class="mono" style="font-size:.72rem;color:var(--gold);letter-spacing:.16em;text-align:center;margin-bottom:1.5rem">OUR HEARTLAND &middot; UTTAR PRADESH + BIHAR</p>
      ${heartlandMap()}
    </div>

    <div class="foot-legal">
      <div>
        <div>&copy; 2026 Cinematic Dream Pvt Ltd &middot; HQ: <span class="gold-text">Lucknow &middot; Uttar Pradesh</span></div>
        <div style="margin-top:.4rem">Helpline: <span class="gold-text">1800-CINEMA</span> &middot; <a href="mailto:hello@cinematicdream.in" style="color:var(--gold-2)">hello@cinematicdream.in</a></div>
      </div>
      <div style="text-align:right">
        <div>Privacy &middot; Terms &middot; Careers</div>
        <div class="foot-tag" style="margin-top:.4rem">&#2309;&#2346;&#2344;&#2366; &#2360;&#2346;&#2344;&#2366; &middot; &#2309;&#2346;&#2344;&#2375; &#2328;&#2352; &#2325;&#2375; &#2346;&#2366;&#2360;</div>
      </div>
    </div>
  </div>
</footer>

<script defer src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
<script defer src="/static/app.js"></script>
</body>
</html>`

// ---------- section helpers ----------
function problemCards() {
  const items = [
    { n: '01', i: 'fa-lock', t: 'The closed Mumbai gate', d: 'A single industry, geographically distant, controlled by insiders and dynasties. Outsiders simply cannot get in.', m: '1,400 km away · insiders only' },
    { n: '02', i: 'fa-hourglass-end', t: 'Years of effort, zero output', d: 'Aspirants spend their twenties auditioning in queues. Most never get a single credited role to show for it.', m: '~0 verifiable credits' },
    { n: '03', i: 'fa-triangle-exclamation', t: 'Exploitation & abuse', d: 'No contracts, no safety net, predatory "managers" and casting traps prey on the desperate and the young.', m: 'No protection · no recourse' },
    { n: '04', i: 'fa-road-barrier', t: 'No pathway at home', d: 'There is no academy, no studio, no agency, no stage in the home state. Talent has literally nowhere to train or perform.', m: 'No local ladder' },
    { n: '05', i: 'fa-person-walking-luggage', t: 'Distress out-migration', d: 'When dreams and jobs both vanish, families migrate. The creative drain mirrors the labour drain.', m: '~2.5× in two decades · ~5 crore people' },
    { n: '06', i: 'fa-clock', t: 'Idle youth, real risk', d: 'A vast under-25 population with energy and no outlet is a social risk. Untapped talent becomes wasted potential.', m: 'The demographic clock is ticking' },
  ]
  return items.map((p, idx) => `
    <article class="problem-card glass lift reveal" data-delay="${idx * 60}">
      <div class="ico"><i class="fas ${p.i}"></i></div>
      <span class="pn">PROBLEM &middot; ${p.n}</span>
      <h3 class="serif">${p.t}</h3>
      <p class="muted" style="font-size:.92rem">${p.d}</p>
      <div class="mini">${p.m}</div>
    </article>`).join('')
}

function dialectMarquee() {
  const tags = ['Bhojpuri', 'Awadhi', 'Braj', 'Bundeli', 'Haryanvi', 'Maithili', 'Khari Boli', 'Magahi']
  return tags.map(t => `<span class="tag">${t}<span class="dot">&#10022;</span></span>`).join('')
}

function pillarCards() {
  const items = [
    { n: 'Pillar 01', i: 'fa-film', t: 'Cinematic Dream', r: 'Production House', d: 'Dialect-first films, series, music & IP. The content engine that builds credibility and a hometown library.' },
    { n: 'Pillar 02', i: 'fa-tv', t: 'Kalakar.tv', r: 'OTT · YouTube · Music', d: 'Distribution to millions. Where heartland content reaches the heartland audience &mdash; and monetises.' },
    { n: 'Pillar 03', i: 'fa-graduation-cap', t: 'RKF School of Drama', r: 'Academy · Lucknow + Online', d: 'On-site Lucknow campus & online courses. The cash engine that funds the whole ecosystem.' },
    { n: 'Pillar 04', i: 'fa-award', t: 'Creator Awards', r: 'PR & Recognition', d: 'Kalakar.tv Creator Awards turn graduates into recognised local stars &mdash; the marketing flywheel.' },
  ]
  return items.map((p, idx) => `
    <article class="pillar glass-dark">
      <span class="pidx">${p.n}</span>
      <div class="picon"><i class="fas ${p.i}"></i></div>
      <h3 class="serif">${p.t}</h3>
      <div class="role">${p.r}</div>
      <p class="muted" style="font-size:.9rem">${p.d}</p>
    </article>`).join('')
}

function flywheelSteps() {
  const steps = [
    'Content builds <strong>credibility</strong> for the brand.',
    'Credibility <strong>markets the academy</strong> to aspirants.',
    'Academy fees <strong>fund the ecosystem</strong> sustainably.',
    'Students create <strong>low-cost content</strong> at scale.',
    'Audience &amp; <strong>sponsorship grow</strong> with every release.',
    'Repeat &mdash; <strong>stronger every loop.</strong>',
  ]
  return steps.map((s, i) => `
    <div class="fw-step"><span class="s-n">0${i + 1}</span><span>${s}</span></div>`).join('')
}

function flywheelNodes() {
  const icons = ['fa-film', 'fa-tv', 'fa-graduation-cap', 'fa-award']
  return icons.map((ic, i) => {
    const a = (i / icons.length) * Math.PI * 2 - Math.PI / 2
    const x = 50 + Math.cos(a) * 50
    const y = 50 + Math.sin(a) * 50
    return `<div class="fw-node" style="left:${x}%;top:${y}%"><i class="fas ${ic}"></i></div>`
  }).join('')
}

function journeyPanels() {
  const steps = [
    { n: '01', img: 'street.jpg', t: 'Discovery', d: 'Upload a clip on the Cinematic Dream app. Our AI shortlist surfaces raw talent from every district &mdash; no contacts, no queue.', m: ['App-based upload', 'AI-assisted shortlisting', 'Open to all districts'] },
    { n: '02', img: 'actor.jpg', t: 'Audition', d: 'A filmed, professional audition &mdash; not a corridor cattle-call. Real exposure, recorded, and yours to keep.', m: ['Filmed audition clip', 'Professional panel', 'Instant exposure'] },
    { n: '03', img: 'singer.jpg', t: 'Training', d: 'An RKF School course builds your craft and a portfolio. Skills you keep for life, regardless of any outcome.', m: ['RKF certified course', 'Portfolio you own', 'Lifelong skills'] },
    { n: '04', img: 'hero-set.jpg', t: 'Production', d: 'Step onto a real set in a real, credited, paid role &mdash; the output that years in Mumbai could never deliver.', m: ['Real credited role', 'Paid screen work', 'On-set experience'] },
    { n: '05', img: 'stage.jpg', t: 'Distribution', d: 'Your work releases on Kalakar.tv and YouTube &mdash; seen by the same heartland audience that is rooting for you.', m: ['Kalakar.tv release', 'YouTube reach', 'Built-in audience'] },
    { n: '06', img: 'director.jpg', t: 'Representation', d: 'Our agency places you with buyers, brands and producers &mdash; turning a credit into a continuing career.', m: ['Agency placement', 'Brand & buyer access', 'Career pipeline'] },
    { n: '07', img: 'awards.jpg', t: 'Recognition', d: 'The Kalakar.tv Creator Awards put a spotlight on you &mdash; and a local hero is born, at home.', m: ['Creator Awards spotlight', 'PR & press', 'Local-hero status'] },
  ]
  return steps.map((s, i) => `
    <div class="journey-panel">
      <div class="jp-media img-frame reveal">
        <span class="stamp">Module &middot; ${s.n}</span>
        <img src="/static/img/${s.img}" alt="${s.t}" loading="lazy" decoding="async" />
      </div>
      <div class="reveal" data-delay="100">
        <span class="jp-mod">MODULE ${s.n}</span>
        <h3 class="t-huge serif" style="margin-block:.6rem .8rem">${s.t}</h3>
        <p class="lead">${s.d}</p>
        <ul class="jp-meta">${s.m.map(x => `<li><i class="fas fa-circle-check"></i>${x}</li>`).join('')}</ul>
        <a href="#apply" class="jp-apply">Apply for this <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>`).join('')
}

function categoryCards() {
  const cats = [
    ['fa-masks-theater', 'Actors', 'Lead & supporting roles'], ['fa-star', 'Actresses', 'Screen & stage'],
    ['fa-camera-retro', 'Models', 'Print, ramp & ad films'], ['fa-clapperboard', 'Directors', 'Vision & craft'],
    ['fa-pen-nib', 'Writers', 'Script & dialogue'], ['fa-scissors', 'Editors', 'Post & assembly'],
    ['fa-video', 'Cinematographers', 'Light & frame'], ['fa-camera', 'Photographers', 'Stills & BTS'],
    ['fa-music', 'Musicians', 'Score & live'], ['fa-microphone-lines', 'Singers', 'Playback & original'],
    ['fa-person-running', 'Dancers', 'Choreography'], ['fa-hashtag', 'Influencers', 'Reach & reels'],
    ['fa-headphones', 'Voice Artists', 'Dub & narration'], ['fa-school', 'Film Students', 'Learn on a set'],
    ['fa-wand-magic-sparkles', 'Content Creators', 'Short & long form'], ['fa-briefcase', 'Producers', 'Build the slate'],
  ]
  return cats.map((c, i) => `
    <article class="cat-card glass lift reveal" data-delay="${(i % 8) * 40}">
      <div class="ci"><i class="fas ${c[0]}"></i></div>
      <div><h4>${c[1]}</h4><div class="cd">${c[2]}</div></div>
    </article>`).join('')
}

function wizardSteps() {
  return `
  <!-- STEP 1 · Personal -->
  <div class="wiz-step active">
    <div class="wiz-step-head">
      <span class="step-no">STEP 01 &middot; PERSONAL</span>
      <button class="audio-btn" data-say="Let's start with your personal details. Fill your name, contact and city."><i class="fas fa-volume-high"></i> Audio assist</button>
    </div>
    <h4 class="serif">Tell us who you are</h4>
    <div class="field-row">
      <div class="field"><label>Full Name <span class="req">*</span></label><input name="fullName" data-required placeholder="e.g. Aarav Singh" /></div>
      <div class="field"><label>Stage Name</label><input name="stageName" placeholder="optional" /></div>
    </div>
    <div class="field-row-3">
      <div class="field"><label>Gender</label><select name="gender"><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option><option>Prefer not to say</option></select></div>
      <div class="field"><label>Date of Birth <span class="req">*</span></label><input type="date" id="f_dob" name="dob" data-required /></div>
      <div class="field"><label>Mobile (OTP) <span class="req">*</span></label><input type="tel" name="mobile" data-required placeholder="+91 ·····" /></div>
    </div>
    <div class="field-row">
      <div class="field"><label>WhatsApp</label><input type="tel" name="whatsapp" placeholder="if different" /></div>
      <div class="field"><label>Email <span class="req">*</span></label><input type="email" name="email" data-required placeholder="you@email.com" /></div>
    </div>
    <div class="field-row field-row-city">
      <div class="field"><label>State <span class="req">*</span></label><select name="state" data-required><option value="">Select</option><option>Uttar Pradesh</option><option>Bihar</option><option>Delhi-NCR</option><option>Other</option></select></div>
      <div class="field"><label>City / District <span class="req">*</span></label><input id="f_city" name="city" data-required placeholder="e.g. Lucknow" /></div>
      <div class="ex-chips">${['Lucknow', 'Kanpur', 'Varanasi', 'Prayagraj', 'Noida/Ghaziabad', 'Gorakhpur', 'Agra', 'Meerut', 'Bareilly', 'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'].map(c => `<span class="ex-chip">${c}</span>`).join('')}</div>
    </div>
    <div class="field"><label>Current Occupation</label><input name="occupation" placeholder="e.g. Student, Shopkeeper, Freelancer" /></div>
    <div class="wiz-nav"><span></span><button class="btn btn-primary" data-wiz="next">Next <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 2 · Talent Category -->
  <div class="wiz-step">
    <span class="step-no">STEP 02 &middot; TALENT</span>
    <h4 class="serif">What is your talent? <span class="muted" style="font-size:.85rem">(select all)</span></h4>
    <div class="field-cats"><input type="hidden" class="cat-required" data-required /></div>
    <div class="chips">
      ${['Acting', 'Singing', 'Dancing', 'Direction', 'Writing', 'Modelling', 'Cinematography', 'Editing', 'Photography', 'Music', 'Anchoring', 'Voice-over', 'Producing', 'Content Creation', 'Other'].map(c => `<span class="chip-sel" data-val="${c}">${c}</span>`).join('')}
    </div>
    <p class="muted" style="font-size:.78rem;margin-top:1rem"><i class="fas fa-circle-info" style="color:var(--gold)"></i> Pick at least one to continue.</p>
    <div class="wiz-nav"><button class="btn btn-ghost" data-wiz="back"><i class="fas fa-arrow-left"></i> Back</button><button class="btn btn-primary" data-wiz="next">Next <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 3 · Profile & Languages -->
  <div class="wiz-step">
    <span class="step-no">STEP 03 &middot; PROFILE</span>
    <h4 class="serif">Your profile &amp; languages</h4>
    <div class="field-row">
      <div class="field"><label>Experience</label><select name="experience"><option value="">Select</option><option>Fresher</option><option>1&ndash;3 years</option><option>3+ years</option></select></div>
      <div class="field"><label>Preferred Language / Dialect</label><select name="dialect"><option value="">Select</option>${['Hindi', 'Bhojpuri', 'Awadhi', 'Braj', 'Bundeli', 'Haryanvi', 'Maithili', 'English', 'Other'].map(d => `<option>${d}</option>`).join('')}</select></div>
    </div>
    <div class="field"><label>Short Bio</label><textarea name="bio" placeholder="A few lines about your talent & journey so far..."></textarea></div>
    <div class="field"><label>Why do you want to join?</label><textarea name="why" placeholder="Tell us your dream..."></textarea></div>
    <div class="wiz-nav"><button class="btn btn-ghost" data-wiz="back"><i class="fas fa-arrow-left"></i> Back</button><button class="btn btn-primary" data-wiz="next">Next <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 4 · Track Interest -->
  <div class="wiz-step">
    <span class="step-no">STEP 04 &middot; TRACK</span>
    <h4 class="serif">Which track interests you?</h4>
    <div class="field"><label>Programme <span class="req">*</span></label><select name="track" data-required><option value="">Select</option><option>RKF School &ndash; On-site Lucknow</option><option>RKF School &ndash; Online</option><option>Open Talent Hunt Audition</option><option>Direct Production Casting</option></select></div>
    <div class="field"><label>Mode</label><select name="mode"><option value="">Select</option><option>On-site</option><option>Online</option><option>Hybrid</option></select></div>
    <div class="wiz-nav"><button class="btn btn-ghost" data-wiz="back"><i class="fas fa-arrow-left"></i> Back</button><button class="btn btn-primary" data-wiz="next">Next <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 5 · Portfolio -->
  <div class="wiz-step">
    <span class="step-no">STEP 05 &middot; PORTFOLIO <span class="muted">(all optional)</span></span>
    <h4 class="serif">Show us your work</h4>
    <div class="field"><label>Headshot upload</label><input type="file" name="headshot" accept="image/*" /></div>
    <div class="field-row">
      <div class="field"><label>Showreel link</label><input name="showreel" placeholder="YouTube / Drive link" /></div>
      <div class="field"><label>Instagram</label><input name="instagram" placeholder="@handle" /></div>
    </div>
    <div class="field-row">
      <div class="field"><label>YouTube</label><input name="youtube" placeholder="channel URL" /></div>
      <div class="field"><label>Website / Resume</label><input name="website" placeholder="link" /></div>
    </div>
    <div class="wiz-nav"><button class="btn btn-ghost" data-wiz="back"><i class="fas fa-arrow-left"></i> Back</button><button class="btn btn-primary" data-wiz="next">Next <i class="fas fa-arrow-right"></i></button></div>
  </div>

  <!-- STEP 6 · Audition & Consent -->
  <div class="wiz-step">
    <span class="step-no">STEP 06 &middot; AUDITION &amp; CONSENT</span>
    <h4 class="serif">Almost there</h4>
    <div class="field"><label>Preferred audition slot / availability</label><input name="slot" placeholder="e.g. Weekends, evenings, specific dates" /></div>
    <label class="check"><input type="checkbox" name="feesUnderstood" data-required /><span>I understand registration &amp; portfolio fees are <strong style="color:var(--gold-2)">optional</strong> and do <strong style="color:var(--gold-2)">NOT</strong> affect my selection.</span></label>
    <label class="check"><input type="checkbox" name="consent" data-required /><span>I consent to Cinematic Dream contacting me &amp; processing my application data.</span></label>
    <div class="guardian" id="guardianBlock">
      <div class="hairline left"></div>
      <p class="mono" style="font-size:.72rem;color:var(--crimson);letter-spacing:.1em">APPLICANT UNDER 18 &mdash; GUARDIAN DETAILS REQUIRED</p>
      <div class="field-row" style="margin-top:1rem">
        <div class="field"><label>Guardian Name</label><input name="guardianName" placeholder="Parent / guardian" /></div>
        <div class="field"><label>Guardian Contact</label><input type="tel" name="guardianContact" placeholder="+91 ·····" /></div>
      </div>
    </div>
    <div class="wiz-nav"><button class="btn btn-ghost" data-wiz="back"><i class="fas fa-arrow-left"></i> Back</button><button class="btn btn-gold" data-wiz="submit">Submit Application <i class="fas fa-paper-plane"></i></button></div>
  </div>

  <!-- STEP 7 · Welcome -->
  <div class="wiz-step">
    <div class="welcome-card">
      <div class="tick"><i class="fas fa-check"></i></div>
      <span class="step-no" style="margin:0">APPLICATION RECEIVED</span>
      <h4 class="serif" style="margin-block:.6rem">Aapka safar shuru ho gaya!</h4>
      <p class="lead center" style="margin-inline:auto">Hamari team aapse jaldi sampark karegi. Your application is in &mdash; welcome to the Cinematic Dream family.</p>
      <div class="ref-id">Ref: <span id="refId">CD-2026-XXXXX</span><button id="copyRef" title="Copy"><i class="far fa-copy"></i></button></div>
      <p class="muted" style="font-size:.78rem;margin-top:1.5rem">Save this reference ID. No payment was required to apply.</p>
    </div>
  </div>`
}

function growthChart() {
  const data = [2, 6, 13, 24, 40, 62] // cumulative '000s across years
  const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6']
  const W = 720, H = 240, pad = 36
  const max = 70
  const x = (i: number) => pad + (i / (data.length - 1)) * (W - pad * 2)
  const y = (v: number) => H - pad - (v / max) * (H - pad * 2)
  const line = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${x(data.length - 1).toFixed(1)},${H - pad} L${x(0).toFixed(1)},${H - pad} Z`
  const dots = data.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="4" fill="#F5B544"/>`).join('')
  const labels = years.map((yr, i) => `<text x="${x(i).toFixed(1)}" y="${H - 10}" fill="#8A7A95" font-size="11" font-family="DM Mono" text-anchor="middle">${yr}</text>`).join('')
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Growth chart">
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E11D74" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#E11D74" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="cl" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#E11D74"/><stop offset="100%" stop-color="#F5B544"/>
      </linearGradient>
    </defs>
    ${[0, 17.5, 35, 52.5, 70].map(v => `<line x1="${pad}" x2="${W - pad}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}" stroke="rgba(246,241,244,0.06)"/>`).join('')}
    <path d="${area}" fill="url(#cg)"/>
    <path d="${line}" fill="none" stroke="url(#cl)" stroke-width="2.5" stroke-linecap="round"/>
    ${dots}${labels}
  </svg>`
}

function testimonialCards() {
  const items = [
    { img: 't-actor.jpg', where: 'Lucknow, UP', story: 'From a Ramleela stage to a credited lead role &mdash; without ever boarding a Mumbai train.', metric: '1 film · 4 lakh+ views' },
    { img: 't-singer.jpg', where: 'Gorakhpur, UP', story: 'Recorded an Awadhi single on Kalakar.tv that her whole district now sings.', metric: '2.1 Cr streams' },
    { img: 't-filmmaker.jpg', where: 'Patna, Bihar', story: 'Trained at RKF, now directs short films that release to the audience he grew up with.', metric: '3 releases · agency-signed' },
    { img: 't-actor.jpg', where: 'Varanasi, UP', story: 'A chai-stall storyteller, now a recognised voice artist across regional OTT.', metric: '12 projects · paid' },
  ]
  return items.map((t, i) => `
    <article class="testi-card">
      <div class="img-frame"><span class="stamp">Story &middot; 0${i + 1}</span><img src="/static/img/${t.img}" alt="Talent from ${t.where}" loading="lazy" decoding="async" /></div>
      <div class="body">
        <div class="where">${t.where}</div>
        <p class="story serif">&ldquo;${t.story}&rdquo;</p>
        <div class="metric"><i class="fas fa-chart-line"></i> ${t.metric}</div>
      </div>
    </article>`).join('')
}

function faqItems() {
  const qs = [
    ['Is it really free to win?', 'Yes. You can reach and win the finals purely on merit, without paying a single rupee. All fees &mdash; registration, kits, masterclasses &mdash; are optional extras and never influence selection.'],
    ['Do I need to go to Mumbai?', 'No. The entire journey &mdash; discovery, audition, training, production, distribution and recognition &mdash; happens close to home in the heartland, with a Lucknow campus and online options.'],
    ['What is the difference between on-site and online?', 'On-site means the RKF School of Drama campus in Lucknow with in-person mentoring and stage time. Online delivers the same certified curriculum remotely, so distance is never a barrier.'],
    ['Who can apply?', 'Actors, singers, dancers, directors, writers, editors, cinematographers, photographers, musicians, influencers, voice artists, film students, content creators and producers &mdash; freshers and experienced alike.'],
    ['Is there an age limit? Can minors apply?', 'Talent of all ages can apply. Applicants under 18 must add a parent/guardian name and contact, and participate with guardian consent. The wizard reveals these fields automatically.'],
    ['What happens after I apply?', 'You receive a reference ID instantly. Our team reviews your profile and audition clip, then contacts you over phone/WhatsApp with the next step &mdash; usually a filmed audition or course slot.'],
    ['How are auditions judged?', 'On talent, authenticity and dialect strength &mdash; by a professional panel. Your filmed audition is assessed on merit, not on whether you bought any optional kit.'],
    ['Are fees refundable?', 'Optional kit & course fees follow a clear published refund window before the service is delivered. Since fees are never required to be selected, you can participate at zero cost.'],
    ['What do I actually get from training?', 'A certified RKF course, a real portfolio and a showreel that are yours forever &mdash; transferable skills that hold value regardless of any single outcome.'],
    ['Will I get paid?', 'Production roles are real, credited and paid. Distribution on Kalakar.tv and YouTube, plus agency representation, open continuing earning opportunities.'],
    ['Which languages and dialects are supported?', 'Hindi plus Bhojpuri, Awadhi, Braj, Bundeli, Haryanvi, Maithili and more. Dialect-native talent is a strength here, not a weakness.'],
    ['Is Cinematic Dream government-backed?', 'We are a private ecosystem that aligns with state goals &mdash; UP film policy, the Noida film city, skilling missions, ODOP and anti-migration &mdash; delivering them through the creative economy.'],
  ]
  return qs.map(q => `
    <details class="faq-item">
      <summary>${q[0]}<span class="pm">+</span></summary>
      <p class="ans">${q[1]}</p>
    </details>`).join('')
}

function heartlandMap() {
  // stylised coordinate plot (not geographically exact) of UP + Bihar districts
  const cities: [string, number, number, boolean][] = [
    ['Agra', 120, 150, false], ['Meerut', 150, 105, false], ['Noida', 165, 120, true],
    ['Bareilly', 230, 110, false], ['Lucknow', 300, 150, true], ['Kanpur', 270, 165, false],
    ['Prayagraj', 360, 200, false], ['Varanasi', 430, 200, true], ['Gorakhpur', 460, 140, false],
    ['Patna', 560, 185, true], ['Muzaffarpur', 575, 150, false], ['Darbhanga', 615, 150, false],
    ['Gaya', 545, 230, false], ['Bhagalpur', 645, 195, false],
  ]
  const dots = cities.map(([name, x, y, big]) => `
    <g>
      <circle class="map-dot${big ? ' pulse' : ''}" cx="${x}" cy="${y}" r="${big ? 4 : 2.6}"/>
      <text class="map-label" x="${x + 6}" y="${y + 3}">${name}</text>
    </g>`).join('')
  return `<svg class="map-svg" viewBox="0 0 720 300" role="img" aria-label="Map of UP and Bihar districts">
    <path d="M60,120 Q200,60 380,90 Q520,80 680,130 Q660,230 500,250 Q300,270 120,240 Q40,200 60,120 Z"
      fill="rgba(139,92,246,0.05)" stroke="rgba(245,181,68,0.25)" stroke-width="1" stroke-dasharray="4 5"/>
    <text x="200" y="100" fill="rgba(246,241,244,0.18)" font-family="Fraunces" font-size="22" font-style="italic">Uttar Pradesh</text>
    <text x="560" y="115" fill="rgba(246,241,244,0.18)" font-family="Fraunces" font-size="20" font-style="italic">Bihar</text>
    ${dots}
  </svg>`
}

// helper: film-reel sprocket holes
function reelHoles() {
  let s = ''
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    const x = 50 + Math.cos(a) * 30
    const y = 50 + Math.sin(a) * 30
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="none" stroke="#F5B544" stroke-width="1"/>`
  }
  return s
}


export function getPageBody() {
  const match = PAGE.match(/<body>([\s\S]*)<\/body>/i);
  if (!match) return "";
  return match[1].replace(/<script[\s\S]*?<\/script>/gi, "").trim();
}


export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getPageBody() }} />
      <Script src="/static/app.js" strategy="afterInteractive" />
    </>
  );
}
