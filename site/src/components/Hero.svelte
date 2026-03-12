<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let heroEl;

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
      });
      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
      gsap.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.7,
      });
    }, heroEl);
    return () => ctx.revert();
  });
</script>

<section
  bind:this={heroEl}
  class="relative h-dvh min-h-[600px] flex items-end overflow-hidden"
>
  <!-- Background image -->
  <div class="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop"
      alt="Technology abstract"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/30"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
    <div class="max-w-3xl">
      <p class="hero-line font-mono text-sm md:text-base text-primary tracking-widest uppercase mb-4">
        Automation Startup
      </p>
      <h1 class="hero-line font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-2">
        Software is the
      </h1>
      <h1 class="hero-line font-drama italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-primary leading-[1.05] mb-8">
        Catalyst.
      </h1>
      <p class="hero-line text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
        We build high-performance web applications, stunning websites, and tailored software solutions to drive your business growth.
      </p>
      <div class="flex flex-wrap gap-4 items-center">
        <a
          href="https://cal.com/daniel-omusula"
          target="_blank"
          rel="noopener noreferrer"
          class="hero-cta btn-magnetic inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg"
        >
          <span class="btn-bg bg-accent rounded-full"></span>
          <span class="relative z-10">Discuss Your Project</span>
        </a>
        <a
          href="#services"
          class="hero-cta inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors duration-300"
        >
          <span>Explore Services</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>

      <!-- Microsoft badge -->
      <div class="hero-badge mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
        <img src="/microsoft-logo.png" alt="Microsoft Logo" class="h-5 w-auto object-contain" />
        <span class="text-white/50 text-sm">Backed by</span>
        <span class="text-white font-semibold text-sm">Microsoft for Startups</span>
      </div>
    </div>
  </div>
</section>
