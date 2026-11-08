import { a6 as ensure_array_like, a7 as attr, a8 as stringify, e as escape_html, a9 as attr_style } from "../../chunks/index.js";
function arrow($$renderer) {
  $$renderer.push(`<svg class="arrow svelte-1uha8ag" viewBox="0 0 30 8"><path d="M0 4h29M25 .5L29 4l-4 3.5"></path></svg>`);
}
function logo($$renderer) {
  $$renderer.push(`<span class="logo svelte-1uha8ag"><b class="svelte-1uha8ag">ARCHITY</b><i class="svelte-1uha8ag">ARCHITECTS</i></span>`);
}
function _page($$renderer) {
  const IMG = "/img/interior.jpg";
  const nav = ["Projects", "Studio", "Services", "Journal", "Contact"];
  const projects = [
    [
      "Desert Pavilion",
      "Residential",
      "Scottsdale, Arizona",
      "12% 62%",
      1.35
    ],
    [
      "The Ridge House",
      "Residential",
      "Santa Barbara, California",
      "88% 38%",
      1.5
    ],
    [
      "Harborview Loft",
      "Hospitality",
      "Copenhagen, Denmark",
      "45% 30%",
      1.4
    ]
  ];
  const stats = [
    ["145+", "Projects delivered"],
    ["21", "Years of practice"],
    ["36", "Design honors"],
    ["14", "Countries served"]
  ];
  const services = [
    [
      "Architecture",
      "Timeless architecture shaped by context, purpose, and detail. Designs that endure and inspire.",
      "M4 21V11a8 8 0 0 1 16 0v10M4 21h16M9 21v-7h6v7"
    ],
    [
      "Interior Design",
      "Thoughtful interiors that balance proportion, light, and materiality to elevate everyday living.",
      "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zM3 12h18M5 8h14"
    ],
    [
      "Planning",
      "Strategic planning and feasibility studies that lay the foundation for successful projects.",
      "M3 3h18v18H3zM3 21L21 3M3 12h9v9"
    ],
    [
      "Bespoke Furnishings",
      "Custom furniture and millwork crafted with precision to complete your vision.",
      "M3 6h18M3 11h13M16 11l5 5M3 16h13v4"
    ]
  ];
  $$renderer.push(`<div class="page svelte-1uha8ag"><header class="nav svelte-1uha8ag"><a href="/" aria-label="Archity" class="svelte-1uha8ag">`);
  logo($$renderer);
  $$renderer.push(`<!----></a> <nav class="svelte-1uha8ag"><!--[-->`);
  const each_array = ensure_array_like(nav);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let n = each_array[$$index];
    $$renderer.push(`<a class="label svelte-1uha8ag"${attr("href", `#${stringify(n.toLowerCase())}`)}>${escape_html(n)}</a>`);
  }
  $$renderer.push(`<!--]--></nav> <div class="tools svelte-1uha8ag"><span class="label"><a class="on svelte-1uha8ag" href="/">EN</a><s class="svelte-1uha8ag"></s><a href="/" class="svelte-1uha8ag">FR</a></span><u class="svelte-1uha8ag"></u> <button aria-label="Search" class="svelte-1uha8ag"><svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"><circle cx="8.5" cy="8.5" r="6"></circle><path d="M13 13l5 5"></path></svg></button> <button aria-label="Menu" class="svelte-1uha8ag"><svg viewBox="0 0 20 20" width="18" height="18" stroke="currentColor"><path d="M2 5h16M2 10h16M2 15h16"></path></svg></button></div></header> <section class="hero svelte-1uha8ag"><svg class="topo svelte-1uha8ag" viewBox="0 0 400 300" fill="none" stroke="currentColor" aria-hidden="true"><!--[-->`);
  const each_array_1 = ensure_array_like([60, 95, 130, 165, 200, 240]);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let r = each_array_1[i];
    $$renderer.push(`<ellipse cx="60" cy="300"${attr("rx", r * 1.5)}${attr("ry", r)}${attr("transform", `rotate(${stringify(-8 + i * 3)} 60 300)`)}></ellipse>`);
  }
  $$renderer.push(`<!--]--></svg> <div class="hero-copy svelte-1uha8ag"><p class="label eyebrow svelte-1uha8ag">Spaces. Crafted with intention.</p> <h1 class="svelte-1uha8ag">Architecture<br/>that elevates<br/><em class="svelte-1uha8ag">life.</em></h1> <p class="lead svelte-1uha8ag">Archity is an architecture and interiors studio creating timeless spaces that balance beauty, purpose, and place.</p> <a class="btn" href="#projects">Explore our work `);
  arrow($$renderer);
  $$renderer.push(`<!----></a></div> <div class="hero-img svelte-1uha8ag"><img${attr("src", IMG)} alt="Interior with timber floors and a floating staircase"/></div></section> <section id="projects" class="featured svelte-1uha8ag"><div class="row-head svelte-1uha8ag"><span class="label">Featured projects</span><a class="label svelte-1uha8ag" href="#projects">View all projects `);
  arrow($$renderer);
  $$renderer.push(`<!----></a></div> <div class="cards svelte-1uha8ag"><!--[-->`);
  const each_array_2 = ensure_array_like(projects);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let [t, k, l, pos, z] = each_array_2[$$index_2];
    $$renderer.push(`<a class="card svelte-1uha8ag" href="#projects"><div class="thumb svelte-1uha8ag"><img${attr("src", IMG)}${attr("alt", t)}${attr_style(`object-position:${stringify(pos)};transform:scale(${stringify(z)})`)}/></div> <div class="info svelte-1uha8ag"><div class="svelte-1uha8ag"><b class="label svelte-1uha8ag">${escape_html(t)}</b><span class="label svelte-1uha8ag">${escape_html(k)}</span></div><div class="svelte-1uha8ag"><span>${escape_html(l)}</span>`);
    arrow($$renderer);
    $$renderer.push(`<!----></div></div></a>`);
  }
  $$renderer.push(`<!--]--></div></section> <section id="studio" class="studio svelte-1uha8ag"><div class="studio-img svelte-1uha8ag"><img${attr("src", IMG)} alt="Dining and kitchen area" style="object-position:30% 58%"/></div> <div class="studio-copy svelte-1uha8ag"><p class="label tag svelte-1uha8ag">Our studio</p> <h2 class="svelte-1uha8ag">We design with clarity.<br/>We build with care.</h2> <p class="svelte-1uha8ag">Every project begins with listening – understanding how people live, work, and connect to their surroundings. Our process is collaborative, considered, and guided by craft, context, and enduring design.</p> <a class="btn ghost" href="#studio">Learn more about our studio</a></div> <div class="plan svelte-1uha8ag" aria-hidden="true"><svg viewBox="0 0 410 436" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice" class="svelte-1uha8ag"><path d="M40 30h330v376H40zM40 150h140M180 30v250h190M180 200h120M300 200v206M40 280h140v126M120 280v126"></path><circle cx="110" cy="90" r="22"></circle><circle cx="250" cy="120" r="30"></circle><circle cx="330" cy="330" r="26"></circle><path d="M60 330h50v50H60z"></path></svg></div></section> <section class="stats svelte-1uha8ag"><i class="svelte-1uha8ag"></i><!--[-->`);
  const each_array_3 = ensure_array_like(stats);
  for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
    let [n, l] = each_array_3[i];
    $$renderer.push(`<div class="svelte-1uha8ag"><strong class="svelte-1uha8ag">${escape_html(n)}</strong><span class="label svelte-1uha8ag">${escape_html(l)}</span></div><i class="svelte-1uha8ag"></i>`);
  }
  $$renderer.push(`<!--]--></section> <section id="services" class="services svelte-1uha8ag"><p class="label tag svelte-1uha8ag">Our services</p> <div class="svc-grid svelte-1uha8ag"><!--[-->`);
  const each_array_4 = ensure_array_like(services);
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let [t, d, path] = each_array_4[$$index_4];
    $$renderer.push(`<article class="svelte-1uha8ag"><svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width=".9" aria-hidden="true"><path${attr("d", path)}></path></svg> <h3 class="label svelte-1uha8ag">${escape_html(t)}</h3> <p class="svelte-1uha8ag">${escape_html(d)}</p> <a class="label svelte-1uha8ag" href="#services">Learn more `);
    arrow($$renderer);
    $$renderer.push(`<!----></a></article>`);
  }
  $$renderer.push(`<!--]--></div></section> <section id="contact" class="contact svelte-1uha8ag"><div class="c-intro svelte-1uha8ag"><h2 class="svelte-1uha8ag">Let's build something exceptional.</h2><hr class="svelte-1uha8ag"/><p class="svelte-1uha8ag">Tell us about your project and our team will be in touch</p></div> <form class="c-form svelte-1uha8ag"><label class="svelte-1uha8ag"><span class="label svelte-1uha8ag">Name</span><input required="" class="svelte-1uha8ag"/></label> <label class="svelte-1uha8ag"><span class="label svelte-1uha8ag">Email</span><input type="email" required="" class="svelte-1uha8ag"/></label> <label class="svelte-1uha8ag"><span class="label svelte-1uha8ag">Project type</span><select class="svelte-1uha8ag">`);
  $$renderer.option({}, ($$renderer2) => {
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Residential`);
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Hospitality`);
  });
  $$renderer.option({}, ($$renderer2) => {
    $$renderer2.push(`Interiors`);
  });
  $$renderer.push(`</select></label> <label class="svelte-1uha8ag"><span class="label svelte-1uha8ag">Tell us about your project</span><textarea rows="2" class="svelte-1uha8ag"></textarea></label> <button class="btn svelte-1uha8ag" type="submit">${escape_html("Send inquiry")} `);
  arrow($$renderer);
  $$renderer.push(`<!----></button></form> <div class="c-info svelte-1uha8ag"><div class="brand svelte-1uha8ag"><svg viewBox="0 0 40 52" width="34" height="46" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 51V22l10-6v35M14 51V8l10-6v49M24 51V28l12-6v29M2 51h38"></path></svg> `);
  logo($$renderer);
  $$renderer.push(`<!----></div> <ul class="svelte-1uha8ag"><li class="svelte-1uha8ag"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" class="svelte-1uha8ag"><path d="M8 15s5-4.5 5-8.5a5 5 0 0 0-10 0C3 10.500 8 15 8 15z"></path><circle cx="8" cy="6.500" r="1.800"></circle></svg><span>28 King Street, Studio 502<br/>Copenhagen, Denmark 1264</span></li> <li class="svelte-1uha8ag"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" class="svelte-1uha8ag"><rect x="1.500" y="3" width="13" height="10"></rect><path d="M1.500 4l6.500 5 6.500-5"></path></svg><span>hello@archity.com</span></li> <li class="svelte-1uha8ag"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" class="svelte-1uha8ag"><path d="M3 2h3l1 3-2 1.500a8 8 0 0 0 4.500 4.500L11 9l3 1v3a1.500 1.500 0 0 1-1.500 1.500A11 11 0 0 1 1.500 3.500 1.500 1.500 0 0 1 3 2z"></path></svg><span>+45 31 96 12 84</span></li></ul> <p class="label soc svelte-1uha8ag"><a href="#contact">Instagram</a><s class="svelte-1uha8ag"></s><a href="#contact">LinkedIn</a><s class="svelte-1uha8ag"></s><a href="#contact">Pinterest</a></p></div></section> <footer class="foot svelte-1uha8ag"><span>© 2026 ARCHITY. ALL RIGHTS RESERVED.</span><span>PRIVACY<em class="svelte-1uha8ag"></em>TERMS</span></footer></div>`);
}
export {
  _page as default
};
