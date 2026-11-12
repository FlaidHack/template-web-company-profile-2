<script>
  import { onMount, tick } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';

  const IMG = '/img/interior.jpg';

  const nav = [
    { id: 'work', label: 'Work' },
    { id: 'studio', label: 'Studio' },
    { id: 'services', label: 'Services' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const clients = [
    'Nordhaus',
    'Atelier Sable',
    'Mira Hotels',
    'Vela Living',
    'Form & Field',
    'Casa Luz'
  ];

  const stats = [
    ['145+', 'Projects delivered'],
    ['21', 'Years of practice'],
    ['36', 'Design honors'],
    ['14', 'Countries served']
  ];

  const filters = ['All', 'Residential', 'Hospitality', 'Interiors'];

  const projects = [
    {
      id: 'desert-pavilion',
      title: 'Desert Pavilion',
      category: 'Residential',
      location: 'Scottsdale, Arizona',
      year: 2025,
      area: '420 m²',
      pos: '12% 62%',
      zoom: 1.18,
      alt: 'Warm minimal living space opening onto a desert landscape',
      blurb: 'A low-slung home organised around a shaded courtyard, held between desert sky and stone.',
      body: [
        'Desert Pavilion is conceived as a sequence of shaded rooms around an open court. Deep overhangs and thick masonry walls temper the Arizona sun, while a narrow skylight traces the path of the day across the floor.',
        'The material palette stays close to the site: sand-coloured plaster, local stone, oak, and linen. Nothing is polished beyond what daily life will do to it over time.'
      ],
      scope: ['Architecture', 'Interiors', 'Landscape']
    },
    {
      id: 'the-ridge-house',
      title: 'The Ridge House',
      category: 'Residential',
      location: 'Santa Barbara, California',
      year: 2024,
      area: '360 m²',
      pos: '88% 38%',
      zoom: 1.5,
      alt: 'Sunlit interior with soft textiles and a view toward coastal hills',
      blurb: 'Three timber volumes step down a coastal ridge, framing the horizon from every room.',
      body: [
        'The house is arranged as three quiet volumes that follow the fall of the land. Each room opens to a different aspect — morning light to the east, the long ocean view to the west, and a sheltered garden to the north.',
        'A restrained palette of white oak, lime plaster, and hand-glazed tile gives the interiors a calm continuity. Furniture was designed in-house and made locally.'
      ],
      scope: ['Architecture', 'Interiors', 'Furniture']
    },
    {
      id: 'harborview-loft',
      title: 'Harborview Loft',
      category: 'Hospitality',
      location: 'Copenhagen, Denmark',
      year: 2024,
      area: '680 m²',
      pos: '45% 30%',
      zoom: 1.35,
      alt: 'Light-filled hospitality interior with pale timber and arched openings',
      blurb: 'A former grain warehouse reimagined as a calm, light-filled guesthouse on the harbour.',
      body: [
        'Working within the shell of a nineteenth-century warehouse, the design keeps the building’s raw structure visible and introduces a new layer of warm, tactile rooms. Original timber beams sit alongside pale plaster and brushed brass.',
        'The ground floor is conceived as a shared living room for the neighbourhood — part café, part library, part waiting room for the city.'
      ],
      scope: ['Architecture', 'Interiors', 'FF&E']
    },
    {
      id: 'atelier-sul',
      title: 'Atelier Sul',
      category: 'Interiors',
      location: 'Lisbon, Portugal',
      year: 2023,
      area: '240 m²',
      pos: '20% 48%',
      zoom: 1.45,
      alt: 'Gallery-like apartment interior with warm plaster walls and sculptural furniture',
      blurb: 'A gallery-like apartment for a collector, composed around light, art, and the ritual of gathering.',
      body: [
        'Atelier Sul transforms a tired apartment into a sequence of generous, adaptable rooms. A central salon can shift from dinner to exhibition, supported by discreet storage and a palette that lets the art lead.',
        'Lime-washed walls, cork floors, and a small collection of bespoke pieces create an interior that feels collected rather than decorated.'
      ],
      scope: ['Interiors', 'Furniture', 'Styling']
    },
    {
      id: 'dune-retreat',
      title: 'Dune Retreat',
      category: 'Hospitality',
      location: 'Uluwatu, Indonesia',
      year: 2023,
      area: '1,200 m²',
      pos: '65% 62%',
      zoom: 1.22,
      alt: 'Tropical retreat interior with an arched window and layered natural textures',
      blurb: 'A sequence of pavilions set into the dunes, designed to disappear into the landscape.',
      body: [
        'Dune Retreat is a small hotel of nine pavilions, each oriented to the ocean and sheltered by the existing vegetation. Paths between them are left unpaved, following the natural contours of the site.',
        'Local stone, teak, and woven bamboo are used throughout, detailed to weather gracefully in the salt air. The result is a place that feels grown rather than built.'
      ],
      scope: ['Architecture', 'Interiors', 'Landscape']
    },
    {
      id: 'court-house',
      title: 'Court House',
      category: 'Residential',
      location: 'Kyoto, Japan',
      year: 2022,
      area: '310 m²',
      pos: '42% 72%',
      zoom: 1.6,
      alt: 'Contemplative interior looking toward a moss garden courtyard',
      blurb: 'A contemporary machiya wrapped around a moss garden, balancing openness with quiet retreat.',
      body: [
        'Court House revisits the traditional Kyoto townhouse for a family of four. Rooms unfold around a central garden, with sliding screens allowing the plan to shift between intimate and open.',
        'The detail is deliberately quiet: dark timber, washi, river stone, and a single opening that frames the garden like a painting.'
      ],
      scope: ['Architecture', 'Interiors', 'Garden']
    }
  ];

  const services = [
    {
      title: 'Architecture',
      desc: 'New homes, pavilions, and adaptive reuse — designed around site, climate, and the way you want to live.',
      tags: ['Residential', 'Hospitality', 'Adaptive reuse'],
      icon: 'M4 21V11a8 8 0 0 1 16 0v10M4 21h16M9 21v-7h6v7'
    },
    {
      title: 'Interior Design',
      desc: 'Interiors that balance proportion, light, and materiality — from full schemes to the final layer.',
      tags: ['Concept', 'FF&E', 'Styling'],
      icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zM3 12h18M5 8h14'
    },
    {
      title: 'Planning',
      desc: 'Feasibility studies, master planning, and permitting — clear thinking before the first line is drawn.',
      tags: ['Feasibility', 'Masterplan', 'Permits'],
      icon: 'M3 3h18v18H3zM3 21L21 3M3 12h9v9'
    },
    {
      title: 'Bespoke Furnishings',
      desc: 'One-off furniture and millwork made with trusted craftspeople, designed to complete the whole.',
      tags: ['Furniture', 'Millwork', 'Objects'],
      icon: 'M3 6h18M3 11h13M16 11l5 5M3 16h13v4'
    }
  ];

  const process = [
    ['Listen', 'A focused discovery phase to understand the brief, the site, and the life the space needs to hold.'],
    ['Frame', 'We test options, agree the concept, and set a clear path forward — programme, budget, and ambition.'],
    ['Design', 'Detail development through regular reviews, with transparent decisions and no surprises.'],
    ['Realise', 'On-site collaboration with builders and makers, from groundworks through to the final handover.']
  ];

  const principles = [
    ['Context before concept', 'We begin with the site, the climate, and the rituals of daily life. The idea follows the place — never the other way around.'],
    ['Material honesty', 'Stone, timber, lime, and light — used for what they are, and allowed to age with grace.'],
    ['The long view', 'We measure success in decades, not seasons. A good building should ask less of the world over time, not more.']
  ];

  const people = [
    ['Aria Lindqvist', 'Founding partner', 'Architecture', 'Copenhagen'],
    ['Jonas Reuter', 'Partner', 'Interiors', 'Copenhagen'],
    ['Mei Tanaka', 'Associate', 'Design', 'Kyoto'],
    ['Sofia Almeida', 'Associate', 'Planning', 'Lisbon']
  ];

  const articles = [
    {
      id: 'quiet-geometry-of-light',
      title: 'The quiet geometry of light',
      category: 'Essay',
      date: 'March 2026',
      read: '6 min read',
      art: 'light',
      author: 'Aria Lindqvist',
      excerpt: 'How we plan for the sun before we draw a single wall — and why daylight is the first material in every project.',
      body: [
        'Before we draw a wall, we watch how light arrives. In the northern hemisphere that means studying the low winter sun, the long summer evenings, and the way a room changes character between eight in the morning and four in the afternoon. Daylight is not a finish we add at the end; it is the first material we work with.',
        'We think of openings as instruments. A high window brings a wash of light down a wall. A deep reveal makes a seat. A narrow slot cuts a line across a floor and marks the passage of the day. None of these moves are decorative — each one shapes how a room feels and how it is used.',
        'The most successful spaces we have made are the ones where the plan and the sun agree. When they do, a room needs less: fewer lights, fewer objects, less effort to feel at ease. Good daylight is a kind of quiet architecture.',
        'It is also a form of sustainability. A building that reads its climate carefully needs less energy to stay comfortable. But more importantly, it gives people a reason to look up, to notice the season, to feel oriented in time. That is not a small thing.'
      ]
    },
    {
      id: 'on-material-honesty',
      title: 'On material honesty',
      category: 'Craft',
      date: 'January 2026',
      read: '4 min read',
      art: 'material',
      author: 'Jonas Reuter',
      excerpt: 'Why we let timber be timber and stone show its age — a note on choosing materials that get better with time.',
      body: [
        'A material should be allowed to behave like itself. Timber moves with the seasons; stone carries the marks of how it was quarried; lime plaster softens and settles. When we fight those qualities, we spend a great deal of effort making something look like something it is not.',
        'In our studio, the material palette often begins with a single decision: what will this room be made of at its core? From there, everything else follows — the details, the junctions, the way light lands. A palette of three or four honest materials will almost always be richer than a room full of finishes.',
        'We also think about repair. A surface that can be patched, sanded, or re-limewashed will outlive one that must be replaced. This is not nostalgia; it is practical design. The most sustainable detail is one that someone can maintain in twenty years without special knowledge.',
        'Honesty does not mean roughness. A precisely made joint, a carefully set stone, a floor that meets a wall without a shadow gap — these are quiet pleasures. They reward attention, and they get better as the building settles into use.'
      ]
    },
    {
      id: 'designing-for-the-long-view',
      title: 'Designing for the long view',
      category: 'Practice',
      date: 'November 2025',
      read: '5 min read',
      art: 'longview',
      author: 'Sofia Almeida',
      excerpt: 'The most sustainable building is the one you never want to replace. A few thoughts on designing for decades, not seasons.',
      body: [
        'We are often asked what makes a project sustainable. The answer is rarely a single product or a certification. It is a set of decisions made early: orient the building well, keep the structure simple, use materials that can be repaired, and design rooms that people will still want to use in thirty years.',
        'That last point is harder to measure. Trends move quickly, and it is tempting to design for the photograph. But a building’s carbon story is decided as much by how long it stays loved as by what it is made of. Adaptability is a form of environmental care.',
        'On a recent house, we kept the structural span generous and the partitions few. The family uses the main room differently in summer and winter; a study becomes a guest room when needed. None of this required extra technology — only a little more thought at the planning stage.',
        'The long view is not a style. It is a discipline of asking, again and again: will this still make sense when the novelty has worn off? If the answer is yes, we are on the right track.'
      ]
    }
  ];

  let menuOpen = $state(false);
  let menuButton = $state(null);
  let menuClose = $state(null);
  let scrolled = $state(false);
  let activeSection = $state('');
  let filter = $state('All');
  let sent = $state(false);
  let inquiryName = $state('');

  let activeProject = $state(null);
  let projectDialog = $state(null);
  let projectSheet = $state(null);

  let activeArticle = $state(null);
  let articleDialog = $state(null);
  let articleSheet = $state(null);

  const filteredProjects = $derived(
    filter === 'All' ? projects : projects.filter((project) => project.category === filter)
  );

  let hoveredProject = $state(null);
  const previewProject = $derived(
    hoveredProject && filteredProjects.some((project) => project.id === hoveredProject.id)
      ? hoveredProject
      : filteredProjects[0]
  );

  function reveal(node, { delay = 0 } = {}) {
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    node.classList.add('reveal-pending');
    node.style.transition = 'opacity .9s var(--ease), transform .9s var(--ease)';
    node.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.remove('reveal-pending');
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 18;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeSection = entry.target.id;
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    for (const id of ['work', 'studio', 'services', 'journal', 'contact']) {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      sectionObserver.disconnect();
    };
  });

  $effect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  });

  async function openMenu() {
    menuOpen = true;
    await tick();
    menuClose?.focus();
  }

  async function closeMenu(restoreFocus = true) {
    menuOpen = false;
    if (restoreFocus) {
      await tick();
      menuButton?.focus();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && menuOpen) closeMenu();
  }

  async function openProject(project) {
    activeProject = project;
    await tick();
    if (!projectDialog.open) projectDialog.showModal();
    projectSheet?.scrollTo({ top: 0 });
  }

  function handleProjectClose() {
    activeProject = null;
  }

  function handleProjectBackdrop(event) {
    if (event.target === projectDialog) projectDialog.close();
  }

  function nextProject() {
    const index = projects.findIndex((project) => project.id === activeProject.id);
    activeProject = projects[(index + 1) % projects.length];
    tick().then(() => projectSheet?.scrollTo({ top: 0 }));
  }

  async function openArticle(article) {
    activeArticle = article;
    await tick();
    if (!articleDialog.open) articleDialog.showModal();
    articleSheet?.scrollTo({ top: 0 });
  }

  function handleArticleClose() {
    activeArticle = null;
  }

  function handleArticleBackdrop(event) {
    if (event.target === articleDialog) articleDialog.close();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    inquiryName = String(data.get('name') ?? '').trim();
    sent = true;
  }

  function resetForm() {
    sent = false;
    inquiryName = '';
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#snippet arrow()}
  <svg class="arrow" viewBox="0 0 30 8" aria-hidden="true">
    <path d="M0 4h29M25 .5L29 4l-4 3.5" />
  </svg>
{/snippet}

{#snippet logo()}
  <span class="logo">
    <b>ARCHITY</b>
    <i>Architecture &amp; Interiors</i>
  </span>
{/snippet}

{#snippet journalArt(kind)}
  <svg class="art-svg" viewBox="0 0 400 260" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
    {#if kind === 'light'}
      <path d="M0 205h400M200 0v260" />
      <circle cx="200" cy="205" r="130" />
      <circle cx="200" cy="205" r="95" />
      <circle cx="200" cy="205" r="60" />
      <circle cx="200" cy="75" r="18" />
      <path d="M75 205v-28M325 205v-28M45 205v-16M355 205v-16" />
    {:else if kind === 'material'}
      <path d="M0 70h400M0 110h400M0 150h400M0 190h400" />
      <path d="M90 50v40M250 90v40M140 130v40M300 170v40M40 190v40" />
      <path d="M0 30h400M0 230h400" />
      <rect x="170" y="90" width="60" height="60" />
    {:else}
      <path d="M0 220h60v-40h60v-40h60v-60h60V40h60" />
      <path d="M0 240h400M40 260V220M120 260v-40M200 260v-40M280 260v-40M360 260v-40" />
      <circle cx="330" cy="80" r="26" />
      <path d="M330 106v100" />
    {/if}
  </svg>
{/snippet}

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header" class:scrolled>
  <a class="brand" href="#top" aria-label="Archity — home">{@render logo()}</a>

  <nav class="desktop-nav" aria-label="Primary">
    {#each nav as item}
      <a href="#{item.id}" class:active={activeSection === item.id}>{item.label}</a>
    {/each}
  </nav>

  <div class="header-actions">
    <a class="header-cta" href="#contact">
      <span>Start a project</span>
      {@render arrow()}
    </a>
    <button
      class="menu-button"
      bind:this={menuButton}
      aria-label="Open menu"
      aria-expanded={menuOpen}
      onclick={openMenu}
    >
      <span></span>
      <span></span>
    </button>
  </div>
</header>

{#if menuOpen}
  <div
    class="menu-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Site menu"
    transition:fly={{ y: -24, duration: 320 }}
  >
    <div class="menu-top">
      <span class="brand menu-brand">{@render logo()}</span>
      <button class="menu-close" bind:this={menuClose} aria-label="Close menu" onclick={() => closeMenu()}>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav class="menu-nav" aria-label="Mobile">
      {#each nav as item, i}
        <a href="#{item.id}" onclick={() => closeMenu(false)}>
          <span class="label">0{i + 1}</span>
          <span>{item.label}</span>
        </a>
      {/each}
    </nav>

    <div class="menu-foot">
      <a href="mailto:hello@archity.com">hello@archity.com</a>
      <p class="label">Copenhagen — 55.6761° N, 12.5683° E</p>
    </div>
  </div>
{/if}

<main id="main">
  <section class="hero" id="top" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="label eyebrow"><span></span>Architecture &amp; interiors — Copenhagen</p>
      <h1 id="hero-title">Architecture<br />that elevates<br /><em>life.</em></h1>
      <p class="hero-lead">
        Archity is an architecture and interiors studio shaping calm, enduring spaces for living,
        gathering, and belonging.
      </p>
      <div class="hero-actions">
        <a class="btn" href="#work">Explore our work {@render arrow()}</a>
        <a class="text-link" href="#studio">Meet the studio {@render arrow()}</a>
      </div>
      <div class="hero-meta">
        <span>Est. 2005</span>
        <span>21 years of practice</span>
        <span>Copenhagen — worldwide</span>
      </div>
    </div>

    <figure class="hero-media">
      <img
        src={IMG}
        alt="Sunlit living room with an arched window framing a green valley"
        fetchpriority="high"
      />
      <span class="hero-frame" aria-hidden="true"></span>
      <div class="scroll-cue" aria-hidden="true"><span></span><small>Scroll</small></div>
      <figcaption class="hero-caption">
        <span class="label">Villa Aurora</span>
        <span>Uluwatu, 2025</span>
      </figcaption>
    </figure>
  </section>

  <section class="clients" aria-label="Selected clients">
    <div class="clients-label">
      <span class="label">Selected clients</span>
      <span class="label">2005 — 2026</span>
    </div>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        {#each [...clients, ...clients] as client}
          <span>{client}</span>
        {/each}
      </div>
    </div>
  </section>

  <section id="work" class="work" aria-labelledby="work-title">
    <div class="section-head work-head">
      <div use:reveal>
        <p class="label">01 — Selected work</p>
        <h2 id="work-title">Spaces with a<br /><em>sense of place.</em></h2>
      </div>
      <div class="head-right" use:reveal={{ delay: 100 }}>
        <p>
          A selection of homes, retreats, and interiors across fourteen countries — each shaped by
          its landscape, its light, and the people who live there.
        </p>
        <div class="filters" role="group" aria-label="Filter projects">
          {#each filters as option}
            <button
              class:active={filter === option}
              aria-pressed={filter === option}
              onclick={() => {
                filter = option;
                hoveredProject = null;
              }}
            >
              {option}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <p class="sr-only" aria-live="polite">{filteredProjects.length} projects shown</p>

    <div class="work-body">
      <div class="project-index" use:reveal>
        {#each filteredProjects as project, i (project.id)}
          <button
            class="project-row"
            animate:flip={{ duration: 450 }}
            onmouseenter={() => (hoveredProject = project)}
            onfocus={() => (hoveredProject = project)}
            onclick={() => openProject(project)}
            aria-label="View {project.title}, {project.location}"
          >
            <span class="row-index">0{i + 1}</span>
            <span class="row-main">
              <span class="row-title">{project.title}</span>
              <span class="row-meta">
                <span>{project.category}</span>
                <span>{project.location}</span>
              </span>
            </span>
            <span class="row-year">{project.year}</span>
            <span class="row-arrow">{@render arrow()}</span>
          </button>
        {/each}
      </div>

      <div class="work-preview" aria-hidden="true" use:reveal={{ delay: 120 }}>
        <div class="work-preview-media">
          <img
            src={IMG}
            alt=""
            loading="lazy"
            style="object-position:{previewProject.pos};--zoom:{previewProject.zoom}"
          />
          <span class="preview-index">
            0{filteredProjects.findIndex((project) => project.id === previewProject.id) + 1}
          </span>
        </div>
        <div class="preview-caption">
          <span class="label">{previewProject.category}</span>
          <span>{previewProject.location} — {previewProject.year}</span>
        </div>
      </div>
    </div>
  </section>

  <section id="studio" class="studio" aria-labelledby="studio-title">
    <div class="studio-media" use:reveal>
      <img
        src={IMG}
        alt="Quiet studio interior with soft plaster, timber, and natural light"
        style="object-position:26% 58%"
        loading="lazy"
      />
      <div class="studio-plaque">
        <span class="label">The studio</span>
        <span>Copenhagen — est. 2005</span>
      </div>
      <div class="studio-plan" aria-hidden="true">
        <svg viewBox="0 0 410 436" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid meet">
          <path
            d="M40 30h330v376H40zM40 150h140M180 30v250h190M180 200h120M300 200v206M40 280h140v126M120 280v126"
          />
          <circle cx="110" cy="90" r="22" />
          <circle cx="250" cy="120" r="30" />
          <circle cx="330" cy="330" r="26" />
          <path d="M60 330h50v50H60z" />
        </svg>
        <span class="label">Studio 502 — plan</span>
      </div>
    </div>

    <div class="studio-copy" use:reveal={{ delay: 120 }}>
      <p class="label">02 — The studio</p>
      <h2 id="studio-title">Built on<br /><em>listening.</em></h2>
      <p>
        Every project begins with a conversation — about how you live, what you love, and how a
        place should feel at seven in the morning. We bring clarity to those answers, shaping
        spaces that are calm, considered, and quietly generous.
      </p>
      <p>
        Founded in Copenhagen in 2005, Archity is a team of architects, interior designers, and
        makers working across residential and hospitality projects worldwide.
      </p>
      <div class="studio-sign">
        <p class="signature">Aria Lindqvist</p>
        <p class="label">Founding partner</p>
      </div>
      <a class="text-link" href="#people">Meet the people {@render arrow()}</a>
    </div>
  </section>

  <div class="stats" aria-label="Studio facts">
    {#each stats as [value, label], i}
      <div use:reveal={{ delay: i * 70 }}>
        <strong>{value}</strong>
        <span class="label">{label}</span>
      </div>
    {/each}
  </div>

  <section class="philosophy" aria-labelledby="philosophy-title">
    <svg class="phil-topo" viewBox="0 0 600 600" fill="none" stroke="currentColor" aria-hidden="true">
      {#each [80, 120, 165, 215, 270, 330] as r, i}
        <ellipse cx="300" cy="300" rx={r * 1.25} ry={r} transform="rotate({-12 + i * 4} 300 300)" />
      {/each}
    </svg>

    <div class="philosophy-inner">
      <div class="phil-grid">
        <div class="phil-head" use:reveal>
          <p class="label">03 — Philosophy</p>
          <h2 id="philosophy-title">
            Good architecture doesn’t announce itself. <em>It settles in.</em>
          </h2>
        </div>

        <div class="principles">
          {#each principles as [title, text], i}
            <div class="principle" use:reveal={{ delay: i * 80 }}>
              <span class="principle-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          {/each}
        </div>
      </div>

      <figure class="testimonial" use:reveal>
        <blockquote>
          “Archity gave us a home that feels like it has always been here.”
        </blockquote>
        <figcaption>
          <span>Elena Voss</span>
          <span class="label">The Ridge House, 2024</span>
        </figcaption>
      </figure>
    </div>
  </section>

  <section id="services" class="services" aria-labelledby="services-title">
    <div class="section-head">
      <div use:reveal>
        <p class="label">04 — Services</p>
        <h2 id="services-title">From first sketch<br />to <em>final detail.</em></h2>
      </div>
      <p class="head-right" use:reveal={{ delay: 100 }}>
        A single team from concept to completion — or the specific expertise your project needs.
        We shape the whole, then care for every part of it.
      </p>
    </div>

    <div class="service-grid" use:reveal>
      {#each services as service, i}
        <article class="service-card">
          <div class="service-top">
            <span class="service-number">0{i + 1}</span>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width=".8" aria-hidden="true">
              <path d={service.icon} />
            </svg>
          </div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
          <ul class="service-tags">
            {#each service.tags as tag}
              <li>{tag}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>

    <div class="process" use:reveal>
      <div class="process-intro">
        <p class="label">How we work</p>
        <h3>Four phases. One conversation.</h3>
        <p>Clear decisions, open dialogue, and no surprises — from the first site visit to handover.</p>
      </div>
      <ol class="process-list">
        {#each process as [title, text], i}
          <li>
            <span class="label">0{i + 1}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <section id="people" class="people" aria-labelledby="people-title">
    <div class="section-head">
      <div use:reveal>
        <p class="label">05 — People</p>
        <h2 id="people-title">Small by design.<br /><em>Deep by experience.</em></h2>
      </div>
      <p class="head-right" use:reveal={{ delay: 100 }}>
        A close-knit team of architects, interior designers, and makers — supported by a trusted
        network of engineers, builders, and craftspeople.
      </p>
    </div>

    <div class="people-grid">
      {#each people as [name, role, discipline, based], i}
        <article class="person" use:reveal={{ delay: i * 70 }}>
          <span class="person-number">0{i + 1}</span>
          <h3>{name}</h3>
          <p class="label">{role} — {discipline}</p>
          <p class="person-based">Based in {based}</p>
        </article>
      {/each}

      <article class="join-card" use:reveal={{ delay: 280 }}>
        <span class="label">Open positions</span>
        <h3>Join the studio</h3>
        <p>We are always looking for thoughtful architects, designers, and makers.</p>
        <a class="text-link" href="mailto:careers@archity.com">careers@archity.com {@render arrow()}</a>
      </article>
    </div>
  </section>

  <section id="journal" class="journal" aria-labelledby="journal-title">
    <div class="section-head">
      <div use:reveal>
        <p class="label">06 — Journal</p>
        <h2 id="journal-title">Notes on<br /><em>making places.</em></h2>
      </div>
      <p class="head-right" use:reveal={{ delay: 100 }}>
        Essays, observations, and works in progress from the studio — on light, material, and the
        long life of buildings.
      </p>
    </div>

    <div class="journal-grid">
      {#each articles as article, i}
        <article class="entry" use:reveal={{ delay: i * 80 }}>
          <button onclick={() => openArticle(article)} aria-label="Read {article.title}">
            <div class="entry-art">
              {@render journalArt(article.art)}
            </div>
            <div class="entry-meta">
              <span>{article.category}</span>
              <span>{article.date} — {article.read}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <span class="entry-link">Read entry {@render arrow()}</span>
          </button>
        </article>
      {/each}
    </div>
  </section>

  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact-intro" use:reveal>
      <p class="label">07 — Contact</p>
      <h2 id="contact-title">Let’s make something <em>enduring.</em></h2>
      <p class="contact-lead">
        Tell us about your project. We’ll reply within two working days to arrange a first
        conversation.
      </p>

      <div class="contact-details">
        <div>
          <span class="label">New business</span>
          <a href="mailto:hello@archity.com">hello@archity.com</a>
        </div>
        <div>
          <span class="label">Telephone</span>
          <a href="tel:+4531961284">+45 31 96 12 84</a>
        </div>
        <div>
          <span class="label">Studio</span>
          <address>28 King Street, Studio 502<br />Copenhagen K, 1264, Denmark</address>
        </div>
        <div>
          <span class="label">Hours</span>
          <span>Mon–Fri, 09:00–17:00 CET</span>
        </div>
      </div>

      <p class="availability"><i></i>Currently accepting projects for 2027</p>
    </div>

    <div class="form-wrap" use:reveal={{ delay: 120 }}>
      {#if sent}
        <div class="success">
          <span class="success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M4 12.5l5.2 5L20 6.5" />
            </svg>
          </span>
          <p class="label">Inquiry received</p>
          <h3>Thank you{inquiryName ? `, ${inquiryName}` : ''}. Your note is on its way.</h3>
          <p>
            We’ll be in touch within two working days. In the meantime, take a look at some of our
            recent work.
          </p>
          <button class="btn ghost" onclick={resetForm}>Send another inquiry {@render arrow()}</button>
        </div>
      {:else}
        <form class="contact-form" onsubmit={handleSubmit}>
          <div class="field-row">
            <label class="field">
              <span class="label">Name</span>
              <input name="name" type="text" autocomplete="name" required />
            </label>
            <label class="field">
              <span class="label">Email</span>
              <input name="email" type="email" autocomplete="email" required />
            </label>
          </div>

          <div class="field-row">
            <label class="field">
              <span class="label">Project type</span>
              <select name="type" required>
                <option value="" disabled selected>Select one</option>
                <option>Residential</option>
                <option>Hospitality</option>
                <option>Interiors</option>
                <option>Other</option>
              </select>
            </label>
            <label class="field">
              <span class="label">Location</span>
              <input name="location" type="text" autocomplete="address-level2" />
            </label>
          </div>

          <label class="field">
            <span class="label">Budget</span>
            <select name="budget">
              <option value="" disabled selected>Select a range</option>
              <option>Under €250k</option>
              <option>€250k – €500k</option>
              <option>€500k – €1m</option>
              <option>€1m +</option>
            </select>
          </label>

          <label class="field">
            <span class="label">Tell us about your project</span>
            <textarea name="message" rows="3" placeholder="Site, ambition, timeline — a few lines is enough."></textarea>
          </label>

          <div class="form-foot">
            <p>By sending this note you agree to be contacted about your inquiry.</p>
            <button class="btn" type="submit">Send inquiry {@render arrow()}</button>
          </div>
        </form>
      {/if}
    </div>
  </section>
</main>

<footer class="footer">
  <div class="footer-top">
    <div class="footer-brand">
      {@render logo()}
      <p>
        Architecture and interiors made with intention. A Copenhagen studio working across the
        world since 2005.
      </p>
    </div>

    <div class="footer-col">
      <span class="label">Explore</span>
      {#each nav as item}
        <a href="#{item.id}">{item.label}</a>
      {/each}
    </div>

    <div class="footer-col">
      <span class="label">Studio</span>
      <a href="mailto:hello@archity.com">hello@archity.com</a>
      <a href="tel:+4531961284">+45 31 96 12 84</a>
      <span>28 King Street, Studio 502<br />Copenhagen K, 1264</span>
    </div>

    <div class="footer-col">
      <span class="label">Follow</span>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
    </div>
  </div>

  <div class="footer-word" aria-hidden="true">ARCHITY</div>

  <div class="footer-bottom">
    <span>© 2026 Archity Studio ApS. All rights reserved.</span>
    <span>CVR 41 29 88 06 — Copenhagen, Denmark</span>
    <a href="#top">Back to top ↑</a>
  </div>
</footer>

<dialog
  bind:this={projectDialog}
  class="modal"
  aria-labelledby="project-title"
  onclose={handleProjectClose}
  onclick={handleProjectBackdrop}
>
  {#if activeProject}
    <button class="modal-close" onclick={() => projectDialog.close()} aria-label="Close project">
      <span></span>
      <span></span>
    </button>

    <article class="modal-sheet" bind:this={projectSheet}>
      <div class="modal-media">
        <img src={IMG} alt={activeProject.alt} style="object-position:{activeProject.pos}" />
        <span class="label">{activeProject.location} — {activeProject.year}</span>
      </div>

      <div class="modal-body">
        <p class="label">{activeProject.category}</p>
        <h2 id="project-title">{activeProject.title}</h2>
        <p class="modal-dek">{activeProject.blurb}</p>

        {#each activeProject.body as paragraph}
          <p>{paragraph}</p>
        {/each}

        <dl class="facts">
          <div>
            <dt class="label">Location</dt>
            <dd>{activeProject.location}</dd>
          </div>
          <div>
            <dt class="label">Year</dt>
            <dd>{activeProject.year}</dd>
          </div>
          <div>
            <dt class="label">Area</dt>
            <dd>{activeProject.area}</dd>
          </div>
          <div>
            <dt class="label">Status</dt>
            <dd>Completed</dd>
          </div>
        </dl>

        <div class="scope-list">
          {#each activeProject.scope as item}
            <span>{item}</span>
          {/each}
        </div>

        <button class="next-link" onclick={nextProject}>
          Next project
          {@render arrow()}
        </button>
      </div>
    </article>
  {/if}
</dialog>

<dialog
  bind:this={articleDialog}
  class="modal"
  aria-labelledby="article-title"
  onclose={handleArticleClose}
  onclick={handleArticleBackdrop}
>
  {#if activeArticle}
    <button class="modal-close" onclick={() => articleDialog.close()} aria-label="Close article">
      <span></span>
      <span></span>
    </button>

    <article class="article-sheet" bind:this={articleSheet}>
      <div class="article-head">
        <span class="label">Archity journal — {activeArticle.read}</span>
        {@render journalArt(activeArticle.art)}
      </div>

      <div class="article-content">
        <p class="label">{activeArticle.category} — {activeArticle.date}</p>
        <h2 id="article-title">{activeArticle.title}</h2>
        <p class="article-dek">{activeArticle.excerpt}</p>

        <div class="article-body">
          {#each activeArticle.body as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>

        <p class="article-signoff">— {activeArticle.author}, Archity</p>
      </div>
    </article>
  {/if}
</dialog>

<style>
  /* ---------- Header ---------- */
  .site-header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 120;
    height: 74px;
    padding: 0 var(--pad);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(247, 245, 239, .86);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid transparent;
    transition: background .3s var(--ease), border-color .3s var(--ease);
  }

  .site-header.scrolled {
    background: rgba(247, 245, 239, .95);
    border-color: var(--line);
  }

  .brand {
    display: inline-flex;
    flex: none;
  }

  .logo {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    color: inherit;
  }

  .logo b {
    font: 500 23px/1 var(--serif);
    letter-spacing: .22em;
    margin-right: -.22em;
  }

  .logo i {
    margin-top: 6px;
    font: 400 6.5px/1 var(--sans);
    font-style: normal;
    letter-spacing: .24em;
    margin-right: -.24em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .desktop-nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 38px;
  }

  .desktop-nav a {
    position: relative;
    padding: 8px 0;
    color: var(--muted);
    font: 500 10px/1 var(--sans);
    letter-spacing: .16em;
    text-transform: uppercase;
    transition: color .25s;
  }

  .desktop-nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--olive);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .35s var(--ease);
  }

  .desktop-nav a:hover,
  .desktop-nav a.active {
    color: var(--ink);
  }

  .desktop-nav a:hover::after,
  .desktop-nav a.active::after {
    transform: scaleX(1);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .header-cta {
    display: flex;
    align-items: center;
    gap: 18px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--ink);
    font: 500 9.5px/1 var(--sans);
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .header-cta:hover .arrow {
    transform: translateX(4px);
  }

  .menu-button {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 42px;
    height: 42px;
    cursor: pointer;
  }

  .menu-button span {
    display: block;
    width: 24px;
    height: 1px;
    margin-left: auto;
    background: var(--ink);
    transition: width .25s var(--ease);
  }

  .menu-button span:last-child {
    width: 16px;
  }

  .menu-button:hover span:last-child {
    width: 24px;
  }

  /* ---------- Mobile menu ---------- */
  .menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 300;
    display: flex;
    flex-direction: column;
    padding: 24px var(--pad) 36px;
    background: var(--olive-deep);
    color: var(--cream);
    overflow-y: auto;
  }

  .menu-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .menu-overlay .logo i {
    color: rgba(244, 241, 232, .5);
  }

  .menu-close {
    position: relative;
    flex: none;
    width: 46px;
    height: 46px;
    border: 1px solid rgba(244, 241, 232, .32);
    border-radius: 50%;
    color: var(--cream);
    cursor: pointer;
    transition: background .25s, color .25s;
  }

  .menu-close:hover {
    background: var(--cream);
    color: var(--ink);
  }

  .menu-close span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 17px;
    height: 1px;
    background: currentColor;
  }

  .menu-close span:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .menu-close span:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 42px 0;
  }

  .menu-nav a {
    display: flex;
    align-items: baseline;
    gap: 26px;
    padding: 13px 0;
    border-bottom: 1px solid rgba(244, 241, 232, .16);
    font: 400 clamp(38px, 9vw, 54px)/1.1 var(--serif);
    transition: color .25s;
  }

  .menu-nav a:first-child {
    border-top: 1px solid rgba(244, 241, 232, .16);
  }

  .menu-nav a:hover {
    color: #c9cca6;
  }

  .menu-nav .label {
    color: rgba(244, 241, 232, .42);
    font-size: 8.5px;
  }

  .menu-foot {
    display: flex;
    justify-content: space-between;
    gap: 22px;
    flex-wrap: wrap;
    padding-top: 20px;
    border-top: 1px solid rgba(244, 241, 232, .16);
    color: rgba(244, 241, 232, .7);
    font-size: 12px;
  }

  .menu-foot .label {
    color: rgba(244, 241, 232, .42);
    font-size: 8.5px;
  }

  /* ---------- Hero ---------- */
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 47%) minmax(0, 53%);
    min-height: calc(100svh - 74px);
    margin-top: 74px;
    border-bottom: 1px solid var(--line);
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(42px, 6vh, 82px) var(--pad);
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
    color: var(--muted);
    font-size: 9px;
  }

  .eyebrow span {
    width: 36px;
    height: 1px;
    background: var(--ink);
  }

  .hero h1 {
    margin-bottom: 30px;
    font-size: clamp(54px, 7.1vw, 112px);
    line-height: .97;
    letter-spacing: -.025em;
  }

  .hero h1 em {
    color: var(--olive-soft);
  }

  .hero-lead {
    max-width: 390px;
    margin-bottom: 36px;
    color: var(--muted);
    font-size: 13.5px;
    line-height: 1.8;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
  }

  .hero-meta {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: clamp(36px, 6vh, 72px);
    padding-top: 18px;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 9px;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .hero-meta span + span {
    position: relative;
    padding-left: 30px;
  }

  .hero-meta span + span::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--olive);
    transform: translateY(-50%);
  }

  .hero-media {
    position: relative;
    min-height: 520px;
    overflow: hidden;
    background: var(--paper);
  }

  .hero-media img {
    object-position: center 55%;
    animation: heroZoom 1.9s var(--ease) both;
  }

  .hero-frame {
    position: absolute;
    inset: clamp(14px, 1.6vw, 24px);
    border: 1px solid rgba(255, 255, 255, .48);
    pointer-events: none;
  }

  .hero-caption {
    position: absolute;
    left: clamp(28px, 3vw, 52px);
    bottom: clamp(28px, 3vw, 48px);
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #fff;
    font-size: 10px;
    letter-spacing: .06em;
    text-shadow: 0 1px 24px rgba(20, 20, 16, .3);
  }

  .hero-caption .label {
    color: rgba(255, 255, 255, .78);
    font-size: 8.5px;
  }

  .scroll-cue {
    position: absolute;
    right: clamp(30px, 3vw, 50px);
    bottom: clamp(28px, 3vw, 46px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #fff;
  }

  .scroll-cue span {
    position: relative;
    display: block;
    width: 1px;
    height: 54px;
    background: rgba(255, 255, 255, .42);
    overflow: hidden;
  }

  .scroll-cue span::after {
    content: '';
    position: absolute;
    left: 0;
    top: -50%;
    width: 1px;
    height: 50%;
    background: #fff;
    animation: scrollLine 2.2s var(--ease) infinite;
  }

  .scroll-cue small {
    font: 500 8px/1 var(--sans);
    letter-spacing: .22em;
    text-transform: uppercase;
  }

  /* ---------- Clients ---------- */
  .clients {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
    align-items: center;
    gap: 24px;
    min-height: 78px;
    padding: 0 var(--pad);
    border-bottom: 1px solid var(--line);
    overflow: hidden;
  }

  .clients-label {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding-right: 24px;
    border-right: 1px solid var(--line);
    color: var(--muted);
  }

  .clients-label .label {
    font-size: 8.5px;
  }

  .marquee {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 36s linear infinite;
  }

  .marquee:hover .marquee-track {
    animation-play-state: paused;
  }

  .marquee-track span {
    position: relative;
    padding: 0 30px;
    color: var(--olive);
    font: 500 13px/1 var(--serif);
    letter-spacing: .16em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .marquee-track span::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--line);
    transform: translateY(-50%);
  }

  /* ---------- Section heads ---------- */
  .section-head {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    align-items: end;
    gap: clamp(30px, 6vw, 100px);
    margin-bottom: clamp(44px, 6vw, 80px);
  }

  .section-head .label {
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 9px;
  }

  .section-head h2 {
    font-size: clamp(40px, 5.2vw, 72px);
    line-height: 1.02;
    letter-spacing: -.02em;
  }

  .head-right {
    justify-self: end;
    max-width: 450px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.85;
  }

  /* ---------- Work ---------- */
  .work,
  .services,
  .journal {
    padding: clamp(72px, 9vw, 128px) var(--pad);
    border-bottom: 1px solid var(--line);
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    margin-top: 28px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }

  .filters button {
    padding: 0 0 2px;
    border-bottom: 1px solid transparent;
    color: var(--muted);
    font: 500 9.5px/1.4 var(--sans);
    letter-spacing: .15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: color .25s, border-color .25s;
  }

  .filters button:hover {
    color: var(--ink);
  }

  .filters button.active {
    color: var(--ink);
    border-color: var(--ink);
  }

  .work-body {
    display: grid;
    grid-template-columns: minmax(0, 1.55fr) minmax(300px, .75fr);
    align-items: start;
    gap: clamp(40px, 6vw, 90px);
  }

  .project-index {
    border-top: 1px solid var(--line);
  }

  .project-row {
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr) 52px 30px;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 22px 4px;
    border-bottom: 1px solid var(--line);
    text-align: left;
    cursor: pointer;
    transition: background .3s var(--ease), padding .3s var(--ease);
  }

  .project-row:hover,
  .project-row:focus-visible {
    padding-right: 14px;
    padding-left: 14px;
    background: var(--paper);
  }

  .row-index {
    color: var(--muted);
    font: 500 8.5px/1 var(--sans);
    letter-spacing: .15em;
  }

  .row-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    min-width: 0;
  }

  .row-title {
    font: 400 clamp(25px, 2.5vw, 34px)/1.1 var(--serif);
    letter-spacing: -.01em;
    transition: color .25s;
  }

  .row-meta {
    display: flex;
    flex: none;
    align-items: center;
    gap: 16px;
    color: var(--muted);
    font: 500 8px/1.4 var(--sans);
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .row-meta span + span {
    position: relative;
    padding-left: 16px;
  }

  .row-meta span + span::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--line);
    transform: translateY(-50%);
  }

  .row-year {
    color: var(--muted);
    font: 500 8.5px/1 var(--sans);
    letter-spacing: .12em;
    text-align: right;
  }

  .row-arrow {
    display: flex;
    justify-content: flex-end;
    color: var(--olive);
    opacity: .35;
    transition: opacity .25s, transform .25s var(--ease);
  }

  .row-arrow .arrow {
    width: 24px;
  }

  .project-row:hover .row-title {
    color: var(--olive);
  }

  .project-row:hover .row-arrow,
  .project-row:focus-visible .row-arrow {
    opacity: 1;
    transform: translateX(4px);
  }

  .work-preview {
    position: sticky;
    top: 104px;
  }

  .work-preview-media {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: var(--paper);
  }

  .work-preview-media::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(20, 20, 16, .03), transparent 45%, rgba(20, 20, 16, .18));
    pointer-events: none;
  }

  .work-preview-media img {
    transform: scale(var(--zoom, 1));
    transition: transform .9s var(--ease), object-position .9s var(--ease);
  }

  .preview-index {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;
    padding: 8px 10px;
    border: 1px solid rgba(255, 255, 255, .5);
    background: rgba(28, 28, 24, .14);
    backdrop-filter: blur(5px);
    color: var(--cream);
    font: 500 8.5px/1 var(--sans);
    letter-spacing: .16em;
  }

  .preview-caption {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 12px;
    color: var(--muted);
    font-size: 10.5px;
  }

  .preview-caption .label {
    flex: none;
    color: var(--olive);
    font-size: 8px;
  }

  /* ---------- Studio ---------- */
  .studio {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: clamp(40px, 7vw, 110px);
    padding: clamp(72px, 9vw, 128px) var(--pad);
    border-bottom: 1px solid var(--line);
    background: var(--paper);
  }

  .studio-media {
    position: relative;
    height: clamp(450px, 48vw, 680px);
    overflow: hidden;
  }

  .studio-plaque {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 18px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: var(--bg);
    font-size: 9px;
  }

  .studio-plaque .label {
    font-size: 8px;
  }

  .studio-plan {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: clamp(150px, 15vw, 210px);
    padding: 16px;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
    background: var(--bg);
  }

  .studio-plan svg {
    width: 100%;
    height: auto;
    color: #b7b09f;
  }

  .studio-plan .label {
    font-size: 7.5px;
    color: var(--muted);
  }

  .studio-copy .label {
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 9px;
  }

  .studio-copy h2 {
    margin-bottom: 26px;
    font-size: clamp(40px, 5vw, 68px);
    line-height: 1.02;
  }

  .studio-copy > p {
    max-width: 500px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.85;
  }

  .studio-copy > p + p {
    margin-top: 15px;
  }

  .studio-sign {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 32px 0 28px;
    padding-left: 20px;
    border-left: 1px solid var(--olive);
  }

  .signature {
    font: italic 500 28px/1 var(--serif);
    color: var(--olive);
  }

  .studio-sign .label {
    margin: 0;
    font-size: 8px;
    color: var(--muted);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid var(--line);
    background: var(--bg);
  }

  .stats div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: clamp(30px, 4vw, 52px) 20px;
    text-align: center;
  }

  .stats div + div {
    border-left: 1px solid var(--line);
  }

  .stats strong {
    font: 400 clamp(42px, 4.8vw, 64px)/1 var(--serif);
  }

  .stats .label {
    color: var(--muted);
    font-size: 8.5px;
  }

  /* ---------- Philosophy ---------- */
  .philosophy {
    position: relative;
    padding: clamp(80px, 10vw, 140px) var(--pad);
    overflow: hidden;
    border-bottom: 1px solid rgba(244, 241, 232, .12);
    background: var(--olive-deep);
    color: var(--cream);
  }

  .phil-topo {
    position: absolute;
    right: -140px;
    bottom: -180px;
    width: 680px;
    height: 680px;
    color: rgba(244, 241, 232, .09);
    pointer-events: none;
  }

  .philosophy-inner {
    position: relative;
    z-index: 1;
  }

  .philosophy .label {
    color: rgba(244, 241, 232, .48);
    font-size: 9px;
  }

  .phil-grid {
    display: grid;
    grid-template-columns: 1.12fr .88fr;
    gap: clamp(50px, 8vw, 120px);
  }

  .phil-head h2 {
    max-width: 780px;
    margin-top: 22px;
    color: var(--cream);
    font-size: clamp(38px, 4.8vw, 68px);
    line-height: 1.04;
  }

  .phil-head h2 em {
    color: #c7caa4;
  }

  .principles {
    display: flex;
    flex-direction: column;
  }

  .principle {
    position: relative;
    padding: 22px 0 22px 48px;
    border-top: 1px solid rgba(244, 241, 232, .17);
  }

  .principle:last-child {
    border-bottom: 1px solid rgba(244, 241, 232, .17);
  }

  .principle-number {
    position: absolute;
    left: 0;
    top: 26px;
    color: #c7caa4;
    font: 500 9px/1 var(--sans);
    letter-spacing: .14em;
  }

  .principle h3 {
    margin-bottom: 7px;
    color: var(--cream);
    font-size: 24px;
    line-height: 1.2;
  }

  .principle p {
    color: rgba(244, 241, 232, .6);
    font-size: 12px;
    line-height: 1.75;
  }

  .testimonial {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
    gap: 24px 60px;
    margin-top: clamp(56px, 7vw, 90px);
    padding-top: clamp(40px, 5vw, 60px);
    border-top: 1px solid rgba(244, 241, 232, .17);
  }

  .testimonial blockquote {
    grid-column: 1 / -1;
    max-width: 960px;
    font: 400 clamp(27px, 3.2vw, 46px)/1.24 var(--serif);
    letter-spacing: -.01em;
  }

  .testimonial figcaption {
    display: flex;
    align-items: center;
    gap: 16px;
    color: rgba(244, 241, 232, .55);
    font-size: 11px;
  }

  .testimonial figcaption span:first-child {
    color: var(--cream);
    font-weight: 500;
  }

  .testimonial .label {
    font-size: 8px;
  }

  /* ---------- Services ---------- */
  .service-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }

  .service-card {
    display: flex;
    flex-direction: column;
    min-height: 380px;
    padding: 28px 26px 30px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    transition: background .35s var(--ease);
  }

  .service-card:hover {
    background: var(--paper);
  }

  .service-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 52px;
    color: var(--olive);
  }

  .service-number {
    color: var(--muted);
    font: 500 8.5px/1 var(--sans);
    letter-spacing: .15em;
  }

  .service-card h3 {
    margin-bottom: 12px;
    font-size: 26px;
    line-height: 1.14;
    transition: color .25s;
  }

  .service-card:hover h3 {
    color: var(--olive);
  }

  .service-card > p {
    color: var(--muted);
    font-size: 11.5px;
    line-height: 1.8;
  }

  .service-tags {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: auto;
    padding-top: 28px;
  }

  .service-tags li {
    color: var(--olive);
    font: 500 8px/1.5 var(--sans);
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .process {
    display: grid;
    grid-template-columns: .8fr 2.2fr;
    gap: clamp(30px, 4vw, 56px);
    margin-top: clamp(64px, 8vw, 110px);
    padding: clamp(30px, 4vw, 54px);
    background: var(--paper);
  }

  .process-intro h3 {
    margin: 14px 0 12px;
    font-size: 30px;
    line-height: 1.15;
  }

  .process-intro > p:last-child {
    max-width: 290px;
    color: var(--muted);
    font-size: 11.5px;
    line-height: 1.75;
  }

  .process-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .process-list li {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 20px;
    border-left: 1px solid var(--line);
  }

  .process-list .label {
    color: var(--olive);
    font-size: 8px;
  }

  .process-list h4 {
    font-size: 19px;
    line-height: 1.2;
  }

  .process-list p {
    color: var(--muted);
    font-size: 10.5px;
    line-height: 1.7;
  }

  /* ---------- People ---------- */
  .people {
    padding: clamp(72px, 9vw, 128px) var(--pad);
    border-bottom: 1px solid var(--line);
    background: var(--paper);
  }

  .people .section-head {
    margin-bottom: clamp(40px, 5vw, 64px);
  }

  .people-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)) 1.1fr;
    border-top: 1px solid var(--line);
  }

  .person {
    display: flex;
    flex-direction: column;
    min-height: 290px;
    padding: 26px 24px 30px 0;
    border-right: 1px solid var(--line);
    transition: background .35s var(--ease);
  }

  .person + .person {
    padding-left: 24px;
  }

  .person:hover {
    background: rgba(247, 245, 239, .5);
  }

  .person-number {
    margin-bottom: auto;
    color: var(--muted);
    font: 500 8.5px/1 var(--sans);
    letter-spacing: .15em;
  }

  .person h3 {
    margin-bottom: 9px;
    font-size: clamp(21px, 2vw, 27px);
    line-height: 1.12;
  }

  .person .label {
    color: var(--olive);
    font-size: 8px;
  }

  .person-based {
    margin-top: 12px;
    color: var(--muted);
    font-size: 10.5px;
  }

  .join-card {
    display: flex;
    flex-direction: column;
    min-height: 290px;
    padding: 26px 28px 30px;
    background: var(--olive);
    color: var(--cream);
  }

  .join-card .label {
    color: rgba(244, 241, 232, .55);
    font-size: 8px;
  }

  .join-card h3 {
    margin: auto 0 12px;
    font-size: 27px;
    line-height: 1.1;
  }

  .join-card p {
    margin-bottom: 20px;
    color: rgba(244, 241, 232, .7);
    font-size: 11px;
    line-height: 1.7;
  }

  .join-card .text-link {
    gap: 10px;
    border-color: rgba(244, 241, 232, .55);
    font-size: 8.5px;
  }

  .join-card .text-link:hover {
    border-color: var(--cream);
  }

  .join-card .arrow {
    width: 22px;
  }

  /* ---------- Journal ---------- */
  .journal-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(26px, 3.2vw, 44px);
  }

  .entry button {
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;
  }

  .entry-art {
    display: grid;
    place-items: center;
    aspect-ratio: 16 / 10;
    border: 1px solid var(--line);
    background: var(--paper);
    overflow: hidden;
    transition: background .4s var(--ease);
  }

  .entry-art svg {
    width: 78%;
    height: 78%;
    color: #b8b19e;
    transition: color .4s var(--ease), transform .7s var(--ease);
  }

  .entry button:hover .entry-art {
    background: #e5e0d4;
  }

  .entry button:hover .entry-art svg {
    color: var(--olive);
    transform: scale(1.03);
  }

  .entry-meta {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin: 17px 0 12px;
    color: var(--muted);
    font: 500 8.5px/1.5 var(--sans);
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .entry h3 {
    margin-bottom: 9px;
    font-size: clamp(24px, 2.2vw, 30px);
    line-height: 1.15;
    transition: color .3s;
  }

  .entry button:hover h3 {
    color: var(--olive);
  }

  .entry p {
    max-width: 360px;
    color: var(--muted);
    font-size: 11.5px;
    line-height: 1.75;
  }

  .entry-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 17px;
    color: var(--olive);
    font: 500 8.5px/1 var(--sans);
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .entry button:hover .entry-link .arrow {
    transform: translateX(4px);
  }

  /* ---------- Contact ---------- */
  .contact {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: clamp(40px, 7vw, 120px);
    padding: clamp(72px, 9vw, 128px) var(--pad);
    border-bottom: 1px solid var(--line);
    background: var(--paper);
  }

  .contact-intro > .label {
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 9px;
  }

  .contact h2 {
    margin-bottom: 22px;
    font-size: clamp(42px, 5.2vw, 74px);
    line-height: 1.02;
  }

  .contact-lead {
    max-width: 420px;
    margin-bottom: 44px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.8;
  }

  .contact-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px 30px;
    max-width: 540px;
    padding-top: 26px;
    border-top: 1px solid var(--line);
  }

  .contact-details > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .contact-details .label {
    color: var(--muted);
    font-size: 8px;
  }

  .contact-details a,
  .contact-details address,
  .contact-details > div > span:last-child {
    color: var(--ink);
    font-size: 11.5px;
    line-height: 1.7;
    font-style: normal;
  }

  .contact-details a:hover {
    color: var(--olive);
  }

  .availability {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 34px;
    color: var(--olive);
    font: 500 9px/1.4 var(--sans);
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .availability i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--olive);
    animation: pulse 2.4s infinite;
  }

  .form-wrap {
    padding: clamp(26px, 3.4vw, 48px);
    border: 1px solid var(--line);
    background: var(--bg);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .field .label {
    color: var(--muted);
    font-size: 8px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 8px 0 9px;
    border: 0;
    border-bottom: 1px solid #b9b3a4;
    border-radius: 0;
    background: transparent;
    color: var(--ink);
    font-size: 12.5px;
    transition: border-color .25s;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #989386;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--olive);
  }

  select {
    padding-right: 20px;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none' stroke='%231c1c18'%3E%3Cpath d='M1 1l4 4 4-4'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 9px;
  }

  textarea {
    min-height: 88px;
  }

  .form-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .form-foot p {
    max-width: 200px;
    color: var(--muted);
    font-size: 9px;
    line-height: 1.55;
  }

  .form-foot .btn {
    height: 54px;
  }

  .success {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    min-height: 430px;
  }

  .success-icon {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    margin-bottom: 6px;
    border: 1px solid var(--olive);
    border-radius: 50%;
    color: var(--olive);
  }

  .success .label {
    color: var(--olive);
    font-size: 8px;
  }

  .success h3 {
    max-width: 440px;
    font-size: clamp(30px, 3.2vw, 38px);
    line-height: 1.15;
  }

  .success p {
    max-width: 390px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.75;
  }

  .success .btn {
    margin-top: 10px;
  }

  /* ---------- Footer ---------- */
  .footer {
    padding: clamp(56px, 7vw, 90px) var(--pad) 24px;
    overflow: hidden;
    background: var(--olive-deep);
    color: var(--cream);
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1.5fr .6fr .8fr .6fr;
    gap: 40px;
    padding-bottom: clamp(48px, 6vw, 76px);
  }

  .footer-brand .logo {
    color: var(--cream);
  }

  .footer-brand .logo i {
    color: rgba(244, 241, 232, .48);
  }

  .footer-brand p {
    max-width: 300px;
    margin-top: 24px;
    color: rgba(244, 241, 232, .55);
    font-size: 11.5px;
    line-height: 1.8;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .footer-col .label {
    margin-bottom: 8px;
    color: rgba(244, 241, 232, .4);
    font-size: 8px;
  }

  .footer-col a,
  .footer-col span {
    color: rgba(244, 241, 232, .72);
    font-size: 11px;
    line-height: 1.7;
  }

  .footer-col a {
    transition: color .25s;
  }

  .footer-col a:hover {
    color: var(--cream);
  }

  .footer-word {
    margin: 0 -10px;
    color: rgba(244, 241, 232, .08);
    font: 400 clamp(80px, 17vw, 240px)/.8 var(--serif);
    letter-spacing: .04em;
    text-align: center;
    white-space: nowrap;
    user-select: none;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 24px;
    padding-top: 22px;
    border-top: 1px solid rgba(244, 241, 232, .15);
    color: rgba(244, 241, 232, .4);
    font: 500 8px/1.5 var(--sans);
    letter-spacing: .11em;
    text-transform: uppercase;
  }

  .footer-bottom a {
    transition: color .25s;
  }

  .footer-bottom a:hover {
    color: var(--cream);
  }

  /* ---------- Dialogs ---------- */
  .modal {
    width: 100vw;
    height: 100dvh;
    max-width: 100vw;
    max-height: 100dvh;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    overflow: hidden;
  }

  .modal[open] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal::backdrop {
    background: rgba(22, 23, 18, .74);
    backdrop-filter: blur(7px);
  }

  .modal-close {
    position: fixed;
    top: clamp(16px, 2vw, 28px);
    right: clamp(16px, 2vw, 28px);
    z-index: 20;
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(28, 28, 24, .2);
    border-radius: 50%;
    background: var(--cream);
    color: var(--ink);
    cursor: pointer;
    transition: transform .3s var(--ease), background .25s;
  }

  .modal-close:hover {
    transform: rotate(90deg);
    background: #fff;
  }

  .modal-close span {
    position: absolute;
    width: 16px;
    height: 1px;
    background: currentColor;
  }

  .modal-close span:first-child {
    transform: rotate(45deg);
  }

  .modal-close span:last-child {
    transform: rotate(-45deg);
  }

  .modal-sheet {
    display: grid;
    grid-template-columns: 1.02fr .98fr;
    width: min(1120px, calc(100vw - 96px));
    max-height: calc(100dvh - 96px);
    overflow-y: auto;
    overscroll-behavior: contain;
    background: var(--bg);
    animation: sheetIn .4s var(--ease);
    scrollbar-width: thin;
  }

  .modal-media {
    position: relative;
    min-height: 560px;
    background: var(--paper);
  }

  .modal-media img {
    height: 100%;
    min-height: 560px;
  }

  .modal-media .label {
    position: absolute;
    left: 24px;
    bottom: 22px;
    color: var(--cream);
    font-size: 8px;
    text-shadow: 0 1px 20px rgba(20, 20, 16, .45);
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    padding: clamp(34px, 4.2vw, 62px);
  }

  .modal-body > .label {
    margin-bottom: 16px;
    color: var(--olive);
    font-size: 8.5px;
  }

  .modal-body h2 {
    margin-bottom: 18px;
    font-size: clamp(38px, 4vw, 58px);
    line-height: 1.02;
  }

  .modal-dek {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--line);
    color: var(--olive) !important;
    font: italic 400 20px/1.5 var(--serif) !important;
  }

  .modal-body p {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.8;
  }

  .modal-body p + p {
    margin-top: 12px;
  }

  .facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin: 30px 0 24px;
    padding: 22px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .facts div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .facts dt {
    color: var(--muted);
    font-size: 8px;
  }

  .facts dd {
    font-size: 12px;
  }

  .scope-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .scope-list span {
    padding: 8px 10px;
    border: 1px solid #c3bead;
    border-radius: 999px;
    color: var(--olive);
    font: 500 8px/1 var(--sans);
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .next-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    margin-top: auto;
    padding-top: 34px;
    color: var(--ink);
    font: 500 9.5px/1 var(--sans);
    letter-spacing: .16em;
    text-transform: uppercase;
    cursor: pointer;
  }

  .next-link:hover .arrow {
    transform: translateX(4px);
  }

  .article-sheet {
    width: min(900px, calc(100vw - 96px));
    max-height: calc(100dvh - 96px);
    overflow-y: auto;
    overscroll-behavior: contain;
    background: var(--bg);
    animation: sheetIn .4s var(--ease);
    scrollbar-width: thin;
  }

  .article-head {
    position: relative;
    display: grid;
    place-items: center;
    height: clamp(220px, 30vh, 320px);
    border-bottom: 1px solid var(--line);
    background: var(--paper);
  }

  .article-head .label {
    position: absolute;
    left: clamp(24px, 4vw, 56px);
    top: 24px;
    color: var(--muted);
    font-size: 8px;
  }

  .article-head svg {
    width: min(520px, 60%);
    height: 70%;
    color: #b8b19e;
  }

  .article-content {
    padding: clamp(34px, 5vw, 70px) clamp(24px, 6vw, 110px);
  }

  .article-content > .label {
    margin-bottom: 18px;
    color: var(--olive);
    font-size: 8px;
  }

  .article-content h2 {
    margin-bottom: 18px;
    font-size: clamp(38px, 4.6vw, 62px);
    line-height: 1.02;
  }

  .article-dek {
    max-width: 660px;
    margin-bottom: 26px;
    padding-bottom: 26px;
    border-bottom: 1px solid var(--line);
    color: var(--olive);
    font: italic 400 21px/1.5 var(--serif);
  }

  .article-body {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 660px;
  }

  .article-body p {
    color: #3e3d35;
    font-size: 13px;
    line-height: 1.9;
  }

  .article-signoff {
    margin-top: 32px;
    color: var(--olive);
    font: italic 500 24px/1 var(--serif);
  }

  /* ---------- Animation ---------- */
  @keyframes heroZoom {
    from { transform: scale(1.08); }
    to { transform: scale(1); }
  }

  @keyframes scrollLine {
    0% { top: -50%; }
    100% { top: 110%; }
  }

  @keyframes marquee {
    to { transform: translateX(-50%); }
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(85, 88, 58, .38); }
    70% { box-shadow: 0 0 0 7px rgba(85, 88, 58, 0); }
    100% { box-shadow: 0 0 0 0 rgba(85, 88, 58, 0); }
  }

  @keyframes sheetIn {
    from {
      opacity: 0;
      transform: translateY(18px) scale(.985);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* ---------- Responsive ---------- */
  @media (max-width: 1180px) {
    .journal-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .service-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .process {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .people-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .person:nth-child(2n) {
      border-right: 0;
    }

    .person:nth-child(n + 3) {
      border-top: 1px solid var(--line);
    }

    .join-card {
      grid-column: 1 / -1;
      min-height: 220px;
    }

    .footer-top {
      grid-template-columns: 1.2fr .8fr .8fr;
    }

    .footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 1020px) {
    .desktop-nav,
    .header-cta {
      display: none;
    }

    .menu-button {
      display: flex;
    }

    .hero {
      grid-template-columns: 1fr;
      min-height: 0;
    }

    .hero-copy {
      padding: clamp(44px, 8vh, 72px) var(--pad) 46px;
    }

    .hero h1 {
      font-size: clamp(54px, 10vw, 88px);
    }

    .hero-media {
      height: min(64svh, 620px);
      min-height: 420px;
    }

    .hero-meta {
      margin-top: 44px;
    }

    .section-head {
      grid-template-columns: 1fr;
      gap: 26px;
    }

    .head-right {
      justify-self: start;
      max-width: 560px;
    }

    .work-body {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .work-preview {
      position: static;
      order: -1;
    }

    .work-preview-media {
      aspect-ratio: 16 / 8;
    }

    .preview-caption {
      margin-top: 10px;
    }

    .studio {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .studio-media {
      height: min(70vw, 560px);
    }

    .phil-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .contact {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .contact-details {
      max-width: none;
    }

    .footer-top {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 760px) {
    .clients {
      grid-template-columns: 1fr;
      gap: 14px;
      min-height: 0;
      padding-top: 18px;
      padding-bottom: 18px;
    }

    .clients-label {
      padding-right: 0;
      border-right: 0;
    }

    .journal-grid {
      grid-template-columns: 1fr;
    }

    .project-row {
      grid-template-columns: 26px minmax(0, 1fr) 44px 24px;
      gap: 12px;
      padding: 18px 2px;
    }

    .row-main {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }

    .row-title {
      font-size: clamp(23px, 7vw, 30px);
    }

    .row-meta {
      flex-wrap: wrap;
      gap: 6px 10px;
      font-size: 7.5px;
    }

    .row-meta span + span {
      padding-left: 10px;
    }

    .row-arrow .arrow {
      width: 20px;
    }

    .work-preview-media {
      aspect-ratio: 16 / 9;
    }

    .stats {
      grid-template-columns: 1fr 1fr;
    }

    .stats div:nth-child(3) {
      border-left: 0;
      border-top: 1px solid var(--line);
    }

    .stats div:nth-child(4) {
      border-top: 1px solid var(--line);
    }

    .service-grid {
      grid-template-columns: 1fr;
    }

    .service-card {
      min-height: 0;
      padding: 26px 22px;
    }

    .service-top {
      margin-bottom: 38px;
    }

    .process {
      padding: 26px;
    }

    .process-list {
      grid-template-columns: 1fr 1fr;
    }

    .process-list li {
      padding: 18px 14px;
    }

    .people-grid {
      grid-template-columns: 1fr;
    }

    .person {
      min-height: 0;
      padding: 24px 0 28px;
      border-right: 0;
    }

    .person + .person {
      padding-left: 0;
    }

    .person:nth-child(n + 3) {
      border-top: 0;
    }

    .person + .person {
      border-top: 1px solid var(--line);
    }

    .person h3 {
      margin-top: 30px;
    }

    .join-card {
      grid-column: auto;
      min-height: 250px;
    }

    .contact-details,
    .field-row {
      grid-template-columns: 1fr;
    }

    .footer-top {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .footer-brand {
      grid-column: auto;
    }

    .footer-word {
      font-size: 18vw;
    }

    .modal-sheet,
    .article-sheet {
      width: calc(100vw - 24px);
      max-height: calc(100dvh - 24px);
    }

    .modal-sheet {
      grid-template-columns: 1fr;
    }

    .modal-media,
    .modal-media img {
      height: 280px;
      min-height: 0;
    }

    .modal-body {
      padding: 28px 24px 32px;
    }

    .article-head {
      height: 200px;
    }

    .article-content {
      padding: 30px 24px 42px;
    }

    .studio-plan {
      width: 126px;
      padding: 12px;
    }

    .studio-plan .label {
      font-size: 6.5px;
    }

    .modal-close {
      top: 14px;
      right: 14px;
      width: 42px;
      height: 42px;
    }
  }

  @media (max-width: 440px) {
    .hero-actions {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }

    .hero-meta {
      gap: 12px;
      flex-direction: column;
    }

    .hero-meta span + span {
      padding-left: 0;
    }

    .hero-meta span + span::before {
      display: none;
    }

    .process-list {
      grid-template-columns: 1fr;
    }

    .process-list li {
      border-left: 0;
      border-top: 1px solid var(--line);
    }

    .process-list li:first-child {
      border-top: 0;
    }

    .testimonial {
      grid-template-columns: 1fr;
    }

    .testimonial figcaption {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
</style>
