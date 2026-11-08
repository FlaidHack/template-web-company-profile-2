<script>
  import '@fontsource/cormorant-garamond/400.css';
  import '@fontsource/cormorant-garamond/500.css';
  import '@fontsource/cormorant-garamond/500-italic.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '../app.css';
  let { children } = $props();
</script>
<svelte:head><title>Archity — Architecture &amp; Interiors</title></svelte:head>
{@render children()}
