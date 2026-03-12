<script>
  import { onMount } from 'svelte';
  let scrolled = false;
  let mobileOpen = false;

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 80;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav
  class={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-4 md:px-6 py-3 flex items-center justify-between gap-6 max-w-4xl w-[calc(100%-2rem)] ${
    scrolled
      ? 'bg-white/70 backdrop-blur-xl border border-border shadow-lg shadow-primary/5'
      : 'bg-transparent'
  }`}
>
  <a href="/" class="flex items-center gap-3 shrink-0">
    <img
      src="/logo.png"
      alt="Ujaotech Logo"
      class={`h-10 w-10 object-contain transition-all duration-300 ${scrolled ? 'bg-primary/10' : 'bg-white/10'} rounded-2xl p-1.5`}
    />
    <span class={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-secondary' : 'text-white'}`}>
      Ujaotech
    </span>
  </a>

  <!-- Desktop links -->
  <div class="hidden md:flex items-center gap-6">
    <a href="#services" class={`text-sm font-medium hover-lift transition-colors duration-300 ${scrolled ? 'text-muted hover:text-secondary' : 'text-white/80 hover:text-white'}`}>
      Services
    </a>
    <a href="#projects" class={`text-sm font-medium hover-lift transition-colors duration-300 ${scrolled ? 'text-muted hover:text-secondary' : 'text-white/80 hover:text-white'}`}>
      Projects
    </a>
    <a href="#contact" class={`text-sm font-medium hover-lift transition-colors duration-300 ${scrolled ? 'text-muted hover:text-secondary' : 'text-white/80 hover:text-white'}`}>
      Contact
    </a>
    <a
      href="https://cal.com/daniel-omusula"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-magnetic inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
    >
      <span class="btn-bg bg-accent rounded-full"></span>
      <span class="relative z-10">Let's Talk</span>
    </a>
  </div>

  <!-- Mobile burger -->
  <button
    class="md:hidden flex flex-col gap-1.5 p-2"
    on:click={() => (mobileOpen = !mobileOpen)}
    aria-label="Toggle menu"
  >
    <span class={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-secondary' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span class={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-secondary' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`}></span>
    <span class={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-secondary' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>
</nav>

<!-- Mobile menu -->
{#if mobileOpen}
  <div class="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
    <a href="#services" class="text-2xl font-display font-semibold text-secondary hover:text-primary transition-colors" on:click={() => (mobileOpen = false)}>Services</a>
    <a href="#projects" class="text-2xl font-display font-semibold text-secondary hover:text-primary transition-colors" on:click={() => (mobileOpen = false)}>Projects</a>
    <a href="#contact" class="text-2xl font-display font-semibold text-secondary hover:text-primary transition-colors" on:click={() => (mobileOpen = false)}>Contact</a>
    <a
      href="https://cal.com/daniel-omusula"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-magnetic bg-primary text-white text-lg font-semibold px-8 py-3 rounded-full"
      on:click={() => (mobileOpen = false)}
    >
      <span class="relative z-10">Let's Talk</span>
    </a>
  </div>
{/if}
