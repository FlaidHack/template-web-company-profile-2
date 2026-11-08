<script>
  const IMG = '/img/interior.jpg';
  const nav = ['Projects', 'Studio', 'Services', 'Journal', 'Contact'];
  const projects = [
    ['Desert Pavilion', 'Residential', 'Scottsdale, Arizona', '12% 62%', 1.35],
    ['The Ridge House', 'Residential', 'Santa Barbara, California', '88% 38%', 1.5],
    ['Harborview Loft', 'Hospitality', 'Copenhagen, Denmark', '45% 30%', 1.4]
  ];
  const stats = [['145+', 'Projects delivered'], ['21', 'Years of practice'], ['36', 'Design honors'], ['14', 'Countries served']];
  const services = [
    ['Architecture', 'Timeless architecture shaped by context, purpose, and detail. Designs that endure and inspire.', 'M4 21V11a8 8 0 0 1 16 0v10M4 21h16M9 21v-7h6v7'],
    ['Interior Design', 'Thoughtful interiors that balance proportion, light, and materiality to elevate everyday living.', 'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zM3 12h18M5 8h14'],
    ['Planning', 'Strategic planning and feasibility studies that lay the foundation for successful projects.', 'M3 3h18v18H3zM3 21L21 3M3 12h9v9'],
    ['Bespoke Furnishings', 'Custom furniture and millwork crafted with precision to complete your vision.', 'M3 6h18M3 11h13M16 11l5 5M3 16h13v4']
  ];
  let sent = $state(false);
  function submit(e) { e.preventDefault(); sent = true; }
</script>

