<script>
  import '@fontsource/cormorant-garamond/400.css';
  import '@fontsource/cormorant-garamond/500.css';
  import '@fontsource/cormorant-garamond/500-italic.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Archity — Architecture &amp; Interiors</title>
  <meta
    name="description"
    content="Archity is an architecture and interior design studio shaping calm, enduring spaces for living, gathering, and belonging. Based in Copenhagen, working worldwide."
  />
  <meta property="og:title" content="Archity — Architecture &amp; Interiors" />
  <meta
    property="og:description"
    content="A Copenhagen-based architecture and interior design studio creating timeless homes, retreats, and interiors."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/img/interior.jpg" />
</svelte:head>

{@render children()}