{#snippet arrow()}<svg class="arrow" viewBox="0 0 30 8"><path d="M0 4h29M25 .5L29 4l-4 3.5" /></svg>{/snippet}
{#snippet logo()}<span class="logo"><b>ARCHITY</b><i>ARCHITECTS</i></span>{/snippet}

<div class="page">
<header class="nav">
  <a href="/" aria-label="Archity">{@render logo()}</a>
  <nav>{#each nav as n}<a class="label" href="#{n.toLowerCase()}">{n}</a>{/each}</nav>
  <div class="tools">
    <span class="label"><a class="on" href="/">EN</a><s></s><a href="/">FR</a></span><u></u>
    <button aria-label="Search"><svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"><circle cx="8.5" cy="8.5" r="6"/><path d="M13 13l5 5"/></svg></button>
    <button aria-label="Menu"><svg viewBox="0 0 20 20" width="18" height="18" stroke="currentColor"><path d="M2 5h16M2 10h16M2 15h16"/></svg></button>
  </div>
</header>

<section class="hero">
  <svg class="topo" viewBox="0 0 400 300" fill="none" stroke="currentColor" aria-hidden="true">
    {#each [60, 95, 130, 165, 200, 240] as r, i}<ellipse cx="60" cy="300" rx={r * 1.5} ry={r} transform="rotate({-8 + i * 3} 60 300)" />{/each}
  </svg>
  <div class="hero-copy">
    <p class="label eyebrow">Spaces. Crafted with intention.</p>
    <h1>Architecture<br />that elevates<br /><em>life.</em></h1>
    <p class="lead">Archity is an architecture and interiors studio creating timeless spaces that balance beauty, purpose, and place.</p>
    <a class="btn" href="#projects">Explore our work {@render arrow()}</a>
  </div>
  <div class="hero-img"><img src={IMG} alt="Interior with timber floors and a floating staircase" /></div>
</section>

<section id="projects" class="featured">
  <div class="row-head"><span class="label">Featured projects</span><a class="label" href="#projects">View all projects {@render arrow()}</a></div>
  <div class="cards">
    {#each projects as [t, k, l, pos, z]}
      <a class="card" href="#projects">
        <div class="thumb"><img src={IMG} alt={t} style="object-position:{pos};transform:scale({z})" /></div>
        <div class="info"><div><b class="label">{t}</b><span class="label">{k}</span></div><div><span>{l}</span>{@render arrow()}</div></div>
      </a>
    {/each}
  </div>
</section>

<section id="studio" class="studio">
  <div class="studio-img"><img src={IMG} alt="Dining and kitchen area" style="object-position:30% 58%" /></div>
  <div class="studio-copy">
    <p class="label tag">Our studio</p>
    <h2>We design with clarity.<br />We build with care.</h2>
    <p>Every project begins with listening – understanding how people live, work, and connect to their surroundings. Our process is collaborative, considered, and guided by craft, context, and enduring design.</p>
    <a class="btn ghost" href="#studio">Learn more about our studio</a>
  </div>
  <div class="plan" aria-hidden="true">
    <svg viewBox="0 0 410 436" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
      <path d="M40 30h330v376H40zM40 150h140M180 30v250h190M180 200h120M300 200v206M40 280h140v126M120 280v126"/>
      <circle cx="110" cy="90" r="22"/><circle cx="250" cy="120" r="30"/><circle cx="330" cy="330" r="26"/><path d="M60 330h50v50H60z"/>
    </svg>
  </div>
</section>

<section class="stats">
  <i></i>{#each stats as [n, l], i}<div><strong>{n}</strong><span class="label">{l}</span></div><i></i>{/each}
</section>

<section id="services" class="services">
  <p class="label tag">Our services</p>
  <div class="svc-grid">
    {#each services as [t, d, path]}
      <article>
        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width=".9" aria-hidden="true"><path d={path} /></svg>
        <h3 class="label">{t}</h3>
        <p>{d}</p>
        <a class="label" href="#services">Learn more {@render arrow()}</a>
      </article>
    {/each}
  </div>
</section>

<section id="contact" class="contact">
  <div class="c-intro"><h2>Let's build something exceptional.</h2><hr /><p>Tell us about your project and our team will be in touch</p></div>
  <form class="c-form" onsubmit={submit}>
    <label><span class="label">Name</span><input required /></label>
    <label><span class="label">Email</span><input type="email" required /></label>
    <label><span class="label">Project type</span><select><option></option><option>Residential</option><option>Hospitality</option><option>Interiors</option></select></label>
    <label><span class="label">Tell us about your project</span><textarea rows="2"></textarea></label>
    <button class="btn" type="submit">{sent ? 'Inquiry sent' : 'Send inquiry'} {@render arrow()}</button>
  </form>
  <div class="c-info">
    <div class="brand">
      <svg viewBox="0 0 40 52" width="34" height="46" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 51V22l10-6v35M14 51V8l10-6v49M24 51V28l12-6v29M2 51h38"/></svg>
      {@render logo()}
    </div>
    <ul>
      <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="M8 15s5-4.5 5-8.5a5 5 0 0 0-10 0C3 10.500 8 15 8 15z"/><circle cx="8" cy="6.500" r="1.800"/></svg><span>28 King Street, Studio 502<br />Copenhagen, Denmark 1264</span></li>
      <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor"><rect x="1.500" y="3" width="13" height="10"/><path d="M1.500 4l6.500 5 6.500-5"/></svg><span>hello@archity.com</span></li>
      <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="M3 2h3l1 3-2 1.500a8 8 0 0 0 4.500 4.500L11 9l3 1v3a1.500 1.500 0 0 1-1.500 1.500A11 11 0 0 1 1.500 3.500 1.500 1.500 0 0 1 3 2z"/></svg><span>+45 31 96 12 84</span></li>
    </ul>
    <p class="label soc"><a href="#contact">Instagram</a><s></s><a href="#contact">LinkedIn</a><s></s><a href="#contact">Pinterest</a></p>
  </div>
</section>
<footer class="foot"><span>© 2026 ARCHITY. ALL RIGHTS RESERVED.</span><span>PRIVACY<em></em>TERMS</span></footer>
</div>

<style>
  .page{width:100%;margin:0;background:var(--bg)}
  section,.nav{border-bottom:1px solid var(--line)}
  section[id]{scroll-margin-top:72px}
  .logo{display:inline-flex;flex-direction:column;align-items:center;line-height:1}
  .logo b{font:500 23px var(--serif);letter-spacing:.2em;margin-right:-.2em}
  .logo i{font:400 8.5px var(--sans);letter-spacing:.32em;margin-top:5px;font-style:normal;color:var(--muted)}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:72px;padding:0 46px;background:var(--bg)}
  .nav a:first-child{justify-self:start}
  .nav nav{display:flex;gap:48px}
  .nav nav a:hover{color:var(--olive)}
  .tools{display:flex;justify-self:end;align-items:center;gap:26px}
  .tools s{display:inline-block;width:1px;height:12px;background:var(--olive);margin:0 12px;vertical-align:-2px}
  .tools .on{color:var(--olive)}.tools u{width:1px;height:26px;background:var(--ink)}
  .tools button{background:none;border:0;cursor:pointer;color:var(--ink)}

  .hero{position:relative;height:100vh;overflow:hidden}
  .topo{position:absolute;left:0;bottom:0;width:520px;color:var(--line);opacity:.8}
  .hero-copy{position:relative;z-index:2;padding:96px 0 0 114px}
  .eyebrow{display:flex;align-items:center;gap:14px;font-size:9.5px;color:var(--muted);margin-bottom:34px}
  .eyebrow::before{content:'';width:34px;height:1px;background:var(--ink)}
  .hero h1{font-size:90px;line-height:1.04;margin-bottom:34px}
  .hero h1 em{color:var(--olive-soft);font-weight:500}
  .lead{max-width:335px;font-size:12.5px;margin-bottom:34px}
  .hero-img{position:absolute;right:0;top:0;bottom:0;width:60%;clip-path:polygon(44% 0,100% 0,100% 100%,0 100%)}

  .featured{padding:28px 46px 40px}
  .row-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;font-size:10px}
  .row-head a{display:flex;gap:18px;align-items:center}
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}
  .thumb{height:296px;overflow:hidden}
  .info{border:1px solid var(--line);border-top:0;padding:14px 18px 16px;display:flex;flex-direction:column;gap:14px}
  .info>div{display:flex;justify-content:space-between;align-items:center}
  .info .label{font-size:9.5px}.info b{font-weight:500}
  .info>div:last-child{font-size:11px;font-weight:500}
  .card:hover .arrow{transform:translateX(4px)}.arrow{transition:transform .25s}

  .studio{display:grid;grid-template-columns:562px 1fr 410px;height:436px}
  .studio-img{margin:44px 0 0 46px;height:346px;overflow:hidden}
  .studio-copy{padding:44px 54px 0 44px;display:flex;flex-direction:column;align-items:flex-start;gap:18px}
  .studio-copy h2{font-size:38px;line-height:1.18}.studio-copy p:not(.tag){font-size:12.5px;max-width:540px}
  .tag{display:flex;align-items:center;gap:14px;font-size:9.5px;color:var(--muted)}
  .tag::after{content:'';width:34px;height:1px;background:var(--ink)}
  .plan{border-left:1px solid var(--line);color:var(--line);overflow:hidden}.plan svg{width:100%;height:100%}

  .stats{display:grid;grid-template-columns:.5fr auto 1fr auto 1fr auto 1fr auto .5fr;align-items:center;height:186px;background:var(--paper)}
  .stats i{height:1px;background:var(--ink);opacity:.55;margin:0 22px 18px}
  .stats div{display:flex;flex-direction:column;align-items:center;gap:14px;padding:0 6px}
  .stats strong{font:400 58px/1 var(--serif)}.stats .label{font-size:8.5px;color:var(--muted)}

  .services{height:430px;padding:56px 46px 0}
  .svc-grid{display:grid;grid-template-columns:repeat(4,240px);gap:36px;margin:76px 0 0 136px}
  .svc-grid article{display:flex;flex-direction:column;align-items:flex-start;gap:14px}
  .svc-grid h3{font-weight:500;color:var(--olive);font-size:10px;margin-top:10px}
  .svc-grid p{font-size:11.5px;color:var(--muted);min-height:70px}
  .svc-grid a{display:flex;gap:16px;align-items:center;color:var(--olive);font-size:9.5px;margin-top:10px}

  .contact{display:grid;grid-template-columns:29% 43% 28%;height:416px;border-bottom:0}
  .c-intro{padding:0 0 0 98px;display:flex;flex-direction:column;justify-content:center;gap:20px}
  .c-intro h2{font-size:42px;line-height:1.1;max-width:260px}.c-intro hr{width:40px;border:0;border-top:1px solid var(--ink)}
  .c-intro p{font-size:11.5px;max-width:210px}
  .c-form{border-inline:1px solid var(--line);padding:44px 56px 0 54px;display:flex;flex-direction:column;gap:18px}
  .c-form label{display:flex;flex-direction:column;gap:6px}
  .c-form .label{font-size:8.5px;color:var(--muted)}
  input,select,textarea{font:inherit;font-size:12px;background:none;border:0;border-bottom:1px solid var(--ink);padding:6px 0;color:var(--ink);resize:vertical;border-radius:0;appearance:none;width:100%}
  select{background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none' stroke='%231c1c1a'%3E%3Cpath d='M1 1l4 4 4-4'/%3E%3C/svg%3E") right center no-repeat}
  .c-form .btn{align-self:flex-start;margin-top:6px;height:58px}
  .c-info{background:var(--paper);padding:44px 0 0 50px;display:flex;flex-direction:column;gap:26px}
  .brand{display:flex;gap:12px;align-items:flex-end}
  .c-info ul{list-style:none;display:flex;flex-direction:column;gap:12px;font-size:11.5px}
  .c-info li{display:flex;gap:14px;align-items:flex-start}.c-info li svg{width:14px;height:14px;margin-top:3px;flex:none}
  .soc{display:flex;align-items:center;gap:14px;font-size:8.5px;margin-top:auto;padding-bottom:30px}
  .soc s{width:1px;height:10px;background:var(--ink)}

  .foot{background:var(--olive);color:#fff;display:flex;justify-content:space-between;align-items:center;height:48px;padding:0 46px;font-size:8.5px;letter-spacing:.1em}
  .foot em{display:inline-block;width:24px}

  @media (max-width:1000px){
    .nav nav{display:none}.nav{grid-template-columns:1fr auto}
    .hero{height:auto;padding-bottom:0}.hero-copy{padding:96px 24px 36px}.hero h1{font-size:56px}
    .hero-img{position:relative;width:100%;height:320px;clip-path:polygon(0 10%,100% 0,100% 100%,0 100%)}
    .featured,.services{padding-inline:24px}.cards,.svc-grid,.contact{grid-template-columns:1fr}
    .studio{grid-template-columns:1fr;height:auto}.studio-img{margin:24px}.studio-copy{padding:0 24px 32px}.plan{display:none}
    .stats{grid-template-columns:1fr 1fr;height:auto;row-gap:28px;padding:32px 0}.stats i{display:none}
    .services{height:auto;padding-bottom:40px}.svc-grid{margin:36px 0 0}
    .contact{height:auto}.c-intro{padding:40px 24px}.c-form{border:0;padding:24px}.c-info{padding:32px 24px}
  }
</style>
